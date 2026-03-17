import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface AnimatedTerminalProps {
	className?: string;
	title?: string;
	commands: string[];
	typingSpeed?: number;
	delayBetweenCommands?: number;
	onComplete?: () => void;
}

interface TerminalState {
	currentCommandIndex: number;
	currentCharIndex: number;
	completedCommands: string[];
	isTyping: boolean;
	showCursor: boolean;
	showSuccess: boolean;
}

export function AnimatedTerminal({
	className,
	title = "terminal",
	commands,
	typingSpeed = 50,
	delayBetweenCommands = 800,
	onComplete,
}: AnimatedTerminalProps) {
	const [state, setState] = useState<TerminalState>({
		currentCommandIndex: 0,
		currentCharIndex: 0,
		completedCommands: [],
		isTyping: true,
		showCursor: true,
		showSuccess: false,
	});

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setState((prev) => ({ ...prev, showCursor: !prev.showCursor }));
		}, 530);

		return () => clearInterval(cursorInterval);
	}, []);

	useEffect(() => {
		if (state.currentCommandIndex >= commands.length) {
			const successTimeout = setTimeout(() => {
				setState((prev) => ({ ...prev, showSuccess: true }));
				onComplete?.();
			}, 500);
			return () => clearTimeout(successTimeout);
		}

		const currentCommand = commands[state.currentCommandIndex];

		if (state.currentCharIndex < currentCommand.length) {
			const typingTimeout = setTimeout(
				() => {
					setState((prev) => ({
						...prev,
						currentCharIndex: prev.currentCharIndex + 1,
					}));
				},
				typingSpeed + Math.random() * 30,
			);

			return () => clearTimeout(typingTimeout);
		}

		const commandTimeout = setTimeout(() => {
			setState((prev) => ({
				...prev,
				completedCommands: [...prev.completedCommands, currentCommand],
				currentCommandIndex: prev.currentCommandIndex + 1,
				currentCharIndex: 0,
			}));
		}, delayBetweenCommands);

		return () => clearTimeout(commandTimeout);
	}, [
		state.currentCommandIndex,
		state.currentCharIndex,
		commands,
		typingSpeed,
		delayBetweenCommands,
		onComplete,
	]);

	const currentCommand = commands[state.currentCommandIndex] || "";
	const displayedText = currentCommand.slice(0, state.currentCharIndex);

	return (
		<section
			data-slot="animated-terminal"
			aria-label={`Terminal: ${title}`}
			className={twMerge(
				"rounded-lg border border-border bg-bg-main overflow-hidden font-mono",
				className,
			)}
		>
			<div
				data-slot="terminal-header"
				className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-border bg-surface"
				aria-hidden="true"
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
				className="p-3 sm:p-4 text-foreground overflow-x-auto min-h-[180px] sm:min-h-[200px]"
				aria-live="polite"
				aria-atomic="false"
			>
				<div className="space-y-1 sm:space-y-2">
					{state.completedCommands.map((cmd) => (
						<div key={`completed-${cmd}`} className="flex gap-2">
							<span className="text-primary select-none" aria-hidden="true">
								$
							</span>
							<code>{cmd}</code>
						</div>
					))}

					{state.currentCommandIndex < commands.length && (
						<div className="flex gap-2">
							<span className="text-primary select-none" aria-hidden="true">
								$
							</span>
							<span>
								<code>{displayedText}</code>
								<span
									className={twMerge(
										"inline-block w-2 h-4 sm:h-5 bg-primary ml-0.5 align-middle",
										state.showCursor ? "opacity-100" : "opacity-0",
									)}
									aria-hidden="true"
								/>
							</span>
						</div>
					)}

					{state.showSuccess && (
						<div
							className="mt-3 sm:mt-4 text-foreground-subtle animate-fade-in"
							role="status"
						>
							<span className="text-primary" aria-hidden="true">
								✓
							</span>{" "}
							Ready on http://localhost:5173
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
