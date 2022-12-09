import HeaderComponent from "./HeaderComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeaderContainer() {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  return (
    <HeaderComponent
      moveTo={moveTo}
      dropDown={dropDown}
      setDropDown={setDropDown}></HeaderComponent>
  );
}
