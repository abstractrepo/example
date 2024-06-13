import { defineRootConfig } from "abstractrepo";

export default defineRootConfig({
  basePath: import.meta.dirname,
  layouts: {
    apps: "./projects",
    examples: "./examples",
    playgrounds: "./playgrounds",
    packages: "./packages",
  },
  tags: [
    "js",
    "ts",
    "jsx",
    "tsx",
    "react",
    "next",
    "vite",
    "remix",
    "gatsby",
    "adonis",
    "inertia",
    "node"
  ],
  organize: "remonorepoact",
});
