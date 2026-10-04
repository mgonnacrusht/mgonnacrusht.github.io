---
title: Flutter or native Android for your first app?
description: A practical guide to choosing between Flutter and native Android for a first mobile app, from a UK company that builds and publishes both.
date: 2026-10-04
updated: 2026-10-04
---

If you are building your first mobile app, one of the first questions is which technology to use. For most startups it comes down to two options: Flutter, or a native Android app written in Kotlin or Java. We have shipped both, so here is how we think about it.

## What Flutter is good at

- **One codebase.** The same code can serve Android and, where needed, iOS.
- **Quick to iterate.** Hot reload shows changes in a running app within seconds, which keeps early feedback loops short.
- **Plenty for typical business apps.** Forms, lists, accounts, payments and notifications are all well covered by mature packages.
- **Consistent look.** Flutter draws its own interface, so the app looks the same across devices and Android versions.

## When native Android is the better fit

Native Android means using Google's own tools directly. Today that is usually Kotlin with Jetpack Compose, while many established apps are written in Java.

- **Heavy platform work.** Flutter can reach Android features such as background services, home screen widgets or Bluetooth through plugins and platform channels. If the app is built mostly around those features, native code is often simpler.
- **An existing native app.** If you already have a native Android codebase, extending it is almost always cheaper than rewriting it.
- **Android only, for good.** If you will never need iOS, the main advantage of Flutter matters less.

## Performance and app size

For typical business apps, users will not notice a performance difference. Flutter apps start a little larger, because they include Flutter's rendering engine, but for most products this is not a deciding factor. Very graphics-heavy or hardware-heavy apps are the exception and should be assessed case by case.

## Long-term maintenance

Both are well supported. Flutter is maintained by Google and widely used, and native Android is the platform's own toolkit. What matters more is that the code is clean, documented and handed over properly, so that another developer can pick it up later if needed.

## What about iOS?

Flutter can target iOS from the same code, but building and publishing an iOS app needs Apple tooling and a developer account, so iOS is scoped per project rather than assumed. If you only need Android for now, starting there keeps the first version smaller and cheaper, and Flutter keeps the iOS door open.

## How we usually decide

| Your situation | What we usually recommend |
| --- | --- |
| New app, first version | Flutter by default |
| Existing native Android app | Stay native and add to it |
| App built around specific Android features | Native Android |

Our own apps use both. [Palia Clock](/palia-clock/) is a native Java app live on Google Play, and [SaveT](/savet/) is a Flutter app in closed beta.

## What it means for cost

A small new app is typically {{price:type_new_app.size_s}} and a medium app {{price:type_new_app.size_m}}, whichever technology fits. Adding iOS is priced on top. See [how much a mobile app costs in the UK](/blog/how-much-does-a-mobile-app-cost-uk/) for what drives the price and what to budget after launch.

If you are still unsure, describe what the app needs to do and we will recommend an approach.
