#!/usr/bin/env python3
"""FIELD brand asset generator — three-wave mark, wordmark, lockups, app icon."""
import os, math

OUT = "/home/claude/field/assets"
os.makedirs(OUT, exist_ok=True)

C = {
    "sage":    "#5D8786",
    "white":   "#FFFFFF",
    "deep":    "#304847",
    "cream":   "#F5F3ED",
    "charcoal":"#202827",
}

# ---------------------------------------------------------------- MARK
# viewBox 0 0 120 96 — three flowing waves, round caps
MARK_W, MARK_H = 120.0, 96.0
STROKE = 8.0
BASELINES = [14.0, 48.0, 82.0]

def wave_path(y):
    return (f"M 4,{y:.2f} "
            f"C 22,{y+11:.2f} 42,{y+11:.2f} 60,{y+1:.2f} "
            f"C 78,{y-9:.2f} 98,{y-9:.2f} 116,{y-3:.2f}")

def mark_body(color, dx=0.0, dy=0.0, scale=1.0):
    g = [f'<g transform="translate({dx:.3f},{dy:.3f}) scale({scale:.5f})" '
         f'fill="none" stroke="{color}" stroke-width="{STROKE}" '
         f'stroke-linecap="round" stroke-linejoin="round">']
    for y in BASELINES:
        g.append(f'  <path d="{wave_path(y)}"/>')
    g.append("</g>")
    return "\n".join(g)

# ---------------------------------------------------------------- WORDMARK
# Geometric FIELD wordmark. Cap height 100, baseline y=100, stroke w.
W = 11.0          # stroke weight
HALF = W / 2.0
TRACK = 30.0      # letterspacing

def letter_F(x):
    return [f"M {x+HALF:.2f},0 V 100",
            f"M {x:.2f},{HALF:.2f} H {x+58:.2f}",
            f"M {x:.2f},52 H {x+48:.2f}"], 58.0

def letter_I(x):
    return [f"M {x+HALF:.2f},0 V 100"], 11.0

def letter_E(x):
    return [f"M {x+HALF:.2f},0 V 100",
            f"M {x:.2f},{HALF:.2f} H {x+58:.2f}",
            f"M {x:.2f},52 H {x+50:.2f}",
            f"M {x:.2f},{100-HALF:.2f} H {x+58:.2f}"], 58.0

def letter_L(x):
    return [f"M {x+HALF:.2f},0 V 100",
            f"M {x:.2f},{100-HALF:.2f} H {x+52:.2f}"], 52.0

def letter_D(x):
    return [f"M {x+HALF:.2f},0 V 100",
            (f"M {x:.2f},{HALF:.2f} H {x+36:.2f} "
             f"C {x+56:.2f},{HALF:.2f} {x+68.5:.2f},25 {x+68.5:.2f},50 "
             f"C {x+68.5:.2f},75 {x+56:.2f},{100-HALF:.2f} {x+36:.2f},{100-HALF:.2f} "
             f"H {x:.2f}")], 74.0

LETTERS = [letter_F, letter_I, letter_E, letter_L, letter_D]

def wordmark_paths():
    x, out = 0.0, []
    for fn in LETTERS:
        paths, w = fn(x)
        out.extend(paths)
        x += w + TRACK
    return out, x - TRACK      # total width

WORD_PATHS, WORD_W = wordmark_paths()
WORD_H = 100.0

def wordmark_body(color, dx=0.0, dy=0.0, scale=1.0):
    g = [f'<g transform="translate({dx:.3f},{dy:.3f}) scale({scale:.5f})" '
         f'fill="none" stroke="{color}" stroke-width="{W}" '
         f'stroke-linecap="butt" stroke-linejoin="miter">']
    for p in WORD_PATHS:
        g.append(f'  <path d="{p}"/>')
    g.append("</g>")
    return "\n".join(g)

# ---------------------------------------------------------------- WRITERS
HEAD = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}" '
        'width="{w:.2f}" height="{h:.2f}" role="img" aria-label="{label}">\n'
        '<title>{label}</title>\n')

def write(name, w, h, body, label):
    svg = HEAD.format(w=w, h=h, label=label) + body + "\n</svg>\n"
    with open(os.path.join(OUT, name), "w") as f:
        f.write(svg)
    return name

files = []

# --- mark only (transparent)
for key in ("sage", "white", "deep", "cream", "charcoal"):
    files.append(write(f"field-mark-{key}.svg", MARK_W, MARK_H,
                       mark_body(C[key]), "FIELD mark"))

# --- wordmark only (transparent)
for key in ("sage", "white", "deep", "charcoal"):
    files.append(write(f"field-wordmark-{key}.svg", WORD_W, WORD_H,
                       wordmark_body(C[key]), "FIELD wordmark"))

# --- horizontal lockup: mark | gap | wordmark
LOCK_H = 134.0
m_scale = LOCK_H / MARK_H
m_w = MARK_W * m_scale
GAP = 48.0
w_scale = 0.86                                   # cap height 86 against 134 mark
w_w = WORD_W * w_scale
w_h = WORD_H * w_scale
H_TOTAL_W = m_w + GAP + w_w
for key in ("sage", "white", "deep", "cream"):
    body = (mark_body(C[key], 0, 0, m_scale) + "\n" +
            wordmark_body(C[key], m_w + GAP, (LOCK_H - w_h) / 2.0, w_scale))
    files.append(write(f"field-logo-horizontal-{key}.svg", H_TOTAL_W, LOCK_H,
                       body, "FIELD"))

# --- stacked lockup
s_mark_scale = 1.55
s_m_w, s_m_h = MARK_W * s_mark_scale, MARK_H * s_mark_scale
s_word_scale = 0.98
s_w_w, s_w_h = WORD_W * s_word_scale, WORD_H * s_word_scale
S_GAP = 46.0
S_W = max(s_m_w, s_w_w)
S_H = s_m_h + S_GAP + s_w_h
for key in ("sage", "white", "deep", "cream"):
    body = (mark_body(C[key], (S_W - s_m_w) / 2.0, 0, s_mark_scale) + "\n" +
            wordmark_body(C[key], (S_W - s_w_w) / 2.0, s_m_h + S_GAP, s_word_scale))
    files.append(write(f"field-logo-stacked-{key}.svg", S_W, S_H, body, "FIELD"))

# --- app icon: sage rounded square, white waves, transparent outside corners
ICON = 1024.0
R = ICON * 0.2237                       # iOS-style continuous-ish corner radius
icon_mark_scale = (ICON * 0.45) / MARK_W
im_w, im_h = MARK_W * icon_mark_scale, MARK_H * icon_mark_scale
icon_body = (f'<rect x="0" y="0" width="{ICON}" height="{ICON}" rx="{R:.2f}" '
             f'ry="{R:.2f}" fill="{C["sage"]}"/>\n' +
             mark_body(C["white"], (ICON - im_w) / 2.0, (ICON - im_h) / 2.0,
                       icon_mark_scale))
files.append(write("field-appicon.svg", ICON, ICON, icon_body, "FIELD app icon"))

# --- app icon, deep field variant
icon_body_deep = (f'<rect x="0" y="0" width="{ICON}" height="{ICON}" rx="{R:.2f}" '
                  f'ry="{R:.2f}" fill="{C["deep"]}"/>\n' +
                  mark_body(C["cream"], (ICON - im_w) / 2.0, (ICON - im_h) / 2.0,
                            icon_mark_scale))
files.append(write("field-appicon-deep.svg", ICON, ICON, icon_body_deep,
                   "FIELD app icon (Deep Field)"))

# --- app icon, cream variant
icon_body_cream = (f'<rect x="0" y="0" width="{ICON}" height="{ICON}" rx="{R:.2f}" '
                   f'ry="{R:.2f}" fill="{C["cream"]}"/>\n' +
                   mark_body(C["sage"], (ICON - im_w) / 2.0, (ICON - im_h) / 2.0,
                             icon_mark_scale))
files.append(write("field-appicon-cream.svg", ICON, ICON, icon_body_cream,
                   "FIELD app icon (cream)"))

print(f"wordmark {WORD_W:.1f}x{WORD_H:.1f}  horizontal {H_TOTAL_W:.1f}x{LOCK_H:.1f}  "
      f"stacked {S_W:.1f}x{S_H:.1f}")
print(f"{len(files)} SVGs written to {OUT}")
for f in files:
    print("  ", f)
