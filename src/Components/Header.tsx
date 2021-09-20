import * as React from 'react';
import styled from 'styled-components';
import {SearchIcon} from '@heroicons/react/solid'
import { BellIcon, MailIcon, CogIcon } from '@heroicons/react/outline';
import UserPic from "../assets/userPic.png"

interface HeaderProps {
    
}
const Search = styled.div`
    display: flex;
    align-items: center;
    padding:8px 15px;
    width: 40%;
    border: 1px solid #a9b0c560;
    border-radius: 10px;
    &>input{
        padding: 5px 10px;
        background: transparent;
    }
`
const Container = styled.div`
    display:flex;
    justify-content:space-between;
    width: 85%;
    &>section{
        display:flex;
        align-items:center;
    };
    &>section>div{
        display:flex;
        align-items:center;
        width: 15vw;
        justify-content: space-around;
        margin: 0 5vw;
    }
`
 
const Header: React.FunctionComponent<HeaderProps> = () => {
    return ( 
        <Container className=''>
            <Search>
                <SearchIcon className="searchicon text-gray"/>
                <input className="inputsearch" type="text" placeholder="Search"/>
            </Search>
            <section>
                <div>
                   <BellIcon className="searchicon cursor-pointer"/>
                   <MailIcon className="searchicon cursor-pointer"/>
                   <CogIcon className="searchicon cursor-pointer"/>
                </div>
                <img src={UserPic} alt="user" />
            </section>
        </Container>
     );
}
 
export default Header;