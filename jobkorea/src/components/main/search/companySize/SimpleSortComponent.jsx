import styled from "styled-components";

export default function SimpleSortComponent({
  classOn,
  setClassOn,
  category,
  sortWay,
  showNums,
  checkWord,
}) {
  return (
    <SimpleBox>
      <SimpleCategory>
        {category.map((item, index) => (
          <div
            key={`category-${index}`}
            onClick={() => {
              setClassOn(index);
            }}
            className={classOn === index ? "on" : ""}>
            {item}
          </div>
        ))}
      </SimpleCategory>
      <DetailInfoBox>
        <div>
          <label>
            <input type="radio" name="chk_info" value="즉시지원만 보기" />
            즉시지원만 보기
          </label>
          <label>
            <input type="radio" name="chk_info" value="정규직만 보기" />
            정규직만 보기
          </label>
          <label>
            <input type="radio" name="chk_info" value="확인한 공고 제외" />
            확인한 공고 제외
          </label>
        </div>
        <div>
          <select>
            {sortWay.map((item, index) => (
              <option key={`sortWay-${index}`} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select>
            {showNums.map((item, index) => (
              <option key={`showNums-${index}`} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select>
            {checkWord.map((item, index) => (
              <option key={`checkWord-${index}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </DetailInfoBox>
    </SimpleBox>
  );
}
const SimpleBox = styled.div``;
const SimpleCategory = styled.div`
  display: flex;
  div {
    flex: 1;
    text-align: center;
    background-color: #f6f6f6;
    border: 1px solid #dcdcdc;
    border-bottom: solid 1px black;
    padding: 10px;
    cursor: pointer;
  }
  & .on {
    background-color: white;
    border: solid 1px black;
    border-bottom: 0;
  }
`;
const DetailInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #dcdcdc;
  border-top: none;
  select {
    padding: 5px;
  }
`;
