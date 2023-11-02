import { COLORS } from "../../consts/COLORS";
import { Container } from "./styles";
import { AiOutlineLoading } from "react-icons/ai";

const LoadingScreen = () => {
  return (
    <Container>
      <AiOutlineLoading rotate size={120} color={COLORS.GREEN} />
    </Container>
  );
};

export default LoadingScreen;
