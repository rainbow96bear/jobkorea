import styled from "styled-components";

const ServiceModalComponent = ({
  closeOnClick,
  data,
  prevClick,
  nextClick,
  mordalIndex,
}) => {
  return (
    <ServiceModalBox>
      <div className="background"></div>
      <div className="button">
        <div className="flex">
          <img
            className={mordalIndex == 1 ? "buttonStop" : ""}
            src="./img/prev.svg"
            onClick={prevClick}
          ></img>
          <img
            className={mordalIndex == 8 ? "buttonStop" : ""}
            src="img/next.svg"
            onClick={nextClick}
          ></img>
        </div>
      </div>
      <div className="mordal">
        <div className="title">
          {data.title}
          <img src="img/x-button.svg" onClick={closeOnClick}></img>
        </div>
        <div className="text">
          {data.text.map((item, index) => {
            if (typeof item === "string")
              return <div key={`string-${index}`}>{item}</div>;
            else if (typeof item === "object") {
              if (Object.keys(item)[0] === "numList") {
                return (
                  <ol key={`num-ol-${index}`}>
                    {item["numList"].map((item2, index2) => (
                      <li key={`num-li-${index}-${index2}`}>{item2}</li>
                    ))}
                  </ol>
                );
              } else if (Object.keys(item)[0] === "starList") {
                return (
                  <ul key={`star-ul-${index}`}>
                    {item["starList"].map((item3, index3) => (
                      <li key={`star-li-${index}-${index3}`}>{item3}</li>
                    ))}
                  </ul>
                );
              } else if (Object.keys(item)[0] === "divList") {
                return (
                  <div key={`div-${index}`} className="graph">
                    {item["divList"].map((item4, index4) => (
                      <div key={`div-div-${index}-${index4}`}>
                        <div>{item4}</div>
                        <div> &gt; </div>
                      </div>
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
      display: flex;

      &:last-child > div:last-child {
        display: none;
      }
    }

    & > div > div {
      height: 43px;
      font-weight: 600;
      display: flex;
      padding: 0 10px;
      align-items: center;
      border: 1px solid #ebebeb;
      border-radius: 5px;
      margin: 15px 0;

      &:nth-child(2n) {
        border: none;
      }
    }
  }
`;
