import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHeaderName } from "../actions/gigActions";
import InnerHeader from "../Components/InnerHeader";
import { RootState } from "../reducers/rootReducer";

interface DashboardProps {
  titleName: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = ({ titleName }) => {
  const dispatch = useDispatch();
  console.log();
  const {title} = useSelector(
    (state: RootState)=> state.updateTitle
  )

  useEffect(() => {
      if(title !== titleName)
    dispatch(updateHeaderName(titleName))
  });
  return (
    <div className="flex j-center al-center h-12">
      <InnerHeader/>
    </div>
  );
};

export default Dashboard;
