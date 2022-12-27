import MordalComponent from "./Component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
// import { action } from "../../../../../modules/userInfo.js";

const LoginMordalContainer = ({ setLoginIsClick, setIsClick }) => {
  const dispatch = useDispatch();

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
    console.log();
    if (data.data == "없는 아이디 입니다") {
      alert("없는 아이디 입니다");
    } else if (data.data == "비밀번호가 일치하지 않습니다") {
      alert("비밀번호가 일치하지 않습니다");
    } else if (data.data == "로그인완료") {
      alert("로그인 완료");
      setLoginIsClick(false);
      // dispatch(action.getuserInfo({ id: idConfirm }));
    }
  };
  const idConfirmClick = async (nameConirm, phoneComfirm) => {
    console.log(nameConirm);
    console.log(phoneComfirm);
    const data = await axios.post(
      "http://localhost:8080/api/companyuser/idconfirm",
      { nameConirm, phoneComfirm }
    );
  };

  const pwConfirmClick = async (idConfirm, phoneComfirm) => {
    console.log(idConfirm);
    console.log(phoneComfirm);
  };

  // const

  return (
    <MordalComponent
      loginOnClick={loginOnClick}
      moveTo={moveTo}
      onClick={onClick}
      setIsClick={setIsClick}
      idConfirmClick={idConfirmClick}
      pwConfirmClick={pwConfirmClick}
    ></MordalComponent>
  );
};

export default LoginMordalContainer;
