import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {},
	clientPrefix: "VITE_",
	client: {
		VITE_APP_NAME: z.string().optional().default("Kraftwerk"),
	},
	runtimeEnv: import.meta.env,
	emptyStringAsUndefined: true,
});
