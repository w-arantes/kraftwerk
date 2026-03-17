import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
	base: [
		"flex w-full appearance-none rounded-lg border bg-surface font-mono text-foreground transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
	],
	variants: {
		size: {
			sm: "h-8 px-3 pr-8 text-xs",
			md: "h-10 px-4 pr-10 text-sm",
			lg: "h-12 px-5 pr-12 text-base",
		},
	},
	defaultVariants: { size: "md" },
});

export interface SelectProps
	extends Omit<ComponentProps<"select">, "size">,
		VariantProps<typeof selectVariants> {}

export function Select({
	className,
	size,
	disabled,
	children,
	...props
}: SelectProps) {
	return (
		<div data-slot="select" className="relative w-full">
			<select
				data-disabled={disabled ? "" : undefined}
				className={twMerge(selectVariants({ size }), className)}
				disabled={disabled}
				{...props}
			>
				{children}
			</select>
			<ChevronDown
				className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-foreground-subtle size-4"
				aria-hidden="true"
			/>
		</div>
	);
}
