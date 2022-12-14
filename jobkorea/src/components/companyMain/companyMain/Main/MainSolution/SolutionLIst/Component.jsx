import styled from "styled-components";

const ListComponent = ({ item }) => {
  return (
    <ListBox>
      <div className="solutionList">
        {item.img && <img src={`${item.img}`} />}
        <div className="imgtitle">
          {item.title}
          <br /> <span>{item.titlebold}</span>
        </div>
        <div className="imgtext">
          {item.text1}
          <br />
          {item.text2}
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

  @media (max-width: 350px) {
    .solutionList {
      width: 250px;
      height: 280px;
    }
  }

  .solutionList img {
    margin: 30px 20px;
  }
`;

export default ListComponent;
