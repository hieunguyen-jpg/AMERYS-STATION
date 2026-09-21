# Institutional Design System

A Vietnamese-first design system for institutional investment products: dense data surfaces, editorial reporting, and formal client communication. Built around two supplied typefaces — **SVN-Graphik** (interface) and **SVN-Adobe Caslon** (editorial display) — with a single signal-red accent.

> **Working name.** No brand name, logo, or product screens were supplied. "Institutional" is a placeholder used wherever a wordmark would sit. Rename `set_project_title`, `thumbnail.html`, and `guidelines/brand-wordmark.card.html` once the real brand arrives.

## Sources given

| Source | What was provided |
| --- | --- |
| Uploaded fonts | 18 × `SVN-Graphik` OTF (Thin → Super, with italics), 6 × `SVN-Adobe Caslon` TTF — Vietnamese-extended cuts, in `uploads/` |
| Brief (form answers) | Accent `#C8102E`; surfaces: investor/client web app, reports & documents, slide template; voice: formal / institutional; Vietnamese-first; dense, data-heavy |

No codebase, Figma file, logo, screenshots, or product copy were supplied. **Everything below the fonts and the accent colour is a designed proposal, not a recreation.** The UI kits are original compositions in the brief's direction, not reproductions of an existing product.

### Fonts shipped
13 of the 24 uploaded cuts are wired into `@font-face` (`assets/fonts/`): Graphik Light/Regular/Italic/Medium/Medium-Italic/Semibold/Bold/Super, Caslon Regular/Italic/Semibold/Bold/Bold-Italic. The remaining Thin, Extralight, Black and Semibold-italic cuts are intentionally unused — the system's interface weights are 400/500/600 only. No substitutions were needed for text; there is **no supplied monospace face**, so `--font-mono` falls back to the OS UI-mono stack (used only for token names in specimen cards, never in product UI).

---

## CONTENT FUNDAMENTALS

**Language.** Vietnamese first. English appears only for market tickers (VCB, HPG), standard finance abbreviations (NAV, YTD, ETF, P/E), and interface terms with no settled Vietnamese equivalent. When both are needed, Vietnamese leads and English follows in parentheses: *Giá trị tài sản ròng (NAV)*.

**Person.** Address the reader as **Quý khách** in client-facing surfaces (reports, statements, emails, confirmations) and **bạn** never. Internal tools use no pronoun at all — label the object, not the person: *Danh mục*, not *Danh mục của bạn*. The firm refers to itself as **Chúng tôi** in prose and by name in legal copy. First-person singular is never used.

**Casing.** Vietnamese sentence case everywhere. No Title Case On Interface Labels. The only uppercase in the system is the 10px eyebrow (`--type-eyebrow`, `letter-spacing: 0.08em`) used for table headers, tile labels and section kickers. Tickers and legal entity suffixes keep their own casing (VCB, CTCP, TNHH).

**Numbers.** Always `vi-VN`: `1.284.700.000` (period = thousands), `14,8%` (comma = decimal), dates `27/08/2026`, currency written as `VNĐ` after the amount with a space. Large sums round to `tỷ` (billion) with one decimal: *1.284,7 tỷ VNĐ*. Percentages carry a sign when they express change: `+2,41%`, `−1,12%` (true minus sign U+2212, not a hyphen).

**Tone.** Formal and institutional — measured, specific, unhurried. State the number, then the context. Never exclaim, never promise, never sell inside the product.

Do write:
- *Danh mục được tái cân bằng hằng quý theo hạn mức đã phê duyệt.*
- *Hiệu suất YTD đạt 14,8%, cao hơn chỉ số tham chiếu 3,2 điểm phần trăm.*
- *Lệnh đã được ghi nhận. Kết quả khớp lệnh sẽ cập nhật trong phiên.*

Do not write:
- *Danh mục của bạn đang bùng nổ! 🚀*
- *Đừng bỏ lỡ cơ hội đầu tư tuyệt vời này.*
- *Oops! Có gì đó không ổn.*

**Errors and empty states** name the cause and the next action, in that order, in one sentence: *Mã chứng khoán không tồn tại. Kiểm tra lại mã hoặc chọn từ danh sách.* Empty tables read *Không có dữ liệu* and nothing more — no illustration, no encouragement.

**Buttons** are verb-first and two to three words: *Đặt lệnh*, *Tải báo cáo*, *Xác nhận*, *Huỷ*. Never *OK*, never *Gửi đi ngay*.

**Disclosure.** Every performance figure carries a source and as-of line in `--type-caption`: *Nguồn: HOSE, cập nhật 09:15 27/08/2026.* Forward-looking statements always carry the standard risk line.

**Emoji are never used** — not in product, not in email, not in slides. Unicode is used only for typographic correctness: `−` (minus), `–` (en dash for ranges), `·` (middot separator), `“ ”` (Vietnamese-style curly quotes), `≥ ≤ %`. Arrows and status marks are Lucide glyphs, not characters.

---

## VISUAL FOUNDATIONS

**The idea.** A printed research note rendered on screen: warm paper, hairline rules, tight type, and one red that only ever means *act here* or *this fell*. Structure comes from rules and alignment, not from boxes, shadows, or colour fills.

**Colour.** Warm off-white paper (`--paper #FAF8F5`) is the page; pure white is reserved for cards and inputs so containers read as sheets laid on a desk. Ink is a cool neutral ramp (`--ink-900 #14161A` → `--ink-050`) — deliberately cooler than the paper, which is what makes the surface feel like stock rather than screen. The single accent is signal red `#C8102E` (`--red-500`), used for the primary action, the active tab rule, focus, and links — nothing else. Brass, navy and green exist only for chart categorisation. Market data uses the Vietnamese exchange convention, which overrides everything else: green up, red down, purple ceiling (trần), cyan floor (sàn), yellow reference (tham chiếu). **Never restyle market colours to the brand palette.** Maximum two background colours per composition (paper + white, or paper + ink for one inverted panel).

**Type.** Graphik carries all interface text; Caslon carries display only — report covers, slide titles, pull quotes, big display numerals. Caslon below 20px is a bug. Body is **13px/1.45** — the system is dense by design; 16px body is only for long-form report prose (`--type-body-lg`). Headings run 24/18/14 at weight 600. Tracking tightens as size grows (`--ls-tight -0.02em` at display) and opens only for the uppercase eyebrow. Measure caps at 66ch, 52ch in report columns. Numerals are tabular everywhere a figure could be compared vertically.

**Spacing & density.** A 4px grid with a 2px half-step. Table rows are 34px (28px dense), cells pad 12px × 7px, controls are 32px tall, cards pad 16px, page gutters 24px. Sidebar 232px. The system is tuned so a 1440px screen shows ~20 table rows without scrolling.

**Backgrounds.** Flat colour only. No photography, no illustration, no gradients, no texture, no pattern. The only permitted "image" is data: a chart, a sparkline, a table. Full-bleed is used for exactly one thing — an inverted ink band behind a report cover or slide title.

**Borders & rules.** The hairline (`1px var(--border-hairline)`) is the primary structural device and is always tried before a shadow. Section heads sit on a 2px ink rule. Tables have horizontal rules only — no vertical grid lines, no zebra by default (`zebra` is opt-in for wide tables). Card = 1px hairline + 4px radius + `--shadow-1`, which is a 1px ambient ring rather than a drop shadow.

**Corner radii.** 2px controls, 3–4px cards, 6px modals, 10px maximum anywhere, pill only for the switch and status dots. Institutional means nearly square.

**Shadows.** Three levels: `--shadow-1` cards (near-invisible), `--shadow-2` popovers/tooltips, `--shadow-3` modals. No inner glows, no coloured shadows, no layered "elevation 5".

**Transparency & blur.** Used twice only: the modal scrim (`rgba(20,22,26,.52)` + 1.5px backdrop blur) and inverse-surface borders (`rgba(255,255,255,.16)`). Frosted panels, translucent cards and glassmorphism are out of the system. There are no protection gradients — text never sits on imagery, so none are needed.

**Animation.** Colour and opacity only. 120ms for control feedback, 180ms for panel and tab changes, 280ms as the ceiling. Easing is `cubic-bezier(.2,0,.2,1)` for everything; `ease-out` for entrances. **No scale, no bounce, no spring, no slide-in, no skeleton shimmer, no number roll-ups.** Toasts and modals appear without transform. All durations collapse to 0 under `prefers-reduced-motion`.

**Hover states.** Filled controls darken one step (`red-500 → red-600`). Neutral controls take a `--surface-hover` (`ink-050`) fill and a stronger border. Table rows take `--surface-hover` at 80ms. Text links darken and their underline goes from `red-200` to `red-500`. Opacity is never used for hover.

**Press states.** `filter: brightness(.94)` — the control darkens and does not move. Nothing in the system scales, translates, or shrinks on press.

**Focus.** A 2px white spacer plus a 2px red ring (`--focus-ring`), or on inputs a red border plus a 3px `red-100` halo. Focus is always visible; `outline: none` without a replacement is a defect.

**Disabled.** 42% opacity plus `pointer-events: none`. Never grey-out by recolouring — the reduced opacity is the signal, and a Tooltip should say why.

**Layout rules.** Fixed 52px top bar and fixed 232px sidebar in the app; content scrolls beneath. Table headers stick. The primary action lives top-right of the page header or bottom-right of a dialog footer, never both. One primary button per view. Documents are single-column with a 52ch measure and a repeating header/footer.

**Imagery.** There is none, by policy — this brand's visual interest comes from typography and data density. If a client photograph or chart image is ever required, it runs cool and desaturated with no grain, at the same 4px radius as a card.

---

## ICONOGRAPHY

**Substitution flag.** No icon set was supplied, so the system uses **Lucide** (`lucide-static@0.487.0`) loaded from unpkg — the closest match to the brand's requirements: 1.5px uniform stroke, 24px grid, lightly rounded joins, no fills. If the firm has its own icon set, replace `components/core/Icon.jsx`'s URL builder and drop the SVGs into `assets/icons/`; nothing else changes.

- **How they're rendered.** `<Icon name="trending-up" />` masks the remote SVG with `background-color: currentColor`, so every icon inherits its parent's text colour and works on ink and paper alike. No inline SVG is ever hand-written in this system.
- **Sizes.** 12 / 14 / 16 (default) / 20 / 24. 16px pairs with 13px body; 14px inside `sm` controls and table cells.
- **Colour.** `--ink-600` at rest, `--ink-900` on hover, `--red-500` only when the icon *is* the accent action or an active toggle. Icons never carry a second colour of their own.
- **Usage.** Icon + label in navigation and buttons. Icon-only is allowed only in dense toolbars and table row actions, and only through `IconButton`, which forces an accessible label and a native tooltip.
- **Common glyphs.** `landmark` (fund/entity), `wallet` (cash), `pie-chart` (allocation), `trending-up` / `arrow-up-right` (performance), `file-text` (report), `download`, `bell`, `search`, `settings`, `shield-check` (compliance), `building-2` (issuer), `calendar`, `users` (clients).
- **Emoji: never.** Unicode characters are not used as icons either — the one exception is the typographic minus sign in numeric copy.

---

## Intentional additions

No source defined a component inventory, so the standard primitive set was authored. Four additions beyond the default list, each justified by the dense/data-heavy brief:

- **Icon** — a wrapper so no one hand-rolls SVG; required by the substitution above.
- **DataTable** — the brief's primary surface; a design system for this product without a table would be unusable.
- **StatTile** — the KPI unit every dashboard screen repeats.
- **DeltaValue** — encodes the HOSE/HNX colour convention in one place so it can't drift.

---

## Index

**Root**
- `styles.css` — the only file consumers link; `@import`s everything below.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skill wrapper for use in Claude Code.
- `readme.md` — this file.

**`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`, `shape.css` (radii, borders, shadows), `motion.css`, `base.css` (body, links, focus, selection).

**`assets/fonts/`** — the 13 wired font binaries. No logo file exists; see the wordmark note above.

**`components/`**
| Group | Components |
| --- | --- |
| `core/` | Button, IconButton, Icon |
| `forms/` | Input, Select, Checkbox, Radio, Switch |
| `data/` | DataTable, StatTile, DeltaValue, Badge, Tag |
| `surfaces/` | Card, Dialog, Tooltip, Toast |
| `navigation/` | Tabs |

Each has `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (when to use it). Each directory has one `@dsCard` HTML showing its states.

**`ui_kits/`**
- `investor_portal/` — the client web app: dashboard, holdings, order ticket, reports library. `index.html` is an interactive click-through.
- `reports/` — a printable quarterly report document (`index.html`), Caslon cover plus data pages.

**`templates/slide-deck/`** — `SlideDeck.dc.html`, the six-slide deck as a copyable template for consuming projects.

**`slides/`** — the same deck: title, section divider, data slide, comparison, big quote, closing.

**`guidelines/`** — 20 specimen cards feeding the Design System tab, grouped Colors / Type / Spacing / Brand.
