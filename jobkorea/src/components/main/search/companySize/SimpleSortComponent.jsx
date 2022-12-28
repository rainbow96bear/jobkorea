import styled from "styled-components";
import Select from "react-select";

export default function SimpleSortComponent({
  classOn,
  setClassOn,
  category,
  area,
  setCategoryCheck,
  setAreaCheck,
}) {
  const options = area.map((data) => ({ value: data, label: data }));
  return (
    <SimpleBox>
      <SimpleCategory>
        {category.map((item, index) => (
          <div
            key={`category-${index}`}
            onClick={() => {
              setClassOn(index);
              setCategoryCheck(item);
              console.log(item);
            }}
            className={classOn === index ? "on" : ""}>
            {item}
          </div>
        ))}
      </SimpleCategory>
      <DetailInfoBox>
        <Select
          className="area-select"
          classNamePrefix="select"
          isSearchable={false}
          defaultValue={options[0]}
          options={options}
          onChange={(value) => {
            setAreaCheck(value.value);
            console.log(value.value);
          }}
        />
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
    font-size: 12.5px;
    font-weight: 900;
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
  .area-select {
    width: 150px;
    font-size: 14px;
  }
`;
