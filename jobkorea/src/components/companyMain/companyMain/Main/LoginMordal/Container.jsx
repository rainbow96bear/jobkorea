import MordalComponent from "./Component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { action } from "../../../../../modules/userInfo.js";

// import Cookies from "universal-cookie"
// cookies.remove('cookies');//로그아웃시

// const { decodedToken, isExpired } = useJwt(token);

const LoginMordalContainer = ({ setLoginIsClick }) => {
  // const [cookietest, setCookietest] = useState("");
  // const [cookietesttwo, setCookietesttwo] = useState("");
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
      dispatch(action.getuserInfo({ id: idConfirm }));

      // console.log(data.data.decoded);
      // setCookietest("test");

      // cookies.set("cookie", idConfirm, {
      //   path: "/",
      //   expires: new Date(Date.now() + 6000 * 30),
      // });
      // const token = idConfirm;
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
