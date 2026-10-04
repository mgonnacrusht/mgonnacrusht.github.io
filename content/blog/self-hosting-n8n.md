---
title: "Self-hosting n8n: what it costs and what you need"
seoTitle: Self-hosting n8n: costs and what you need
description: What you need to self-host n8n for a small business, what it costs each month, and the setup steps that keep it secure and reliable.
date: 2026-09-24
updated: 2026-09-24
---

Running n8n on your own server keeps your data in your hands and removes limits on how often workflows run. It is not hard, but a quick install and a reliable setup are two different things. Here is what you need, what it costs and what has to be in place before you rely on it.

## What you need

- **A small Linux server.** A virtual server with 2 GB of memory is enough for most small businesses. Busy workflows need more.
- **A domain or subdomain.** For example automations.yourcompany.co.uk, so n8n has a stable address.
- **Docker.** The simplest way to install, update and restart n8n.
- **HTTPS.** Required for webhooks from other services and for logging in safely.
- **A database.** n8n works out of the box with a built-in database, and PostgreSQL is the better choice once workflows matter to the business.
- **Backups.** Of the database and the n8n data folder, stored somewhere other than the server.

## What it costs

| Item | Typical cost |
| --- | --- |
| Server | A small fixed monthly fee to your hosting provider |
| Domain | A small yearly fee, or free if you use a subdomain of your existing domain |
| n8n itself | Free for self-hosted use under its licence, check the current terms for your use case |
| Setup | A one-off job, done by you or by us |
| Upkeep | A little time each month for updates |

## The setup checklist

1. Create the server in your name and lock down access with SSH keys.
2. Turn on the firewall and automatic security updates.
3. Install Docker and run n8n with a database.
4. Put n8n behind HTTPS on your domain.
5. Set restart rules so n8n comes back after a reboot.
6. Schedule backups and test that a restore actually works.
7. Write down how to update n8n and where the backups are.

The last two steps are the ones most often skipped, and the ones you need on the day something goes wrong.

## Do it yourself or get help?

If you are comfortable on a Linux command line, the checklist above is a few hours of work. If not, it is usually cheaper to have it set up once and properly. Server setup with us is typically {{price:type_server.size_s}} for one app or n8n, and takes {{timeline:type_server.size_s}}. The server stays in your name and you get short notes on how it runs.

See [server setup and self-hosted n8n](/services/server-setup/), or [n8n for small businesses](/blog/n8n-for-small-businesses/) for ideas on what to automate first.
