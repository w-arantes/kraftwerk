import {
	AnimatedTerminal,
	Button,
	FeatureCard,
	Logo,
	ThemeToggle,
} from "@kraftwerk/ui";
import {
	Boxes,
	FileCode2,
	Github,
	Settings2,
	Sparkles,
	Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "./components/animated-logo";
import { Typewriter } from "./components/typewriter";

type Theme = "dark" | "light";

export function App() {
	const [theme, setTheme] = useState<Theme>("dark");
	const [showEtymology, setShowEtymology] = useState(false);
	const [showDescription, setShowDescription] = useState(false);
	const [showButtons, setShowButtons] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem("kraftwerk-theme") as Theme | null;
		if (stored) {
			setTheme(stored);
			document.documentElement.setAttribute("data-theme", stored);
		}
	}, []);

	const toggleTheme = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		document.documentElement.setAttribute("data-theme", next);
		localStorage.setItem("kraftwerk-theme", next);
	};

	return (
		<div className="min-h-dvh bg-bg-main text-foreground overflow-x-hidden">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
			>
				Skip to main content
			</a>

			<header className="border-b border-border bg-bg-main/80 backdrop-blur-sm animate-fade-in">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
					<div className="w-24" />
					<nav
						aria-label="Main navigation"
						className="flex items-center gap-2 sm:gap-4"
					>
						<ThemeToggle theme={theme} onToggle={toggleTheme} />
						<a
							href="https://github.com/w-arantes/kraftwerk"
							className="text-foreground-subtle hover:text-foreground transition-colors p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View project on GitHub (opens in new tab)"
						>
							<Github className="size-5" aria-hidden="true" />
						</a>
					</nav>
				</div>
			</header>

			<main id="main-content">
				<section
					aria-labelledby="hero-title"
					className="py-12 sm:py-16 md:py-24 px-4 sm:px-6"
				>
					<div className="mx-auto max-w-4xl text-center">
						<h1 id="hero-title" className="sr-only">
							kraftwerk - Modern Monorepo Boilerplate
						</h1>

						<div className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl text-foreground">
							<AnimatedLogo
								className="justify-center"
								delay={200}
								onComplete={() => setShowEtymology(true)}
							/>
						</div>

						<p className="text-foreground-subtle text-base sm:text-lg mb-3 sm:mb-4 text-pretty min-h-[1.5rem]">
							{showEtymology && (
								<Typewriter
									text="German: /ˈkʁaftvɛʁk/ — power plant, factory"
									speed={25}
									delay={100}
									onComplete={() => setShowDescription(true)}
								/>
							)}
						</p>

						<p className="text-foreground-subtle text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 text-pretty min-h-[4rem]">
							{showDescription && (
								<Typewriter
									text="A modern monorepo boilerplate for scalable projects. Like a power plant generates energy, kraftwerk generates the foundation for your projects."
									speed={15}
									onComplete={() => setShowButtons(true)}
								/>
							)}
						</p>

						<div
							className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-opacity duration-500 ease-out ${
								showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
							}`}
						>
							<a
								href="https://github.com/w-arantes/kraftwerk"
								target="_blank"
								rel="noopener noreferrer"
								className="w-full sm:w-auto"
							>
								<Button
									variant="primary"
									size="lg"
									className="w-full h-12 px-20"
									tabIndex={showButtons ? 0 : -1}
								>
									Get Started
								</Button>
							</a>
							<a
								href="https://github.com/w-arantes/kraftwerk#documentation"
								target="_blank"
								rel="noopener noreferrer"
								className="w-full sm:w-auto"
							>
								<Button
									variant="secondary"
									size="lg"
									className="w-full h-12 px-20"
									tabIndex={showButtons ? 0 : -1}
								>
									Documentation
								</Button>
							</a>
						</div>
					</div>
				</section>

				<section
					aria-labelledby="features-title"
					className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border bg-surface/50 animate-fade-in-up animate-delay-200"
				>
					<div className="mx-auto max-w-6xl">
						<h2
							id="features-title"
							className="text-xl sm:text-2xl font-mono font-medium text-center mb-8 sm:mb-12 text-balance"
						>
							Built with modern tools
						</h2>

						<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none">
							<FeatureCard
								icon={<Zap aria-hidden="true" />}
								title="Turborepo"
								description="Incremental builds and remote caching for blazing fast development and CI pipelines."
							/>
							<FeatureCard
								icon={<Boxes aria-hidden="true" />}
								title="pnpm Workspaces"
								description="Efficient disk space usage with symlinked dependencies and strict package isolation."
							/>
							<FeatureCard
								icon={<Settings2 aria-hidden="true" />}
								title="Biome"
								description="Unified linting and formatting with zero configuration. Fast, opinionated, and consistent."
							/>
							<FeatureCard
								icon={<FileCode2 aria-hidden="true" />}
								title="TypeScript Strict"
								description="Full type safety with strict mode enabled. ESM-only for modern module resolution."
							/>
							<FeatureCard
								icon={<Sparkles aria-hidden="true" />}
								title="React 19 + Tailwind v4"
								description="Latest React patterns without forwardRef. CSS-first Tailwind configuration with @theme."
							/>
							<FeatureCard
								icon={<Zap aria-hidden="true" />}
								title="AI-Ready"
								description="Cursor Skills, Copilot instructions, and AGENTS.md for consistent AI-assisted development."
							/>
						</ul>
					</div>
				</section>

				<section
					aria-labelledby="quickstart-title"
					className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border animate-fade-in-up animate-delay-300"
				>
					<div className="mx-auto max-w-3xl">
						<h2
							id="quickstart-title"
							className="text-xl sm:text-2xl font-mono font-medium text-center mb-6 sm:mb-8 text-balance"
						>
							Get started in seconds
						</h2>

						<AnimatedTerminal
							title="terminal"
							className="text-xs sm:text-sm"
							commands={[
								"git clone https://github.com/w-arantes/kraftwerk.git",
								"cd kraftwerk",
								"pnpm install",
								"pnpm dev",
							]}
							typingSpeed={40}
							delayBetweenCommands={600}
						/>
					</div>
				</section>

				<section
					aria-labelledby="structure-title"
					className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border bg-surface/50 animate-fade-in-up animate-delay-500"
				>
					<div className="mx-auto max-w-4xl text-center">
						<h2
							id="structure-title"
							className="text-xl sm:text-2xl font-mono font-medium mb-4 sm:mb-6 text-balance"
						>
							Workspace Structure
						</h2>

						<div
							className="text-left bg-surface rounded-lg border border-border p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto"
							role="img"
							aria-label="Project directory structure showing apps, packages, docs, and github folders"
						>
							<pre
								className="text-foreground-subtle whitespace-pre"
								aria-hidden="true"
							>
								{`kraftwerk/
├── apps/
│   └── web/              `}
								<span className="text-primary"># Vite + React app</span>
								{`
├── packages/
│   ├── config/           `}
								<span className="text-primary"># Shared configs</span>
								{`
│   └── ui/               `}
								<span className="text-primary"># Design system</span>
								{`
├── docs/                 `}
								<span className="text-primary"># Guides</span>
								{`
└── .github/              `}
								<span className="text-primary"># CI/CD</span>
							</pre>
						</div>
					</div>
				</section>
			</main>

			<footer
				role="contentinfo"
				className="border-t border-border py-6 sm:py-8 px-4 sm:px-6 bg-bg-main/80 animate-fade-in animate-delay-700"
			>
				<div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
					<Logo size="sm" aria-label="kraftwerk" />
					<nav
						aria-label="Footer navigation"
						className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-foreground-subtle"
					>
						<a
							href="https://github.com/w-arantes/kraftwerk"
							className="hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://github.com/w-arantes/kraftwerk#documentation"
							className="hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							target="_blank"
							rel="noopener noreferrer"
						>
							Documentation
						</a>
						<span>MIT License</span>
					</nav>
				</div>
			</footer>
		</div>
	);
}
