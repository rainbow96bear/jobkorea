import FooterComponent from "./FooterComponent";
import { useMediaQuery } from "react-responsive";

export default function FooterContainer() {
  const smallScreen = useMediaQuery({ minWidth: 1650 });
  return <FooterComponent smallScreen={smallScreen}></FooterComponent>;
}
