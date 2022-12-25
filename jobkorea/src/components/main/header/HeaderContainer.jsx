import HeaderComponent from "./HeaderComponent";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function HeaderContainer() {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  const [keyWord, setKeyWord] = useState("");

  return (
    <HeaderComponent
      moveTo={moveTo}
      dropDown={dropDown}
      setDropDown={setDropDown}
      keyWord={keyWord}
      setKeyWord={setKeyWord}></HeaderComponent>
  );
}
