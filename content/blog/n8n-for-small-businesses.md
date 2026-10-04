---
title: "n8n for small businesses: what to automate first"
description: A practical guide to n8n for small businesses, with the first workflows worth building, what it costs and when to self-host.
date: 2026-09-17
updated: 2026-09-17
---

Most small businesses lose a few hours every week to copying data between tools: enquiries into a spreadsheet, invoices into a folder, the same email sent again and again. n8n is a workflow automation tool that does this work for you. Here is what it is, what to automate first and what it costs.

## What n8n is

n8n connects the apps you already use and moves data between them when something happens. A workflow starts with a trigger, such as a new form submission or a new email, and then runs a series of steps, such as adding a row to a spreadsheet and posting a message to your team chat.

Two things make it a good fit for small businesses:

- **It can be self-hosted.** n8n can run on a server you control, so your data stays with you and there is no limit on how often workflows run.
- **It grows with you.** Simple workflows are quick to build, and the same tool handles more complex logic later.

## Five workflows worth building first

| Workflow | What it does | Typical time saved |
| --- | --- | --- |
| New enquiry alert | Saves contact form submissions to a spreadsheet and notifies your team | Minutes per enquiry, and nothing is missed |
| Enquiry to CRM | Creates a contact in your CRM from each new lead | No more copy and paste |
| Invoice and receipt filing | Saves attachments from your inbox into the right folder | An hour or two a month |
| Daily summary | Sends one email each morning with yesterday's sales, sign-ups or bookings | A daily check you no longer do by hand |
| Follow-up reminder | Reminds you, or the customer, when nothing has happened for a few days | Fewer lost leads |

A good rule: if a task repeats every week and follows the same steps each time, it is usually worth automating.

## When not to automate

- **The process is still changing.** Automate it once it has settled.
- **It happens a few times a year.** The setup time will not pay back.
- **It needs judgement.** Automate the data gathering and leave the decision to a person.

## Hosted or self-hosted?

n8n can run as a hosted service or on your own server. Hosted is the quickest start. Self-hosting costs a small fixed monthly fee for the server, keeps your data on your own infrastructure and removes limits on workflow runs, but it needs to be set up properly with HTTPS, backups and updates. We cover this in [self-hosting n8n](/blog/self-hosting-n8n/).

## What it costs with us

A small automation job of 1 to 3 workflows is typically {{price:type_automation.size_s}} and takes {{timeline:type_automation.size_s}}. A medium job of 4 to 10 workflows with integrations is typically {{price:type_automation.size_m}}. If n8n needs its own server, setup is typically {{price:type_server.size_s}}.

We build the workflows, test them with you and hand over short notes so you can run them yourself. See [n8n automation](/services/n8n-automation/) for the details.
