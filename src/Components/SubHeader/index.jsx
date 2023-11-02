import { Typography } from "antd";
import { Button, Container } from "./styles";

const SubHeader = () => {
  return (
    <Container>
      <Button type="text">Automotivos</Button>
      <Button type="text">Colas</Button>
      <Button type="text">Lonas</Button>
      <Button type="text">Papel de parede</Button>
      <Button type="text">Tecidos</Button>
    </Container>
  );
};

export default SubHeader;
