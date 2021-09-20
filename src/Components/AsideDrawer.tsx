import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useSelector} from 'react-redux'
import { menu, logo } from "../constants/asidedata";
import { RootState } from "../reducers/rootReducer";

interface AsideDrawerProps {
}
interface Props{
  name:string
}

const AsideDrawer: React.FunctionComponent<AsideDrawerProps> = () => {
  const Header = styled.header`
  margin: 4vh 0;
  width: 100%;
`;
const Container = styled.div`
  margin: 0 2.5vw;
`;
const Item = styled.div`
  display: flex;
  width:max-content;
  align-items: center;
  cursor: pointer;
  height: 5vh;
  color:${(props: Props)=> title === props.name? "#fbb30b": "#a9b0c5"};
  transition: all .3s ease-in;
  & > p{
      transition: all .3s ease-in;
  };
  &:hover>p{
      color: #FBB30B;
  }
  &:hover{
    color: #FBB30B;
  }
  margin: 2vh 0;
  
`;

  const {title} = useSelector(
    (state: RootState)=> state.updateTitle
  )

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <main>
        {menu?.map(({name, Icon, link}) => (
          <Link className="links" key={name} to= {link}>
          <Item name={name}>
            <Icon />
            <p className={`${title === name? "active": ""} ml-2`}>{name}</p>
          </Item>
          </Link>
        ))}
      </main>
    </Container>
  );
};

export default AsideDrawer;
