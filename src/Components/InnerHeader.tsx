import { PlusIcon } from "@heroicons/react/solid";
import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../reducers/rootReducer";

interface InnerHeaderProps {}
const Button = styled.button`
  display: flex;
  width: 7vw;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  background-color: #2f417e;
  border-radius: 15px;
  height: 5vh;
  border: none;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: #2c263d;
  }
`;
const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
const InnerHeader: React.FunctionComponent<InnerHeaderProps> = () => {
  const { title } = useSelector((state: RootState) => state.updateTitle);
  return (
    <Container>
      <div>
        <h2 className="title nunito">{title}</h2>
      </div>
      <div>
        <Button className="cursor-pointer">
          <span className="nunito">New gig</span>{" "}
          <PlusIcon className="smallIcon"/>
        </Button>
      </div>
    </Container>
  );
};

export default InnerHeader;
