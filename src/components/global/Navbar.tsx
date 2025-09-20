import { Plus, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="bg-white">
        <div className="border-b-2 border-b-gray-200 flex flex-row justify-between items-center px-4 py-4 md:px-10 ">
          <div className="flex gap-1 items-center justify-center">
            <ShieldCheck size={30} color="#000" />
            <h1 className="text-xl font-bold">PassGuard</h1>
          </div>
          <Plus size={30} color="#000" />
        </div>
        <div className="flex flex-row gap-2 md:gap-7 lg:gap-10 items-center justify-evenly md:justify-center px-3 h-9 py-7">
          <NavLink className={" nav-link text-gray-500"} to="/">
            Home
          </NavLink>
          <NavLink className={"nav-link text-gray-500"} to="generate">
            Generate
          </NavLink>
          <NavLink className={"nav-link text-gray-500"} to="manage">
            Manage
          </NavLink>
          <NavLink className={"nav-link text-gray-500"} to="settings">
            Settings
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
