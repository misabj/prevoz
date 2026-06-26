#!/usr/bin/env python3
"""Optimize images in public/images for web use."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "public" / "images"
MAX_SIZE = 1920
QUALITY = 85


def optimize_image(src: Path) -> tuple[int, int]:
    """Resize and re-encode a JPEG image. Returns (old_bytes, new_bytes)."""
    old_bytes = src.stat().st_size
    with Image.open(src) as im:
        # Convert to RGB if needed
        if im.mode in ("RGBA", "P"):
            im = im.convert("RGB")

        # Resize if larger than MAX_SIZE on the longest edge
        w, h = im.size
        if max(w, h) > MAX_SIZE:
            ratio = MAX_SIZE / max(w, h)
            new_size = (int(w * ratio), int(h * ratio))
            im = im.resize(new_size, Image.LANCZOS)

        # Save as progressive JPEG
        im.save(src, format="JPEG", quality=QUALITY, optimize=True, progressive=True)

    new_bytes = src.stat().st_size
    return old_bytes, new_bytes


def main() -> None:
    total_old = 0
    total_new = 0
    files = [p for p in ROOT.rglob("*.jpg") if "-test" not in p.name]

    for src in files:
        old, new = optimize_image(src)
        total_old += old
        total_new += new
        print(f"{src.relative_to(ROOT.parent)}: {old/1024:.1f}KB -> {new/1024:.1f}KB")

    print(
        f"\nTotal: {total_old/1024/1024:.2f}MB -> {total_new/1024/1024:.2f}MB "
        f"({(1 - total_new/total_old)*100:.1f}% reduction)"
    )


if __name__ == "__main__":
    main()
