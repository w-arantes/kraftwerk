import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
	it("renders app content", () => {
		render(<App />);
		const elements = screen.getAllByText(/kraftwerk/i);
		expect(elements.length).toBeGreaterThan(0);
	});
});
