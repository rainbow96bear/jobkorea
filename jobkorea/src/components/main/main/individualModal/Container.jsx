import MordalComponent from "./Component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { useState } from "react";
// import { action } from "../../../../../modules/userInfo.js";

const LoginMordalContainer = ({ setLoginIsClick, setIsClick }) => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const [lastconfirmid, setLastconfirmid] = useState("");
  const [lastconfirmphone, setLastconfirmphone] = useState("");

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
      "http://localhost:8080/api/individualuser/idconfirm",
      { nameConirm, phoneComfirm }
    );
    if (data.data == "이름과 번호를 다시 확인해주세요") {
      alert("이름과 번호를 다시 확인해주세요");
    } else {
      alert(`아이디는 ${data.data} 입니다`);
    }
  };

  const pwConfirmClick = async (idConfirm, phoneComfirm) => {
    // console.log(idConfirm);
    // console.log(phoneComfirm);
    const data = await axios.post(
      "http://localhost:8080/api/individualuser/pwconfirm",
      {
        idConfirm,
        phoneComfirm,
      }
    );
    if (data.data == "아이디와 번호를 다시 확인해주세요") {
      alert("아이디와 번호를 다시 확인해주세요");
    } else {
      console.log(data.data);
      setChange(true);
      alert("아이디와 번호가 확인되었습니다 변경할 비밀번호를 입력해주세요");
      setLastconfirmid(data.data.individualId);
      setLastconfirmphone(data.data.individualTel);
    }
  };

  const setChangepw = async (pwConfirm, lastconfirmid, lastconfirmphone) => {
    const data = await axios.post(
      "http://localhost:8080/api/individualuser/changepw",
      {
        pwConfirm,
        lastconfirmid,
        lastconfirmphone,
      }
    );

    console.log(data.data);
  };

  return (
    <MordalComponent
      loginOnClick={loginOnClick}
      moveTo={moveTo}
      onClick={onClick}
      setIsClick={setIsClick}
      idConfirmClick={idConfirmClick}
      pwConfirmClick={pwConfirmClick}
      change={change}
      setChange={setChange}
      setChangepw={setChangepw}
      lastconfirmid={lastconfirmid}
      lastconfirmphone={lastconfirmphone}
    ></MordalComponent>
  );
};

export default LoginMordalContainer;
