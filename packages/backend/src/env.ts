import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		PORT: z.coerce.number().default(3000),
		DATABASE_URL: z.string().url(),
		CORS_ORIGIN: z.string().url().default("http://localhost:5173"),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
