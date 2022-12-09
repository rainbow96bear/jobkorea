import styled from "styled-components";

const ListComponent = (item) => {
  return (
    <ListBox>
      <div className="solutionList">
        <img src={`${item.item.img}`} />
        <div className="imgtitle">
          {item.item.title}
          <br /> <span>{item.item.titlebold}</span>
        </div>
        <div className="imgtext">
          {item.item.text1}
          <br />
          {item.item.text2}
        </div>
      </div>
    </ListBox>
  );
};

const ListBox = styled.div`
  .solutionList {
    width: 300px;
    height: 280px;
    background-color: white;
    margin: 10px;
    border-radius: 15px;
  }

  .solutionList img {
    margin: 30px 20px;
  }
`;

export default ListComponent;
