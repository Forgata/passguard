import Range from "../global/Range";
import Strength from "./ui/Strength";
import Customise from "./ui/Customise";
import { useEffect, useState } from "react";
import { calculatePasswordStrength } from "../../utils/passStrength";

interface PasswordOptionProps {
  passwordFormOptions: PassOptions;
  setPasswordFormOptions: React.Dispatch<React.SetStateAction<PassOptions>>;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}

function PasswordOptions({
  passwordFormOptions,
  setPasswordFormOptions,
  range,
  setRange,
}: PasswordOptionProps) {
  const [calculatedPasswordStrength, setCalculatedPasswordStrength] = useState({
    strength: 0,
    message: "Select password options",
  });

  // handling checkbox to update passwordFormOptions state
  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event) throw new Error("Event is undefined");
    const { name, checked } = event.target;

    setPasswordFormOptions((prev) => ({
      ...prev,
      [name]: checked,
      passwordLength: range,
    }));
  }

  // handling range to update passwordFormOptions' passwordLength state
  useEffect(() => {
    setPasswordFormOptions((prev) => {
      return { ...prev, passwordLength: range };
    });
  }, [range, setPasswordFormOptions]);

  useEffect(() => {
    const newStrength = calculatePasswordStrength(passwordFormOptions);
    setCalculatedPasswordStrength(newStrength);
  }, [passwordFormOptions]);

  return (
    <>
      <div className="mx-auto flex w-full flex-col items-start justify-center rounded-md bg-white p-4 md:w-3xl lg:w-4xl">
        <Strength calculatedPasswordStrength={calculatedPasswordStrength} />
      </div>

      {/* options form */}
      <form className="mx-auto my-6 flex w-full flex-col items-center justify-center rounded-md bg-white p-4 md:w-3xl lg:w-4xl lg:flex-row lg:items-start lg:justify-between lg:gap-9">
        <div className="flex w-full flex-col items-start justify-center gap-2 py-3 sm:w-full lg:w-lg">
          <h1 className="text-2xl font-bold md:py-4 md:text-3xl">
            Customize Password
          </h1>
          <Range
            layout="medium"
            title="Password Length"
            minValue={6}
            maxValue={18}
            range={range}
            setRange={setRange}
          />
        </div>

        <Customise handleCheck={handleCheck} />
      </form>
    </>
  );
}

export default PasswordOptions;
