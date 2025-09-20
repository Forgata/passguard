import { Copy, Edit, Star, Trash } from "lucide-react";
import { formatDistance } from "date-fns";
import usePasswordContext from "../../../hooks/usePasswordContext";
import { getRecentPasswords } from "../../../utils/getRecentPasswords";

interface PasswordViewProps {
  viewType: "all" | "favorites" | "recent";
}

function PasswordView({ viewType }: PasswordViewProps) {
  const { passwords, toggleFavorite, deletePassword } = usePasswordContext();

  let view: Password[] = viewType === "all" ? passwords : [];
  if (viewType === "favorites")
    view = passwords.filter((password) => password.isFavorite);
  if (viewType === "recent") view = getRecentPasswords(passwords, 5);

  return (
    <>
      <div className="mt-5 flex flex-col items-start justify-start gap-3">
        {view.map((password, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-start justify-start gap-2 rounded-md bg-white p-3"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <div className="flex aspect-square h-[40px] items-center justify-center rounded-full bg-gray-800 text-xl font-bold text-white capitalize">
                  {password.websiteOrServiceName.charAt(0)}
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-lg font-medium capitalize">
                    {password.websiteOrServiceName}
                  </h1>
                  <div className="text-gray-600">{password.url}</div>
                </div>
              </div>

              <Star
                onClick={() => toggleFavorite(password.id)}
                className="mt-2 mr-3 self-start"
                size={20}
                stroke={password.isFavorite ? "gold" : "black"}
                fill={password.isFavorite ? "gold" : "none"}
              />
            </div>

            <div className="flex w-full items-center justify-between text-sm">
              <div className="flex items-center justify-start gap-2">
                <div className="rounded-lg bg-gray-100 px-2 py-1 text-center font-medium text-gray-800 lowercase">
                  {password.strength}
                </div>

                <p className="text-gray-500">
                  {password.updatedAt ? (
                    <span>
                      Updated{" "}
                      {formatDistance(new Date(password.updatedAt), new Date())}{" "}
                      ago
                    </span>
                  ) : (
                    <span>
                      Created{" "}
                      {formatDistance(new Date(password.createdAt), new Date())}{" "}
                      ago
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center justify-end gap-4">
                <Copy size={20} className="cursor-pointer" />
                <Edit size={20} className="cursor-pointer" />
                <Trash
                  onClick={() => deletePassword(password.id)}
                  color="#ff5252"
                  size={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PasswordView;
