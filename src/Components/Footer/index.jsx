import {
  Container,
  Descricao,
  LogoContainer,
  Loja,
  OutrasLojas,
  Titulo,
} from "./styles";
import LogoBranco from "../../assets/LogoBranco.png";

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoBranco} alt="Logo Milênio" />
      </LogoContainer>
      <OutrasLojas>
        <Loja>
          <Titulo>Loja Conceito</Titulo>
          <Descricao>Rua 24 de maio, 283 - Centro, Fortaleza</Descricao>
          <Descricao>Telefone: (85) 3513-1382</Descricao>
        </Loja>
        <Loja>
          <Titulo>Loja Fortaleza</Titulo>
          <Descricao>R. Senador Alencar, 615 - Centro, Fortaleza</Descricao>
          <Descricao>Telefone: (85) 3212-3832</Descricao>
        </Loja>
        <Loja>
          <Titulo>Loja Maracanaú</Titulo>
          <Descricao>Av. VII, 377 - Jereissati I, Maracanaú</Descricao>
          <Descricao>Telefone: (85) 3382-0375 / (85) 3014-4205</Descricao>
        </Loja>
      </OutrasLojas>
    </Container>
  );
};

export default Footer;
