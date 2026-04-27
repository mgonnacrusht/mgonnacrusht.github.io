---
title: About MgonnacrushT
layout: page
description: MgonnacrushT builds SaveT and delivers mobile and SaaS product engineering services.
bodyClass: page-about
hero_title: "About MgonnacrushT Limited"
lead: "A UK-based product company focused on practical software with long-term value. Our primary product is SaveT, and we also ship mobile and SaaS products for other teams."
cta:
  label: "Talk to us"
  url: "mailto:hello@mgonnacrusht.co.uk"
cta_secondary:
  label: "Explore SaveT"
  url: "/savet/"
---

## What we build

We work across the full delivery lifecycle — from product design to deployment.

<div class="row">
{% for service in site.data.services %}
  <div class="col-12 col-md-6 mb-3 d-flex">
    <div class="service-card">
      <span class="service-card-icon">{{ service.icon_label }}</span>
      <h3 class="service-card-title">{{ service.name }}</h3>
      <p class="service-card-text">{{ service.summary }}</p>
    </div>
  </div>
{% endfor %}
</div>

Our technical scope includes Flutter apps, Spring Boot APIs, cloud infrastructure (AWS/GCP/VPS), PostgreSQL, CI/CD, deployment, and Google Play publishing.

**Availability:** Remote  
**Pricing:** Contact for pricing

## Product philosophy

We prioritize clear UX, stable architecture, and sustainable product decisions over short-term hype.

- Solving real user problems with focused scope.
- Shipping maintainable systems with sensible defaults.
- Improving products through iteration and feedback.

## Privacy and trust

For SaveT and client work, we follow straightforward data principles:

- User data should remain user-first.
- Security and reliability should be built in, not patched in later.
- Policies and disclosures should be clear and readable.

## Get in touch

If you want early access to SaveT, product collaboration, or engineering support for your app/SaaS, email **hello@mgonnacrusht.co.uk**.
