#!/usr/bin/env python3
"""Render the FIELD SVG assets to transparent PNGs via headless Chromium."""
import os, re, pathlib
from playwright.sync_api import sync_playwright

SRC = pathlib.Path("/home/claude/field/assets")
OUT = pathlib.Path("/home/claude/field/assets/png")
OUT.mkdir(parents=True, exist_ok=True)

# target output widths per asset family
TARGETS = {
    "field-mark":            [1024],
    "field-wordmark":        [2000],
    "field-logo-horizontal": [2400],
    "field-logo-stacked":    [1600],
    "field-appicon":         [1024, 512, 180, 64, 32],
}

def family(stem):
    for f in sorted(TARGETS, key=len, reverse=True):
        if stem.startswith(f):
            return f
    return None

def dims(svg_text):
    vb = re.search(r'viewBox="0 0 ([\d.]+) ([\d.]+)"', svg_text)
    return float(vb.group(1)), float(vb.group(2))

made = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/opt/pw-browsers/chromium-1194/chrome-linux/chrome")
    page = browser.new_page()
    for svg in sorted(SRC.glob("*.svg")):
        fam = family(svg.stem)
        if not fam:
            continue
        text = svg.read_text()
        w, h = dims(text)
        for tw in TARGETS[fam]:
            scale = tw / w
            th = round(h * scale)
            page.set_viewport_size({"width": int(tw), "height": int(th)})
            page.set_content(
                "<style>html,body{margin:0;padding:0;background:transparent}"
                f"svg{{display:block;width:{int(tw)}px;height:{th}px}}</style>" + text)
            suffix = f"@{int(tw)}" if len(TARGETS[fam]) > 1 else ""
            name = f"{svg.stem}{suffix}.png"
            page.screenshot(path=str(OUT / name), omit_background=True)
            made.append(name)
    browser.close()

print(f"{len(made)} PNGs -> {OUT}")
for m in made:
    print("  ", m)
