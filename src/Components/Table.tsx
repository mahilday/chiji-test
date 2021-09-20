import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import Checkbox from "react-custom-checkbox";
import { CheckIcon, SwitchVerticalIcon } from "@heroicons/react/outline";
import styled from "styled-components";


interface GigsTableProps {}

const GigsTable: React.FunctionComponent<GigsTableProps> = () => {
  const { gigs } = useSelector((state: RootState) => state.gigs);
    const Tr = styled.tr`
        &>th{
            color:  #565D74;
            opacity: 0.8;
            font-weight: 400;
        }
    `
  return (
    <div>
      <table className="inner-width mx-auto">
        <thead style={{marginBottom: "30px"}}>
        <Tr>
          <th></th>
          <th>Role</th>
          <th>Company</th>
          <th><span className="flex j-center"><span>Date</span><span><SwitchVerticalIcon className="searchicon text-yellow ml-1"/></span></span></th>
          <th><span className="flex j-center"><span>Salary($)</span><span className="ml-2"><SwitchVerticalIcon className="searchicon text-yellow"/></span></span></th>
          <th></th>
        </Tr>
        </thead>
        <tbody>
        {gigs &&
          gigs.map((item: any, index) => (
            <tr className="tablebg" key={index}>
              <td className="flex j-center al-center">
                <Checkbox
                  icon={<CheckIcon className="lgIcon text-yellow" />}
                  name="my-input"
                  checked={false}
                  onChange={(value: any) => {
                    let p = {
                      isTrue: value,
                    };
                    return p
                  }}
                  borderColor="#E4E4E4"
                  size={25}
                  style={{ width:"3vw",height:"max-content", display:"flex", justifyContent: "center", marginTop:"20px", marginLeft: "20px", alignItems: "center", cursor: "pointer" }}
                />
              </td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.username}</td>
              <td className="text-center">{item.email}</td>
              <td className="text-center">{item.website}</td>
              <td><button className="cookie del">Delete</button></td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
};

export default GigsTable;
