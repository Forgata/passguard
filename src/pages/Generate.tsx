import { useEffect, useState } from "react";
import PasswordGenerator from "../components/generatepage/PasswordGenerator";
import PasswordOptions from "../components/generatepage/PasswordOptions";

import usePasswordContext from "../hooks/usePasswordContext";
import SavePasswordModal from "../components/generatepage/ui/SavePasswordModal";

function Generate() {
  const [password, setPassword] = useState<string>("");
  const [range, setRange] = useState<number>(6);
  const [passwordFormOptions, setPasswordFormOptions] = useState<PassOptions>({
    passwordLength: range,
    includeNumbers: false,
    includeSymbols: false,
    includeUppercase: false,
    includeLowercase: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { passwords } = usePasswordContext();

  useEffect(() => {
    console.log(passwordFormOptions);
  }, [passwordFormOptions]);

  useEffect(() => {
    console.log(passwords);
  }, [passwords]);

  return (
    <div className="relative my-5 flex w-full flex-col-reverse items-start justify-start px-4 md:px-6 lg:px-8">
      <PasswordGenerator
        password={password}
        setPassword={setPassword}
        passwordFormOptions={passwordFormOptions}
        setIsModalOpen={setIsModalOpen}
      />
      <PasswordOptions
        passwordFormOptions={passwordFormOptions}
        setPasswordFormOptions={setPasswordFormOptions}
        range={range}
        setRange={setRange}
      />
      {isModalOpen && (
        <SavePasswordModal
          password={password}
          setIsModalOpen={setIsModalOpen}
          passwordFormOptions={passwordFormOptions}
        />
      )}
      <div className="md:mx-auto md:text-center">
        <h1 className="text-3xl font-semibold text-black md:text-4xl">
          Password Generator
        </h1>
        <p className="text-gray-500 md:text-lg">
          Create a secure password with customizable options.
        </p>
      </div>
    </div>
  );
}

export default Generate;
