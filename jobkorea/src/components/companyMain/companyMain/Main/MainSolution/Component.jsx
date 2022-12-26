import { useEffect, useState } from "react";
import styled from "styled-components";
import ListComponent from "./SolutionLIst/Component";

const SolutionComponent = () => {
  const [resize, setResize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });
  }, []);

  let onList = [
    {
      img: "/img/icon_start_1.png",
      title: "간편한 ",
      titlebold: "채용공고 등록",
      text1: "쉽고 빠른 채용공고 등록하기 ",
      text2: "다양한 직군, 인턴/신입 경력까지 폭넓은 채용",
    },
    {
      img: "/img/icon_start_2.png",
      title: "쉽고 정확한 ",
      titlebold: "지원자 관리",
      text1: "한눈에 보는 지원자 현황 ",
      text2: "서류합격, 면접제의 관리하기",
    },
    { a: "A" },
    { a: "A" },
    {
      img: "/img/icon_start_3.png",
      title: "인턴/신입부터 경력까지 ",
      titlebold: "인재검색",
      text1: "우리기업과 잘 맞는 인재추천 ",
      text2: "원하는 인재 찾기 / 입사제의 포지션 제안",
    },
    {
      img: "/img/icon_start_4.png",
      title: "믿고 맡기는 ",
      titlebold: "헤드헌팅",
      text1: "엄선된 헤드헌팅을 통한 인재추천 ",
      text2: "",
    },
  ];
  if (resize <= 1850) {
    onList = onList.filter((item) => item.a != "A");
    console.log(onList);
  }
  return (
    <SolutionBox resize={resize}>
      <div className="flex resize">
        <div className="title">
          <span>
            잡코리아
            <br /> 채용솔루션
          </span>
          을<br /> 소개합니다.
        </div>
        <div className="flex wrap">
          {onList.map((item, index) => (
            <ListComponent key={`onList-${index}`} item={item}></ListComponent>
          ))}
        </div>
      </div>
    </SolutionBox>
  );
};

export default SolutionComponent;

const SolutionBox = styled.div`
  width: 67%;
  margin: auto;
  background: url("/img/background_solution.png") no-repeat 120px 61px;

  .title {
    width: 450px;
    font-size: 36px;
    padding: 40px 0 0 41px;
    color: #333333;
    white-space: nowrap;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .title span {
    font-weight: 700;
  }

  .flex {
    display: flex;
  }

  .wrap {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .solutionList {
    width: 300px;
    height: 280px;
    background-color: white;
    border-radius: 15px;
  }

  .solutionList img {
    margin: 30px 20px;
  }

  .wrap > div:nth-child(3),
  div:nth-child(4) {
    opacity: ${({ resize }) => {
      if (resize >= 1850) {
        return 0;
      } else return 1;
    }};
  }

  .imgtitle {
    font-size: 20px;
    margin-left: 20px;
    margin-top: 30px;
  }

  .imgtitle span {
    font-weight: 700;
  }

  .imgtext {
    font-size: 13px;
    margin: 10px 0 20px 20px;
  }

  @media (max-width: 1400px) {
    .resize {
      flex-direction: column;

      align-items: center;

      & > div:first-child {
        text-align: center;
        padding: 0;
      }
    }

    .wrap {
      justify-content: center;
    }
  }
`;
