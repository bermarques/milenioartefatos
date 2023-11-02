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
} from "./styles";
import Imagem from "../../assets/Detalhe.png";
import { Divider } from "antd";
import Items from "../../Components/Items";
import { ITEMS } from "../../consts/MOCKED_DATA";

const Details = () => {
  return (
    <Container>
      <ItemDetail>
        <img src={Imagem} alt="imagem" />
        <ItemInfo>
          <Title>Adesivo Automotivo Alltak Carbon 4D Preto</Title>
          <Status>
            Status: <GreenContainer>Em estoque</GreenContainer>
          </Status>
          <CardDescriptionContainer>
            <Divider />
            <p style={{ fontSize: 14 }}>
              O Vinil CARBON é uma película de PVC super calandrado polimérico e
              textura com efeito de quadridimensional (4D), possui técnologia
              Airflow e adesivo reposicionável que proporciona a redução de
              tempo nas aplicações e costumizações veiculares. Contém Liner de
              papel couché siliconizado 150g/m².
            </p>
            <Divider />
          </CardDescriptionContainer>
          <ButtonContainer>
            <Button type="primary">Quero falar com um vendedor</Button>
          </ButtonContainer>
        </ItemInfo>
      </ItemDetail>
      <DescriptionContainer>
        <DescriptionTitle>
          Adesivo Automotivo Alltak Carbon 4D Preto
        </DescriptionTitle>
        <p>
          O Vinil CARBON é uma película de PVC super calandrado polimérico e
          textura com efeito de quadridimensional (4D), possui técnologia
          Airflow e adesivo reposicionável que proporciona a redução de tempo
          nas aplicações e costumizações veiculares. Contém Liner de papel
          couché siliconizado 150g/m².
          <br />
          <br />
          <b>Indicações</b>
          <br />
          Desenvolvido para proteção e personalização de veículos, podendo ser
          utilizado para recorte. Boa estabilidade em superfícies lisas e
          curvas, resistente a impactos leves.
          <br />
          <br />
          <b>Fornecimento e durabilidade</b>
          <br />
          Durabilidade esperada: 5 anos para uso em exteriores; na horizontal
          esta durabilidade é reduzida a 30%. Também pode se estender ou
          diminuir em virtude das técnicas de aplicação e conservação.
          <br />
          <br />
          <b>Recomendações.</b>
          <br />
          Aplicar em superfície lisa e plana previamente limpa utilizando álcool
          isopropílico evitando assim o contato com impurezas, oleosidade ou
          qualquer outro produto químico.
          <br />
          Não indicada aplicação em superfícies corrugadas, rugosas e/ou
          porosas.
          <br />
          Utilização de solvente em excesso diminui o tempo de durabilidade do
          produto.
          <br />
          Instalar imediatamente após corte.
          <br />
          Depois de aplicado evitar produtos agressivos e atritos constantes,
          usar sabão neutro.
        </p>
      </DescriptionContainer>
      <Items
        titulo="Não deixe de conferir"
        items={ITEMS.filter((item) => item.tags.includes("tecidos"))}
      />
    </Container>
  );
};

export default Details;
