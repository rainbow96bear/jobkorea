import MordalComponent from "./Component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { action } from "../../../../../modules/userInfo.js";

const LoginMordalContainer = ({ setLoginIsClick }) => {
  const dispatch = useDispatch();

  const loginOnClick = () => {
    setLoginIsClick(false);
  };
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  const onClick = async (idConfirm, pwConfirm) => {
    const data = await axios.post("/api/companyuser/login", {
      idConfirm,
      pwConfirm,
    });
    console.log();
    if (data.data == "없는 아이디 입니다") {
      alert("없는 아이디 입니다");
    } else if (data.data == "비밀번호가 일치하지 않습니다") {
      alert("비밀번호가 일치하지 않습니다");
    } else if (data.data == "로그인완료") {
      alert("로그인 완료");
      setLoginIsClick(false);
      dispatch(action.getuserInfo({ id: idConfirm }));
    }
  };

  return (
    <MordalComponent
      loginOnClick={loginOnClick}
      moveTo={moveTo}
      onClick={onClick}
    ></MordalComponent>
  );
};

export default LoginMordalContainer;
