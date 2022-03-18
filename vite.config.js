import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      name: "sasa-sretan-rodjendan",
      entry: path.join(__dirname, "src", "index.ts"),
      fileName: "index",
      formats: ["cjs"],
    },
    outDir: "dist",
  },
});
