import { useEffect, useRef } from "react";

export interface MatrixRainProps {
	className?: string;
	opacity?: number;
}

export function MatrixRain({
	className = "",
	opacity = 0.15,
}: MatrixRainProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const chars =
			"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const charArray = chars.split("");
		const fontSize = 14;
		const columns = Math.floor(canvas.width / fontSize);
		const drops: number[] = Array(columns).fill(1);

		const draw = () => {
			ctx.fillStyle = `rgba(5, 5, 5, 0.05)`;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "#39ff14";
			ctx.font = `${fontSize}px monospace`;

			for (let i = 0; i < drops.length; i++) {
				const char = charArray[Math.floor(Math.random() * charArray.length)];
				const x = i * fontSize;
				const y = drops[i] * fontSize;

				ctx.fillText(char, x, y);

				if (y > canvas.height && Math.random() > 0.975) {
					drops[i] = 0;
				}
				drops[i]++;
			}
		};

		const interval = setInterval(draw, 50);

		return () => {
			clearInterval(interval);
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={`fixed inset-0 pointer-events-none ${className}`}
			style={{ opacity, zIndex: -1 }}
		/>
	);
}
