import { Routes, Route } from "react-router-dom";

import IndividualContainer from "./individual/IndividualContainer";
import CompanyContainer from "./company/CompanyContainer";

export default function RegistAccount() {
  return (
    <div>
      <Routes>
        <Route
          path="/individual"
          element={<IndividualContainer></IndividualContainer>}></Route>
        <Route
          path="/company"
          element={<CompanyContainer></CompanyContainer>}></Route>
      </Routes>
    </div>
  );
}
