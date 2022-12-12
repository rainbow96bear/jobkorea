import MordalComponent from "./Component";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const LoginMordalContainer = ({ setLoginIsClick }) => {
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
    } else if (data.data == "로그인완료") {
      alert("로그인 완료");
      console.log(data.data);
      // cookies.set(
      //   "cookie",
      //   { companyId: req.body.idConfirm },
      //   {
      //     path: "/",
      //     expires: Date.now() / 1000 + 60 * 60,
      //   }
      // );
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
