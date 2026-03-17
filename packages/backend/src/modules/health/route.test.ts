import { Elysia } from "elysia";
import { describe, expect, it } from "vitest";
import { healthRoute } from "@/modules/health/route";

describe("health route", () => {
	const app = new Elysia().use(healthRoute);

	it("returns status ok", async () => {
		const response = await app
			.handle(new Request("http://localhost/health"))
			.then((res) => res.json());

		expect(response.status).toBe("ok");
		expect(response.timestamp).toBeDefined();
	});
});
