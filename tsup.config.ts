import type { Options } from "tsup";
export const tsup: Options = {
  target: "node16",
  splitting: false,
  sourcemap: true,
  clean: true,
  entryPoints: ["src/*.ts", "src/*.tsx"],
  outDir: "build-with-tsup",
  dts: true,
  minify: true,
  // format: ["cjs", "esm"],
};
