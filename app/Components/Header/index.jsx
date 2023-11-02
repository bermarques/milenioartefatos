"use client";

import { DividerDiv } from "../Divider/style";
import SubHeader from "../SubHeader";
import { useRouter } from "next/navigation";
import Search from "./SearchButton";
import { BiChevronDown } from "react-icons/bi";
import {
  Actions,
  Atendimento,
  CenterSpacer,
  Container,
  ItemContainer,
  LogoContainer,
  Partners,
  SideSpacer,
  SubItem,
} from "./styles";
import { Divider, Dropdown, Space } from "antd";
import { COLORS } from "../../consts/COLORS";

const items = [
  {
    key: "1",
    label: (
      <ItemContainer className="menu">
        <a
          className="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://api.whatsapp.com/send?phone=5585991076461&text=Olá, você pode me ajudar?`}
        >
          Nos chame no WhatsApp
        </a>
      </ItemContainer>
    ),
  },
];

const Header = () => {
  const { push } = useRouter();
  const handleImage = () => {
    push(`/`);
  };

  return (
    <>
      <Container>
        <SideSpacer>
          <SubItem>
            <Dropdown menu={{ items }} arrow>
              <a onClick={(e) => e.preventDefault()}>
                <Atendimento>
                  Atendimento
                  <BiChevronDown />
                </Atendimento>
              </a>
            </Dropdown>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              Conheça nossas lojas
            </div>
            <div></div>
          </SubItem>
        </SideSpacer>
        <CenterSpacer>
          <LogoContainer onClick={handleImage}>
            <img src={"Logo.png"} alt="Logo Milênio" width={179} />
          </LogoContainer>
        </CenterSpacer>
        <SideSpacer>
          <Actions>
            <Search />
          </Actions>
        </SideSpacer>
        {/* <Partners>
          <Space>Conheça nossos parceiros</Space>
        </Partners> */}
      </Container>
      <Divider style={{ marginBottom: 0 }} />
      <SubHeader />
    </>
  );
};

export default Header;
