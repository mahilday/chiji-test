import { ChevronDownIcon } from "@heroicons/react/solid";
import * as React from "react";

interface BasicDataCardProps {}

const BasicDataCard: React.FunctionComponent<BasicDataCardProps> = () => {
  return (
    <div>
      <div className="flex j-bet mb-2">
        <div>
          <div className="mb-1">Role</div>
          <input className="input" type="text" placeholder="Select Role" />
        </div>
        <div>
          <div className="mb-1">Company</div>
          <input className="input" type="text" placeholder="Select Company" />
        </div>
      </div>
      <div className="mb-2">
        <div className="mb-1">Location</div>

        <div className="flex j-bet mb-1">
          <div className="flex al-center input">
            <input className="fakeInput" type="text" placeholder="Country" />
            <ChevronDownIcon className="searchicon" />
          </div>
          <div className="flex al-center input">
            <input className="fakeInput" type="text" placeholder="State/Region" />
            <ChevronDownIcon className="searchicon" />
          </div>
        </div>
        <input className="inputFull" type="text" placeholder="Address" />
      </div>
      <div className="mb-2">
        <div className="mb-1">Add Tags</div>
        <div className="inputFull text-graye flex al-center">
        <p>Add more tags</p>
        </div>
      </div>
      <div className="j-end">
        <button className="text-d-gray btnClear text-normal cursor-pointer">
          Cancel
        </button>
        <button className="nunito btnFull cursor-pointer">Continue</button>
      </div>
    </div>
  );
};

export default BasicDataCard;
