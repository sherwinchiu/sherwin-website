// @ts-check
import { defineConfig } from "astro/config";

const isVercel = !!process.env.VERCEL;

// https://astro.build/config
export default defineConfig({
  site: isVercel ? "https://sherwin-chiu.vercel.app" : "https://sherwinchiu.github.io",
  base: isVercel ? "/" : "/sherwin-website",
  trailingSlash: "ignore",
});
