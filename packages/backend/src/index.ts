import { Elysia } from "elysia";
import { env } from "@/env";
import { healthRoute } from "@/modules/health/route";
import { corsPlugin } from "@/plugins/cors";

const app = new Elysia().use(corsPlugin).use(healthRoute).listen(env.PORT);

console.log(
	`[kraftwerk] Server running at http://localhost:${app.server?.port}`,
);
