import MordalComponent from "./Component";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import Cookies from "universal-cookie";
// import jwt from "jsonwebtoken";
// cookies.remove('cookies');//로그아웃시
// const cookies = new Cookies();
import { useEffect } from "react";

const LoginMordalContainer = ({ setLoginIsClick }) => {
  // const [cookietest, setCookietest] = useState("");
  // const [cookietesttwo, setCookietesttwo] = useState("");

  const loginOnClick = () => {
    setLoginIsClick(false);
  };
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  const onClick = async (idConfirm, pwConfirm) => {
    const data = await axios.post(
      "http://localhost:8080/api/companyuser/login",
      { idConfirm, pwConfirm }
    );
    console.log(data.data);
    if (data.data == "없는 아이디 입니다") {
      alert("없는 아이디 입니다");
    } else if (data.data == "비밀번호가 일치하지 않습니다") {
      alert("비밀번호가 일치하지 않습니다");
    } else if (data.data.companyId == idConfirm) {
      alert("로그인 완료");
      // setCookietest("test");

      // cookies.set("cookie", idConfirm, {
      //   path: "/",
      //   expires: new Date(Date.now() + 6000 * 30),
      // });
      // console.log(cookies.get("cookies"));
    }
  };

  return (
    <MordalComponent
      // cookietesttwo={cookietesttwo}
      // cookietest={cookietest}
      loginOnClick={loginOnClick}
      moveTo={moveTo}
      onClick={onClick}
    ></MordalComponent>
  );
};

export default LoginMordalContainer;
