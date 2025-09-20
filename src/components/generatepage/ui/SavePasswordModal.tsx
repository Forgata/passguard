import { X } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import usePasswordContext from "../../../hooks/usePasswordContext";
import { calculatePasswordStrength } from "../../../utils/passStrength";

interface SavePasswordModalProps {
  password: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  passwordFormOptions: PassOptions;
}

function SavePasswordModal({
  passwordFormOptions,
  password,
  setIsModalOpen,
}: SavePasswordModalProps) {
  const [modalData, setModalData] = useState<Password | null>(null);
  const { setPasswords } = usePasswordContext();

  function handleFormDataSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const websiteOrServiceName =
        (formData.get("websiteOrServiceName") as string).toLowerCase().trim() ||
        "";
      const usernameOrEmail =
        (formData.get("useranameOrEmail") as string).toLowerCase().trim() || "";
      const url = (formData.get("url") as string).toLowerCase().trim() || "";

      const { message } = calculatePasswordStrength(passwordFormOptions);

      const data: Password = {
        id: nanoid(),
        websiteOrServiceName,
        usernameOrEmail,
        password,
        url: url ? url : undefined,
        strength: message,
        isFavorite: false,
        createdAt: new Date(),
        updatedAt: undefined,
      };
      setModalData(data);
      setPasswords((prev) => [data, ...prev]);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  return (
    // Overlay
    <form
      onSubmit={handleFormDataSubmission}
      className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-[#0000003f]"
    >
      <div className="h-[50] w-full rounded-none bg-white p-6 shadow-lg sm:h-auto sm:max-w-lg sm:rounded-md">
        {/* Header */}
        <div className="flex w-full items-center justify-between border-b border-gray-200 px-4 py-3">
          <h1 className="text-xl font-bold">Save Password</h1>
          <X
            size={23}
            className="cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        {/* Body */}
        <div className="flex w-full flex-col gap-4 px-4 py-5">
          <div className="modal-input-div">
            <label className="modal-label" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              readOnly
              className="quick-password flex w-full cursor-default items-center rounded-sm bg-gray-100 py-2 pl-4 text-xl font-bold text-gray-600 focus-visible:outline-0"
            />
          </div>

          <div className="modal-input-div">
            <label className="modal-label" htmlFor="websiteOrServiceName">
              Website/Service Name
            </label>
            <input
              className="modal-input"
              type="text"
              id="websiteOrServiceName"
              name="websiteOrServiceName"
              placeholder="Website or Service Name"
              required={true}
            />
          </div>

          <div className="modal-input-div">
            <label className="modal-label" htmlFor="useranameOrEmail">
              Username/Email
            </label>
            <input
              className="modal-input"
              type="text"
              id="useranameOrEmail"
              name="useranameOrEmail"
              placeholder="Username or Email"
              required={true}
            />
          </div>

          <div className="modal-input-div">
            <label className="modal-label" htmlFor="url">
              Website URL (optional)
            </label>
            <input
              className="modal-input"
              type="text"
              id="url"
              name="url"
              placeholder="e.g https://www.example.com"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex w-full items-center justify-between gap-4 border-t border-gray-200 px-4 py-3">
          <button
            type="submit"
            className="flex flex-1 items-center justify-center gap-3 rounded-md bg-black py-3 text-white"
          >
            Save
          </button>
          <button
            type="button"
            className="flex-1 rounded-md border border-gray-200 py-3 hover:bg-gray-100"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default SavePasswordModal;
