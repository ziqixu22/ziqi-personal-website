import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ziqi-personal-website/",
  plugins: [react()],
});
