import { NavLink } from "react-router";

function AboutNav() {
  const active = ({ isActive }: { isActive: boolean }) => {
    return ` px-3 py-2 rounded-md max-w-xl flex-1 flex justify-center items-center ${isActive ? "bg-black text-white" : "outline  outline-gray-400"}`;
  };

  return (
    <div className="mt-5 flex w-full items-center justify-evenly gap-5 px-3 py-3">
      <NavLink to={"/about"} end className={active}>
        Features
      </NavLink>
      <NavLink to={"technologies"} end className={active}>
        Technologies
      </NavLink>
      <NavLink to={"support"} end className={active}>
        Support
      </NavLink>
    </div>
  );
}

export default AboutNav;
