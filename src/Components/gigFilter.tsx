import { ArrowsExpandIcon,ChevronDownIcon, LocationMarkerIcon, GlobeAltIcon, ColorSwatchIcon, CheckIcon, BriefcaseIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import DDGigFilter from './ddGigFilter';
import GigFilterBtn from './gigFilterButton';

interface GigFilterProps {
    
}
 
const GigFilter: React.FunctionComponent<GigFilterProps> = () => {
    const [activeFil, setActiveFil] = useState({title: ""})

    const setFil =(titl: string)=>{
        setActiveFil({title: titl})
    }
    return ( 
        <div className="flex inner-width j-bet">
            <GigFilterBtn func={(titl: string)=> setFil(titl)} active={activeFil} title="Freelance"/>
            <DDGigFilter func={(titl: string)=> setFil(titl)} active={activeFil} Icon={ArrowsExpandIcon} title="Keywords" Sub={ChevronDownIcon} />
            <DDGigFilter func={(titl: string)=> setFil(titl)} active={activeFil} Icon={LocationMarkerIcon} title="Location" Sub={ChevronDownIcon} />
            <GigFilterBtn func={(titl: string)=> setFil(titl)} active={activeFil} Icon={GlobeAltIcon} title="Remote Friendly"/>
            <GigFilterBtn func={(titl: string)=> setFil(titl)} active={activeFil} Icon={ColorSwatchIcon} title="Design" Sub={CheckIcon}/>
            <GigFilterBtn func={(titl: string)=> setFil(titl)} active={activeFil} Icon={BriefcaseIcon} title="Contract" Sub={CheckIcon}/>

        </div>
     );
}
 
export default GigFilter;