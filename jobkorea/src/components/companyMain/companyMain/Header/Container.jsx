import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "./Componets";

const HeaderContainer = ({ setLoginIsClick, loginIsClick }) => {
  const navigate = useNavigate();
  const [dropdownIsClick, setDropdownIsClick] = useState(false);
  const menuList = [
    {
      title: "홈",
      routes: "",
      login: "no",
    },
    {
      title: "공고등록",
      routes: "registpost",
      login: "yes",
    },
    {
      title: "공고지원자 관리",
      routes: "managepost",
      login: "yes",
      data: "yes",
    },
    {
      title: "인재검색",
      routes: "",
      login: "no",
    },
    {
      title: "헤드헌팅 의뢰",
      routes: "",
      login: "no",
    },
  ];

  const loginOnClick = () => {
    setLoginIsClick(!loginIsClick);
    console.log(loginIsClick);
  };

  const dropdownOnClick = () => {
    setDropdownIsClick(!dropdownIsClick);
  };

  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  return (
    <HeaderComponent
      loginOnClick={loginOnClick}
      dropdownOnClick={dropdownOnClick}
      dropdownIsClick={dropdownIsClick}
      menuList={menuList}
      moveTo={moveTo}
    ></HeaderComponent>
  );
};

export default HeaderContainer;
