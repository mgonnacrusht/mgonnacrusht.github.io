export const cityLineMapUrls = {
  map: "https://citylinemap.com/london?utm_source=mgonnacrusht&utm_medium=website&utm_campaign=product",
  privacy: "https://citylinemap.com/privacy",
  terms: "https://citylinemap.com/terms",
} as const;

/** Keep Referer so Umami on citylinemap.com can attribute this site. Do not add noreferrer. */
export const cityLineMapLinkAttrs = {
  target: "_blank" as const,
  rel: "noopener" as const,
  referrerPolicy: "no-referrer-when-downgrade" as const,
};

export const cityLineMapContent = {
  name: "City Line Map",
  statusLine: "Live public website. Free, no account, not a store listing.",
  lead: "A live public map of London's Underground, buses and river services on real streets. Built by MgonnacrushT Limited. Not an official Transport for London map.",
  metaDescription:
    "Interactive London transport map: Underground, bus routes and river lines on one map. Not the official TfL tube map.",
  screenshot: {
    src: "/images/citylinemap/hero.webp",
    alt: "City Line Map showing London Underground, buses and river services on a geographic street map",
    width: 1280,
    height: 720,
  },
  disclaimer:
    "Independent of Transport for London. Not an official TfL map. Always check TfL before you travel.",
  caseStudy: {
    problem:
      "Schematic tube maps show how lines connect. They do not show where those routes sit on the street, or how buses and river services meet a neighbourhood, hotel, or landmark.",
    solution:
      "City Line Map puts London's Underground, bus network, and river services on one geographic map. It is for people who want to see where routes actually run, rather than only ask for a single itinerary.",
    results: [
      { label: "Status", value: "Live website" },
      { label: "Coverage", value: "London" },
      { label: "Access", value: "Free, no account" },
      { label: "Independence", value: "Independent of TfL" },
    ],
  },
  proof:
    "The work is a shipped public product: open transport data, an interactive map, and a static website that opens in a browser.",
} as const;
