import styled from "styled-components";

import ItemComponent from "./companySize/items/ItemComponent";
import SimpleSortContainer from "./companySize/SimpleSortContainer";

export default function SearchComponent({
  data,
  midScreen,
  smallScreen,
  setCategoryCheck,
}) {
  return (
    <SearchBox>
      <SearchFrame>
        <SimpleSortContainer
          midScreen={midScreen}
          setCategoryCheck={setCategoryCheck}></SimpleSortContainer>

        <ItemComponent
          data={data}
          midScreen={midScreen}
          smallScreen={smallScreen}></ItemComponent>
      </SearchFrame>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const SearchFrame = styled.div`
  min-width: 360px;
  width: 100%;
  max-width: 1268px;
  margin: 20px 0;
`;
