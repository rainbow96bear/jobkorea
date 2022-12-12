import { Routes, Route } from "react-router-dom";
import CompanyMainContainer from "./companyMain/CompanyMainContainer";
import RegistPostContainer from "./registPost/RegistPostContainer";
import ManagePostContainer from "./managePost/ManagePostContainer";
import styled from "styled-components";
import HeaderContainer from "./companyMain/Header/Container";
import FooterContainer from "./companyMain/Footer/Container";
import { useState } from "react";

export default function CompanyMain() {
  const [loginIsClick, setLoginIsClick] = useState(false);

  return (
    <Box>
      <HeaderContainer
        loginIsClick={loginIsClick}
        setLoginIsClick={setLoginIsClick}
      ></HeaderContainer>
      <Routes>
        <Route
          path="/"
          element={
            <CompanyMainContainer
              loginIsClick={loginIsClick}
              setLoginIsClick={setLoginIsClick}
            ></CompanyMainContainer>
          }
        ></Route>
        <Route
          path="/registPost/*"
          element={<RegistPostContainer></RegistPostContainer>}
        ></Route>
        <Route
          path="/managePost"
          element={<ManagePostContainer></ManagePostContainer>}
        ></Route>
      </Routes>
      <FooterContainer></FooterContainer>
    </Box>
  );
}

const Box = styled.div``;
