import MordalComponent from "./Component";

const MordalContainer = ({ setIsClick }) => {
  const onClick = () => {
    setIsClick(false);
  };
  return <MordalComponent onClick={onClick}></MordalComponent>;
};

export default MordalContainer;
