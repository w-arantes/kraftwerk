import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface TerminalProps extends ComponentProps<"div"> {
	title?: string;
}

export function Terminal({
	className,
	title = "terminal",
	children,
	...props
}: TerminalProps) {
	return (
		<div
			data-slot="terminal"
			className={twMerge(
				"rounded-lg border border-border bg-bg-main overflow-hidden font-mono",
				className,
			)}
			{...props}
		>
			<div
				data-slot="terminal-header"
				className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-border bg-surface"
			>
				<div className="flex gap-1.5">
					<div className="size-2.5 sm:size-3 rounded-full bg-destructive/60" />
					<div className="size-2.5 sm:size-3 rounded-full bg-foreground-subtle/40" />
					<div className="size-2.5 sm:size-3 rounded-full bg-primary/60" />
				</div>
				<span className="text-foreground-subtle text-xs">{title}</span>
			</div>
			<div
				data-slot="terminal-content"
				className="p-3 sm:p-4 text-foreground overflow-x-auto"
			>
				{children}
			</div>
		</div>
	);
}

export interface TerminalLineProps extends ComponentProps<"div"> {
	prompt?: string;
}

export function TerminalLine({
	className,
	prompt = "$",
	children,
	...props
}: TerminalLineProps) {
	return (
		<div
			data-slot="terminal-line"
			className={twMerge("flex gap-2", className)}
			{...props}
		>
			<span className="text-primary select-none">{prompt}</span>
			<span>{children}</span>
		</div>
	);
}
