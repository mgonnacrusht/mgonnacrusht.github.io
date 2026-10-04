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
      { label: "Server setup and self-hosted n8n", href: "/services/server-setup/" },
      { label: "Flutter app development", href: "/services/flutter-app-development/" },
      { label: "How much does a mobile app cost in the UK?", href: "/blog/how-much-does-a-mobile-app-cost-uk/" },
    ],
  },
  {
    slug: "website-development",
    metaTitle: "Small Business Website Developer UK",
    metaDescription:
      "Fast, mobile-friendly websites for UK small businesses and startups, built with Next.js and set up for search. Fixed scope and published prices.",
    eyebrow: "Website development",
    h1: "Websites for UK small businesses",
    lead: "A fast, mobile-friendly website that explains what you do and makes it easy to get in touch. Built with Next.js, set up for search engines and deployed to your domain, for a fixed price agreed up front.",
    included: [{ items: includedFor("type_website") }],
    steps: sharedSteps,
    aside: {
      title: "Why not a website builder?",
      text: "Website builders are fine for a simple page you edit yourself, but they charge every month and can be slow. A custom site is a one-off build, loads quickly and costs very little to host. You own the code and can move it whenever you like.",
    },
    proof: {
      title: "Sites we have built",
      text: "This website is a static Next.js site, rebuilt from an older setup with its search rankings and old links preserved. City Line Map is a public Next.js website with an interactive map of London transport.",
      links: [
        { label: "See City Line Map", href: "/citylinemap/" },
        { label: "See our portfolio", href: "/products/" },
      ],
    },
    prices: [
      {
        label: "Small website",
        range: priceRange("type_website", "size_s"),
        note: `A few pages for a company or service. Typically ${timeline("type_website", "size_s")}.`,
      },
      {
        label: "Larger website",
        range: priceRange("type_website", "size_m"),
        note: `More pages or a blog. Typically ${timeline("type_website", "size_m")}.`,
      },
    ],
    priceNote:
      "Your domain and hosting are paid separately, usually a few pounds a month or less. The project estimate gives a range for your specific project.",
    faq: [
      {
        question: "How much does a small business website cost?",
        answer: `A small website is typically ${priceRange("type_website", "size_s")} and a larger one with more pages or a blog ${priceRange("type_website", "size_m")}. The price is agreed in writing before work starts.`,
      },
      {
        question: "How long does it take?",
        answer: `A small website typically takes ${timeline("type_website", "size_s")} and a larger one ${timeline("type_website", "size_m")}, once the content and scope are agreed.`,
      },
      {
        question: "Will it show up on Google?",
        answer:
          "We set up the basics: page titles and descriptions, a sitemap, fast loading and mobile-friendly pages. Rankings take time and depend on your content, so we can also advise on what to write.",
      },
      {
        question: "Can I edit the website myself?",
        answer:
          "Tell us early which parts you want to update yourself and we will plan for it. Otherwise we can make changes for you at our hourly rate.",
      },
      {
        question: "Do I own the website?",
        answer:
          "Yes. The code is handed over to you and the domain stays in your name.",
      },
    ],
    related: [
      {
        label: "How much does a small business website cost in the UK?",
        href: "/blog/how-much-does-a-small-business-website-cost-uk/",
      },
      { label: "n8n automation", href: "/services/n8n-automation/" },
      { label: "All services", href: "/services/" },
    ],
  },
  {
    slug: "n8n-automation",
    metaTitle: "n8n Consultant UK: Automation for Small Businesses",
    metaDescription:
      "n8n workflow automation for UK startups and small businesses. We connect your tools, automate repetitive work and hand it over, with published prices.",
    eyebrow: "n8n automation",
    h1: "n8n automation for UK small businesses",
    lead: "Stop copying data between tools by hand. We build n8n workflows that connect the apps you already use, test them with you and hand them over with short notes. Small, fixed-scope jobs with the price shown up front.",
    included: [{ items: includedFor("type_automation") }],
    steps: sharedSteps,
    aside: {
      title: "What can I automate?",
      text: "Good first workflows: form submissions saved to a spreadsheet and sent to your team chat, enquiries copied into your CRM, invoices and receipts filed automatically, and a daily summary email. If a task repeats every week and follows the same steps, it is usually a good candidate.",
    },
    proof: {
      title: "Self-hosted on infrastructure we run ourselves",
      text: "We run our own services on Linux servers with Docker, including the self-hosted analytics for City Line Map. Your n8n can run the same way on a server you control, so your data and workflows stay yours.",
      links: [
        { label: "Server setup and self-hosted n8n", href: "/services/server-setup/" },
        { label: "See City Line Map", href: "/citylinemap/" },
      ],
    },
    prices: [
      {
        label: "Automation, small",
        range: priceRange("type_automation", "size_s"),
        note: `1 to 3 workflows. Typically ${timeline("type_automation", "size_s")}.`,
      },
      {
        label: "Automation, medium",
        range: priceRange("type_automation", "size_m"),
        note: `4 to 10 workflows with integrations. Typically ${timeline("type_automation", "size_m")}.`,
      },
    ],
    priceNote:
      "If n8n needs its own server, server setup is priced separately. The project estimate gives a range for your specific project.",
    faq: [
      {
        question: "What is n8n?",
        answer:
          "n8n is a workflow automation tool that connects apps and services, for example sending a form submission to a spreadsheet and a chat message. We install it, build the workflows you agree and hand over short notes.",
      },
      {
        question: "Do I need my own server?",
        answer:
          "n8n can run as a hosted service or on a server you control. Self-hosting keeps your data on your own server and has no limit on how often workflows run. We can set one up for you, or work with one you already have.",
      },
      {
        question: "How much does n8n automation cost?",
        answer: `Small automation jobs are typically ${priceRange("type_automation", "size_s")} and medium ones ${priceRange("type_automation", "size_m")}. Server setup, if you need it, is typically ${priceRange("type_server", "size_s")}.`,
      },
      {
        question: "How long does it take?",
        answer: `A small automation job typically takes ${timeline("type_automation", "size_s")} and a medium one ${timeline("type_automation", "size_m")}.`,
      },
      {
        question: "Who looks after the workflows afterwards?",
        answer:
          "You do, with the notes we hand over. If something breaks or you want changes later, we can help at our hourly rate or as a small fixed-scope job.",
      },
    ],
    related: [
      { label: "Server setup and self-hosted n8n", href: "/services/server-setup/" },
      { label: "n8n for small businesses", href: "/blog/n8n-for-small-businesses/" },
      { label: "All services", href: "/services/" },
    ],
  },
  {
    slug: "server-setup",
    metaTitle: "Self-Hosted n8n and Server Setup for Small Businesses",
    metaDescription:
      "Linux server setup with Docker for UK startups and small businesses. Deploy your app or a self-hosted n8n, secured and documented, with published prices.",
    eyebrow: "Server setup",
    h1: "Server setup and self-hosted n8n",
    lead: "Get your app, website or n8n online on a server you control. We set up and secure a Linux server with Docker, deploy your software and hand over short notes on how it runs.",
    included: [{ items: includedFor("type_server") }],
    steps: sharedSteps,
    aside: {
      title: "Managed platform or your own server?",
      text: "Managed platforms are quick to start, but costs grow with usage and you live within their limits. Your own server costs a fixed monthly amount and keeps everything under your control, but it has to be set up properly: updates, HTTPS, backups and monitoring. That setup is what we do.",
    },
    proof: {
      title: "We run our own services this way",
      text: "The analytics for City Line Map run self-hosted with Docker on an Ubuntu server that we set up and maintain ourselves, including HTTPS, updates and automatic restarts.",
      links: [{ label: "See City Line Map", href: "/citylinemap/" }],
    },
    prices: [
      {
        label: "Server setup, small",
        range: priceRange("type_server", "size_s"),
        note: `One app or n8n on one server. Typically ${timeline("type_server", "size_s")}.`,
      },
      {
        label: "Server setup, medium",
        range: priceRange("type_server", "size_m"),
        note: `Several services with backups and monitoring. Typically ${timeline("type_server", "size_m")}.`,
      },
    ],
    priceNote:
      "The server itself is paid to your hosting provider, usually a small fixed monthly fee. The project estimate gives a range for your specific project.",
    faq: [
      {
        question: "Which server should I use?",
        answer:
          "A small Linux virtual server from a reputable provider is enough for most small apps and for n8n. We help you choose one and set it up in your name, so you own the account.",
      },
      {
        question: "What does self-hosting n8n involve?",
        answer:
          "Running n8n with Docker, a domain with HTTPS, a database, automatic restarts and backups. We set this up and show you how to update it.",
      },
      {
        question: "How much does it cost?",
        answer: `Server setup is typically ${priceRange("type_server", "size_s")} for one app or n8n, and ${priceRange("type_server", "size_m")} for several services with backups and monitoring.`,
      },
      {
        question: "How long does it take?",
        answer: `A small server setup typically takes ${timeline("type_server", "size_s")} and a larger one ${timeline("type_server", "size_m")}.`,
      },
      {
        question: "Do you look after the server afterwards?",
        answer:
          "We hand over notes so you can run it yourself. Updates and fixes later can be done at our hourly rate or as a small fixed-scope job.",
      },
    ],
    related: [
      { label: "n8n automation", href: "/services/n8n-automation/" },
      { label: "Self-hosting n8n: costs and requirements", href: "/blog/self-hosting-n8n/" },
      { label: "Backend and API development", href: "/services/backend-development/" },
    ],
  },
  {
    slug: "app-maintenance",
    metaTitle: "App Maintenance Services UK",
    metaDescription:
      "App maintenance for UK startups and small businesses: Google Play target API updates, bug fixes, SDK upgrades and small improvements, priced per job.",
    eyebrow: "App maintenance",
    h1: "App maintenance and support",
    lead: "Keep your app working and accepted by the stores. We update target API levels and dependencies, fix bugs and make small improvements, priced as fixed jobs instead of an open-ended contract.",
    included: [
      {
        items: [
          "Target API and SDK updates for Google Play",
          ...includedFor("type_fix"),
          "A tested release build",
        ],
      },
    ],
    steps: sharedSteps,
    aside: {
      title: "Why apps need regular updates",
      text: "Every year Google Play raises the minimum target API level for new apps and updates. An app that falls behind cannot publish updates, and one that falls too far behind stops being shown to new users on newer Android versions. Libraries and login or payment SDKs change too, so an app left alone for a year or two usually needs work before its next release.",
    },
    proof: {
      title: "Maintained on Google Play",
      text: `Palia Clock is maintained on Google Play as a solo project, including releases, updates and the store listing. It has ${paliaClock.downloads} downloads and is rated ${paliaClock.rating}.`,
      links: [
        { label: "Read the Palia Clock case study", href: "/palia-clock/" },
        { label: "View on Google Play", href: paliaClock.playUrl, external: true },
      ],
    },
    prices: [
      {
        label: "Fixes or updates, small",
        range: priceRange("type_fix", "size_s"),
        note: `A target API update or a few focused fixes. Typically ${timeline("type_fix", "size_s")}.`,
      },
      {
        label: "Fixes or updates, medium",
        range: priceRange("type_fix", "size_m"),
        note: `Several issues or larger dependency upgrades. Typically ${timeline("type_fix", "size_m")}.`,
      },
      {
        label: "Small improvements",
        range: priceRange("type_features", "size_s"),
        note: `1 to 2 new features in an existing app. Typically ${timeline("type_features", "size_s")}.`,
      },
    ],
    priceNote:
      "Larger updates are scoped individually. The project estimate gives a range for your specific project.",
    faq: [
      {
        question: "What is the Google Play target API requirement?",
        answer:
          "Google Play requires new apps and updates to target a recent Android API level, and raises the level every year, usually by the end of August. If your app misses it, you cannot publish updates until it is upgraded.",
      },
      {
        question: "How much does app maintenance cost?",
        answer: `A target API update or a few focused fixes is typically ${priceRange("type_fix", "size_s")}, and larger upgrades ${priceRange("type_fix", "size_m")}. Small improvements start from ${priceFrom("type_features")}.`,
      },
      {
        question: "Do you offer a monthly plan?",
        answer:
          "We price maintenance per job, so you only pay for work that is needed. If you need regular updates, we can agree a schedule in writing.",
      },
      {
        question: "Can you work on an app someone else built?",
        answer:
          "Yes. We start with a short code review, then agree the fixes and updates in writing before any work starts.",
      },
    ],
    related: [
      {
        label: "Google Play target API level: what app owners need to do",
        href: "/blog/google-play-target-api-level/",
      },
      {
        label: "How much does it cost to maintain an app?",
        href: "/blog/how-much-does-it-cost-to-maintain-an-app/",
      },
      { label: "Android app development", href: "/services/android-app-development/" },
    ],
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((page) => page.slug === slug);
}
