import {
  addOnRange,
  includedFor,
  priceFrom,
  priceRange,
  timeline,
} from "@/lib/quiz/prices";
import { paliaClock } from "@/lib/content/palia-clock";

export type LandingLink = { label: string; href: string; external?: boolean };

export type LandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  included: { title?: string; items: string[] }[];
  steps: { title: string; text: string }[];
  aside?: { title: string; text: string };
  proof: { title: string; text: string; links: LandingLink[] };
  prices: { label: string; range: string; note: string }[];
  priceNote?: string;
  faq: { question: string; answer: string }[];
  related: LandingLink[];
};

const sharedSteps: LandingPage["steps"] = [
  {
    title: "Free discovery call",
    text: "A 15 to 30 minute call to understand what you want to build. No obligation.",
  },
  {
    title: "Written scope and milestones",
    text: "You get a clear scope, price and timeline before any work starts. Larger projects begin with a small first milestone.",
  },
  {
    title: "Build and hand-over",
    text: "The work is delivered in milestones, with no surprise invoices along the way.",
  },
];

export const landingPages: LandingPage[] = [
  {
    slug: "flutter-app-development",
    metaTitle: "Flutter App Development for UK Startups",
    metaDescription:
      "Flutter apps for UK startups, built by a small UK company. From first screen to store release, with a fixed scope, clear milestones and published pricing.",
    eyebrow: "Flutter app development",
    h1: "Flutter app development for UK startups",
    lead: "One Flutter codebase, built from first screen to store release. We start with a short call, agree a fixed scope in writing and build in milestones, so you know what you are paying for.",
    included: [{ items: includedFor("type_new_app") }],
    steps: sharedSteps,
    proof: {
      title: "Our own Flutter product",
      text: "SaveT is a Flutter app for saving and sorting links, places and ideas. It is in closed beta and documented as a full case study.",
      links: [{ label: "Read the SaveT case study", href: "/savet/" }],
    },
    prices: [
      {
        label: "Small app",
        range: priceRange("type_new_app", "size_s"),
        note: `1 to 5 screens, simple flow. Typically ${timeline("type_new_app", "size_s")}.`,
      },
      {
        label: "Medium app",
        range: priceRange("type_new_app", "size_m"),
        note: `6 to 15 screens, with accounts, payments or notifications. Typically ${timeline("type_new_app", "size_m")}.`,
      },
    ],
    priceNote:
      "A backend, designs or a second platform are added on top. The project estimate gives a range for your specific project.",
    faq: [
      {
        question: "How much does a Flutter app cost?",
        answer: `A small app of 1 to 5 screens is typically ${priceRange("type_new_app", "size_s")} and takes ${timeline("type_new_app", "size_s")}. A medium app of 6 to 15 screens is typically ${priceRange("type_new_app", "size_m")} and takes ${timeline("type_new_app", "size_m")}. Use the project estimate for a range that fits your project.`,
      },
      {
        question: "Do you build for Android and iOS?",
        answer:
          "We work Android first. iOS can be scoped per project when the requirements fit, so tell us early if you need it.",
      },
      {
        question: "Can I start with something small?",
        answer:
          "Yes. Many projects start with a small first milestone, so you see working results before committing to the full scope.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Milestone or fixed-price work is preferred. The scope is agreed in writing before work starts, and there are no surprise invoices.",
      },
      {
        question: "Who publishes the app?",
        answer:
          "We prepare the release and guide you through submission from your own developer account. If you prefer, we can publish it for you under our account. The estimate shows the price difference.",
      },
    ],
    related: [
      { label: "Android app development", href: "/services/android-app-development/" },
      { label: "Backend and API development", href: "/services/backend-development/" },
      { label: "How much does a mobile app cost in the UK?", href: "/blog/how-much-does-a-mobile-app-cost-uk/" },
    ],
  },
  {
    slug: "android-app-development",
    metaTitle: "Android App Development for UK Startups",
    metaDescription:
      "Android app development from a small UK company. Native Java and Flutter Android apps, with Google Play publishing and release support.",
    eyebrow: "Android app development",
    h1: "Android app development for UK startups",
    lead: "Native Java or Flutter, depending on what the app needs. We build the app, prepare the release and support you through Google Play publishing.",
    included: [{ items: includedFor("type_new_app") }],
    steps: sharedSteps,
    aside: {
      title: "Native Java or Flutter?",
      text: "Flutter is usually the better fit for a first version: one codebase, quick to iterate, and it can reach iOS later if you need it. Native Android is the better fit when the app is built around specific Android features or you already have a native codebase.",
    },
    proof: {
      title: "Live on Google Play",
      text: `Palia Clock is a native Java Android app for the Palia player community. It was designed, built and published on Google Play as a solo project, including the store listing, releases and updates. It has ${paliaClock.downloads} downloads and is rated ${paliaClock.rating} on Google Play.`,
      links: [
        { label: "Read the Palia Clock case study", href: "/palia-clock/" },
        {
          label: "View on Google Play",
          href: paliaClock.playUrl,
          external: true,
        },
      ],
    },
    prices: [
      {
        label: "New Android app, small",
        range: priceRange("type_new_app", "size_s"),
        note: `1 to 5 screens. Typically ${timeline("type_new_app", "size_s")}.`,
      },
      {
        label: "New Android app, medium",
        range: priceRange("type_new_app", "size_m"),
        note: `6 to 15 screens. Typically ${timeline("type_new_app", "size_m")}.`,
      },
      {
        label: "New features, small",
        range: priceRange("type_features", "size_s"),
        note: `1 to 2 features in an existing app. Typically ${timeline("type_features", "size_s")}.`,
      },
      {
        label: "Fixes or code review, small",
        range: priceRange("type_fix", "size_s"),
        note: `One focused issue or a short review. Typically ${timeline("type_fix", "size_s")}.`,
      },
    ],
    priceNote:
      "The project estimate covers the other sizes and add-ons such as a backend or designs.",
    faq: [
      {
        question: "How much does an Android app cost?",
        answer: `A small new app is typically ${priceRange("type_new_app", "size_s")} and a medium app ${priceRange("type_new_app", "size_m")}. Adding features to an existing app starts around ${priceFrom("type_features")}, and a short code review around ${priceFrom("type_fix")}.`,
      },
      {
        question: "Can you work on an existing Android app?",
        answer:
          "Yes. We can add features, fix bugs or review the code and suggest improvements.",
      },
      {
        question: "Do you handle Google Play publishing?",
        answer:
          "Yes. We prepare the release build and guide you through submission from your own Google Play developer account, or publish it for you. Google charges a one-time fee for a developer account.",
      },
      {
        question: "How long does it take?",
        answer: `A small app typically takes ${timeline("type_new_app", "size_s")} and a medium app ${timeline("type_new_app", "size_m")}, once the written scope is agreed.`,
      },
    ],
    related: [
      { label: "Flutter app development", href: "/services/flutter-app-development/" },
      { label: "Backend and API development", href: "/services/backend-development/" },
      { label: "Flutter or native Android for your first app?", href: "/blog/flutter-or-native-android-first-app/" },
    ],
  },
  {
    slug: "backend-development",
    metaTitle: "Backend and API Development for UK Startups",
    metaDescription:
      "Java Spring Boot backends for UK startups. REST APIs, PostgreSQL and deployment on a Linux VPS, with fixed-scope pricing.",
    eyebrow: "Backend and API development",
    h1: "Backend and API development for UK startups",
    lead: "The system behind your app or product: data, user accounts and integrations. We build it with Java and Spring Boot, store data in PostgreSQL and deploy it on a Linux server.",
    included: [{ items: includedFor("type_backend") }],
    steps: sharedSteps,
    aside: {
      title: "Spring Boot or Firebase?",
      text: "A custom Spring Boot backend suits products with their own data model and integrations. For many mobile apps, Firebase is quicker and cheaper to run. SaveT uses Firebase for that reason. We recommend the option that fits your product, not the one we prefer.",
    },
    proof: {
      title: "A past project",
      text: "An IP geolocation REST API built with Spring Boot and PostgreSQL, packaged with Docker and deployed on a self-managed Ubuntu VPS. We designed, built and hosted it end to end, from the data model to the server.",
      links: [{ label: "See our other work", href: "/products/" }],
    },
    prices: [
      {
        label: "Small backend",
        range: priceRange("type_backend", "size_s"),
        note: `Simple data storage for one app. Typically ${timeline("type_backend", "size_s")}.`,
      },
      {
        label: "Medium backend",
        range: priceRange("type_backend", "size_m"),
        note: `User accounts, several kinds of data and integrations. Typically ${timeline("type_backend", "size_m")}.`,
      },
      {
        label: "Added to an app project",
        range: addOnRange("extra_backend"),
        note: "When the backend is part of a mobile app project.",
      },
    ],
    priceNote:
      "The project estimate gives a range for your specific project.",
    faq: [
      {
        question: "How much does a backend cost?",
        answer: `A small backend is typically ${priceRange("type_backend", "size_s")} and a medium backend ${priceRange("type_backend", "size_m")}. Adding a backend to a mobile app project costs ${addOnRange("extra_backend")} on top.`,
      },
      {
        question: "Where is it hosted?",
        answer:
          "On a Linux VPS with Docker, or on AWS or GCP when the project needs them.",
      },
      {
        question: "Can you connect it to my mobile app?",
        answer:
          "Yes. We build mobile apps and backends together or separately, including the integration between them.",
      },
      {
        question: "Do you also set up the server?",
        answer:
          "Yes. Server setup, deployment and CI/CD are part of the same service. See automation and hosting for details.",
      },
    ],
    related: [
      { label: "Automation and hosting", href: "/services/automation-and-hosting/" },
      { label: "Flutter app development", href: "/services/flutter-app-development/" },
      { label: "How much does a mobile app cost in the UK?", href: "/blog/how-much-does-a-mobile-app-cost-uk/" },
    ],
  },
  {
    slug: "automation-and-hosting",
    metaTitle: "n8n Automation and Server Setup for Startups",
    metaDescription:
      "n8n workflow automation and Linux VPS setup with Docker for startups and small businesses. Fixed-scope packages with published pricing.",
    eyebrow: "Automation and hosting",
    h1: "Workflow automation and server setup",
    lead: "Connect your tools, automate repetitive work and get your app or tool online on a server you control. Small, fixed-scope jobs with the price shown up front.",
    included: [
      { title: "Workflow automation", items: includedFor("type_automation") },
      { title: "Server setup", items: includedFor("type_server") },
    ],
    steps: sharedSteps,
    proof: {
      title: "We run our own services this way",
      text: "The analytics for City Line Map are self-hosted with Docker on an Ubuntu VPS, and this website deploys through GitHub Actions.",
      links: [{ label: "See City Line Map", href: "/citylinemap/" }],
    },
    prices: [
      {
        label: "Automation, small",
        range: priceRange("type_automation", "size_s"),
        note: `1 to 3 automations. Typically ${timeline("type_automation", "size_s")}.`,
      },
      {
        label: "Automation, medium",
        range: priceRange("type_automation", "size_m"),
        note: `4 to 10 automations with integrations. Typically ${timeline("type_automation", "size_m")}.`,
      },
      {
        label: "Server setup, small",
        range: priceRange("type_server", "size_s"),
        note: `One app on one server. Typically ${timeline("type_server", "size_s")}.`,
      },
      {
        label: "Server setup, medium",
        range: priceRange("type_server", "size_m"),
        note: `Several services with backups and monitoring. Typically ${timeline("type_server", "size_m")}.`,
      },
    ],
    priceNote:
      "The project estimate gives a range for your specific project.",
    faq: [
      {
        question: "What is n8n?",
        answer:
          "n8n is a workflow automation tool that connects apps and services, for example sending a form submission to a spreadsheet and a chat message. We install it, build the workflows you agree and hand over short notes.",
      },
      {
        question: "Do I need my own server?",
        answer:
          "n8n can run on a server you control. We can set one up for you, or work with the one you already have.",
      },
      {
        question: "How much does it cost?",
        answer: `Small automation jobs are typically ${priceRange("type_automation", "size_s")} and medium ones ${priceRange("type_automation", "size_m")}. Server setup is typically ${priceRange("type_server", "size_s")} for one app and ${priceRange("type_server", "size_m")} for several services.`,
      },
      {
        question: "How long does it take?",
        answer: `A small automation job typically takes ${timeline("type_automation", "size_s")}. A small server setup takes ${timeline("type_server", "size_s")}.`,
      },
    ],
    related: [
      { label: "Backend and API development", href: "/services/backend-development/" },
      { label: "Flutter app development", href: "/services/flutter-app-development/" },
      { label: "All services", href: "/services/" },
    ],
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((page) => page.slug === slug);
}
