import * as React from "react";
import styled from "styled-components";

interface DDGigFilterProps {
  Icon?: any;
  title?: string;
  Sub?: any;
  func?: any;
  active?: any;
}

const DDGigFilter: React.FunctionComponent<DDGigFilterProps> = ({
  func,
  active,
  Icon,
  title,
  Sub,
}) => {
  const Container = styled.div`
    & > button {
      width: 10vw;
      padding: 15px;
      background: transparent;
      border: 1px solid #eeeeee;
      color: #bcbcbc;
      border-radius: 15px;
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
        {Sub && (
          <span className="flex al-center j-center">
            <Sub className="smallIcon" />
          </span>
        )}
      </button>
    </Container>
  );
};

export default DDGigFilter;
