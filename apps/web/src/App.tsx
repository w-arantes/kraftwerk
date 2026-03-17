import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@kraftwerk/ui";
import { env } from "./env";

export function App() {
	const appName = env.VITE_APP_NAME;

	return (
		<div className="min-h-screen bg-surface text-foreground p-8">
			<main className="mx-auto max-w-2xl space-y-8">
				<h1 className="text-foreground text-3xl font-bold">{appName}</h1>
				<p className="text-foreground-subtle">
					A modern monorepo boilerplate for package distribution. All packages
					use the <code className="text-foreground">@kraftwerk/</code> scope.
				</p>

				<Card>
					<CardHeader>
						<CardTitle>Quick links</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-2">
						<a
							href="/docs"
							className="text-primary hover:underline"
							target="_blank"
							rel="noreferrer"
						>
							Documentation
						</a>
						<a
							href="https://github.com"
							className="text-primary hover:underline"
							target="_blank"
							rel="noreferrer"
						>
							Storybook (deployed to GitHub Pages)
						</a>
						<a
							href="/docs/usage.md"
							className="text-primary hover:underline"
							target="_blank"
							rel="noreferrer"
						>
							Usage &amp; boilerplate guide
						</a>
					</CardContent>
				</Card>

				<div className="flex gap-2">
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
				</div>
			</main>
		</div>
	);
}
