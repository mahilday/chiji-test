import * as React from 'react';

interface BasicDataCardProps {
    
}
 
const BasicDataCard: React.FunctionComponent<BasicDataCardProps> = () => {
    return ( 
        <div>
            <div>
                <p>Salary</p>
            </div>
            <div className="flex">
                <input type="text" placeholder="Minimum" />
                <input type="text" placeholder="Maximum" />
            </div>
            <div>
                <button>Back</button>
                <button className="nunito">Add gig</button>
            </div>
        </div>
     );
}
 
export default BasicDataCard;