import usePasswordContext from "../../../hooks/usePasswordContext";

function ManagePageStats() {
  const { passwords } = usePasswordContext();
  const totalPasswords = passwords.length;
  const weakPasswords = passwords.filter(
    (password) => password.strength === "Weak",
  ).length;
  const mediumPasswords = passwords.filter(
    (password) => password.strength === "Medium",
  ).length;
  const strongPasswords = passwords.filter(
    (password) =>
      password.strength !== "Weak" && password.strength !== "Medium",
  ).length;

  return (
    <div className="my-6 flex w-full items-center justify-evenly rounded-md bg-white py-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl font-bold">{totalPasswords}</h1>
        <p className="text-gray-500">Total </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl font-bold">{strongPasswords}</h1>
        <p className="text-gray-500">Strong </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl font-bold">{mediumPasswords}</h1>
        <p className="text-gray-500">Medium </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl font-bold">{weakPasswords}</h1>
        <p className="text-gray-500">Weak </p>
      </div>
    </div>
  );
}

export default ManagePageStats;
