"""Convert markdown files to PDF (planning docs). Usage: python scripts/md_to_pdf.py <file.md> [...]"""
import sys
from pathlib import Path

import markdown
from xhtml2pdf import pisa

CSS = """
@page { size: A4; margin: 2cm; }
body { font-family: Helvetica, Arial, sans-serif; font-size: 11pt; line-height: 1.45; color: #111; }
h1 { font-size: 20pt; margin-top: 0; border-bottom: 1px solid #ccc; padding-bottom: 6px; }
h2 { font-size: 15pt; margin-top: 18px; }
h3 { font-size: 12pt; }
table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 10pt; }
th, td { border: 1px solid #ccc; padding: 6px 8px; text-align: left; vertical-align: top; }
th { background: #f5f5f5; }
code { font-family: Consolas, monospace; font-size: 9pt; background: #f4f4f4; padding: 1px 4px; }
pre { background: #f4f4f4; padding: 10px; font-size: 9pt; overflow-wrap: break-word; white-space: pre-wrap; }
ul, ol { margin: 8px 0; padding-left: 22px; }
a { color: #1a56db; }
hr { border: none; border-top: 1px solid #ddd; margin: 16px 0; }
"""


def md_to_pdf(md_path: Path) -> Path:
    md_text = md_path.read_text(encoding="utf-8")
    body = markdown.markdown(
        md_text,
        extensions=["tables", "fenced_code", "nl2br", "sane_lists"],
    )
    html = f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{body}</body></html>"
    pdf_path = md_path.with_suffix(".pdf")
    with pdf_path.open("wb") as out:
        status = pisa.CreatePDF(html, dest=out, encoding="utf-8")
    if status.err:
        raise RuntimeError(f"PDF generation failed for {md_path}: {status.err}")
    return pdf_path


def main() -> None:
    paths = [Path(p) for p in sys.argv[1:]] if len(sys.argv) > 1 else list(
        Path("docs/planning").glob("*.md")
    )
    if not paths:
        print("No markdown files found.", file=sys.stderr)
        sys.exit(1)
    for md in paths:
        pdf = md_to_pdf(md.resolve())
        print(f"Created {pdf}")


if __name__ == "__main__":
    main()
