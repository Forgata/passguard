import { useCallback, useEffect, useMemo, useState } from "react";
import { getItem, setItem } from "../../utils/localstorage";
import { PasswordContext } from "./passwordContext";

interface PasswordContextProps {
  children: React.ReactNode;
}

function PasswordContextProvider({ children }: PasswordContextProps) {
  const [passwords, setPasswords] = useState(() => {
    const passwords = getItem<Password[]>("passwords");
    return passwords || [];
  });

  const starredPasswords = useMemo(() => {
    return passwords.filter((password) => password.isFavorite);
  }, [passwords]);

  const toggleFavorite = useCallback((id: string) => {
    setPasswords((prev) => {
      return prev.map((password) =>
        password.id === id
          ? { ...password, isFavorite: !password.isFavorite }
          : password,
      );
    });
  }, []);

  const deletePassword = useCallback((id: string) => {
    setPasswords((prev) => {
      return prev.filter((password) => password.id !== id);
    });
  }, []);

  const values: PasswordContextValue = {
    passwords,
    setPasswords,
    starredPasswords,
    toggleFavorite,
    deletePassword,
  };

  useEffect(() => {
    setItem("passwords", passwords);
  }, [passwords]);

  return (
    <PasswordContext.Provider value={values}>
      {children}
    </PasswordContext.Provider>
  );
}

export default PasswordContextProvider;
