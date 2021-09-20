import * as React from "react";
import styled from "styled-components";

interface NewGigMenuProps {}

const NewGigMenu: React.FunctionComponent<NewGigMenuProps> = () => {
    const [menuState, setMenuState] = React.useState({
        active: "Basic Data"
    })

    const handleMenuChange=(selected: string)=>{
        setMenuState({active: selected})
    }
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
            font-weight: 600;
        }
      }
    }
  `;
  return (
    <Container>
      <div className="inner-width">
        <div className="first">
          <p onClick={()=>handleMenuChange("Basic Data")} className="flex cursor-pointer al-center">
          {menuState.active === "Basic Data" && (<span className="circle">
              <span className="circle-inner"></span>
            </span>)}
            <span className={` ${menuState.active === "Basic Data"? "text-yellow": "text-l-gray"} text ml-2`}>Basic Data</span>
          </p>
          <p onClick={()=>handleMenuChange("Renumeration")}  className="flex cursor-pointer al-center">
            {menuState.active === "Renumeration" && (<span className="circle">
              <span className="circle-inner"></span>
            </span>)}
            <span className={` ${menuState.active === "Renumeration"? "text-yellow": "text-l-gray"} text ml-2`}>Renumeration</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NewGigMenu;
