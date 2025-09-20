import { Outlet } from "react-router";
import Navbar from "./components/global/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
