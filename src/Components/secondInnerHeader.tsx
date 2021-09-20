import React, {useState} from 'react';
import styled from 'styled-components';

interface SecondInnerHeaderProps {
    
}

const dets = [{title:"All gigs", number: 200}, {title:"My gigs", number: 20}, {title:"Rejected gigs", number: 50}]
 
const SecondInnerHeader: React.FunctionComponent<SecondInnerHeaderProps> = () => {
    const [activeTab, setActiveTab] = useState(0)

    const setTab =(i: number)=>{
        setActiveTab(i)
    }
    const Container = styled.div `
        & > div>div{
            padding: 20px 0;
        }
        &>div>.active, &>div>div:hover{
            border-bottom: 3px solid #FBB30B;
            transition: all .1s ease-in-out;
            &>p{
                color:#585461;
                transition: all .2s ease-in-out;
            }
            &>span{
                background: #fbb30b;
                color: #fff;
                transition: all .3s ease-in;
            }
        }
    `
    return (
        <Container className="flex j-center al-center border-b">
        <div className="flex inner-width j-bet">
            {
                dets?.map((item, index)=>(
                    <div key={index} onClick={()=>setTab(index)} className={`flex tab-width al-center cursor-pointer ${activeTab === index && "active" }`}><p className="normal text-lg semibold nunito">{item.title}</p><span className="cookie flex j-center al-center ml-2">{item.number}</span></div>
                ))
            }
        </div>
        </Container>
     );
}
 
export default SecondInnerHeader;