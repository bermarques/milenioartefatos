"use client";

import { Button, Card, Form, Input, Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/modules/auth/actions";
import styles, { CardContainer } from "./styles";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loadingLogin } = useSelector((state) => state.auth);

  const handleFinish = (data) => {
    dispatch(login(data));
  };

  return (
    <CardContainer>
      <img src="/Logo.svg" />
      <Card style={styles.card}>
        <Form layout="vertical" onFinish={handleFinish}>
          <h1 style={{ textAlign: "center", marginTop: 0 }}>
            Acesse sua conta
          </h1>
          <Form.Item label="E-mail" name="username" required>
            <Input />
          </Form.Item>
          <Form.Item label="Senha" name="password" required>
            <Input type="password" />
          </Form.Item>
          <Button
            type="primary"
            style={{ width: "100%", marginTop: 24 }}
            htmlType="submit"
            loading={loadingLogin}
            disabled={loadingLogin}
          >
            Entrar
          </Button>
        </Form>
      </Card>
    </CardContainer>
  );
};

export default LoginPage;
