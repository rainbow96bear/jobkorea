import styled from "styled-components";
import ServiceQCardContainer from "./ServiceQCard/Container";

const ServiceQComponent = ({
  serviceMordalIsClick,
  setServiceMordalIsClick,
  setMordalIndex,
}) => {
  return (
    <ServiceQBox>
      <div>잡코리아 채용 서비스가 궁금해요!</div>
      <ServiceQCardContainer
        setMordalIndex={setMordalIndex}
        serviceMordalIsClick={serviceMordalIsClick}
        setServiceMordalIsClick={setServiceMordalIsClick}
      ></ServiceQCardContainer>
    </ServiceQBox>
  );
};

export default ServiceQComponent;

const ServiceQBox = styled.div`
  padding-top: 20px;
  width: 66%;
  margin: auto;

  & > div:first-child {
    font-size: 18px;
    font-weight: 700;
  }
`;
