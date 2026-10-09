"""Generate site icons: cubist 田 favicon set + cubist K avatar.

D (cubiste 田) is the site favicon — the surname 田 fractured into four
shifted cubist planes, blue and ochre panes diagonal to each other.
C (cubiste K) ships as a 1024px avatar for other platforms.

Outputs:
  public/favicon.png             32x32,  light-theme chrome
  public/favicon-dark.png        32x32,  dark-theme chrome
  public/apple-touch-icon.png    180x180, paper background
  avatars/cubist-k.png           1024x1024, transparent (circle-crop safe)
  avatars/cubist-k-paper.png     1024x1024, paper background

Usage: python3 scripts/gen_favicon.py
"""
import os

from PIL import Image, ImageDraw

INK_L, ACC_L = (27, 28, 30, 255), (43, 74, 127, 255)
INK_D, ACC_D = (229, 230, 233, 255), (154, 184, 232, 255)
PAPER = (251, 251, 248, 255)
OCHRE_L = (178, 132, 74, 255)
OCHRE_D = (222, 178, 106, 255)
BLUEGREY_L = (124, 148, 170, 255)
BLUEGREY_D = (110, 132, 158, 255)

SS = 8  # supersample factor


def poly(d, pts, u, fill, outline, lw):
    q = [(x * u, y * u) for x, y in pts]
    if fill:
        d.polygon(q, fill=fill)
    d.line(q + [q[0]], fill=outline, width=max(1, int(lw)), joint="curve")


def cubist_tian(size, dark=False, bg=None):
    """Favicon mark: fractured 田. `size` already includes supersampling."""
    ink = INK_D if dark else INK_L
    acc = ACC_D if dark else ACC_L
    ochre = OCHRE_D if dark else OCHRE_L
    img = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    lw = size * 0.042
    quads = [
        ([(0.175, 0.215), (0.505, 0.165), (0.515, 0.50), (0.195, 0.525)], None),
        ([(0.525, 0.155), (0.815, 0.235), (0.795, 0.53), (0.515, 0.50)], acc),
        ([(0.195, 0.545), (0.51, 0.52), (0.475, 0.845), (0.16, 0.795)], ochre),
        ([(0.52, 0.52), (0.80, 0.55), (0.83, 0.815), (0.49, 0.855)], None),
    ]
    for pts, col in quads:
        poly(d, pts, size, col, ink, lw)
    return img


def cubist_k(size, dark=False, bg=None):
    """Avatar mark: faceted K with shards interlocked at a central node."""
    ink = INK_D if dark else INK_L
    acc = ACC_D if dark else ACC_L
    ochre = OCHRE_D if dark else OCHRE_L
    grey = BLUEGREY_D if dark else BLUEGREY_L
    stem = (196, 200, 208, 255) if dark else (44, 46, 52, 255)
    img = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    lw = size * 0.024
    facets = [
        ([(0.24, 0.13), (0.425, 0.165), (0.432, 0.38), (0.237, 0.57)], acc),
        ([(0.237, 0.57), (0.432, 0.38), (0.445, 0.87), (0.235, 0.85)], stem),
        ([(0.432, 0.40), (0.67, 0.12), (0.80, 0.21), (0.50, 0.50)], ochre),
        ([(0.455, 0.55), (0.75, 0.84), (0.635, 0.90), (0.435, 0.63)], grey),
    ]
    for pts, col in facets:
        poly(d, pts, size, col, ink, lw)
    return img


def save(img, path, final_size):
    img = img.resize((final_size, final_size), Image.LANCZOS)
    img.save(path)
    print("saved", path, img.size)


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    pub = os.path.normpath(os.path.join(here, "..", "public"))
    av = os.path.normpath(os.path.join(here, "..", "avatars"))
    os.makedirs(av, exist_ok=True)

    save(cubist_tian(32 * SS), os.path.join(pub, "favicon.png"), 32)
    save(cubist_tian(32 * SS, dark=True), os.path.join(pub, "favicon-dark.png"), 32)

    # iOS masks corners itself; give the mark some air on paper
    touch = cubist_tian(int(180 * SS * 0.8), bg=None)
    canvas = Image.new("RGBA", (180 * SS, 180 * SS), PAPER)
    off = (180 * SS - touch.width) // 2
    canvas.paste(touch, (off, off), touch)
    save(canvas, os.path.join(pub, "apple-touch-icon.png"), 180)

    # avatar: centered with margin, safe for circular crops
    mark = cubist_k(int(1024 * SS * 0.62))
    for suffix, bg in (("", None), ("-paper", PAPER)):
        canvas = Image.new("RGBA", (1024 * SS, 1024 * SS), bg or (0, 0, 0, 0))
        off = (1024 * SS - mark.width) // 2
        canvas.paste(mark, (off, off), mark)
        save(canvas, os.path.join(av, f"cubist-k{suffix}.png"), 1024)


if __name__ == "__main__":
    main()
