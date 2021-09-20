import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { updateHeaderName } from '../actions/gigActions';
import GigFilter from '../Components/gigFilter';
import InnerHeader from '../Components/InnerHeader';
import SecondInnerHeader from '../Components/secondInnerHeader';
import GigsTable from '../Components/Table';
import { RootState } from '../reducers/rootReducer';

interface GigsProps {
    titleName: string
}
 
const Gigs: React.FunctionComponent<GigsProps> = ({titleName}) => {
    const dispatch = useDispatch()
    const {title} = useSelector(
        (state: RootState)=> state.updateTitle
      )
    
   console.log(titleName)
   useEffect(() => {
       if(title !== titleName)
       dispatch(updateHeaderName(titleName))
   })
    return ( 
        <div >
            <div className="flex j-center al-center h-12">
            <InnerHeader />
            </div>
            <div>
            <SecondInnerHeader />
            </div>
            <div className="w-full h-12 flex j-center al-center ">
                <GigFilter />
            </div>
            <div>
                <GigsTable />
            </div>
        </div>
     );
}
 
export default Gigs;