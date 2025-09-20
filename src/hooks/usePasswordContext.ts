import { useContext } from "react";
import { PasswordContext } from "../context/providers/passwordContext";

export default function usePasswordContext() {
  const context = useContext(PasswordContext);
  if (!context) throw new Error("Password Context is null or undefined");
  return context;
}
