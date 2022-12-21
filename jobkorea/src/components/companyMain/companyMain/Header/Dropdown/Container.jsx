import { useNavigate } from "react-router-dom";
import DropDown from "./Components";

export default function DropdownContainer() {
  const navigate = useNavigate();

  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  return <DropDown moveTo={moveTo}></DropDown>;
}
