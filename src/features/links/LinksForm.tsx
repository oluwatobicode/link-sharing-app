import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import SocialsForm from "./SocialsForm";

type SocialItem = {
  id: number;
  name: string;
  placeholder: string;
};

const LinksForm = () => {
  const [devLinks, setDevLink] = useState<SocialItem[]>([
    {
      id: 1,
      name: "",
      placeholder: "",
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = e.target;
    setDevLink((prevItem) =>
      prevItem.map((devItem) =>
        devItem.id === id
          ? {
              ...devItem,
              [name]: value,
            }
          : devItem
      )
    );
  };

  const addItem = () => {
    setDevLink([
      ...devLinks,
      { id: devLinks.length + 1, name: "", placeholder: "" },
    ]);
  };

  const deleteItem = (id: number) => {
    setDevLink(devLinks.filter((devItem) => devItem.id !== id));
  };

  return (
    <section className="w-full bg-white h-fit  rounded-2xl">
      <div className="p-5">
        <h1 className="text-[#333333] text-[32px] font-bold leading-[150%] mb-5">
          Customize your links
        </h1>
        <p className="text-[#2e2828] text-[16px] leading-[150%] font-normal mb-5">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button
          onClick={addItem}
          className="w-full flex items-center justify-center gap-2 h-[40px] hover:bg-[#EFEBFF] transition-colors ease-in-out rounded-md border-2 border-[#633CFF] text-[#633CFF]  leading-[150%] font-semibold text-[16px]"
        >
          <FaPlus />
          <span>Add New Link</span>
        </button>

        <div className="">
          <SocialsForm
            ele={devLinks}
            onChange={handleChange}
            onDelete={deleteItem}
          />
        </div>
      </div>
      <footer className="mt-5 p-5 w-full border-t-2  border-[#D9D9D9] flex justify-end ">
        <button className="px-7 py-2 rounded-md bg-[#633CFF] ">
          <span className="font-bold text-[16px] text-white leading-[150%]">
            Save
          </span>
        </button>
      </footer>
    </section>
  );
};
export default LinksForm;
