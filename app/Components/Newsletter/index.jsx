import Image from "next/image";
import { useState } from "react";
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
import { Form } from "antd";
const validateMessages = {
  required: "s",
  types: {
    email: "${label} is not a valid emaisl!",
    number: "${label} is not a valid number!",
  },
};
const Assinatura = ({ show, handleSignUp, handleCancel }) => {
  const [email, setEmail] = useState();
  const [form] = Form.useForm();

  const signUp = () => {
    handleSignUp(email);
  };
  return (
    <Modal
      open={show}
      centered
      footer={null}
      width={"1000px"}
      className="newsletter"
      onCancel={handleCancel}
      validateMessages={validateMessages}
    >
      <Form form={form} onFinish={signUp}>
        <Container>
          <ImageContainer>
            <img src={"NewsletterImage.png"} alt="Imagem do modal" />
          </ImageContainer>
          <Content>
            <img src={"Logo.svg"} alt="Logo" width="45%" />
            <Titulo>Junte-se a nós!</Titulo>
            <Descricao>
              Cadastre-se agora e não perca nenhuma promoção
            </Descricao>
            <Form.Item
              name="email"
              type="email"
              required
              rules={[
                { required: true, type: "email", message: "Email inválido" },
              ]}
            >
              <InputEmail
                placeholder="seuemail@seuprovedor.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <BotaoCadastrar type="primary" htmlType="submit">
              Cadastrar
            </BotaoCadastrar>
            <AvisoSpam>Não se preocupe, não vamos enviar spam</AvisoSpam>
          </Content>
        </Container>
      </Form>
    </Modal>
  );
};

export default Assinatura;
