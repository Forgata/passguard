import { ArrowLeft } from "lucide-react";
import { Outlet, useNavigate } from "react-router";
import AboutNav from "../components/aboutpage/ui/AboutNav";

function About() {
  const navigate = useNavigate();
  const handlePrevClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate("/settings");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="relative flex items-center justify-center bg-white py-4">
        <ArrowLeft
          size={25}
          onClick={handlePrevClick}
          className="absolute left-0 ml-3"
        />
        <h1 className="text-3xl font-semibold">About PassGuard</h1>
      </div>

      {/* header */}

      <div className="mt-5 px-3">
        <div className="flex flex-col items-center justify-center gap-1 py-3">
          <div className="flex aspect-square h-[120px] items-center justify-center">
            <img
              className="aspect-square w-full object-cover"
              src="/passguard.png"
              alt="PassGuard Logo"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-medium">PassGuard</h1>
            <p className="text-sm text-gray-500">Version 1.0.0</p>
          </div>
        </div>

        <div className="mx-auto flex w-full items-center justify-center rounded-md p-3 outline outline-gray-200 sm:max-w-lg md:max-w-2xl">
          <p className="w-full text-justify">
            PassGuard is a secure password manager designed by Divine Gombwa to
            help you generate strong passwords and store them safely for future
            access. Our mission is to make digital security simple and
            accessible for everyone
          </p>
        </div>
      </div>

      <AboutNav />

      <Outlet />
    </>
  );
}

export default About;
