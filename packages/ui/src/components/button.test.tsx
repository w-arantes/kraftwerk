import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
	it("renders children", () => {
		render(<Button>Click me</Button>);
		const button = screen.getByRole("button", { name: "Click me" });
		expect(button).toBeDefined();
		expect(button.textContent).toBe("Click me");
	});

	it("has data-slot", () => {
		render(<Button>Ok</Button>);
		const button = screen.getByRole("button");
		expect(button.getAttribute("data-slot")).toBe("button");
	});
});
