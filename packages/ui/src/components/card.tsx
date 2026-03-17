import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface CardProps extends ComponentProps<"div"> {}

export function Card({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card"
			className={twMerge(
				"bg-surface flex flex-col gap-6 rounded-xl border border-border p-6 shadow-sm",
				className,
			)}
			{...props}
		/>
	);
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-header"
			className={twMerge("flex flex-col gap-1.5", className)}
			{...props}
		/>
	);
}

export function CardTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-title"
			className={twMerge("text-foreground text-lg font-semibold", className)}
			{...props}
		/>
	);
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-content"
			className={twMerge("text-foreground-subtle text-sm", className)}
			{...props}
		/>
	);
}
