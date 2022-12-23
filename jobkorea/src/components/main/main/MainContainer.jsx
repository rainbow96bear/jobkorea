import MainComponent from "./MainComponent";
import { useMediaQuery } from "react-responsive";

export default function MainContainer() {
  const smallScreen = useMediaQuery({ minWidth: 1200 });
  const midScreen = useMediaQuery({ minWidth: 1780 });
  return (
    <MainComponent
      smallScreen={smallScreen}
      midScreen={midScreen}
    ></MainComponent>
  );
}
