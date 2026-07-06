import fs from "node:fs";
import path from "node:path";

const TARGET = "https://mgonnacrusht.co.uk/savet/";

const slugs = [
  "movies-tv-watchlist",
  "restaurants-cafes-to-try",
  "articles-videos-to-revisit",
  "personal-projects-learning",
  "collaboration-shared-lists",
  "browser-extension-desktop",
  "shopping-and-wishlists",
  "api-integrations-discovery",
];

function redirectHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting to SaveT</title>
  <link rel="canonical" href="${TARGET}">
  <meta http-equiv="refresh" content="0; url=${TARGET}">
  <script>window.location.replace("${TARGET}");</script>
</head>
<body>
  <p>Redirecting to <a href="${TARGET}">SaveT</a>...</p>
</body>
</html>`;
}

const publicFeaturesDir = path.join(process.cwd(), "public", "features");

for (const slug of slugs) {
  const dir = path.join(publicFeaturesDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), redirectHtml(), "utf8");
}

console.log(`Generated ${slugs.length} legacy redirect pages in public/features/`);
