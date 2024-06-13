import { defineProjectConfig } from "abstractrepo";
import root from "../../abstract.config";

export default defineProjectConfig({
  runtime: "node",
  tags: root.getTagsList(["react", "vite", "ts", "tsx"]),
});
