import clsx from "clsx";

export const Button: React.FC<{ cta?: boolean }> = ({ children, cta }) => {
  return (
    <button
      type="button"
      className={clsx(
        "font-bold px-4 py-2 rounded-md",
        "text-white dark:text-black",
        "shadow hover:shadow-lg transition",
        cta ? "shadow-cta-500/50" : "bg-neutral-600/50 dark:bg-neutral-400/50",
        cta ? "bg-cta-500" : "bg-neutral-600 dark:bg-neutral-400/50"
      )}
    >
      {children || "Click Here"}
    </button>
  );
};
