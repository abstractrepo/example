import { defineTemplateConfig } from "abstractrepo";
import root from "../../abstract.config";

export default defineTemplateConfig({
  rootBasePath: root.getRawBaseRootPath,
  runtime: "node",
  structures: [
    { from: "./public", to: "<types>/public" },
    { from: "./src", to: "<types>/src" },
    { from: "./.eslintrc.cjs.stub", to: "<types>/.eslintrc.cjs" },
    { from: "./.gitignore.stub", to: "<types>/.gitignore" },
    { from: "./index.html.stub", to: "<types>/index.html" },
    { from: "./package.json.stub", to: "<types>/package.json" },
    { from: "./README.md.stub", to: "<types>/README.md" },
    { from: "./vite.config.js.stub", to: "<types>/vite.config.js" },
  ],
  tags: root.getTagsList(["vite", "react", "js", "jsx"]),
  types: root.getLayoutsList(["apps", "examples", "playgrounds"]),
});
