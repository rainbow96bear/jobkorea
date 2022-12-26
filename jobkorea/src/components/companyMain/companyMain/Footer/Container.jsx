import { useNavigate } from "react-router-dom";
import FooterComponent from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../../modules/button";

const FooterContainer = () => {
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  const dispatch = useDispatch();
  const AdDay = useSelector((state) => state.recruit.AdDay);
  const AdHour = useSelector((state) => state.recruit.AdHour);
  const AdMin = useSelector((state) => state.recruit.AdMin);
  const AdSec = useSelector((state) => state.recruit.AdSec);

  return <FooterComponent moveTo={moveTo} />;
};

export default FooterContainer;
