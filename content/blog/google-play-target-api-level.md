---
title: "Google Play target API level: what app owners need to do"
description: What the Google Play target API level requirement means for app owners, what happens if you miss it, and how the update works.
date: 2026-08-26
updated: 2026-08-26
---

Every year Google Play raises the minimum Android version that apps must be built for. If you own an Android app and have not touched it in a while, this is the requirement most likely to catch you out. Here is what it means and what to do about it.

## What the requirement is

Each Android app declares a **target API level**: the Android version it was built and tested for. Google Play sets a minimum target level and raises it once a year, usually with a deadline at the end of August.

In short:

- **New apps and updates** must target a recent API level, usually within a year of the latest Android release.
- **Existing apps** that fall further behind stop being shown to new users on newer Android versions.

Always check the current deadline in Google Play Console, as the exact dates and levels change each year.

## What happens if you miss it

| Situation | What happens |
| --- | --- |
| You try to publish an update | Google Play Console blocks the release until the app targets the required level |
| You do nothing | The app stays live for current users, but after a further deadline new users on newer Android versions can no longer find or install it |
| You need more time | Google Play usually lets you request a short extension in Play Console |

The real risk is timing. A bug fix or urgent change can suddenly be blocked because the app first needs a target API upgrade.

## What the update involves

Raising the target level is more than changing one number:

1. Update the Android build tools and the libraries the app depends on.
2. Handle behaviour changes in the new Android version, for example permissions, notifications and background work.
3. Update login, payment or analytics SDKs that also have minimum versions.
4. Test on real devices and on the new Android version.
5. Build, sign and publish the release.

For a well-maintained app this is often a few days. For an app that has not been touched in two or three years, the library upgrades take most of the time.

## How to stay ahead

- Plan one update a year, ideally before the summer deadline.
- Keep libraries reasonably up to date between releases.
- Watch the policy messages in Google Play Console.

If you would rather not do this yourself, a target API update or a few focused fixes is typically {{price:type_fix.size_s}} with us and takes {{timeline:type_fix.size_s}}. See [app maintenance](/services/app-maintenance/) for what is included.
