import styled from "styled-components";

import ItemComponent from "../items/ItemComponent";

export default function SearchKeyWordComponent({ data }) {
  return (
    <SearchBox>
      <SearchFrame>
        <ItemComponent data={data}></ItemComponent>
      </SearchFrame>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchFrame = styled.div`
  min-width: 360px;
  width: 100%;
  max-width: 1268px;
  margin: 20px 0;
  & > :nth-child(1) {
    border-top: 1px solid #dfdfdf;
  }
`;
