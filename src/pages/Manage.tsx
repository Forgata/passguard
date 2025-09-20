import { Filter, Plus } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import SearchComponent from "../components/global/Search";

function Manage() {
  return (
    <>
      <div className="mx-auto px-3 pb-3 md:w-3xl lg:w-4xl">
        <div className="flex w-full flex-col items-start gap-3 py-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold md:text-4xl">
                Manage Passwords
              </h1>
              <Link to={"/generate"} className="cursor-pointer">
                <Plus className="cursor-pointer" size={35} />
              </Link>
            </div>
            <p className="text-lg text-gray-500">
              manage, organise and store your passwords
            </p>
          </div>

          <SearchComponent placeholder="search passwords..." />
        </div>

        {/* links */}
        <div className="flex items-center justify-start gap-4">
          <NavLink
            to={"/manage"}
            end
            className={({ isActive }) =>
              `rounded-lg px-3 py-1 ${isActive ? "bg-black text-white" : "outline outline-gray-400"}`
            }
          >
            All
          </NavLink>

          <NavLink
            to={"favorites"}
            className={({ isActive }) =>
              `rounded-lg px-3 py-1 ${isActive ? "bg-black text-white" : "outline outline-gray-400"}`
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to={"recent"}
            className={({ isActive }) =>
              `rounded-lg px-3 py-1 ${isActive ? "bg-black text-white" : "outline outline-gray-400"}`
            }
          >
            Recent
          </NavLink>

          <div className="flex aspect-square w-[40px] items-center justify-center rounded-md bg-white">
            <Filter size={15} />
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Manage;
