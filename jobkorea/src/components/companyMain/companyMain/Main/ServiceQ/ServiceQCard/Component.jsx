import styled from "styled-components";

const ServiceQCardComponent = ({
  item,
  index,
  onClick,
  setMdIndex,
  mordalC,
  setMordalC,
  mdIndex,
}) => {
  return (
    <ServiceQCardBox
      onClick={() => {
        setMordalC(!mordalC);
        setMdIndex(index + 1);
        console.log(mordalC);
        console.log(mdIndex);
      }}
    >
      <div>{index + 1}</div>
      {/* <div>{item}</div> */}
      <div>{item.text1}</div>
      <div>{item.text2}</div>
    </ServiceQCardBox>
  );
};

export default ServiceQCardComponent;

const ServiceQCardBox = styled.div`
  width: 24.8%;
  height: 205px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #f2f4f7;
  background-color: white;
  white-space: pre-wrap;
  text-align: center;

  &:hover {
    border: 1px solid #3399ff;
    color: #3399ff;
  }

  & > div:first-child {
    font-size: 32px;
    font-weight: 700;
  }
  .flexwrap {
    display: flex;
  }
`;
