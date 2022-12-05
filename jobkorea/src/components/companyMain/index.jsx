import { Routes, Route } from "react-router-dom";
import CompanyMainContainer from "./companyMain/CompanyMainContainer";
import RegistPostContainer from "./registPost/RegistPostContainer";
import ManagePostContainer from "./managePost/ManagePostContainer";

export default function CompanyMain() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<CompanyMainContainer></CompanyMainContainer>}></Route>
        <Route
          path="/registPost"
          element={<RegistPostContainer></RegistPostContainer>}></Route>
        <Route
          path="/managePost"
          element={<ManagePostContainer></ManagePostContainer>}></Route>
      </Routes>
    </div>
  );
}
