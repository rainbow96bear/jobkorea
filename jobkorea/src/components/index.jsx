import { Routes, Route } from "react-router-dom";
import CompanyMain from "./companyMain";
import Main from "./main";
import RegistAccount from "./registAccount";
import ErrorPageContainer from "../components/errorPage/ErrorPageContainer";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

export default function Components() {
  const screen360 = useMediaQuery({ minWidth: 360 });

  return (
    <div>
      {screen360 ? (
        <Routes>
          <Route path="/*" element={<Main></Main>}></Route>
          <Route
            path="/companyMain/*"
            element={<CompanyMain></CompanyMain>}
          ></Route>
          <Route
            path="/registAccount/*"
            element={<RegistAccount></RegistAccount>}
          ></Route>
          <Route
            path="/registAccount/*"
            element={<RegistAccount></RegistAccount>}
          ></Route>
          <Route
            path="/errorpage"
            element={<ErrorPageContainer></ErrorPageContainer>}
          ></Route>
        </Routes>
      ) : (
        <FoldBox>화면을 키워주세요</FoldBox>
      )}
    </div>
  );
}

const FoldBox = styled.div`
  color: white;
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/img/warning.gif");
  background-size: contain;
`;
