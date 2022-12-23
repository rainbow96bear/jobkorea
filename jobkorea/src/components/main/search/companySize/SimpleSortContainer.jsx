import { useState } from "react";

import SimpleSortComponent from "./SimpleSortComponent";

export default function SimpleSortContainer({ midScreen, setCategoryCheck }) {
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
  const showNums = ["10개씩", "20개씩", "30개씩", "40개씩", "50개씩"];
  const checkWord = ["포함 단어", "제외 단어"];
  return (
    <SimpleSortComponent
      setCategoryCheck={setCategoryCheck}
      classOn={classOn}
      setClassOn={setClassOn}
      category={category}
      sortWay={sortWay}
      showNums={showNums}
      checkWord={checkWord}
      midScreen={midScreen}
    ></SimpleSortComponent>
  );
}
