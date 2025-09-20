import usePasswordContext from "./usePasswordContext";
import { nanoid } from "nanoid";

export function useSavePassword(
  event: React.FormEvent<HTMLFormElement>,
  password: string,
  setModalData: React.Dispatch<React.SetStateAction<Password>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const { setPasswords } = usePasswordContext();

  try {
    const formData = new FormData(event.target as HTMLFormElement);
    const websiteOrServiceName =
      (formData.get("websiteOrServiceName") as string).toLowerCase().trim() ||
      "";
    const usernameOrEmail =
      (formData.get("useranameOrEmail") as string).toLowerCase().trim() || "";
    const url = (formData.get("url") as string).toLowerCase().trim() || "";

    const data: Password = {
      id: nanoid(),
      websiteOrServiceName,
      usernameOrEmail,
      password,
      url: url ? url : undefined,
    };
    setModalData(data);
    setPasswords((prev) => [data, ...prev]);
    setIsModalOpen(false);
  } catch (error) {
    console.error(error);
  }
}
