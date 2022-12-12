import CompanyMainComponent from "./CompanyMainComponent";

export default function CompanyMainContainer({
  loginIsClick,
  setLoginIsClick,
}) {
  return (
    <CompanyMainComponent
      loginIsClick={loginIsClick}
      setLoginIsClick={setLoginIsClick}
    ></CompanyMainComponent>
  );
}
