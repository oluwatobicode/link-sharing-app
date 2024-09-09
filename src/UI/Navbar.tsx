import { NavLink } from "react-router-dom";

const navLinks = [
  {
    link: "Links",
    icon: "/assets/images/icon-links-header.svg",
    linkTo: "/app",
  },
  {
    link: "Profile Details",
    icon: "/assets/images/icon-profile-details-header.svg",
    linkTo: "/profile",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white w-full rounded-2xl">
      <div className="flex justify-between items-center p-4 ">
        <div className="md:block hidden">
          <img src="assets/images/logo-devlinks-large.svg" alt="logo" />
        </div>

        <div className="md:hidden block">
          <img src="/assets/images/logo-devlinks-small.svg" alt="logo" />
        </div>

        <div className="flex flex-row gap-5">
          <ul className="flex flex-row gap-5">
            {navLinks.map((el, i) => (
              <NavLink
                to={el.linkTo}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#EFEBFF] rounded-md text-[#633CFF] fill-[#633CFF]"
                    : ""
                }
              >
                <li
                  key={i}
                  className={`p-2  flex items-center rounded-md gap-3 text-[16px] leading-[150%] font-semibold hover:text-[#633CFF] `}
                >
                  <img src={el?.icon} alt="" />
                  <span className="md:block hidden">{el?.link}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="">
          <button className="px-4 py-2 font-bold text-[16px] leading-[150%] rounded-md border-2 hover:bg-[#EFEBFF] transition-colors ease-in-out border-[#633CFF] text-[#633CFF]">
            <NavLink to="/preview">Preview</NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
