import { useEffect, useState } from "react";

interface TypewriterProps {
	text: string;
	speed?: number;
	delay?: number;
	className?: string;
	onComplete?: () => void;
}

export function Typewriter({
	text,
	speed = 30,
	delay = 0,
	className = "",
	onComplete,
}: TypewriterProps) {
	const [displayedText, setDisplayedText] = useState("");
	const [started, setStarted] = useState(false);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const startTimeout = setTimeout(() => setStarted(true), delay);
		return () => clearTimeout(startTimeout);
	}, [delay]);

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 530);
		return () => clearInterval(cursorInterval);
	}, []);

	useEffect(() => {
		if (!started) return;

		if (displayedText.length < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText(text.slice(0, displayedText.length + 1));
			}, speed);
			return () => clearTimeout(timeout);
		}

		onComplete?.();
	}, [started, displayedText, text, speed, onComplete]);

	const isComplete = displayedText.length === text.length;

	return (
		<span className={className}>
			{displayedText}
			{!isComplete && (
				<span
					className={`inline-block w-0.5 h-[1em] bg-primary ml-0.5 align-middle transition-opacity ${
						showCursor ? "opacity-100" : "opacity-0"
					}`}
					aria-hidden="true"
				/>
			)}
		</span>
	);
}
