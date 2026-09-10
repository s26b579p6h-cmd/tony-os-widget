from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "source"
OUTPUT = ROOT / "assets" / "tony"


def save_web_jpeg(image: Image.Image, name: str) -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    rgb = ImageOps.exif_transpose(image).convert("RGB")
    rgb.save(OUTPUT / name, "JPEG", quality=90, optimize=True, progressive=True)


def convert(source_name: str, output_name: str) -> None:
    with Image.open(SOURCE / source_name) as image:
        save_web_jpeg(image, output_name)


for source_name, output_name in {
    "at-a-glance-inbox.png": "at-a-glance-inbox.jpg",
    "at-a-glance-tasks.png": "at-a-glance-tasks.jpg",
    "at-a-glance-projects.png": "at-a-glance-projects.jpg",
    "at-a-glance-seeds.png": "at-a-glance-seeds.jpg",
    "area-health-energy.png": "area-health-energy.jpg",
    "area-money-future-freedom.png": "area-money-future-freedom.jpg",
    "area-relationships-community.png": "area-relationships-community.jpg",
    "area-growth-learning.png": "area-growth-learning.jpg",
    "area-fun-travel-exploration.png": "area-fun-travel-exploration.jpg",
    "area-meaning-inner-life.png": "area-meaning-inner-life.jpg",
}.items():
    convert(source_name, output_name)


with Image.open(SOURCE / "areas-work-home-source.png") as source:
    save_web_jpeg(source.crop((0, 0, 507, 1536)), "area-work-leadership.jpg")
    save_web_jpeg(source.crop((514, 0, 1024, 1536)), "area-home-personal-life.jpg")


with Image.open(SOURCE / "banner-closing-source.png") as source:
    columns = {
        "living-banner": (0, 764),
        "closing-visual": (768, 1536),
    }
    rows = {
        "morning": (0, 327),
        "day": (332, 655),
        "evening": (660, 1024),
    }
    for column_name, (left, right) in columns.items():
        for time_name, (top, bottom) in rows.items():
            save_web_jpeg(
                source.crop((left, top, right, bottom)),
                f"{column_name}-{time_name}.jpg",
            )
