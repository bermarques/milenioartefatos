"use client";

import { DividerDiv } from "../Divider/style";
import SubHeader from "../SubHeader";
import { useRouter } from "next/navigation";
import Search from "./SearchButton";
import { Actions, Container, LogoContainer } from "./styles";

const Header = () => {
  const { push } = useRouter();
  const handleImage = () => {
    push(`/`);
  };

  return (
    <>
      <Container>
        <LogoContainer onClick={handleImage}>
          <img src={"Logo.png"} alt="Logo Milênio" width={179} />
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
