import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

import HeaderComponent from "./Componets";
import { action } from "../../../../modules/userInfo";

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
      routes: "registpostad",
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

  const dispatch = useDispatch();

  const companyUser = useSelector((state) => state.companyUser.value);

  const [autoLogout, setAutologout] = useState("");

  useEffect(() => {
    if (companyUser != 0) {
      setTimeout(async () => {
        dispatch(action.logoutCompany());
        const data = await axios.post(
          "http://localhost:8080/api/companyuser/logout",
          {}
        );
      }, 18000000);
    }
  }, [companyUser]);

  const companyconfirm = async () => {
    const data = await axios.post(
      "http://localhost:8080/api/companyuser/loginconfirm",
      { companyUser }
    );

    dispatch(action.loginConfirm({ confirmid: data.data }));

    setAutologout(data.data);
  };

  useEffect(() => {
    companyconfirm();
  }, [companyUser]);

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
