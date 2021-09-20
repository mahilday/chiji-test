import * as React from "react";
import styled from "styled-components";

interface NewGigMenuProps {}

const NewGigMenu: React.FunctionComponent<NewGigMenuProps> = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    & > div {
    }
    & > div > .first {
      background: #fff;
      width: 15vw;
      border-radius: 30px;
      height: 20vh;
      box-shadow: 0px 30px 50px #0000000d;
      display: flex;
      flex-direction: column;
      padding: 3em 4em;
      justify-content: space-around;
      & > p {
        & > .text {
            color:#565D7460;
            font-weight: 600;
        }
      }
    }
  `;
  return (
    <Container>
      <div className="inner-width">
        <div className="first">
          <p className="flex al-center">
            <span className="circle">
              <span className="circle-inner"></span>
            </span>
            <span className="text ml-2">Basic Data</span>
          </p>
          <p className="flex al-center">
            <span className="circle">
              <span className="circle-inner"></span>
            </span>
            <span className="text ml-2">Renumeration</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NewGigMenu;
