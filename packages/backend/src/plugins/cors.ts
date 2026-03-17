import { cors } from "@elysiajs/cors";
import { env } from "@/env";

export const corsPlugin = cors({
	origin: env.CORS_ORIGIN,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	credentials: true,
});
