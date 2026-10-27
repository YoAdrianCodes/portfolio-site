import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/portfolio-site/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        resume: resolve(root, "/resume/index.html"),
        coverletter: resolve(root, "/coverletter/index.html"),
        careergoals: resolve(root, "/careergoals/index.html"),
      },
    },
  },
});
