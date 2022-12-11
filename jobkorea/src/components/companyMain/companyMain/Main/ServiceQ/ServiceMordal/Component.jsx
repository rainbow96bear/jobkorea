import styled from "styled-components";

const ServiceModalComponent = ({
<<<<<<< HEAD
  closeOnClick,
  data,
  prevClick,
  nextClick,
  mordalIndex,
}) => {
=======
  onClick,
  data,
  prevClick,
  nextClick,
  mdIndex,
}) => {
  console.log(data);
>>>>>>> b46ead6 (1211 Company Mainpage UI)
  return (
    <ServiceModalBox>
      <div className="background"></div>
      <div className="button">
        <div className="flex">
          <img
<<<<<<< HEAD
            className={mordalIndex == 1 ? "buttonStop" : ""}
            src="./img/prev.svg"
            onClick={prevClick}
          ></img>
          <img
            className={mordalIndex == 8 ? "buttonStop" : ""}
=======
            className={mdIndex == 1 ? "buttonStop" : ""}
            src="img/prev.svg"
            onClick={prevClick}
          ></img>
          <img
            className={mdIndex == 8 ? "buttonStop" : ""}
>>>>>>> b46ead6 (1211 Company Mainpage UI)
            src="img/next.svg"
            onClick={nextClick}
          ></img>
        </div>
      </div>
      <div className="mordal">
        <div className="title">
          {data.title}
<<<<<<< HEAD
          <img src="img/x-button.svg" onClick={closeOnClick}></img>
=======
          <img src="img/x-button.svg" onClick={onClick}></img>
>>>>>>> b46ead6 (1211 Company Mainpage UI)
        </div>
        <div className="text">
          {data.text.map((item, index) => {
            if (typeof item === "string")
<<<<<<< HEAD
              return <div key={`string-${index}`}>{item}</div>;
            else if (typeof item === "object") {
              if (Object.keys(item)[0] === "numList") {
                return (
                  <ol key={`num-ol-${index}`}>
                    {item["numList"].map((item2, index2) => (
                      <li key={`num-li-${index}-${index2}`}>{item2}</li>
=======
              return <div key={`item-${index}`}>{item}</div>;
            else if (typeof item === "object") {
              if (Object.keys(item)[0] === "numList") {
                return (
                  <ol key={`item-${index}`}>
                    {item["numList"].map((item2, index2) => (
                      <li key={`item-${index}-${index2}`}>{item2}</li>
>>>>>>> b46ead6 (1211 Company Mainpage UI)
                    ))}
                  </ol>
                );
              } else if (Object.keys(item)[0] === "starList") {
                return (
<<<<<<< HEAD
                  <ul key={`star-ul-${index}`}>
                    {item["starList"].map((item3, index3) => (
                      <li key={`star-li-${index}-${index3}`}>{item3}</li>
=======
                  <ul key={`item-${index}`}>
                    {item["starList"].map((item3, index3) => (
                      <li key={`item-${index}-${index3}`}>{item3}</li>
>>>>>>> b46ead6 (1211 Company Mainpage UI)
                    ))}
                  </ul>
                );
              } else if (Object.keys(item)[0] === "divList") {
                return (
<<<<<<< HEAD
                  <div key={`div-${index}`} className="graph">
                    {item["divList"].map((item4, index4) => (
                      <div key={`div-div-${index}-${index4}`}>
                        <div>{item4}</div>
                        <div> &gt; </div>
                      </div>
=======
                  <div key={`item-${index}`} className="graph">
                    {item["divList"].map((item4, index4) => (
                      <>
                        <div key={`item-${index}-${index4}`}>{item4}</div>
                        <div> &gt; </div>
                      </>
>>>>>>> b46ead6 (1211 Company Mainpage UI)
                    ))}
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </ServiceModalBox>
  );
};

export default ServiceModalComponent;

const ServiceModalBox = styled.div`
  .button {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 900px;
    height: 50px;
  }

  .flex {
    display: flex;
    justify-content: space-between;

    & > img {
      width: 20px;
      cursor: pointer;
      filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(324deg)
        brightness(105%) contrast(107%);
    }

    & > .buttonStop {
      filter: invert(98%) sepia(0%) saturate(1753%) hue-rotate(271deg)
        brightness(72%) contrast(84%);
    }
  }

  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .mordal {
    width: 800px;
    height: 420px;
    background-color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;
  }
  .title {
    display: flex;
    width: 92%;
    justify-content: space-between;
    font-size: 20px;
    padding: 30px 0;
    margin: auto;
    font-weight: 700;

    & > img {
      width: 18px;
      cursor: pointer;
    }
  }

  .text {
    width: 94%;
    margin: auto;
    font-size: 13px;
<<<<<<< HEAD
=======
    /* font-family: Malgun Gothic; */
>>>>>>> b46ead6 (1211 Company Mainpage UI)

    & > div {
      padding-bottom: 5px;
    }
  }

  ol {
    padding-left: 15px;
  }

  li {
    padding-bottom: 10px;
  }

  ul > li::marker {
    font-size: 1px;
  }

  .graph {
    display: flex;

    & > div {
<<<<<<< HEAD
      display: flex;

      &:last-child > div:last-child {
        display: none;
      }
    }

    & > div > div {
=======
>>>>>>> b46ead6 (1211 Company Mainpage UI)
      height: 43px;
      font-weight: 600;
      display: flex;
      padding: 0 10px;
      align-items: center;
      border: 1px solid #ebebeb;
      border-radius: 5px;
      margin: 15px 0;

<<<<<<< HEAD
=======
      &:last-child {
        display: none;
      }

>>>>>>> b46ead6 (1211 Company Mainpage UI)
      &:nth-child(2n) {
        border: none;
      }
    }
  }
`;
