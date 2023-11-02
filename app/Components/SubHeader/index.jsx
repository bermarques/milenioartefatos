import { Button, Drawer, Layout, Typography } from "antd";
import { Container } from "./styles";
import LeftMenu from "./LeftMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const SubHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <nav className="navbar">
        <Layout>
          <Layout.Header className="nav-header">
            <div className="navbar-menu">
              <div className="leftMenu">
                <LeftMenu mode="horizontal" />
              </div>
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <AiOutlineMenu />
              </Button>

              <Drawer
                title={"Milênio Artefatos"}
                placement="top"
                closable={true}
                onClose={showDrawer}
                open={visible}
                style={{ zIndex: 99999 }}
              >
                <LeftMenu mode={"inline"} />
              </Drawer>
            </div>
          </Layout.Header>
        </Layout>
      </nav>
    </Container>
  );
};

export default SubHeader;
