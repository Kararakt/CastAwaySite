import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: "./auto-imports.d.ts",
        include: [
            /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /.vue$/,
            /.vue?vue/, // .vue
            /.md$/, // .md
        ],
        imports: ["vue", "vue-router"],
    }),
    Components({
        resolvers: [ElementPlusResolver()],
        dts: true,
    }),
],
});
