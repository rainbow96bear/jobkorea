import FooterComponent from "./FooterComponent";
import { useMediaQuery } from "react-responsive";

export default function FooterContainer() {
  const screen875 = useMediaQuery({ minWidth: 875 });
  const screen730 = useMediaQuery({ minWidth: 730 });
  const screen400 = useMediaQuery({ minWidth: 400 });
  return (
    <FooterComponent
      screen875={screen875}
      screen730={screen730}
      screen400={screen400}></FooterComponent>
  );
}
