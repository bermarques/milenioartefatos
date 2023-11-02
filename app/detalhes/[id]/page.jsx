"use client";

import { useDispatch, useSelector } from "react-redux";
import Items from "../../Components/Items";
import { ITEMS } from "../../consts/MOCKED_DATA";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

import {
  Button,
  ButtonContainer,
  Container,
  CardDescriptionContainer,
  GreenContainer,
  ItemDetail,
  ItemInfo,
  Status,
  Title,
  DescriptionContainer,
  DescriptionTitle,
  MainData,
  RedContainer,
} from "../styles";
import { Divider } from "antd";
import { useEffect } from "react";
import { getDetails, getProducts } from "../../store/modules/products/actions";
import { Suspense } from "react";

const Details = ({ params }) => {
  const dispatch = useDispatch();

  const { productDetails, loadingDetails, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetails(params.id));
  }, [params.id]);

  console.log(productDetails);
  useEffect(() => {
    dispatch(getProducts(1, undefined, productDetails?.category, undefined));
  }, [productDetails]);

  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <ItemDetail>
          <img
            src={`https://uploadthing.com/f/${productDetails?.image}`}
            alt="imagem"
            width={"60%"}
          />
          <ItemInfo>
            <MainData>
              <Title>Adesivo Automotivo Alltak Carbon 4D Preto</Title>
              <Status>
                Status:{" "}
                {productDetails?.inStock ? (
                  <GreenContainer>Em estoque</GreenContainer>
                ) : (
                  <RedContainer>Sem estoque</RedContainer>
                )}
              </Status>
            </MainData>
            <CardDescriptionContainer>
              <Divider />
              <p style={{ fontSize: 16 }}>{productDetails?.description}</p>
              <Divider />
            </CardDescriptionContainer>
            <ButtonContainer>
              <Button
                type="primary"
                href="https://api.whatsapp.com/send?phone=5585991076461&text=Olá! Gostaria de falar com um vendedor."
                target="_blank"
              >
                Quero falar com um vendedor
              </Button>
            </ButtonContainer>
          </ItemInfo>
        </ItemDetail>
        <DescriptionContainer>
          <DescriptionTitle>{productDetails?.name}</DescriptionTitle>
          <p>
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
          </p>
        </DescriptionContainer>
        <Items titulo="Não deixe de conferir" items={products} />
      </Suspense>
    </Container>
  );
};

export default Details;
