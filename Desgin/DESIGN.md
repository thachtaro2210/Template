# TH-PropTech Mobile App — Design System & Figma Template Guide

Tài liệu này định nghĩa hệ thống design tokens, nguyên tắc giao diện và component chuẩn cho **ứng dụng di động TH-PropTech**. Dùng làm spec tham chiếu khi vẽ Figma, đảm bảo mọi template đều nhất quán về màu sắc, typography, spacing và component.

**Quy trình làm việc:**

1. Team chọn một Figma template từ bộ mẫu.
2. Dựa trên template đã chọn, team vẽ lại các màn hình của app đang phát triển theo đúng design system này.
3. Mọi màn hình Figma phải tuân thủ tokens, component standards và layout rules bên dưới.

---

## 1. Product Direction — Mobile First

TH-PropTech theo đuổi hướng **Earthy Trust PropTech**: sáng, ấm, tin cậy, giàu thông tin và dễ thao tác trên thiết bị di động. Giao diện dùng nền kem sáng, surface trắng ngà và cam đất có kiểm soát để tạo cảm giác gần gũi với không gian sống.

**Từ khóa thiết kế:**

- **Minh bạch**: trạng thái giao dịch, hợp đồng, thanh toán và hash Blockchain phải dễ đọc, dễ kiểm chứng ngay trên điện thoại.
- **Nhanh gọn**: mỗi màn hình tập trung một nhiệm vụ chính, tối thiểu scroll ngang, ưu tiên hành động một chạm.
- **Dễ tiếp cận**: khách hàng, nhân viên và admin đều có thể thao tác nhanh bằng ngón tay cái.
- **Hiện đại nhưng không lạnh**: kem sáng và trắng ngà làm nền; cam đất cho hành động chính, vàng cát cho điểm nhấn phụ và olive cho trạng thái thành công.

Hệ thống chỉ hỗ trợ **light mode**. Không tạo dark mode, theme switcher hoặc biến thể đảo màu.

---

## 2. Core Design Tokens

Sử dụng CSS custom properties / Figma Variables làm nguồn token chính. Khi vẽ Figma, tạo **Color Styles** và **Text Styles** tương ứng với bảng dưới.

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

  /* ── Typography ── */
  --font-display: 'Space Grotesk', 'Be Vietnam Pro', 'Segoe UI', sans-serif;
  --font-body: 'Be Vietnam Pro', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;

  /* ── Radius ── */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 999px;   /* dùng cho avatar, chip, FAB */

  /* ── Shadows ── */
  --shadow-sm: 0 1px 2px rgba(43, 33, 30, 0.06);
  --shadow-md: 0 12px 32px rgba(43, 33, 30, 0.08);
  --shadow-lg: 0 20px 48px rgba(43, 33, 30, 0.12);
  --shadow-bottom-nav: 0 -4px 16px rgba(43, 33, 30, 0.06);

  /* ── Spacing ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
}
```

### Color Roles

| Token | Vai trò | Ví dụ sử dụng |
|-------|---------|---------------|
| `--bg` | Nền app shell, màn hình danh sách | Background của mọi screen |
| `--surface` | Card, modal, bottom sheet, input | Card căn hộ, form đặt cọc |
| `--surface-muted` | Vùng phụ, empty state, search bar | Filter area, skeleton |
| `--fg` | Chữ chính, tiêu đề | Tên căn hộ, giá thuê |
| `--muted` | Mô tả, metadata, helper text | Địa chỉ, ngày tạo |
| `--primary` | Cam đất — CTA chính | FAB, nút "Đặt lịch xem" |
| `--control` | Nâu đỏ đất — nền nút chính | Button fill; chữ dùng `--on-control` |
| `--accent` | Vàng cát — điểm nhấn phụ | Chip highlight, badge số lượng |
| `--success` | Trạng thái thành công | "Đã thanh toán", "Hợp đồng hiệu lực" |
| `--warning` | Cảnh báo | "Sắp hết hạn", "Chờ xác nhận" |
| `--danger` | Lỗi, rủi ro | "Quá hạn thanh toán", "Bị từ chối" |
| `--info` | Thông tin trung tính | "Đang xử lý", tooltip |

---

## 3. Typography

Ưu tiên sans-serif hiện đại, rõ ràng và hỗ trợ tiếng Việt tốt.

- **Display / Heading**: `Space Grotesk`, fallback `Be Vietnam Pro`.
- **Body / UI text**: `Be Vietnam Pro`, fallback `Segoe UI`, `system-ui`.
- **Technical / Numeric**: `JetBrains Mono` cho mã giao dịch, hash, số tiền cần đọc chính xác.
- Dùng `font-variant-numeric: tabular-nums` cho số tiền, diện tích, mã giao dịch và hash.
- **Không** dùng serif (Lora) trên mobile app. Serif chỉ dùng cho landing page marketing.

### Thang kích thước Mobile

| Vai trò | Size | Weight | Line Height | Ghi chú |
|---------|------|--------|-------------|---------|
| Screen title | 24–28px | 700 | 1.2 | Dùng `Space Grotesk` |
| Section title | 18–20px | 600 | 1.3 | Dùng `Space Grotesk` |
| Card title | 16–18px | 600 | 1.3 | |
| Body | 14–15px | 400 | 1.55 | `Be Vietnam Pro` |
| Caption / Meta | 12–13px | 400–500 | 1.45 | `--muted` color |
| Button label | 14–16px | 600 | 1.0 | Centered, uppercase ngắn hoặc sentence case |
| Tab bar label | 10–11px | 500 | 1.2 | Dưới icon |

---

## 4. Mobile Layout Principles

### Screen Frames (Figma)

Khi vẽ Figma, dùng các frame size sau:

| Device | Width | Height | Dùng cho |
|--------|-------|--------|----------|
| iPhone SE / compact | 375px | 667px | Test layout tối thiểu |
| iPhone 14 / standard | 393px | 852px | **Frame chính để thiết kế** |
| iPhone 14 Pro Max | 430px | 932px | Test layout rộng |
| Android medium | 360px | 800px | Test Android phổ biến |

> **Mặc định**: Thiết kế trên frame **393 × 852** trước, sau đó kiểm tra co giãn trên 360px và 430px.

### Navigation Structure

- **Bottom Navigation Bar**: 5 tab tối đa, icon + label ngắn, cao `56–64px` (kể cả safe area).
- **Top App Bar**: cao `56px`, chứa title + action icons (search, notification, avatar).
- **Không dùng sidebar** trên mobile. Menu mở rộng dùng bottom sheet hoặc full-screen drawer.
- **Tab bar** cho sub-navigation trong một section (ví dụ: "Tất cả / Trống / Đã thuê").

### Safe Areas & Spacing

- **Status bar**: để trống `44–59px` trên cùng (tuỳ device).
- **Home indicator**: để trống `34px` dưới cùng trên iPhone có notch.
- **Content padding**: `16px` hai bên (horizontal), `12–16px` giữa các phần tử (vertical gap).
- **Card padding**: `16px` bên trong.
- **Section gap**: `24–32px` giữa các section.

### Touch Targets

- Mọi nút, icon button, list item phải có vùng chạm tối thiểu **44 × 44px**.
- Khoảng cách giữa hai target liền kề tối thiểu **8px**.

---

## 5. Component Standards — Mobile

### 5.1 ApartmentCard

Card căn hộ / dự án cho thuê — component xuất hiện nhiều nhất.

- **Hình ảnh**: aspect ratio `16:9` hoặc `4:3`, border-radius `--radius-md`, placeholder nếu chưa có ảnh.
- **Nội dung bắt buộc**: tên căn hộ, vị trí (quận/phường), giá thuê/tháng, diện tích, số phòng, trạng thái (StatusBadge).
- **CTA**: `Đặt lịch xem` hoặc `Xem chi tiết` — dùng `--control` background, `--on-control` text.
- Nếu thiếu dữ liệu, dùng `--` hoặc nhãn `Đang cập nhật`. **Không bịa số liệu**.
- **Layout**: vertical card (ảnh trên, info dưới) cho grid; horizontal card (ảnh trái, info phải) cho list view.

### 5.2 StatusBadge

Chip nhỏ hiển thị trạng thái, nền nhạt + chữ đậm vừa:

| Trạng thái | Color token | Ví dụ |
|-------------|-------------|-------|
| Trống | `--success` / `--success-soft` | Sẵn sàng cho thuê |
| Đã đặt lịch | `--info` / `--info-soft` | Có khách hẹn xem |
| Đã đặt cọc | `--warning` / `--warning-soft` | Chờ hợp đồng |
| Đang thuê | `--muted` / `--surface-muted` | Đang có người ở |
| Tạm khóa | `--danger` / `--danger-soft` | Admin khóa |
| Quá hạn thanh toán | `--danger` / `--danger-soft` | Cần xử lý gấp |
| Đã ghi Blockchain | `--accent` / `--accent-soft` | Có bằng chứng on-chain |

Radius: `--radius-full`. Padding: `4px 12px`. Font size: `12px`, weight `600`.

### 5.3 TransactionTimeline

Quy trình thuê hiển thị dạng **vertical stepper** trên mobile:

1. Tìm căn hộ
2. Đặt lịch xem
3. Đặt cọc
4. Tạo hợp đồng
5. Thanh toán
6. Ghi nhận Blockchain
7. Kết thúc / Gia hạn

**Visual rules:**
- Bước hoàn thành: icon check `--success`, line solid.
- Bước đang xử lý: icon dot `--primary`, line dashed, có nhãn trạng thái phụ.
- Bước bị chặn: icon warning `--danger`, có tooltip/badge giải thích.
- Bước chưa đến: icon circle empty `--border`, line dotted `--border`.
- Mỗi bước có thể expand để xem chi tiết (ngày giờ, người xử lý, hash nếu có).

### 5.4 HashProofCard

Hiển thị bằng chứng Blockchain trên mobile:

- Hash rút gọn bằng `--font-mono`, ví dụ: `0x3f8a...c7d2`.
- Thời gian ghi nhận, loại sự kiện, trạng thái xác thực.
- Button `Sao chép` (icon copy) và `Xem chi tiết` (mở explorer hoặc bottom sheet).
- Background: `--surface`, border `--border`, radius `--radius-md`.
- **Không** dùng hash như trang trí — luôn gắn với một sự kiện nghiệp vụ cụ thể.

### 5.5 Bottom Navigation

5 tab gợi ý cho Customer App:

| Tab | Icon | Label |
|-----|------|-------|
| Trang chủ | 🏠 | Trang chủ |
| Tìm kiếm | 🔍 | Tìm kiếm |
| Giao dịch | 📋 | Giao dịch |
| Thông báo | 🔔 | Thông báo |
| Tài khoản | 👤 | Tài khoản |

- Tab active: icon + label dùng `--primary`.
- Tab inactive: icon + label dùng `--muted`.
- Background: `--surface`, shadow: `--shadow-bottom-nav`.

### 5.6 Top App Bar

- Background: `--surface` hoặc `--bg` (transparent feel).
- Title: `--fg`, `18–20px`, weight `600`.
- Icons: `--fg`, `24px`.
- Có thể chứa: back arrow, title, search icon, notification bell (với badge đỏ), avatar nhỏ.

### 5.7 Input Fields

- Height: `48–52px`.
- Border: `1px solid --border`, focus: `2px solid --primary`.
- Radius: `--radius-md`.
- Label: luôn hiển thị phía trên, `12–13px`, `--muted`.
- Placeholder: `--subtle`.
- Error: border `--danger`, message text `--danger` bên dưới field.

### 5.8 Buttons

| Variant | Background | Text | Border | Dùng cho |
|---------|-----------|------|--------|----------|
| Primary | `--control` | `--on-control` | none | CTA chính: Đặt cọc, Xác nhận |
| Secondary | transparent | `--primary` | `1px --primary` | Hành động phụ: Xem thêm |
| Ghost | transparent | `--fg` | none | Hành động nhẹ: Hủy, Quay lại |
| Danger | `--danger` | white | none | Hành động nguy hiểm: Hủy lịch |
| FAB | `--control` | `--on-control` | none | Floating action: Chat AI, Thêm |

- Height: `48px` (full-width), `40px` (inline).
- Radius: `--radius-md` (button), `--radius-full` (FAB).
- Có trạng thái: default, pressed, disabled, loading.

### 5.9 AI Assistant (Chat)

- Giao diện chat mở từ FAB hoặc tab, chiếm full screen hoặc bottom sheet `70%` height.
- Bubble user: `--primary-soft` background, align phải.
- Bubble AI: `--surface` background, `--border` border, align trái.
- Prompt gợi ý: chip row dùng `--accent-soft` background.
- Typing indicator: 3 dot animation tối giản.
- Quick actions: `Gợi ý căn hộ`, `Đặt lịch`, `Giải thích hợp đồng`.
- Ghi rõ: AI chỉ hỗ trợ tư vấn, không thay thế xác nhận của người dùng hoặc nhân viên.

### 5.10 DashboardMetric (Staff/Admin)

- Card nhỏ trong grid 2 cột trên mobile.
- Nhãn: `--muted`, `12px`.
- Giá trị: `--fg`, `24–28px`, weight `700`, dùng `tabular-nums`.
- Trend indicator (nếu có dữ liệu thật): mũi tên lên `--success` / xuống `--danger`.
- **Không dùng metric giả**.

---

## 6. Figma Template Structure

Khi tạo bộ Figma template, tổ chức theo cấu trúc sau:

### Page 1: 🎨 Design Tokens
- Color palette (tất cả token từ section 2)
- Typography scale (section 3)
- Spacing & radius
- Shadow styles
- Icon set (outline style, 24px grid)

### Page 2: 🧩 Components
- Atoms: Button variants, Input fields, StatusBadge, Avatar, Icon button
- Molecules: ApartmentCard (vertical + horizontal), HashProofCard, DashboardMetric, SearchBar, NotificationItem
- Organisms: Bottom Navigation, Top App Bar, TransactionTimeline, AI Chat interface, Filter sheet

### Page 3: 📱 Screen Templates — Customer App
- Splash / Onboarding
- Home (featured apartments, quick actions, recent activity)
- Search / Filter
- Apartment Detail
- Booking Flow (đặt lịch → đặt cọc → xác nhận)
- Transaction List & Detail
- Contract View
- Payment
- Blockchain Proof
- Notification List
- Profile / Account
- AI Chat

### Page 4: 📱 Screen Templates — Staff App
- Staff Dashboard (metrics + task queue)
- Booking Management
- Customer List
- Deposit & Contract Processing
- Notification & Alerts

### Page 5: 📱 Screen Templates — Admin App
- Admin Dashboard (overview metrics)
- Apartment Management
- User & Role Management (RBAC)
- Report & Analytics
- Blockchain Audit Log
- AI Configuration

### Page 6: 🔄 Flows & Prototyping
- Rental flow prototype (end-to-end)
- Notification → Action flow
- AI Chat interaction flow

---

## 7. Forms & Data Display — Mobile

### Forms
- Label luôn hiển thị phía trên field, không chỉ dùng placeholder.
- Field lỗi có message cụ thể bên dưới, icon error bên trong field.
- Keyboard type phù hợp: number pad cho số tiền/CCCD, email keyboard cho email.
- CTA form nằm cuối, full-width, sticky bottom nếu form dài.
- Có trạng thái loading/disabled khi đang xử lý.

### Lists & Tables
- Mobile **không dùng table truyền thống**. Chuyển thành list card với nhãn rõ.
- Mỗi list item: avatar/icon trái, nội dung giữa (title + subtitle), action/chevron phải.
- Có filter/search khi danh sách > 10 items.
- Empty state đúng ngữ cảnh: `Chưa có lịch xem`, `Chưa phát sinh giao dịch`, `Không tìm thấy căn hộ phù hợp`.

### Detail Screens
- Dùng scrollable screen, không modal chồng modal.
- Ảnh hoặc header visual ở trên, thông tin chi tiết bên dưới.
- Action bar sticky bottom cho các hành động chính.
- Hành động nguy hiểm (hủy lịch, khóa căn hộ, từ chối đặt cọc): confirm dialog hoặc bottom sheet xác nhận.

---

## 8. Motion & Interaction — Mobile

Motion dùng để phản hồi thao tác, không để trang trí.

- **Screen transition**: slide từ phải sang trái (push), `250–300ms`, easing `ease-out`.
- **Bottom sheet**: slide up `200–250ms`, có handle bar kéo, backdrop blur nhẹ.
- **Button press**: scale `0.97`, `100ms`.
- **Card tap**: subtle highlight `--primary-soft` background, `150ms`.
- **Loading**: skeleton shimmer cho card/list; spinner chỉ cho hành động ngắn (< 3s).
- **Pull to refresh**: custom indicator dùng `--primary`.
- **AI chat**: typing indicator 3 dots, `--muted` color, loop `1.2s`.

Tôn trọng `prefers-reduced-motion`: tắt animation, giữ instant feedback.

---

## 9. Accessibility & Trust

- Tương phản màu đạt **WCAG AA** cho text thường (4.5:1) và text lớn (3:1).
- Touch target tối thiểu **44 × 44px**.
- Focus/selected state rõ ràng cho mọi interactive element.
- Form, modal, bottom sheet cần label và trạng thái ARIA phù hợp.
- Không dùng màu làm tín hiệu duy nhất — badge trạng thái luôn có chữ kèm theo.
- Hash, mã giao dịch, số hợp đồng phải có nút **sao chép** rõ ràng.

---

## 10. Do's and Don'ts

### ✅ Nên

- Dùng cam đất `--primary` cho CTA chính, nâu đỏ đất `--control` cho button fill.
- Dùng vàng cát `--accent` cho highlight và điểm nhấn phụ, **không** làm màu chữ dài.
- Dùng olive `--success` cho thành công, vàng cam `--warning` cho cảnh báo, đỏ gạch `--danger` cho lỗi thật.
- Thiết kế trên frame 393px trước, test trên 360px sau.
- Viết copy cụ thể theo nghiệp vụ thuê căn hộ.
- Giữ giao diện sáng, rõ, nhiều khoảng thở, dễ chạm.
- Dùng vertical stepper cho timeline trên mobile.
- Đặt bottom navigation cố định, không ẩn khi scroll.

### ❌ Không nên

- Không thêm dark mode hoặc theme switcher.
- Không dùng cam đất cho lỗi, cảnh báo hoặc trạng thái thành công.
- Không dùng serif heading trên mobile app.
- Không dùng table HTML trên mobile — chuyển thành list card.
- Không dùng card bo tròn quá lớn (`> 20px`) hoặc shadow nặng cho mọi thứ.
- Không dùng gradient tím/xanh làm nền.
- Không bịa số liệu, tỉ lệ tăng trưởng hoặc cam kết pháp lý.
- Không biến Blockchain thành họa tiết trang trí — chỉ hiển thị gắn với bằng chứng giao dịch.
- Không dùng sidebar, hamburger menu phức tạp — ưu tiên bottom nav + bottom sheet.

---

## 11. Agent Prompt Guide

Khi yêu cầu AI tạo giao diện mobile TH-PropTech, dùng chỉ dẫn sau:

> Hãy vẽ giao diện **mobile app** theo design system TH-PropTech hướng Earthy Trust PropTech, chỉ dùng light mode. Frame mặc định 393×852. Nền kem sáng `#FAF7F2`, surface trắng ngà `#FFFDF9`, chữ nâu đen `#2B211E`, text phụ `#7A6A61`, primary cam đất `#C65A3A`, button nâu đỏ đất `#9F3F2A` (chữ nút `#FFFDF9`), accent vàng cát `#F2B66D`, success olive `#6B8E4E`, warning `#E9A23B`, error đỏ gạch `#D64545`. Typography dùng `Space Grotesk` cho heading, `Be Vietnam Pro` cho body/UI, `JetBrains Mono` cho hash/số liệu. Navigation dùng bottom tab bar, không sidebar. Component chính: ApartmentCard, StatusBadge, TransactionTimeline (vertical stepper), HashProofCard, AI Chat, Input fields, Buttons. Touch target ≥ 44px. Không dark mode, không metric giả, không trang trí công nghệ không gắn nghiệp vụ.
