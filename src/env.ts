import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_NAME: z.string(),
    NEXT_PUBLIC_APP_PHONE_NUMBER: z.string(),
    NEXT_PUBLIC_APP_PHONE_NUMBER_BACKUP: z.string(),
    NEXT_PUBLIC_APP_FULL_NAME: z.string(),
    NEXT_PUBLIC_APP_EMAIL_ADDRESS: z.email(),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_PHONE_NUMBER: process.env.NEXT_PUBLIC_APP_PHONE_NUMBER,
    NEXT_PUBLIC_APP_PHONE_NUMBER_BACKUP:
      process.env.NEXT_PUBLIC_APP_PHONE_NUMBER_BACKUP,
    NEXT_PUBLIC_APP_FULL_NAME: process.env.NEXT_PUBLIC_APP_FULL_NAME,
    NEXT_PUBLIC_APP_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_APP_EMAIL_ADDRESS,
  },
});
