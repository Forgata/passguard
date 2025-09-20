import { Copy, RefreshCcw } from "lucide-react";
import { passwordGenerator } from "../../utils/passwordGen";

interface PasswordGeneratorProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordFormOptions: PassOptions;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function PasswordGenerator({
  password,
  setPassword,
  passwordFormOptions,
  setIsModalOpen,
}: PasswordGeneratorProps) {
  const handleGenerate = (options: PassOptions) => {
    const generatedPassword = passwordGenerator(options);
    setPassword(generatedPassword);
  };

  return (
    <div className="mx-auto my-6 flex w-full flex-col items-center justify-center rounded-md bg-white p-4 md:w-3xl lg:w-4xl">
      <div className="flex w-full flex-col items-start justify-center gap-3">
        <h1 className="py-3 text-xl font-bold">
          {password ? "Generated Password" : "Generate Password"}
        </h1>

        {password && (
          <div className="flex w-full items-center justify-between gap-5 font-semibold">
            <div className="quick-password flex h-10 w-full flex-1 items-center justify-start rounded-sm bg-gray-100 pl-4">
              {password}
            </div>

            <div className="flex items-center justify-center gap-2">
              <Copy className="cursor-pointer" />
              <RefreshCcw
                className="cursor-pointer"
                onClick={() => handleGenerate(passwordFormOptions)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex w-full items-center justify-center gap-3">
        <button
          type="button"
          className="mt-5 w-full flex-1 cursor-pointer rounded-md bg-black py-3 text-lg font-bold text-white"
          onClick={() => handleGenerate(passwordFormOptions)}
        >
          Generate
        </button>
        {password && (
          <button
            type="button"
            className="mt-5 w-full flex-1 cursor-pointer rounded-md bg-gray-100 py-3 text-lg font-bold text-gray-800"
            onClick={() => setIsModalOpen(true)}
          >
            Save Password
          </button>
        )}
      </div>
    </div>
  );
}

export default PasswordGenerator;
