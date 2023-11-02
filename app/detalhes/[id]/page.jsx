import api from "../../services/api";
import NoSSRWrapper from "../../Components/no-ssr-wrapper";

import { Button, Divider } from "antd";
import { CREATE_PRODUCT_ROUTE } from "../../store/modules/products/routes";

const getDetails = async (id) => {
  try {
    const res = await api.get(`${CREATE_PRODUCT_ROUTE}/${id}`);
    return res.data;
  } catch (err) {
    return "error";
  }
};

const getProducts = async (page = 1, pageSize = 5, category, filters) => {
  try {
    const res = await api.get(CREATE_PRODUCT_ROUTE, {
      params: {
        page,
        pageSize,
        category,
        filters,
      },
    });
    return res.data;
  } catch (err) {
    return "error";
  }
};

const Details = async ({ params }) => {
  const productDetails = await getDetails(params.id);
  const { results } = await getProducts(
    1,
    10,
    productDetails.category,
    undefined
  );

  return (
    <div className="details-container">
      <div className="details-item">
        <img
          src={`https://milenioartefatos.com.br/api/images/${productDetails?.image}`}
          alt="imagem"
          width={"60%"}
        />
        <div className="details-item-info">
          <div className="details-main-data">
            <h2 className="details-title">{productDetails?.description}</h2>
            <h3 className="details-status">
              Status:{" "}
              {productDetails?.inStock ? (
                <span className="details-green-container">Em estoque</span>
              ) : (
                <span className="details-red-container">Sem estoque</span>
              )}
            </h3>
          </div>
          <div className="details-card-description-container">
            <Divider />
            <p style={{ fontSize: 16 }}>{productDetails?.description}</p>
            <Divider />
          </div>
          <div className="details-button-container">
            <Button
              className="details-button"
              type="primary"
              href={`https://api.whatsapp.com/send?phone=5585991076461&text=Olá, estava no site e me interessei no produto ${productDetails?.name} e preciso de mais informações. Você pode me Ajudar?`}
              target="_blank"
            >
              Quero falar com um vendedor
            </Button>
          </div>
        </div>
      </div>
      <div className="details-description-container">
        <h3 className="details-description-title">{productDetails?.name}</h3>
        <div style={{ marginTop: "1em", marginBottom: "1em" }}>
          {productDetails?.description}
          <br />
          <br />
          <b>Indicações</b>
          <br />
          {productDetails?.indications}
          <br />
          <br />
          <b>Fornecimento e durabilidade</b>
          <br />
          {productDetails?.providingAndDurability}
          <br />
          <br />
          <b>Recomendações.</b>
          <br />
          {productDetails?.recommendations?.map((item, idx) => (
            <div key={idx}>{item.text}</div>
          ))}
        </div>
      </div>
      <div className="items-container">
        <h2 className="items-title">Não deixe de conferir</h2>
        <div className="items">
          {results?.slice(0, 4).map((item) => (
            <>
              <div className="container-item">
                <img
                  width={218}
                  height={218}
                  alt="Imagem"
                  src={`https://milenioartefatos.com.br/api/images/${item.image}`}
                  loading="lazy"
                />
                <p className="item-description">{item.name}</p>
                <Button className="item-details">Ver detalhes</Button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
