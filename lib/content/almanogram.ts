export const almanogramUrls = {
  privacy: "/almanogram/legal/privacy/",
  terms: "/almanogram/legal/terms/",
  appGallery: "https://appgallery.huawei.com/app/C119485685",
} as const;

export const almanogramContent = {
  name: "Almanogram",
  tagline: "A calm nonogram.",
  statusLine:
    "Available on Huawei AppGallery. Free, no ads, no account, works offline.",
  lead: "Almanogram is a cozy picture logic puzzle. Use the numbers on the edges to colour in the grid; when every square is right, a small pixel picture turns into a hand-finished illustration and joins your collection book.",
  metaDescription:
    "Almanogram is a cozy nonogram (picture cross) puzzle game for Android: no ads, no timer pressure, no account. Solve puzzles and collect illustrations.",
  logo: {
    src: "/images/almanogram/icon.png",
    alt: "Almanogram app icon: a smiling snowman",
  },
  appGalleryBadge: {
    src: "/images/almanogram/appgallery-badge.png",
    alt: "Download Almanogram on Huawei AppGallery",
  },
  stepsIntro: "Fill the grid, ask for a hint when you are stuck, then watch the picture appear.",
  steps: [
    {
      number: "01",
      title: "Fill the squares",
      description:
        "The numbers on the edges tell you how many squares in a row or column sit side by side. Drag across the grid to fill them; a small counter shows how many you are filling.",
      image: "/images/almanogram/filltheboxes.webp",
      alt: "Dragging a finger across the Almanogram grid to fill squares, with a counter showing how many",
    },
    {
      number: "02",
      title: "Ask for a hint",
      description:
        "Stuck? A hint highlights one row or column and fills in what logic says must be there. Undo and a mistake check are always at hand.",
      image: "/images/almanogram/usehint.webp",
      alt: "Using a hint in Almanogram: a column is highlighted and its squares are filled in",
    },
    {
      number: "03",
      title: "Reveal the picture",
      description:
        "Fill the last square and the pixels melt into a hand-finished illustration, a sticker for your collection book.",
      image: "/images/almanogram/puzzlesolved.webp",
      alt: "A solved Almanogram puzzle turning from pixels into a snowman sticker that is added to the collection",
    },
  ],
  features: [
    "Hand-made winter puzzles from 5×5 to 20×20, every one solvable by logic alone.",
    "Each solved picture becomes an illustration in your collection book.",
    "An interactive tutorial for players who have never seen a nonogram.",
    "Hints, a mistake check, undo and redo, and a calm pace with no lives or energy.",
    "No ads, no in-app purchases and no account in the first release.",
    "Multi-language localization support.",
  ],
  facts: [
    { label: "Platform", value: "Android (AppGallery)" },
    { label: "Price", value: "Free" },
    { label: "Ads", value: "None" },
    { label: "Account", value: "Not needed" },
  ],
} as const;
