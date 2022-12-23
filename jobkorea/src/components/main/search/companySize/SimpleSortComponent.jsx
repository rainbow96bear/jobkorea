import styled from "styled-components";

export default function SimpleSortComponent({
  classOn,
  setClassOn,
  category,
  showNums,
  setCategoryCheck,
}) {
  return (
    <SimpleBox>
      <SimpleCategory>
        {category.map((item, index) => (
          <div
            key={`category-${index}`}
            onClick={() => {
              setClassOn(index);
              setCategoryCheck(item);
            }}
            className={classOn === index ? "on" : ""}
          >
            {item}
          </div>
        ))}
      </SimpleCategory>
      <DetailInfoBox>
        <select>
          {showNums.map((item, index) => (
            <option key={`showNums-${index}`} value={item}>
              {item}
            </option>
          ))}
        </select>
      </DetailInfoBox>
    </SimpleBox>
  );
}
const SimpleBox = styled.div``;
const SimpleCategory = styled.div`
  display: flex;
  div {
    flex: 1;
    flex-wrap: wrap;
    text-align: center;
    background-color: #f6f6f6;
    border: 1px solid #dcdcdc;
    border-bottom: solid 1px black;
    font-size: 14px;
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
  justify-content: end;
  align-items: center;
  padding: 15px;
  border: 1px solid #dcdcdc;
  border-top: none;
  select {
    padding: 5px;
  }
`;
