import { config } from "dotenv";
config();

export const configs = {
  PORT: process.env.PORT,
  URL: process.env.URL,
};
