import "../styles.css";
import type { GlobalProvider } from "@ladle/react";
import { ThemeState } from "@ladle/react/lib/shared/types";
import clsx from "clsx";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <div className={clsx(globalState.theme === ThemeState.Dark && "dark")}>
    <div className="text-black dark:text-white">{children}</div>
  </div>
);
