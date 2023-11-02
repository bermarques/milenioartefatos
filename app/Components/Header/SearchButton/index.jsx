import { AiOutlineSearch } from "react-icons/ai";
import { Container, SearchInput } from "./styles";
import { Button, Space } from "antd";

const Search = () => {
  return (
    <Container>
      <SearchInput
        placeholder="O que você está procurando?"
        rootClassName="milenio-button"
        style={{ width: "100%" }}
      />
    </Container>
  );
};

export default Search;
