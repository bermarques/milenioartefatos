"use client";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

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
} from "./styles";
import { Divider } from "antd";
import { useEffect } from "react";
import { getDetails, getProducts } from "../store/modules/products/actions";
import Items from "../Components/Items";
import LoadingScreen from "../filter/Loading";

const DetailsPage = () => {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { productDetails, loadingDetails, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id]);

  useEffect(() => {
    dispatch(getProducts(1, undefined, productDetails?.category, undefined));
  }, [productDetails]);

  if (loadingDetails) return <LoadingScreen />;

  return (
    <Container>
      <ItemDetail>
        <img
          src={`https://milenioartefatos.com.br/api/images/${productDetails?.image}`}
          alt="imagem"
          width={"60%"}
        />
        <ItemInfo>
          <MainData>
            <Title>{productDetails?.name}</Title>
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
            <Button type="primary">Quero falar com um vendedor</Button>
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
    </Container>
  );
};

export default DetailsPage;
