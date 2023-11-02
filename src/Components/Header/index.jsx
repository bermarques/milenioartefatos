import Logo from "../../assets/Logo.svg";
import { DividerDiv } from "../Divider/style";
import SubHeader from "../SubHeader";
import Search from "./SearchButton";
import { Actions, Container, LogoContainer } from "./styles";

const Header = () => {
  return (
    <>
      <Container>
        <LogoContainer>
          <img src={Logo} alt="Logo Milênio" />
        </LogoContainer>
        <Actions>
          <Search />
        </Actions>
        <DividerDiv />
      </Container>
      <SubHeader />
    </>
  );
};

export default Header;
