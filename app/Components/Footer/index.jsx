"use client";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import {
  Container,
  Descricao,
  Icons,
  LogoContainer,
  Loja,
  OutrasLojas,
  SocialMedias,
  Titulo,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={"LogoBranco.png"} alt="Logo Milênio" />
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
      <SocialMedias>
        <Titulo>Acompanhe a Milênio Artefatos</Titulo>
        <Icons>
          <AiFillFacebook
            size={40}
            color="#fff"
            onClick={() =>
              window.open("https://www.facebook.com/milenioartefatosoficial")
            }
            target="_blank"
            style={{ cursor: "pointer" }}
          />
          <AiFillInstagram
            size={40}
            color="#fff"
            onClick={() =>
              window.open("https://www.instagram.com/milenioartefatosoficial/")
            }
            target="_blank"
            style={{ cursor: "pointer" }}
          />
        </Icons>
      </SocialMedias>
    </Container>
  );
};

export default Footer;
