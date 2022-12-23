import styled from "styled-components";

import ItemComponent from "./companySize/items/ItemComponent";
import SimpleSortContainer from "./companySize/SimpleSortContainer";

export default function SearchComponent({ data, midScreen, smallScreen }) {
  return (
    <SearchBox>
      <SearchFrame>
        <SimpleSortContainer midScreen={midScreen}></SimpleSortContainer>

        <ItemComponent
          data={data}
          midScreen={midScreen}
          smallScreen={smallScreen}
        ></ItemComponent>
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
  width: 60%;
  margin: 20px 0;
`;
