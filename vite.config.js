import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 从命令行参数中读取 name 参数
const args = process.argv.slice(2);
const nameArgIndex = args.indexOf("--name");
const componentName =
  nameArgIndex !== -1 ? args[nameArgIndex + 1] : "MyCustomComponent";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/custom/index.js",
      name: componentName,
      formats: ["umd"],
      fileName: (format) => `${componentName}.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
