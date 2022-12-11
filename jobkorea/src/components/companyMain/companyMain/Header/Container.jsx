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
    },
    {
      title: "공고등록",
      routes: "registpost",
    },
    {
      title: "공고지원자 관리",
      routes: "managepost",
    },
    {
      title: "인재검색",
      routes: "",
    },
    {
      title: "헤드헌팅 의뢰",
      routes: "",
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
