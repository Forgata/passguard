import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import PasswordContextProvider from "./context/providers/PasswordContextProvider";

const rootElement = document.getElementById("root") as HTMLDivElement;
if (!rootElement) throw new Error("Root element not found");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <PasswordContextProvider>
      <RouterProvider router={router} />
    </PasswordContextProvider>
  </StrictMode>,
);
