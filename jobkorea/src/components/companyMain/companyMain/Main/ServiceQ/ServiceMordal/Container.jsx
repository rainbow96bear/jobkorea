import ServiceModalComponent1 from "./Component 1";
import ServiceModalComponent2 from "./Component 2";
import ServiceModalComponent3 from "./Component 3";
import ServiceModalComponent4 from "./Component 4";
import ServiceModalComponent5 from "./Component 5";
import ServiceModalComponent6 from "./Component 6";
import ServiceModalComponent7 from "./Component 7";
import ServiceModalComponent8 from "./Component 8";

const ServiceModalContainer = ({
  setServiceMordalIsClick,
  mordalIndex,
  setMordalIndex,
}) => {
  const closeOnClick = () => {
    setServiceMordalIsClick(false);
  };
  const prevClick = () => {
    if (mordalIndex == 1) return;
    setMordalIndex(mordalIndex - 1);
  };
  const nextClick = () => {
    if (mordalIndex == 8) return;
    setMordalIndex(mordalIndex + 1);
  };
  // return <ServiceModalComponent onClick={onClick}></ServiceModalComponent>;
  switch (mdIndex) {
    case 1:
      return (
        <ServiceModalComponent1 onClick={onClick}></ServiceModalComponent1>
      );
    case 2:
      return (
        <ServiceModalComponent2 onClick={onClick}></ServiceModalComponent2>
      );
    case 3:
      return (
        <ServiceModalComponent3 onClick={onClick}></ServiceModalComponent3>
      );
    case 4:
      return (
        <ServiceModalComponent4 onClick={onClick}></ServiceModalComponent4>
      );
    case 5:
      return (
        <ServiceModalComponent5 onClick={onClick}></ServiceModalComponent5>
      );
    case 6:
      return (
        <ServiceModalComponent6 onClick={onClick}></ServiceModalComponent6>
      );
    case 7:
      return (
        <ServiceModalComponent7 onClick={onClick}></ServiceModalComponent7>
      );
    case 8:
      return (
        <ServiceModalComponent8 onClick={onClick}></ServiceModalComponent8>
      );
  }
};

export default ServiceModalContainer;
