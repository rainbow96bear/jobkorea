import { Routes, Route } from "react-router-dom";
import CompanyMainContainer from "./companyMain/CompanyMainContainer";
import RegistPostContainer from "./registPost/RegistPostContainer";
import ManagePostContainer from "./managePost/ManagePostContainer";
import styled from "styled-components";
import HeaderContainer from "./companyMain/Header/Container";
import FooterContainer from "./companyMain/Footer/Container";
import { useState } from "react";
import RecruitInfoContainer from "./managePost/recruitInfo/RecruitInfoContainer";
import FixPostContainer from "./registPost/fixPost/FixPostContainer";
import AdPostContainer from "./registPost/adPost/adPostContainer";

export default function CompanyMain() {
  const [loginIsClick, setLoginIsClick] = useState(false);
  const [adGrade, setAdGrade] = useState(0);

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
          element={
            <RegistPostContainer
              adGrade={adGrade}
              setAdGrade={setAdGrade}
            ></RegistPostContainer>
          }
        ></Route>
        <Route
          path="/managePost"
          element={<ManagePostContainer></ManagePostContainer>}
        ></Route>
        <Route
          path="/registPostAd"
          element={
            <AdPostContainer
              adGrade={adGrade}
              setAdGrade={setAdGrade}
            ></AdPostContainer>
          }
        ></Route>
        <Route
          path="/myPost/:id"
          element={<RecruitInfoContainer></RecruitInfoContainer>}
        ></Route>
        <Route
          path="/fixPost/:id"
          element={<FixPostContainer></FixPostContainer>}
        ></Route>
      </Routes>
      <FooterContainer></FooterContainer>
    </Box>
  );
}

const Box = styled.div``;
