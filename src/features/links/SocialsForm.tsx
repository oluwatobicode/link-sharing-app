import React from "react";
import Empty from "../../UI/Empty";
import { MdDragHandle } from "react-icons/md";

type socialItem = {
  id: number;
  name: string;
  placeholder: string;
};

type SocialProps = {
  ele: socialItem[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onDelete: (id: number) => void;
};

const SocialsForm: React.FC<SocialProps> = ({ ele, onChange, onDelete }) => {
  if (ele.length === 0) return <Empty />;

  return (
    <div className="overflow-y-auto">
      <div className="">
        {ele.map((item) => (
          <div className="bg-[#FAFAFA] mt-5 p-3 rounded-md">
            <div className="mb- flex justify-between ">
              <div className="flex items-center justify-center gap-1 cursor-pointer">
                <MdDragHandle />
                <h2 className="font-bold text-[16px] leading-[150%] text-[#333333]">
                  Link #{item.id}
                </h2>
              </div>
              <button onClick={() => onDelete(item.id)}>
                <span className="font-bold text-[16px] leading-[150%] text-[#333333]">
                  Remove
                </span>
              </button>
            </div>
            <div className="mt-5">
              <label className="text-[12px] font-normal leading-[150%] text-[#333333]">
                DropDown
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-normal leading-[150%] text-[#333333]">
                Link
              </label>
              <input
                type="text"
                name="name"
                value={item.name}
                placeholder="Item Name"
                onChange={(e) => onChange(e, item.id)}
                className="border  border-[#D9D9D9] outline-none active:bg-white p-2 rounded-md font-medium text-[16px] leading-[150%] text-[#333333]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialsForm;
