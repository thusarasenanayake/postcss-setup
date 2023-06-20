import { defineConfig } from "vite";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

export default defineConfig(function ({ command, mode, ssrBuild }) {
  return {
    css: {
      postcss: {
        plugins:
          mode === "production"
            ? [purgeCSSPlugin({ content: ["./pages/**/*", "./index.html"] })]
            : [],
      },
    },
  };
});
