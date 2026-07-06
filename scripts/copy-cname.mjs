import fs from "node:fs";
import path from "node:path";

const source = path.join(process.cwd(), "public", "CNAME");
const target = path.join(process.cwd(), "out", "CNAME");

if (fs.existsSync(source) && fs.existsSync(path.join(process.cwd(), "out"))) {
  fs.copyFileSync(source, target);
  console.log("Copied CNAME to out/");
}
