import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
	base: [
		"peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
	],
	variants: {
		size: {
			sm: "h-5 w-9",
			md: "h-6 w-11",
			lg: "h-7 w-[52px]",
		},
	},
	defaultVariants: { size: "md" },
});

const thumbSizeMap = {
	sm: "size-3.5",
	md: "size-4.5",
	lg: "size-5.5",
} as const;

const thumbTranslateMap = {
	sm: "translate-x-4",
	md: "translate-x-5",
	lg: "translate-x-6",
} as const;

export interface SwitchProps
	extends Omit<ComponentProps<"button">, "role" | "size">,
		VariantProps<typeof switchVariants> {
	checked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
}

export function Switch({
	className,
	size = "md",
	checked = false,
	disabled,
	onCheckedChange,
	...props
}: SwitchProps) {
	const resolvedSize = size ?? "md";
	return (
		<button
			type="button"
			role="switch"
			aria-checked={checked}
			data-slot="switch"
			data-state={checked ? "checked" : "unchecked"}
			data-disabled={disabled ? "" : undefined}
			disabled={disabled}
			className={twMerge(
				switchVariants({ size }),
				checked ? "bg-primary" : "bg-muted",
				className,
			)}
			onClick={() => onCheckedChange?.(!checked)}
			{...props}
		>
			<span
				data-slot="switch-thumb"
				className={twMerge(
					"pointer-events-none block rounded-full bg-primary-foreground shadow-lg ring-0 transition-transform",
					thumbSizeMap[resolvedSize],
					checked ? thumbTranslateMap[resolvedSize] : "translate-x-0.5",
				)}
			/>
		</button>
	);
}
