import CompanyComponent from "./CompanyComponent";

export default function CompanyContainer() {
  const onClick = (
    selectedOption,
    companyNumber,
    companyName,
    companyHeader,
    companyAdress,
    companyId,
    companyPw,
    companyIdname,
    companyIdnumber,
    companyIdemail
  ) => {
    console.log(
      selectedOption,
      companyNumber,
      companyName,
      companyHeader,
      companyAdress,
      companyId,
      companyPw,
      companyIdname,
      companyIdnumber,
      companyIdemail
    );
  };

  return <CompanyComponent onClick={onClick} />;
}
