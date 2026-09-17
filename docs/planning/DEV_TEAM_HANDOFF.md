# Development Team Handoff

**Status:** Planning complete — implementation starts here.  
**Primary editor build spec:** [EDITOR_IMPLEMENTATION_GUIDE.md](./EDITOR_IMPLEMENTATION_GUIDE.md) · [DOCX](../../Shyara%20Digital%20-%20Studio%20Editor%20Implementation%20Guide.docx) · [PDF](./EDITOR_IMPLEMENTATION_GUIDE.pdf)  
**Platform overview:** [Shyara Digital - Studio Editor Developer Brief.docx](../../Shyara%20Digital%20-%20Studio%20Editor%20Developer%20Brief.docx) (v1.1)  
**Research:** [RESEARCH.md](./RESEARCH.md)

The planning agent did **not** ship application code, Supabase migrations, or deployments. This document scopes what engineering must build.

## Launch blocker

All three v1 animation handlers must visually match `Sample Engagement Invitation 1.mp4` before adding templates to the public catalog:

- `fade_writing_element`
- `skate_writing_rtl`
- `burst_writing_enter`

## Suggested build order

1. **Foundation** — Staging + production Supabase; schema (`platform_settings`, templates, versions, entitlements, render_jobs); Fastify API + admin RBAC; storage buckets.
2. **animation-engine** — `packages/animation-engine`; unit tests at fixed `t_ms`; grapheme-based writing reveal.
3. **MVP assets** — Engagement Sample 1 `definition_json`; fonts; 4K + 1080p background MP4s.
4. **Studio UI** — `/studio/:templateId`; click-to-edit; engine-driven DOM overlays; pay gate.
5. **Payments** — Razorpay (staging test keys); webhooks; entitlements + download quota.
6. **Render worker** — BullMQ; Docker with FFmpeg + node-canvas; quality presets; login-gated download.
7. **Admin v1** — Catalog, JSON editor, coupons, orders, render jobs, manual fulfillment.
8. **QA** — [FOUNDER_QA_CHECKLIST.md](./FOUNDER_QA_CHECKLIST.md)

## Core packages / routes (suggested layout)

```
packages/animation-engine/
frontend/src/features/studio/
frontend/src/features/admin/
backend/          # Fastify API
worker/           # Render service
```

## Definition of done (MVP)

- [ ] Pay-first: `/studio` blocked without entitlement
- [ ] Click-to-edit with frozen animation during edit
- [ ] Page 1 (0–6s) not editable
- [ ] Export 4K / 2K / 1080p / WhatsApp preset at 60fps
- [ ] Preview and export pass golden-frame comparison
- [ ] Admin controls prices, templates, JSON — no hardcoded catalog in React
- [ ] Staging E2E with Razorpay test mode before production keys

## Out of scope for MVP

Canva API, general NLE, user photos in studio, animated PDF editor, international payments.

## Regenerate developer brief

```bash
python scripts/build_research_brief_v11.py
```
