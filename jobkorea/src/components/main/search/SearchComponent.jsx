import styled from "styled-components";

import ItemComponent from "./companySize/items/ItemComponent";
import SimpleSortContainer from "./companySize/SimpleSortContainer";

export default function SearchComponent({ data }) {
  return (
    <SearchBox>
      <SearchFrame>
        <SimpleSortContainer></SimpleSortContainer>

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
  width: 60%;
  margin: 20px 0;
`;
