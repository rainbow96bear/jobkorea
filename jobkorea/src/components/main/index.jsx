import { Routes, Route } from "react-router-dom";
import ApplyContainer from "./apply/ApplyContainer";
import MainContainer from "./main/MainContainer";
import RecruitContainer from "./recruit/RecruitContainer";
import SearchContainer from "./search/SearchContainer";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
import styled from "styled-components";

export default function Main() {
  return (
    <Box>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>
        <Route
          path="/search"
          element={<SearchContainer></SearchContainer>}
        ></Route>
        <Route
          path="/recruit"
          element={<RecruitContainer></RecruitContainer>}
        ></Route>
        <Route
          path="/apply"
          element={<ApplyContainer></ApplyContainer>}
        ></Route>
      </Routes>
      <FooterContainer></FooterContainer>
    </Box>
  );
}

const Box = styled.div`
  min-width: 1697px;
`;
