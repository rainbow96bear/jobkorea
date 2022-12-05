import { Routes, Route } from "react-router-dom";
import ApplyContainer from "./apply/ApplyContainer";
import MainContainer from "./main/MainContainer";
import RecruitContainer from "./recruit/RecruitContainer";
import SearchContainer from "./search/SearchContainer";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>
        <Route
          path="/search"
          element={<SearchContainer></SearchContainer>}></Route>
        <Route
          path="/recruit"
          element={<RecruitContainer></RecruitContainer>}></Route>
        <Route
          path="/apply"
          element={<ApplyContainer></ApplyContainer>}></Route>
      </Routes>
    </div>
  );
}
