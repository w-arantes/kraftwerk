import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const logoVariants = tv({
	base: "inline-flex items-center font-mono font-medium tracking-tight",
	variants: {
		size: {
			sm: "text-lg",
			md: "text-xl",
			lg: "text-3xl",
			xl: "text-4xl",
		},
		glow: {
			true: "drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]",
			false: "",
		},
	},
	defaultVariants: { size: "md", glow: false },
});

export interface LogoProps
	extends ComponentProps<"div">,
		VariantProps<typeof logoVariants> {}

export function Logo({ className, size, glow, ...props }: LogoProps) {
	return (
		<div
			data-slot="logo"
			className={twMerge(logoVariants({ size, glow }), className)}
			{...props}
		>
			<span className="text-foreground">kraftwerk</span>
		</div>
	);
}
