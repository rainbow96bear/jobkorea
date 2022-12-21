import { Routes, Route } from "react-router-dom";
import CompanyMain from "./companyMain";
import Main from "./main";
import RegistAccount from "./registAccount";
import ErrorPageContainer from "../components/errorPage/ErrorPageContainer";

export default function Components() {
  return (
    <div>
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
    </div>
  );
}
