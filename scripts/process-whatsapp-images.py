#!/usr/bin/env python3
"""Crop WhatsApp catalog screenshots and export product images."""

import json
import re
from pathlib import Path

from PIL import Image

ASSETS_DIR = Path("/Users/lat/.cursor/projects/Users-lat-Desktop-nabyla/assets")
OUTPUT_DIR = Path("/Users/lat/Desktop/nabyla/public/products")

# WhatsApp product detail layout (472×1024 iPhone screenshots)
CROP_TOP = 132
CROP_BOTTOM = 518
CROP_H_MARGIN = 0.10

PRODUCTS = [
    {
        "slug": "turban-prestige",
        "name": "Turban prestige",
        "price": 20000,
        "category": "turbans",
        "files": ["IMG_6705"],
    },
    {
        "slug": "tunique-nabylaa",
        "name": "Tunique NABYLAA",
        "price": 50000,
        "category": "vetements",
        "files": ["IMG_6706", "IMG_6708"],
        "isFeatured": True,
        "isNew": True,
    },
    {
        "slug": "pret-a-poser",
        "name": "Prêt à poser",
        "price": 10000,
        "category": "turbans",
        "files": ["IMG_6711"],
        "description_extra": "Disponible à partir de 10 000 FCFA (certaines finitions à 15 000 FCFA).",
    },
    {
        "slug": "turban-merry",
        "name": "Turban Merry",
        "price": 10000,
        "category": "turbans",
        "files": ["IMG_6712"],
        "description_extra": "Lot de 3 turbans à 10 000 FCFA.",
    },
    {
        "slug": "easy-turban-channel",
        "name": "Easy Turban Channel",
        "price": 8000,
        "category": "turbans",
        "files": [
            "IMG_6713", "IMG_6714", "IMG_6715", "IMG_6716",
            "IMG_6717", "IMG_6718", "IMG_6719", "IMG_6720",
        ],
        "isFeatured": True,
    },
    {
        "slug": "turban-nijme",
        "name": "Turban NIJMÉ",
        "price": 20000,
        "category": "turbans",
        "files": ["IMG_6721", "IMG_6722", "IMG_6723", "IMG_6724"],
        "isFeatured": True,
    },
    {
        "slug": "turban-fatima",
        "name": "Turban Fatima",
        "price": 20000,
        "category": "turbans",
        "files": ["IMG_6725", "IMG_6726", "IMG_6727"],
        "isFeatured": True,
    },
    {
        "slug": "turban-fama",
        "name": "Turban Fama",
        "price": 20000,
        "category": "turbans",
        "files": ["IMG_6728"],
    },
    {
        "slug": "turban-pret-a-poser-perle",
        "name": "Turban prêt à poser perle",
        "price": 15000,
        "category": "turbans",
        "files": ["IMG_6729", "IMG_6730"],
    },
    {
        "slug": "collection-verte-maille",
        "name": "Collection verte — Maille",
        "price": 30000,
        "category": "vetements",
        "files": ["IMG_6731"],
        "isNew": True,
    },
    {
        "slug": "collection-verte-palmier",
        "name": "Collection verte — Palmier",
        "price": 25000,
        "category": "vetements",
        "files": ["IMG_6732"],
        "isNew": True,
    },
    {
        "slug": "cape-maya",
        "name": "Cape MAYA",
        "price": 25000,
        "category": "vetements",
        "files": [
            "IMG_6707", "IMG_6709", "IMG_6710",
            "IMG_6733", "IMG_6734", "IMG_6735", "IMG_6736",
        ],
        "isFeatured": True,
    },
    {
        "slug": "tunique-brodee",
        "name": "Tunique",
        "price": 35000,
        "category": "vetements",
        "files": ["IMG_6737"],
    },
    {
        "slug": "tunique-beatrice",
        "name": "Tunique Béatrice",
        "price": 35000,
        "category": "vetements",
        "files": [
            "IMG_6738", "IMG_6739", "IMG_6740",
            "IMG_6741", "IMG_6742",
        ],
        "isFeatured": True,
        "isNew": True,
    },
    {
        "slug": "cape-adan-et-eve",
        "name": "Cape Adan et Ève",
        "price": 25000,
        "category": "vetements",
        "files": ["IMG_6743", "IMG_6744", "IMG_6745", "IMG_6747"],
        "isFeatured": True,
    },
    {
        "slug": "kany-mixte",
        "name": "Kany Mixte",
        "price": 25000,
        "category": "vetements",
        "files": [
            "IMG_6748", "IMG_6749", "IMG_6750",
            "IMG_6751", "IMG_6752",
        ],
    },
]


def find_asset(prefix: str) -> Path:
    matches = sorted(ASSETS_DIR.glob(f"{prefix}-*.png"))
    if not matches:
        raise FileNotFoundError(f"No asset for {prefix}")
    return matches[0]


def crop_whatsapp(img: Image.Image) -> Image.Image:
    w, h = img.size
    top = int(h * (CROP_TOP / 1024))
    bottom = int(h * (CROP_BOTTOM / 1024))
    left = int(w * CROP_H_MARGIN)
    right = int(w * (1 - CROP_H_MARGIN))
    return img.crop((left, top, right, bottom))


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = []

    for product in PRODUCTS:
        slug_dir = OUTPUT_DIR / product["slug"]
        slug_dir.mkdir(parents=True, exist_ok=True)
        image_paths: list[str] = []

        for i, prefix in enumerate(product["files"], start=1):
            src = find_asset(prefix)
            img = Image.open(src)
            cropped = crop_whatsapp(img)
            out_name = f"{i}.jpg"
            out_path = slug_dir / out_name
            cropped.convert("RGB").save(out_path, "JPEG", quality=88, optimize=True)
            image_paths.append(f"/products/{product['slug']}/{out_name}")
            print(f"  {src.name} -> {out_path}")

        manifest.append({**product, "images": image_paths})

    manifest_path = OUTPUT_DIR / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False))
    print(f"\nDone: {len(manifest)} products, manifest -> {manifest_path}")


if __name__ == "__main__":
    main()
