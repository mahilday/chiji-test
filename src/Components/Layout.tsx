import * as React from 'react';
import AsideDrawer from './AsideDrawer';
import styled from 'styled-components'
import Header from './Header';

interface LayoutProps {
    
}
const Asidecontainer = styled.section`
        width: 17%;
        height: 100vh;
        background: #FEFEFF80;
        border: 1px solid #ECECEC;
        display: flex;
        flex-direction: column;
        `
const Container = styled.div`
    width: 100%;
    display:flex;
    & > main{
        width: 83%;
        background:#FBFBFF;
        &> header{
            padding: 4vh 0;

            border: 1px solid #ECECEC;
        }
    };
   

`
const Layout: React.FunctionComponent<LayoutProps> = ({children}) => {
    return ( 
        <Container>
            <Asidecontainer>
            <AsideDrawer />
            </Asidecontainer>
            <main>
                <header className="flex j-center al-center"><Header /></header>
            <main>{children}</main>
            </main>
        </Container>
     );
}
 
export default Layout;