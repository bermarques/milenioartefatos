import Image from "next/image";
import {
  AvisoSpam,
  BotaoCadastrar,
  Container,
  Content,
  Descricao,
  ImageContainer,
  InputEmail,
  Modal,
  Titulo,
} from "./styles";

const Assinatura = () => {
  return (
    <Modal
      open
      centered
      closeIcon={false}
      footer={null}
      width={"1000px"}
      className="newsletter"
    >
      <Container>
        <ImageContainer>
          <Image src={"NewsletterImage.png"} alt="Imagem do modal" />
        </ImageContainer>
        <Content>
          <Image src={"Logo.svg"} alt="Logo" width="45%" />
          <Titulo>Junte-se a nós!</Titulo>
          <Descricao>Cadastre-se agora e não perca nenhuma promoção</Descricao>
          <InputEmail placeholder="seuemail@seuprovedor.com" />
          <BotaoCadastrar type="primary">Cadastrar</BotaoCadastrar>
          <AvisoSpam>Não se preocupe, não vamos enviar spam</AvisoSpam>
        </Content>
      </Container>
    </Modal>
  );
};

export default Assinatura;
