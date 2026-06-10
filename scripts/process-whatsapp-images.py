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
    # --- Lot 2 (captures IMG_6754–IMG_6821) ---
    {
        "slug": "kany-moussline",
        "name": "Kany Moussline",
        "price": 15000,
        "category": "vetements",
        "files": ["IMG_6754", "IMG_6755", "IMG_6756"],
        "isNew": True,
    },
    {
        "slug": "kany-bogolan",
        "name": "Kany Bogolan",
        "price": 25000,
        "category": "vetements",
        "files": ["IMG_6757", "IMG_6758", "IMG_6759", "IMG_6760"],
        "isNew": True,
    },
    {
        "slug": "pret-a-poser-simple",
        "name": "Prêt à posé simple",
        "price": 8000,
        "category": "turbans",
        "files": ["IMG_6761", "IMG_6762", "IMG_6763"],
        "isFeatured": True,
    },
    {
        "slug": "easy-turban-wax",
        "name": "Easy Turban Wax",
        "price": 6000,
        "category": "turbans",
        "files": ["IMG_6764", "IMG_6765", "IMG_6766"],
        "isFeatured": True,
    },
    {
        "slug": "turban-nene-wax",
        "name": "Turban Néné wax",
        "price": 7500,
        "category": "turbans",
        "files": ["IMG_6767", "IMG_6768", "IMG_6769"],
        "isFeatured": True,
    },
    {
        "slug": "kaay-moussorou",
        "name": "Kaay Moussorou",
        "price": 6000,
        "category": "turbans",
        "files": ["IMG_6771", "IMG_6772"],
    },
    {
        "slug": "hijab-binetou-simple",
        "name": "Hijab Binetou Simple",
        "price": 8000,
        "category": "hijabs",
        "files": ["IMG_6773", "IMG_6774", "IMG_6775"],
    },
    {
        "slug": "turban-nene-pagne-tisse",
        "name": "Turban Néné Pagne Tissé",
        "price": 15000,
        "category": "turbans",
        "files": ["IMG_6776", "IMG_6777", "IMG_6778"],
        "isFeatured": True,
    },
    {
        "slug": "turban-lolita",
        "name": "Turban Lolita",
        "price": 6000,
        "category": "turbans",
        "files": ["IMG_6779", "IMG_6780", "IMG_6781"],
        "isFeatured": True,
    },
    {
        "slug": "hijab-maria-pagne-tisse",
        "name": "Hijab Maria Pagne Tissé",
        "price": 8000,
        "category": "hijabs",
        "files": ["IMG_6782", "IMG_6783", "IMG_6784"],
    },
    {
        "slug": "hijab-maria-garniture",
        "name": "Hijab Maria garniture",
        "price": 6000,
        "category": "hijabs",
        "files": ["IMG_6785", "IMG_6786", "IMG_6787"],
    },
    {
        "slug": "pret-a-poser-brocard",
        "name": "Prêt à posé Brocard",
        "price": 20000,
        "category": "turbans",
        "files": ["IMG_6789", "IMG_6790", "IMG_6791"],
    },
    {
        "slug": "pret-a-poser-mixte-brocard",
        "name": "Prêt à posé mixte brocard",
        "price": 15000,
        "category": "turbans",
        "files": ["IMG_6792", "IMG_6793", "IMG_6794"],
    },
    {
        "slug": "hijab-amy-simple",
        "name": "Hijab Amy simple",
        "price": 8000,
        "category": "hijabs",
        "files": ["IMG_6795", "IMG_6796", "IMG_6797"],
        "isFeatured": True,
    },
    {
        "slug": "hijab-amy-garniture",
        "name": "Hijab Amy garniture",
        "price": 9000,
        "category": "hijabs",
        "files": ["IMG_6798", "IMG_6799", "IMG_6800"],
        "isFeatured": True,
    },
    {
        "slug": "hijab-veronica",
        "name": "Hijab Veronica",
        "price": 8000,
        "category": "hijabs",
        "files": ["IMG_6801", "IMG_6802"],
    },
    {
        "slug": "turban-fatou-velour",
        "name": "Turban Fatou Velour",
        "price": 6000,
        "category": "turbans",
        "files": ["IMG_6803", "IMG_6804"],
    },
    {
        "slug": "turban-fatou",
        "name": "Turban Fatou",
        "price": 5000,
        "category": "turbans",
        "files": ["IMG_6805", "IMG_6806", "IMG_6807"],
        "isFeatured": True,
    },
    {
        "slug": "hijab-binetou-brocard",
        "name": "Hijab Binetou Brocard",
        "price": 10000,
        "category": "hijabs",
        "files": ["IMG_6808", "IMG_6809"],
    },
    {
        "slug": "hijab-wig-zahra",
        "name": "Hijab wig Zahra",
        "price": 8000,
        "category": "hijabs",
        "files": ["IMG_6810", "IMG_6811", "IMG_6812"],
    },
    {
        "slug": "hijab-merry",
        "name": "Hijab Merry",
        "price": 6000,
        "category": "hijabs",
        "files": ["IMG_6813", "IMG_6814", "IMG_6815"],
    },
    {
        "slug": "easy-turban-velour",
        "name": "Easy Turban Velour",
        "price": 10000,
        "category": "turbans",
        "files": ["IMG_6816", "IMG_6817"],
    },
    {
        "slug": "hijab-khadija-perlage",
        "name": "Hijab Khadija perlage",
        "price": 12000,
        "category": "hijabs",
        "files": ["IMG_6818", "IMG_6819"],
    },
    {
        "slug": "chale-bea",
        "name": "Châle Bea",
        "price": 10000,
        "category": "accessoires",
        "files": ["IMG_6820", "IMG_6821"],
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
