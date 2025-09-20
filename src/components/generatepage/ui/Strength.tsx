import type { PasswordStrength } from "../../../utils/passStrength";

interface StrengthProps {
  calculatedPasswordStrength: PasswordStrength;
}

function Strength({ calculatedPasswordStrength }: StrengthProps) {
  const { strength, message } = calculatedPasswordStrength || {
    strength: 0,
    message: "Select at least one of the options",
  };
  return (
    <>
      <div className="flex items-center justify-between w-full pb-2">
        <h1 className="text-lg lg:text-xl">Password Strength</h1>
        <h2 className="text-lg lg:text-xl">{message}</h2>
      </div>
      <progress className="w-full h-3 rounded-lg " value={strength} max={100} />
    </>
  );
}

export default Strength;
