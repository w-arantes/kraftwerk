import { useEffect, useState } from "react";

interface AnimatedLogoProps {
	className?: string;
	delay?: number;
	onComplete?: () => void;
}

const LOGO_TEXT = "kraftwerk";

export function AnimatedLogo({
	className = "",
	delay = 0,
	onComplete,
}: AnimatedLogoProps) {
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

		if (displayedText.length < LOGO_TEXT.length) {
			const timeout = setTimeout(() => {
				setDisplayedText(LOGO_TEXT.slice(0, displayedText.length + 1));
			}, 80);
			return () => clearTimeout(timeout);
		}

		onComplete?.();
	}, [started, displayedText, onComplete]);

	const characters = LOGO_TEXT.split("").map((char, index) => ({
		id: `logo-char-${index}`,
		char,
		index,
	}));

	return (
		<span
			className={`inline-flex items-center font-mono font-medium ${className}`}
			role="img"
			aria-label="kraftwerk"
		>
			{characters.map(({ id, char, index }) => (
				<span
					key={id}
					className={`inline-block transition-all duration-200 ease-out ${
						index < displayedText.length
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-2"
					}`}
					style={{
						transitionDelay: `${index * 30}ms`,
					}}
					aria-hidden="true"
				>
					{char}
				</span>
			))}
			<span
				className={`inline-block transition-opacity duration-100 ${
					showCursor ? "opacity-100" : "opacity-0"
				}`}
				aria-hidden="true"
			>
				_
			</span>
		</span>
	);
}
