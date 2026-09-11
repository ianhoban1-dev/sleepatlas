# FIELD — logo asset pack

Every file has a **transparent background**. SVG is the master in all cases; use a PNG
only where SVG isn't accepted (some app-store uploads, some email clients, some print shops).

The waves are drawn as *strokes*, not filled shapes, so recolouring any SVG is a single
find-and-replace on the `stroke="…"` value. The wordmark is the same.

---

## Colours used

| Name         | Hex       | Where it appears in the pack |
|--------------|-----------|------------------------------|
| FIELD SAGE   | `#5D8786` | default mark, app icon ground |
| DEEP FIELD   | `#304847` | mark on light grounds, dark app icon |
| FIELD CREAM  | `#F5F3ED` | mark on sage/deep grounds |
| CHARCOAL     | `#202827` | mono / maximum contrast |
| White        | `#FFFFFF` | mark on the sage app icon only |

---

## Files

### Mark only — `120 × 96` drawing grid
```
field-mark-sage.svg        field-mark-white.svg      field-mark-deep.svg
field-mark-cream.svg       field-mark-charcoal.svg
png/field-mark-*.png       1024 px wide, transparent
```

### Wordmark only — `373 × 100`, cap height 100
```
field-wordmark-sage.svg    field-wordmark-white.svg
field-wordmark-deep.svg    field-wordmark-charcoal.svg
png/field-wordmark-*.png   2000 px wide, transparent
```

### Horizontal lockup — `536 × 134`
Mark left, wordmark right, optically centred. Default logo for site headers,
email signatures, letterheads.
```
field-logo-horizontal-{sage,white,deep,cream}.svg
png/field-logo-horizontal-*.png    2400 px wide
```

### Stacked lockup — `366 × 293`
Mark above wordmark. For square-ish spaces, social avatars with room, merchandise,
the splash screen.
```
field-logo-stacked-{sage,white,deep,cream}.svg
png/field-logo-stacked-*.png       1600 px wide
```

### App icon — `1024 × 1024`, 22.37% corner radius
Mark occupies 45% of the icon width, optically centred. Corners are transparent,
so the file drops straight into iOS/Android/Figma without a white box behind it.
```
field-appicon.svg          FIELD Sage ground, white mark   ← primary
field-appicon-deep.svg     Deep Field ground, cream mark
field-appicon-cream.svg    Field Cream ground, sage mark
png/field-appicon*@{1024,512,180,64,32}.png
```
- `@1024` — App Store / Play Store
- `@512`  — web app manifest
- `@180`  — iOS home screen
- `@64` / `@32` — favicon

---

## Construction

| | |
|---|---|
| Drawing grid | 120 × 96 |
| Stroke weight | 8 units (6.7% of mark width) |
| Baseline pitch | 34 units |
| Terminals | round cap, round join |
| Wordmark stroke | 11 units on a 100 cap height |
| Wordmark tracking | 30 units between letter boxes |

**Clear space:** one stroke weight on all four sides of the mark (at 1× scale, 8 units).
Nothing — no type, no rule, no image edge — enters that space.

**Minimum size:** 16 px tall on screen, 6 mm tall in print.

---

## Never

Add a fourth wave · rotate or tilt the mark · stretch one axis · outline it · run a gradient
through it · place it on a photograph without a solid holding shape · enclose it in a circle ·
pair it with a moon, star, cloud or ZZZ · re-space the waves to fit a box (scale the whole
mark instead).

---

## Regenerating

`build_logo.py` draws every SVG from one set of parameters; `render_png.py` rasterises them
through headless Chromium with a transparent background. Change a colour, a stroke weight or
a lockup gap in `build_logo.py` and re-run both scripts to rebuild the whole pack.

---

FIELD Identity Manual v1.0 · September 2026
