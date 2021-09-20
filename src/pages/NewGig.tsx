import * as React from 'react';
import BasicDataCard from '../Components/BasicData';
import InnerHeader from '../Components/InnerHeader';
import NewGigMenu from '../Components/NewGigMenu';
import RenumerationCard from '../Components/RenumerationCard';

interface NewGigProps {
    titleName: string
}
 
const NewGig: React.FunctionComponent<NewGigProps> = ({titleName}) => {
    const [menuState, setMenuState] = React.useState({
        active: "Basic Data"
    })

    const handleMenuChange=(selected: string)=>{
        setMenuState({active: selected})
    }
    return ( 
        <div>
            <div className="flex border-b j-center al-center h-12">
            <InnerHeader none={true} titletag={titleName} />
            </div>
            <div className="flex mx-auto inner-width  al-center h-12">
                <h3 className="nunito text-new-gig">New Gig</h3>
            </div>
            <div className="flex j-center">
            <div className="flex j-bet inner-width">
                <div>
                <NewGigMenu active={menuState.active} func={(selected: string)=>handleMenuChange(selected)}/>
                </div>
                <div className="card">
                    {menuState.active === "Basic Data"? (<BasicDataCard />): (<RenumerationCard/>)}
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default NewGig;