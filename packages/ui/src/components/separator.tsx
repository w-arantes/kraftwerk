import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface SeparatorProps extends ComponentProps<"hr"> {
	orientation?: "horizontal" | "vertical";
}

export function Separator({
	className,
	orientation = "horizontal",
	...props
}: SeparatorProps) {
	return (
		<hr
			data-slot="separator"
			aria-orientation={orientation}
			className={twMerge(
				"bg-border border-none shrink-0",
				orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
				className,
			)}
			{...props}
		/>
	);
}
