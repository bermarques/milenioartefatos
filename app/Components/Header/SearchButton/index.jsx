import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Container, SearchInput } from "./styles";
import { Button, Popover, Space } from "antd";
import Content from "./Content";
import { useDispatch } from "react-redux";
import { getSearchbarProducts } from "../../../store/modules/products/actions";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [_document, set_document] = useState(null)
  const dispatch = useDispatch();

React.useEffect(() => {
    set_document(document)
}, [])
  
  const getWidth = _document ? _document?.getElementById("search-input")?.offsetWidth : 500;

  useEffect(() => {
    if (searchValue.length >= 3) {
      dispatch(getSearchbarProducts(searchValue));
    }
  }, [searchValue]);

  return (
    <Container>
      <Popover
        content={<Content search={searchValue} searchWidth={getWidth} />}
        overlayInnerStyle={{ padding: 0 }}
        trigger="focus"
        arrow={false}
        overlayStyle={{ padding: 0 }}
        getPopupContainer={(triggerNode) => triggerNode.parentNode}
      >
        <SearchInput
          id="search-input"
          onChange={(evt) => setSearchValue(evt.target.value)}
          placeholder="O que você está procurando?"
          rootClassName="milenio-button"
          style={{ width: "100%" }}
        />
      </Popover>
    </Container>
  );
};

export default Search;
