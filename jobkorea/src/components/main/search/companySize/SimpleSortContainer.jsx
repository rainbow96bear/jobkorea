import { useState } from "react";

import SimpleSortComponent from "./SimpleSortComponent";

export default function SimpleSortContainer({
  midScreen,
  setCategoryCheck,
  setAreaCheck,
}) {
  const [classOn, setClassOn] = useState(0);
  const category = ["전체", "대기업", "중견기업", "중소기업", "외국계"];
  const sortWay = [
    "등록일 순",
    "최신 업데이트 순",
    "마감일 순",
    "경력 순",
    "학력 순",
    "추천 순",
  ];
  const area = [
    "전국",
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];
  const checkWord = ["포함 단어", "제외 단어"];
  return (
    <SimpleSortComponent
      setCategoryCheck={setCategoryCheck}
      setAreaCheck={setAreaCheck}
      classOn={classOn}
      setClassOn={setClassOn}
      category={category}
      sortWay={sortWay}
      area={area}
      checkWord={checkWord}
      midScreen={midScreen}></SimpleSortComponent>
  );
}
