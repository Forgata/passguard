import { Link } from "react-router";
import usePasswordContext from "../../hooks/usePasswordContext";
import { getRecentPasswords } from "../../utils/getRecentPasswords";
import { Copy, Edit } from "lucide-react";
import SearchComponent from "../global/Search";

function Recent() {
  const { passwords } = usePasswordContext();
  const recentPasswords = getRecentPasswords(passwords, 3);
  console.log(recentPasswords);

  return (
    <>
      <div className="mx-auto my-3 mt-9 flex w-full flex-col gap-5 px-4 md:w-3xl lg:w-4xl">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl font-medium">Recent Passwords</h1>
          <Link
            to={"manage"}
            className="text-lg text-gray-500 underline-offset-4 hover:underline"
          >
            View all
          </Link>
        </div>
        <SearchComponent placeholder="search passwords..." />

        <div className="flex w-full min-w-xs flex-col items-start gap-4">
          {recentPasswords.map((recentPassword, index) => (
            <div
              className="flex min-h-[48px] w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-white py-2 hover:bg-gray-50"
              key={index}
            >
              <div className="flex w-full items-center justify-start gap-3 px-3">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[100%] bg-gray-700 text-lg font-bold text-white">
                  {recentPassword.websiteOrServiceName.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-lg font-semibold capitalize">
                    {recentPassword.websiteOrServiceName}
                  </h1>
                  {recentPassword.url && (
                    <p className="text-sm text-gray-400">
                      {recentPassword.url}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex w-[110px] justify-end gap-4 py-2 pr-3">
                <Copy className="cursor-pointer" />
                <Edit className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Recent;
