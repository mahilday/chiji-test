import React from "react";
import styled from "styled-components";
interface GigFilterBtnProps {
  Icon?: any;
  title: string;
  Sub?: any;
  func?: any;
  active?: any;
}

const GigFilterBtn: React.FunctionComponent<GigFilterBtnProps> = ({
  Icon,
  title,
  Sub,
  func,
  active,
}) => {
  const Container = styled.div`
    & > button {
      width: 10vw;
      padding: 15px;
      background: transparent;
      border: 1px solid #eeeeee;
      border-radius: 15px;
      color: #bcbcbc;
      transition:all .3s ease-in;
      & > span > span > .filicon {
        margin-right: 3px;
        transition:all .1s ease-in;
      }
    }
    & > .btnActive,
    & > button:hover {
      border: 2px solid #fbb30b;
      color: #fbb30b;
      transition:all .3s ease-in;
    }
  `;
  return (
    <Container>
      <button
        onClick={() => func && func(title)}
        className={`flex cursor-pointer j-bet al-center ${
          active && active.title === title && "btnActive"
        }`}
      >
        <span className="flex j-center al-center">
          {Icon && (
            <span>
              <Icon className="searchicon filicon" />
            </span>
          )}
          <span>{title}</span>
        </span>
        {Sub && active.title=== title && (
          <span className="flex al-center j-center">
            <Sub className="smallIcon" />
          </span>
        )}
      </button>
    </Container>
  );
};

export default GigFilterBtn;
