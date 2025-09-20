import ManagePageStats from "./ui/ManagePageStats";
import PasswordView from "./ui/PasswordView";

function AllPasswords() {
  return (
    <>
      <ManagePageStats />
      <PasswordView viewType="all" />
    </>
  );
}

export default AllPasswords;
