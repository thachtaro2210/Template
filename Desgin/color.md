# 🎨 TH-PropTech — Mobile App Color Palettes

Bộ **8 bảng màu** cho team chọn template Figma. Mỗi palette đã được phối chuẩn theo nguyên tắc: contrast WCAG AA, semantic rõ ràng, phù hợp app mobile hiện đại.

**Cách dùng:** Team chọn 1 palette → áp dụng toàn bộ tokens vào Figma Variables → vẽ màn hình theo DESIGN.md.

---

## Palette 1 — 🌊 Ocean Depth

> **Phong cách:** Sang trọng, đáng tin, hướng fintech. Navy sâu kết hợp teal và coral tạo cảm giác chuyên nghiệp nhưng không lạnh.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #f0f4f8;
  --surface: #ffffff;
  --surface-muted: #e2e8f0;
  --surface-raised: #ffffff;

  /* ── Text ── */
  --fg: #1a202c;
  --muted: #64748b;
  --subtle: #94a3b8;
  --border: #cbd5e1;
  --border-strong: #94a3b8;

  /* ── Primary (Deep Teal) ── */
  --primary: #0d9488;
  --primary-hover: #0f766e;
  --primary-soft: #ccfbf1;
  --control: #0f766e;
  --on-control: #ffffff;

  /* ── Accent (Coral) ── */
  --accent: #f97066;
  --accent-soft: #fee2e2;

  /* ── Semantic ── */
  --success: #16a34a;
  --success-soft: #dcfce7;
  --warning: #ea580c;
  --warning-soft: #fff7ed;
  --danger: #dc2626;
  --danger-soft: #fef2f2;
  --info: #2563eb;
  --info-soft: #eff6ff;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/f0f4f8/f0f4f8) | `#F0F4F8` | Nền app |
| ![surface](https://placehold.co/24x24/ffffff/ffffff) | `#FFFFFF` | Card, modal |
| ![fg](https://placehold.co/24x24/1a202c/1a202c) | `#1A202C` | Chữ chính |
| ![primary](https://placehold.co/24x24/0d9488/0d9488) | `#0D9488` | CTA chính |
| ![accent](https://placehold.co/24x24/f97066/f97066) | `#F97066` | Điểm nhấn |

**Hợp với:** App tài chính, bất động sản cao cấp, dashboard vận hành.

---

## Palette 2 — 🌙 Midnight Luxe

> **Phong cách:** Dark premium, mạnh mẽ, hiện đại. Nền tối kết hợp vàng gold tạo cảm giác sang trọng và độc quyền.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #0f172a;
  --surface: #1e293b;
  --surface-muted: #162032;
  --surface-raised: #253449;

  /* ── Text ── */
  --fg: #f1f5f9;
  --muted: #94a3b8;
  --subtle: #64748b;
  --border: #334155;
  --border-strong: #475569;

  /* ── Primary (Royal Purple) ── */
  --primary: #a78bfa;
  --primary-hover: #8b5cf6;
  --primary-soft: #2e1065;
  --control: #8b5cf6;
  --on-control: #ffffff;

  /* ── Accent (Gold) ── */
  --accent: #fbbf24;
  --accent-soft: #422006;

  /* ── Semantic ── */
  --success: #4ade80;
  --success-soft: #052e16;
  --warning: #fb923c;
  --warning-soft: #431407;
  --danger: #f87171;
  --danger-soft: #450a0a;
  --info: #60a5fa;
  --info-soft: #172554;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/0f172a/0f172a) | `#0F172A` | Nền app |
| ![surface](https://placehold.co/24x24/1e293b/1e293b) | `#1E293B` | Card, modal |
| ![fg](https://placehold.co/24x24/f1f5f9/f1f5f9) | `#F1F5F9` | Chữ chính |
| ![primary](https://placehold.co/24x24/a78bfa/a78bfa) | `#A78BFA` | CTA chính |
| ![accent](https://placehold.co/24x24/fbbf24/fbbf24) | `#FBBF24` | Điểm nhấn |

**Hợp với:** App premium, crypto/blockchain, bất động sản hạng sang.

---

## Palette 3 — 🌿 Forest Calm

> **Phong cách:** Tự nhiên, bình yên, eco-friendly. Xanh lá đậm kết hợp nâu gỗ ấm tạo cảm giác bền vững và đáng tin.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #f5f5f0;
  --surface: #fefdfb;
  --surface-muted: #ecebe4;
  --surface-raised: #fefdfb;

  /* ── Text ── */
  --fg: #1c1917;
  --muted: #6b6560;
  --subtle: #a39e99;
  --border: #d6d3cd;
  --border-strong: #b8b3ac;

  /* ── Primary (Forest Green) ── */
  --primary: #2d6a4f;
  --primary-hover: #1b4332;
  --primary-soft: #d8f3dc;
  --control: #1b4332;
  --on-control: #ffffff;

  /* ── Accent (Warm Terracotta) ── */
  --accent: #c77f5a;
  --accent-soft: #f5e6db;

  /* ── Semantic ── */
  --success: #40916c;
  --success-soft: #d8f3dc;
  --warning: #cc8b3a;
  --warning-soft: #fef3c7;
  --danger: #c1403d;
  --danger-soft: #fde8e8;
  --info: #5b7f95;
  --info-soft: #e8eff4;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/f5f5f0/f5f5f0) | `#F5F5F0` | Nền app |
| ![surface](https://placehold.co/24x24/fefdfb/fefdfb) | `#FEFDFB` | Card, modal |
| ![fg](https://placehold.co/24x24/1c1917/1c1917) | `#1C1917` | Chữ chính |
| ![primary](https://placehold.co/24x24/2d6a4f/2d6a4f) | `#2D6A4F` | CTA chính |
| ![accent](https://placehold.co/24x24/c77f5a/c77f5a) | `#C77F5A` | Điểm nhấn |

**Hợp với:** App bất động sản xanh, căn hộ eco, lifestyle, wellness.

---

## Palette 4 — 🌅 Sunset Glow

> **Phong cách:** Trẻ trung, năng động, friendly. Gradient cam-hồng ấm áp tạo cảm giác thân thiện và phấn khởi.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #fffbf5;
  --surface: #ffffff;
  --surface-muted: #fef0e3;
  --surface-raised: #ffffff;

  /* ── Text ── */
  --fg: #27201a;
  --muted: #8c7565;
  --subtle: #b8a494;
  --border: #f0ddd0;
  --border-strong: #ddc5b2;

  /* ── Primary (Warm Coral) ── */
  --primary: #e8614d;
  --primary-hover: #d14833;
  --primary-soft: #fde8e4;
  --control: #d14833;
  --on-control: #ffffff;

  /* ── Accent (Peach Gold) ── */
  --accent: #f5a623;
  --accent-soft: #fef3d7;

  /* ── Semantic ── */
  --success: #5a9e6f;
  --success-soft: #e3f4e9;
  --warning: #e0912b;
  --warning-soft: #fef3d7;
  --danger: #d93636;
  --danger-soft: #fde8e8;
  --info: #6a89a7;
  --info-soft: #e8f0f7;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/fffbf5/fffbf5) | `#FFFBF5` | Nền app |
| ![surface](https://placehold.co/24x24/ffffff/ffffff) | `#FFFFFF` | Card, modal |
| ![fg](https://placehold.co/24x24/27201a/27201a) | `#27201A` | Chữ chính |
| ![primary](https://placehold.co/24x24/e8614d/e8614d) | `#E8614D` | CTA chính |
| ![accent](https://placehold.co/24x24/f5a623/f5a623) | `#F5A623` | Điểm nhấn |

**Hợp với:** App cho thuê phòng trẻ, co-living, app cộng đồng cư dân.

---

## Palette 5 — ❄️ Arctic Minimal

> **Phong cách:** Tối giản, sạch sẽ, tinh tế. Xám xanh nhạt kết hợp xanh dương tạo cảm giác chuyên nghiệp, rõ ràng và dễ đọc.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #f8fafb;
  --surface: #ffffff;
  --surface-muted: #eef2f5;
  --surface-raised: #ffffff;

  /* ── Text ── */
  --fg: #111827;
  --muted: #6b7280;
  --subtle: #9ca3af;
  --border: #e5e7eb;
  --border-strong: #d1d5db;

  /* ── Primary (Steel Blue) ── */
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --primary-soft: #dbeafe;
  --control: #2563eb;
  --on-control: #ffffff;

  /* ── Accent (Slate Violet) ── */
  --accent: #8b5cf6;
  --accent-soft: #ede9fe;

  /* ── Semantic ── */
  --success: #22c55e;
  --success-soft: #dcfce7;
  --warning: #f59e0b;
  --warning-soft: #fef9c3;
  --danger: #ef4444;
  --danger-soft: #fee2e2;
  --info: #06b6d4;
  --info-soft: #cffafe;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/f8fafb/f8fafb) | `#F8FAFB` | Nền app |
| ![surface](https://placehold.co/24x24/ffffff/ffffff) | `#FFFFFF` | Card, modal |
| ![fg](https://placehold.co/24x24/111827/111827) | `#111827` | Chữ chính |
| ![primary](https://placehold.co/24x24/3b82f6/3b82f6) | `#3B82F6` | CTA chính |
| ![accent](https://placehold.co/24x24/8b5cf6/8b5cf6) | `#8B5CF6` | Điểm nhấn |

**Hợp với:** App quản lý vận hành, SaaS dashboard, admin panel.

---

## Palette 6 — 🌸 Rose Garden

> **Phong cách:** Nhẹ nhàng, tinh tế, thanh lịch. Hồng rose kết hợp sage green tạo cảm giác gần gũi và cao cấp theo hướng nữ tính hiện đại.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #fdf7f8;
  --surface: #fffefb;
  --surface-muted: #f5ecee;
  --surface-raised: #fffefb;

  /* ── Text ── */
  --fg: #2d1f24;
  --muted: #7a646b;
  --subtle: #a8949b;
  --border: #e8d8dd;
  --border-strong: #d4bfc6;

  /* ── Primary (Dusty Rose) ── */
  --primary: #c2647c;
  --primary-hover: #a24d63;
  --primary-soft: #fce4ec;
  --control: #a24d63;
  --on-control: #ffffff;

  /* ── Accent (Sage Green) ── */
  --accent: #7fad8e;
  --accent-soft: #e3f0e7;

  /* ── Semantic ── */
  --success: #5a9e6f;
  --success-soft: #e3f4e9;
  --warning: #d4963a;
  --warning-soft: #fdf2df;
  --danger: #c94444;
  --danger-soft: #fde8e8;
  --info: #6b7fa8;
  --info-soft: #e8edf5;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/fdf7f8/fdf7f8) | `#FDF7F8` | Nền app |
| ![surface](https://placehold.co/24x24/fffefb/fffefb) | `#FFFEFB` | Card, modal |
| ![fg](https://placehold.co/24x24/2d1f24/2d1f24) | `#2D1F24` | Chữ chính |
| ![primary](https://placehold.co/24x24/c2647c/c2647c) | `#C2647C` | CTA chính |
| ![accent](https://placehold.co/24x24/7fad8e/7fad8e) | `#7FAD8E` | Điểm nhấn |

**Hợp với:** App căn hộ dịch vụ, homestay, serviced apartment, boutique living.

---

## Palette 7 — ⚡ Electric Indigo

> **Phong cách:** Táo bạo, công nghệ, tương lai. Indigo đậm kết hợp cyan neon tạo cảm giác đổi mới và mạnh mẽ.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #f5f3ff;
  --surface: #ffffff;
  --surface-muted: #ede9fe;
  --surface-raised: #ffffff;

  /* ── Text ── */
  --fg: #1e1b4b;
  --muted: #6366a0;
  --subtle: #a5a6d4;
  --border: #ddd6fe;
  --border-strong: #c4b5fd;

  /* ── Primary (Deep Indigo) ── */
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-soft: #e0e7ff;
  --control: #4f46e5;
  --on-control: #ffffff;

  /* ── Accent (Electric Cyan) ── */
  --accent: #22d3ee;
  --accent-soft: #cffafe;

  /* ── Semantic ── */
  --success: #10b981;
  --success-soft: #d1fae5;
  --warning: #f59e0b;
  --warning-soft: #fef3c7;
  --danger: #ef4444;
  --danger-soft: #fee2e2;
  --info: #3b82f6;
  --info-soft: #dbeafe;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/f5f3ff/f5f3ff) | `#F5F3FF` | Nền app |
| ![surface](https://placehold.co/24x24/ffffff/ffffff) | `#FFFFFF` | Card, modal |
| ![fg](https://placehold.co/24x24/1e1b4b/1e1b4b) | `#1E1B4B` | Chữ chính |
| ![primary](https://placehold.co/24x24/6366f1/6366f1) | `#6366F1` | CTA chính |
| ![accent](https://placehold.co/24x24/22d3ee/22d3ee) | `#22D3EE` | Điểm nhấn |

**Hợp với:** App proptech công nghệ cao, smart home, IoT, blockchain-forward.

---

## Palette 8 — 🏠 Earthy Trust _(Bảng màu chính — DESIGN.md)_

> **Phong cách:** Ấm áp, gần gũi, tin cậy. Cam đất kết hợp kem sáng và olive tạo cảm giác như bước vào không gian sống thật. Đây là bảng màu gốc của TH-PropTech.

```css
:root {
  /* ── Backgrounds ── */
  --bg: #faf7f2;
  --surface: #fffdf9;
  --surface-muted: #f4eee7;
  --surface-raised: #fffdf9;

  /* ── Text ── */
  --fg: #2b211e;
  --muted: #7a6a61;
  --subtle: #a49389;
  --border: #e3d8d0;
  --border-strong: #c9b8ae;

  /* ── Primary (Cam đất) ── */
  --primary: #c65a3a;
  --primary-hover: #9f3f2a;
  --primary-soft: #f5e3dc;
  --control: #9f3f2a;
  --on-control: #fffdf9;

  /* ── Accent (Vàng cát) ── */
  --accent: #f2b66d;
  --accent-soft: #fcebd4;

  /* ── Semantic ── */
  --success: #6b8e4e;
  --success-soft: #e8f0df;
  --warning: #e9a23b;
  --warning-soft: #fbedcf;
  --danger: #d64545;
  --danger-soft: #f8dfdf;
  --info: #7a6a61;
  --info-soft: #eee8e4;
}
```

| Swatch | Hex | Vai trò |
|--------|-----|---------|
| ![bg](https://placehold.co/24x24/faf7f2/faf7f2) | `#FAF7F2` | Nền app |
| ![surface](https://placehold.co/24x24/fffdf9/fffdf9) | `#FFFDF9` | Card, modal |
| ![fg](https://placehold.co/24x24/2b211e/2b211e) | `#2B211E` | Chữ chính |
| ![primary](https://placehold.co/24x24/c65a3a/c65a3a) | `#C65A3A` | CTA chính |
| ![accent](https://placehold.co/24x24/f2b66d/f2b66d) | `#F2B66D` | Điểm nhấn |

**Hợp với:** App bất động sản ấm áp, cho thuê căn hộ, không gian sống, community living.

---

## Bảng so sánh nhanh

| # | Tên | Primary | Accent | Vibe | Phù hợp |
|---|-----|---------|--------|------|---------|
| 1 | 🌊 Ocean Depth | Teal `#0D9488` | Coral `#F97066` | Chuyên nghiệp, tin cậy | Fintech, BĐS cao cấp |
| 2 | 🌙 Midnight Luxe | Purple `#A78BFA` | Gold `#FBBF24` | Sang trọng, dark | Premium, crypto |
| 3 | 🌿 Forest Calm | Green `#2D6A4F` | Terracotta `#C77F5A` | Tự nhiên, bền vững | Eco, wellness |
| 4 | 🌅 Sunset Glow | Coral `#E8614D` | Peach `#F5A623` | Trẻ trung, năng động | Co-living, cộng đồng |
| 5 | ❄️ Arctic Minimal | Blue `#3B82F6` | Violet `#8B5CF6` | Tối giản, sạch | SaaS, admin |
| 6 | 🌸 Rose Garden | Rose `#C2647C` | Sage `#7FAD8E` | Thanh lịch, tinh tế | Homestay, boutique |
| 7 | ⚡ Electric Indigo | Indigo `#6366F1` | Cyan `#22D3EE` | Công nghệ, táo bạo | Smart home, IoT |
| 8 | 🏠 Earthy Trust | Cam đất `#C65A3A` | Vàng cát `#F2B66D` | Ấm áp, gần gũi | **BĐS cho thuê (mặc định)** |

---

## Hướng dẫn áp dụng vào Figma

1. **Chọn palette** → Copy toàn bộ CSS tokens vào Figma Variables (hoặc tạo Color Styles thủ công).
2. **Đặt tên chuẩn** — giữ nguyên tên token (`bg`, `surface`, `primary`, `accent`...) để dễ swap giữa các palette.
3. **Swap palette** — Khi đổi template, chỉ cần đổi giá trị trong Variable Collection, toàn bộ component tự cập nhật.
4. **Không mix palette** — Mỗi template chỉ dùng 1 palette duy nhất để giữ nhất quán.
5. **Semantic colors** (`success`, `warning`, `danger`) giữ tương đối ổn định giữa các palette, chỉ tinh chỉnh nhẹ về sắc độ để hài hòa với primary.
