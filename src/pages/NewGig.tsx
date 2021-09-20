import * as React from 'react';
import InnerHeader from '../Components/InnerHeader';
import NewGigMenu from '../Components/NewGigMenu';

interface NewGigProps {
    titleName: string
}
 
const NewGig: React.FunctionComponent<NewGigProps> = ({titleName}) => {
    return ( 
        <div>
            <div className="flex border-b j-center al-center h-12">
            <InnerHeader none={true} titletag={titleName} />
            </div>
            <div className="flex mx-auto inner-width  al-center h-12">
                <h3 className="nunito text-new-gig">New Gig</h3>
            </div>
            <div>
                <NewGigMenu />
            </div>
        </div>
     );
}
 
export default NewGig;