import * as React from 'react';

interface RenumerationCardProps {
    
}
 
const RenumerationCard: React.FunctionComponent<RenumerationCardProps> = () => {
    return ( 
        <div>
            <div className="mb-2">
                <p className="text-d-gray">Salary</p>
            </div>
            <div className="flex j-bet cardinnerheight ">
                <input className="input" type="text" placeholder="Minimum" />
                <input className="input" type="text" placeholder="Maximum" />
            </div>
            <div className="j-end">
                <button className="text-d-gray btnClear text-normal">Back</button>
                <button className="nunito btnFull">Add gig</button>
            </div>
        </div>
     );
}
 
export default RenumerationCard;