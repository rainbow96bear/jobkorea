import styled from "styled-components";
import { BiHomeHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goToError = () => {
    navigate("/errorpage");
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <ErrorBox>
      <div className="title1">JOBKOREA</div>
      <div className="title2">BY JOB CODING</div>
      <div className="notFound">
        404
        <br />
        Page not found
      </div>
      <div className="homeIcon" onClick={goToError}>
        <BiHomeHeart onClick={goHome} />
      </div>
      <div className="text">
        WE'RE NOT SURE WHERE THE PAGE
        <br />
        WENT, BUT PERHAPS IT WILL BE BETTER
        <br />
        TO GO BACK HOME.
      </div>
    </ErrorBox>
  );
};

export default ErrorPage;

const ErrorBox = styled.div`
  background-color: black;
  background-image: url("./images/warning.gif");
  background-repeat: no-repeat;
  color: white;
  width: 100%;
  height: 100%;

  & .title1 {
    font-size: 5.5em;
    font-weight: 700;
    padding: 1em 0 0 1em;
  }
  & .title2 {
    font-size: 4em;
    font-weight: 600;
    padding-left: 1.3em;
  }
  & .notFound {
    font-size: 8em;
    font-weight: 600;
    padding-left: 2.45em;
    color: gray;
    text-align: center;
  }
  & .text {
    font-size: 3em;
    font-weight: 500;
    padding: 2.5em 2.45em;
    color: white;
  }
  & .homeIcon {
    width: 300px;
    color: white;
    cursor: pointer;
  }
`;
