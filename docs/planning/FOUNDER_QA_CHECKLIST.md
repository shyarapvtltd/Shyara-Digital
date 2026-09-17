# Founder QA Checklist — Engagement Sample 1

Use this checklist to sign off that engineering output matches the design reference before scaling the template catalog.

**Golden reference:** `Sample Engagement Invitation 1.mp4` (repository root)  
**Design spec:** `Engagement Sample 1 Timeline and Animation Details.docx`

## How to compare

1. Export a test MP4 from staging with **sample customer text** (same strings used in the reference, or agreed test names).
2. Open reference and export side-by-side in a player that supports **frame stepping** (VLC: shortcut `E` for frame forward).
3. At each checkpoint below, pause both videos at the **same timestamp** and verify:
   - Text position (within ~2px at 1080p equivalent)
   - Font family and weight
   - Which letters/glyphs are visible (writing reveal progress)
   - Opacity and motion direction (fade, skate RTL, burst)

## Checkpoint timestamps (seconds)

| Time (s) | What to verify |
| --- | --- |
| 0–6 | No editable overlay; matches baked intro only |
| 6.0 | Partner 1 enter begins — invisible before this |
| ~7–8 | Partner 1 writing reveal mid-progress |
| ~9–10 | Partner 1 static / Partner 2 enter (Partner 2 same window as Partner 1 per spec) |
| 11–12 | Page 2 exits |
| 12.0 | Page 3 large names enter (Fade 15%) |
| 14–16 | Parent names — Skate RTL motion visible |
| 17–18 | Page 3 exits |
| 18.0 | Date fields — Burst enter |
| 20–22 | Venue and time fields visible with burst/writing |
| 23–24 | End state matches reference |

## Animation-specific checks

### fade_writing_element

- [ ] Text not visible before enter start
- [ ] Letters/elements appear progressively, not all at once
- [ ] Exit mirrors enter (where design specifies enter+exit)

### skate_writing_rtl

- [ ] Horizontal motion right-to-left during reveal
- [ ] ~50% speed feel vs default fade layers (per design doc)

### burst_writing_enter

- [ ] Pop/burst per letter on enter
- [ ] No exit animation on date/venue fields (enter-only)

## Language checks

- [ ] Hindi (Devanagari) sample text shapes correctly — no tofu squares
- [ ] English sample text matches reference spacing
- [ ] Empty fields omitted in export (no placeholder boxes)

## Export quality checks

- [ ] 1080p export matches preview timing
- [ ] 4K export: same motion timing, sharper text (scaled positions)
- [ ] Audio present and synced with background video

## Sign-off

| Field | Value |
| --- | --- |
| Build / commit tested | |
| Tester | Founder |
| Date | |
| Result | Pass / Fail |
| Notes | |

**Pass** = acceptable to publish Engagement Sample 1 to paying customers.  
**Fail** = log timestamp + layer name; return to engineering with screenshot or frame grab.
