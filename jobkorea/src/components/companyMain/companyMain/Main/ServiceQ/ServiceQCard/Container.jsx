import ServiceQCardComponent from "./Component";
import styled from "styled-components";

const ServiceQCardContainer = ({
  onClick,
  serviceMordalIsClick,
  setServiceMordalIsClick,
  mordalIndex,
  setMordalIndex,
}) => {
  const list = [
    {
      text1: `채용공고를 내고 싶은데`,
      text2: "절차가 어떻게 되나요?",
    },
    {
      text1: "온라인 채용시스템이",
      text2: "무엇인가요?",
    },
    {
      text1: "온라인 입사자들은",
      text2: "어디서 확인하나요?",
    },
    {
      text1: "입사제의 서비스는",
      text2: "무엇인가요?",
    },
    {
      text1: "관심있는 이력서를",
      text2: "스크랩할 수 있나요?",
    },
    {
      text1: "스크랩한 인재는",
      text2: "어디에서 확인이 가능한가요?",
    },
    {
      text1: "마감된 채용공고를 다시 진행하고 싶은데",
      text2: "어떻게 하나요?",
    },
    {
      text1: "채용공고를",
      text2: "대신 등록해 줄 수 있나요?",
    },
  ];

  return (
    <ServiceQCardContainerBox>
      {list.map((item, index) => {
        return (
          <ServiceQCardComponent
            key={`list-${index}`}
            item={item}
            index={index}
            onClick={onClick}
            mordalIndex={mordalIndex}
            setMordalIndex={setMordalIndex}
            serviceMordalIsClick={serviceMordalIsClick}
            setServiceMordalIsClick={setServiceMordalIsClick}
          ></ServiceQCardComponent>
        );
      })}
    </ServiceQCardContainerBox>
  );
};
export default ServiceQCardContainer;

const ServiceQCardContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 50px;
  border-radius: 20px;
`;
