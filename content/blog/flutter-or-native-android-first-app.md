---
title: Flutter or native Android for your first app?
description: A plain guide to choosing between Flutter and native Android for a first mobile app, from a developer who builds both.
date: 2026-10-04
updated: 2026-10-04
---

If you are building your first mobile app, one of the first questions is which technology to use. For most startups it comes down to two options: Flutter, or a native Android app written in Java. We build both, so here is how we think about it.

## What Flutter is good at

- **One codebase.** The same code can serve Android and, where needed, iOS.
- **Quick to iterate.** Changes show up fast during development, which keeps early feedback loops short.
- **Plenty for typical business apps.** Forms, lists, accounts, payments and notifications are all well covered.

## When native Android is the better fit

- The app needs deep access to Android features, such as background services or widgets.
- You already have a native Android codebase to extend.
- Android is the only platform you will ever need and you want the most direct route to Android's own tools.

## What about iOS?

Flutter can target iOS from the same code, but building and publishing an iOS app needs Apple tooling and a developer account, so iOS is scoped per project rather than assumed. If you only need Android for now, starting there keeps the first version smaller and cheaper, and Flutter keeps the iOS door open.

## How we usually decide

- **New app, first version:** Flutter by default.
- **Existing native Android app:** stay native and add to it.
- **Unusual Android-only requirements:** native.

Our own apps use both. [Palia Clock](/palia-clock/) is native Java and live on Google Play, and [SaveT](/savet/) is a Flutter app in closed beta.

## What it means for cost

A small new app is typically {{price:type_new_app.size_s}} and a medium app {{price:type_new_app.size_m}}, whichever technology fits. Adding iOS is priced on top. See [how much a mobile app costs in the UK](/blog/how-much-does-a-mobile-app-cost-uk/) for more detail.

## Not sure which to pick?

Describe what the app needs to do and we will recommend an approach. Try the [project estimate](/services/#estimate) or [get a quote](/contact/).
