import { Moon, Sun } from "lucide-react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface ThemeToggleProps extends ComponentProps<"button"> {
	theme: "dark" | "light";
	onToggle: () => void;
}

export function ThemeToggle({
	className,
	theme,
	onToggle,
	...props
}: ThemeToggleProps) {
	return (
		<button
			type="button"
			data-slot="theme-toggle"
			onClick={onToggle}
			className={twMerge(
				"inline-flex items-center justify-center size-9 rounded-lg border border-border",
				"bg-surface text-foreground-subtle hover:text-foreground hover:bg-surface-raised",
				"transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				className,
			)}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			{...props}
		>
			{theme === "dark" ? (
				<Sun className="size-4" />
			) : (
				<Moon className="size-4" />
			)}
		</button>
	);
}
