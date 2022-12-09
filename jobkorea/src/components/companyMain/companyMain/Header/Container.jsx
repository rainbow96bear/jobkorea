import HeaderComponent from "./Componets";

const HeaderContainer = ({ setIsClick, isClick }) => {
  const onClick = () => {
    setIsClick(!isClick);
  };
  return <HeaderComponent onClick={onClick}></HeaderComponent>;
};

export default HeaderContainer;
