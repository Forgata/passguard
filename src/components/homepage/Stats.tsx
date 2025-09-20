import usePasswordContext from "../../hooks/usePasswordContext";

function Stats() {
  const { passwords } = usePasswordContext();

  const weakPasswords = passwords.filter(
    (password) => password.strength === "Weak",
  ).length;

  return (
    <div className="my-5 flex items-center justify-between gap-4 md:gap-6 lg:gap-9">
      <div className="stat-card bg-white">
        <h1 className="text-xl font-bold">{passwords.length}</h1>

        <div className="font-semibold text-gray-500">Total Passwords</div>
      </div>

      <div className="stat-card bg-white">
        <h1 className="text-xl font-bold">{weakPasswords}</h1>

        <div className="font-semibold text-gray-500">
          {weakPasswords === 1 ? "Weak Password" : "Weak Passwords"}
        </div>
      </div>
    </div>
  );
}

export default Stats;
