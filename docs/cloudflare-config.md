# Cloudflare configuration — mgonnacrusht.co.uk

Operational reference for DNS, SSL, and redirect rules. Domain registration stays at Hostinger; nameservers point to Cloudflare.

For SSL certificate order and GitHub Pages deploy, see also [`.cursor/rules/cloudflare-github-pages.mdc`](../.cursor/rules/cloudflare-github-pages.mdc).

---

## Cloudflare Redirect Rule — `/features/*` → `/savet/`

**Nerede:** Cloudflare Dashboard → mgonnacrusht.co.uk → Rules → Redirect Rules

**Kural adı:** `features-to-savet-redirect`

**Koşul (If incoming requests match):**

- Tip: Custom filter expression
- Field: URI Path
- Operator: starts with
- Value: `/features/`

**Aksiyon (Then):**

- Target URL: `https://mgonnacrusht.co.uk/savet/` (statik, wildcard yok)
- Status code: 301 - Permanent Redirect
- Redirect POST requests: kapalı (işaretli değil)
- Preserve query string: açık

**Amaç:** Eski 8 adet `/features/*` use-case sayfası (`movies-tv-watchlist`, `restaurants-cafes-to-try`, `articles-videos-to-revisit`, `personal-projects-learning`, `collaboration-shared-lists`, `browser-extension-desktop`, `shopping-and-wishlists`, `api-integrations-discovery`) yeni sitede `/savet/` sayfasında birleştirildi. Bu kural eski URL'lere gelen trafiği/SEO değerini kalıcı 301 ile `/savet/`'e taşıyor.

**Fallback:** Eğer bu Cloudflare kuralı herhangi bir sebeple silinir/bozulursa, `public/features/` altındaki build-time meta-refresh sayfaları (`scripts/generate-legacy-redirects.mjs` ile üretilen) yedek olarak devrede kalır — kullanıcı yine `/savet/`'e yönlenir, sadece gerçek 301 header'ı olmaz (SEO sinyali daha zayıf olur).

**Test komutu:**

```bash
curl -I https://mgonnacrusht.co.uk/features/movies-tv-watchlist/
```

Beklenen çıktı: `HTTP/2 301` + `location: https://mgonnacrusht.co.uk/savet/`

**Bağımlılık:** Bu kural yalnızca ilgili DNS kayıtları (A/AAAA/www) **Proxied** (turuncu bulut) modundayken çalışır. **DNS only** (gri bulut) durumunda devre dışı kalır.
