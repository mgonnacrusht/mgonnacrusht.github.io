export type SaveTStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type UseCase = {
  title: string;
  excerpt: string;
  body: string;
};

export const savetContent = {
  tagline: "See it. SaveT. Sort it.",
  statusLine:
    "Flagship product in closed beta. Case study and development preview only. Not publicly listed on Google Play.",
  lead: "SaveT lets you save links, posts, videos, articles, places, and job posts now, then sort them into lists when you have a minute. Nothing gets lost in tabs or screenshots.",
  capabilities: [
    "Quick Save flow for fast capture.",
    "Nested lists for clean organization.",
    "Search with list-path context to find items faster.",
    "Edit support for title, description, tags, and metadata.",
    "Auto-filled titles, tags, and details where it helps.",
    "Safer data handling with soft-delete behavior.",
  ],
  stepsIntro: "Three steps. Save now, sort later.",
  steps: [
    {
      number: "01",
      title: "See it",
      description:
        "Spot a useful link, place, video, article, or idea worth keeping.",
      image: "/images/savet/screenshots/boarding1_seeit.webp",
      alt: "SaveT onboarding step 1: See it",
    },
    {
      number: "02",
      title: "SaveT",
      description:
        "When you find something worth keeping, tap Share and send it to SaveT in seconds.",
      image: "/images/savet/screenshots/boarding2_savet.webp",
      alt: "SaveT onboarding step 2: SaveT",
    },
    {
      number: "03",
      title: "Sort it",
      description:
        "Add what you saved to the right list so it stays organized and easy to find later.",
      image: "/images/savet/screenshots/boarding3_sortit.webp",
      alt: "SaveT onboarding step 3: Sort it",
    },
  ] satisfies SaveTStep[],
  videoId: "MIZyjpa7Yk4",
  videoCaption:
    "A short walkthrough of the Quick Save flow and nested lists.",
  caseStudy: {
    problem:
      "Links, social posts, short videos, and ideas end up scattered across tabs, screenshots, notes, and half-forgotten watchlists. Finding something later takes longer than saving it.",
    solution:
      "SaveT puts everything in one inbox with nested lists, search, and useful metadata so you can actually find it again.",
    results: [
      { label: "Platforms", value: "Android" },
      { label: "Workflow", value: "See → Save → Sort" },
      { label: "Organization", value: "Nested lists" },
      { label: "Enrichment", value: "Auto metadata" },
    ],
  },
  pricing: [
    "Initial release: free plan with minimal, non-intrusive ads.",
    "Later stage: optional premium features (for example, advanced organization and no-ads experience).",
    "Future experiments: affiliate-supported discovery features with clear disclosure.",
  ],
  useCases: [
    {
      title: "Movies & TV watchlist",
      excerpt:
        "Movies, series, and documentaries end up scattered across watchlists, text messages, and screenshots.",
      body: "Save titles from any link, trailer or conversation in a couple of taps. Add tags like cozy, with friends, or award season. Keep short notes about who recommended it or where it is available. Search and filter when you finally sit down to choose something.",
    },
    {
      title: "Restaurants & cafés to try",
      excerpt:
        "Map pins, saved short videos, and random notes are not a reliable way to remember where you want to eat next.",
      body: "Save places straight from map links, articles, social posts, or plain text. Tag by city, neighbourhood, cuisine, budget or who you want to go with. Filter by mood or location when you are actually trying to pick somewhere.",
    },
    {
      title: "Articles & videos to revisit",
      excerpt:
        "Forty open tabs, endless read later lists and DM'd links make it easy to lose great content.",
      body: "Save from mobile share sheets or plain copy and paste. Tag content by topic, length, mood or priority. Use search and filters to pull up the right article or video at the right moment.",
    },
    {
      title: "Shopping & wishlists",
      excerpt:
        "Screenshots, saved carts and maybe later emails are not a great system for tracking things you want to buy or gift.",
      body: "Save product links, price info and inspiration images in seconds. Tag items by category, urgency, budget or who it is for. Group items into lists for holidays, hobbies or future projects.",
    },
    {
      title: "Personal projects & learning",
      excerpt:
        "Side projects and learning goals come with their own pile of tutorials, reference links, tools and examples.",
      body: "Save docs, videos, repos, podcasts or quick text notes related to a goal. Tag by project and create focused lists for each one. Keep progress notes or next steps right alongside the materials you have saved.",
    },
    {
      title: "Collaboration & shared lists (planned)",
      excerpt:
        "SaveT starts as a personal inbox. Shared lists are on the roadmap.",
      body: "Ideas under exploration include shared lists for friends and families, public lists you can publish, invite-only lists, and lightweight comments. Nothing ships until it feels useful.",
    },
    {
      title: "Browser extension & desktop (planned)",
      excerpt:
        "Saving from your phone matters, but plenty of discovery still happens on desktop.",
      body: "Planned improvements include a lightweight browser button, keyboard-friendly workflows, a responsive web experience, and context-aware fields that auto-fill details from the page you are saving.",
    },
    {
      title: "API, integrations & discovery (planned)",
      excerpt:
        "Further out, SaveT could open up to other tools.",
      body: "On the list: a secure API, integrations with tools you already use, optional affiliate link helpers with clear disclosure, and recommendations that surface things you saved and forgot about.",
    },
  ] satisfies UseCase[],
};

export const roadmapContent = {
  canvaEmbedUrl:
    "https://www.canva.com/design/DAHKqECSnws/6kw1-VOIRWtEerHwGmnLEQ/view?embed",
  canvaViewUrl:
    "https://www.canva.com/design/DAHKqECSnws/6kw1-VOIRWtEerHwGmnLEQ/view?utm_content=DAHKqECSnws&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
  canvaTitle: "SaveT - Roadmap",
  canvaAuthor: "MgonnacrushT",
};
