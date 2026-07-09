/* TH-PropTech Palette Showcase — App Logic */
/* Depends on data.js (P array) loaded before this script */

const IC={
home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
bell:'<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
user:'<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
check:'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
dot:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/></svg>',
clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
chat:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
back:'<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',
heart:'<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
filter:'<svg viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
map:'<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
cart:'<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>',
star:'<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
card:'<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
gift:'<svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>',
arrow:'<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>'
};

function ap(p){const s=document.documentElement.style;
s.setProperty('--p-bg',p.bg);s.setProperty('--p-surface',p.surface);
s.setProperty('--p-surface-muted',p.sm);s.setProperty('--p-fg',p.fg);
s.setProperty('--p-muted',p.mu);s.setProperty('--p-subtle',p.su);
s.setProperty('--p-border',p.bd);s.setProperty('--p-border-strong',p.bs);
s.setProperty('--p-primary',p.pr);s.setProperty('--p-primary-hover',p.ph);
s.setProperty('--p-primary-soft',p.ps);s.setProperty('--p-control',p.ct);
s.setProperty('--p-on-control',p.oc);s.setProperty('--p-accent',p.ac);
s.setProperty('--p-accent-soft',p.as);s.setProperty('--p-success',p.sc);
s.setProperty('--p-success-soft',p.ss);s.setProperty('--p-warning',p.wn);
s.setProperty('--p-warning-soft',p.ws);s.setProperty('--p-danger',p.dg);
s.setProperty('--p-danger-soft',p.ds);s.setProperty('--p-info',p.inf);
s.setProperty('--p-info-soft',p.is);}

function sw(n,h){return`<div class="swatch"><div class="swatch-color" style="background:${h}"></div><div class="swatch-info"><div class="swatch-name">${n}</div><div class="swatch-hex">${h.toUpperCase()}</div></div></div>`;}

const stat=`<div class="phone-status"><span>09:41</span><div class="phone-status-right"><div class="phone-status-dot"></div><div class="phone-status-dot"></div><div class="phone-status-dot"></div></div></div>`;
function bnav(a){const t=['Trang chủ','Tìm kiếm','Giỏ hàng','Ưu đãi','Tài khoản'];
const i=[IC.home,IC.search,IC.cart,IC.gift,IC.user];
return`<div class="phone-bottomnav">${t.map((l,x)=>`<div class="phone-nav-tab${x===a?' active':''}">${i[x]}<span class="phone-nav-tab-label">${l}</span></div>`).join('')}</div>`;}

/* ── Màn 1: Trang chủ Mua sắm ── */
function ph1(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-title">Chợ Việt</div><div class="phone-appbar-icon">${IC.bell}</div><div class="phone-appbar-icon">${IC.cart}</div></div>
<div class="phone-content">
<div style="background:linear-gradient(135deg, ${p.pr}, ${p.ac}); padding: 16px; border-radius: 12px; margin-bottom: 16px; color: #fff;">
  <div style="font-size: 11px; text-transform: uppercase; opacity: 0.8; font-weight: 600;">Săn Deal Hè Siêu Sale</div>
  <div style="font-size: 20px; font-weight: 700; margin-top: 4px;">Giảm Giá Đến 50%</div>
  <div style="font-size: 11px; opacity: 0.9; margin-top: 4px;">Áp dụng từ hôm nay đến 15/07</div>
</div>
<div class="section-title">Danh mục nổi bật</div>
<div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 4px;">
  <span style="padding: 6px 12px; background: ${p.ps}; color: ${p.fg}; border-radius: 20px; font-size: 12px; font-weight: 600; white-space: nowrap;">Thời trang</span>
  <span style="padding: 6px 12px; background: ${p.sm}; color: ${p.mu}; border-radius: 20px; font-size: 12px; white-space: nowrap;">Điện tử</span>
  <span style="padding: 6px 12px; background: ${p.sm}; color: ${p.mu}; border-radius: 20px; font-size: 12px; white-space: nowrap;">Gia dụng</span>
  <span style="padding: 6px 12px; background: ${p.sm}; color: ${p.mu}; border-radius: 20px; font-size: 12px; white-space: nowrap;">Làm đẹp</span>
</div>
<div class="phone-card"><div class="phone-card-img"><div class="phone-card-img-placeholder">Áo Polo Nam Premium</div><div class="phone-card-badge" style="background:${p.ss};color:${p.sc}">Bán chạy</div></div>
<div class="phone-card-body"><div class="phone-card-title">Áo Polo Nam Cotton Organic</div><div class="phone-card-sub">Chất vải mát, co giãn 4 chiều</div><div class="phone-card-row"><div class="phone-card-price">299.000đ</div><div class="phone-card-meta">Đã bán 1.2k</div></div><button class="phone-card-btn">Mua ngay</button></div></div>
</div>${bnav(0)}</div></div>`;}

/* ── Màn 2: Chi tiết sản phẩm ── */
function ph2(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-icon">${IC.back}</div><div class="phone-appbar-title">Chi tiết sản phẩm</div><div class="phone-appbar-icon">${IC.heart}</div></div>
<div class="phone-content">
<div class="phone-card-img" style="height: 180px; margin-bottom: 12px;"><div class="phone-card-img-placeholder" style="font-size: 16px; font-weight: 700;">Tai Nghe Wireless Studio</div></div>
<div style="padding: 4px;">
  <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 6px;">
    <span style="background:${p.as}; color:${p.fg}; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 600;">Chính hãng</span>
    <span style="font-size: 12px; color: ${p.mu}; display: flex; align-items: center; gap: 2px;">${IC.star.replace('width="24"','width="12"')} 4.9 (248 đánh giá)</span>
  </div>
  <div style="font-family: var(--t-display); font-size: 18px; font-weight: 700; color: ${p.fg}; line-height: 1.3;">Tai Nghe Chụp Tai Hủy Tiếng Ồn Active ANC V2</div>
  <div style="font-family: var(--t-display); font-size: 22px; font-weight: 700; color: ${p.pr}; margin: 8px 0 12px;">1.450.000đ</div>
  <div class="phone-input-group"><div class="phone-input-label">Chọn màu sắc</div>
    <div style="display: flex; gap: 8px; margin-top: 4px;">
      <span style="width: 24px; height: 24px; border-radius: 50%; background: #1a202c; border: 2px solid ${p.bd};"></span>
      <span style="width: 24px; height: 24px; border-radius: 50%; background: #e2e8f0; border: 2px solid transparent;"></span>
      <span style="width: 24px; height: 24px; border-radius: 50%; background: ${p.pr}; border: 2px solid transparent;"></span>
    </div>
  </div>
  <div style="font-size: 12px; color: ${p.mu}; line-height: 1.5; margin-top: 12px;">Tai nghe chụp tai thế hệ mới với công nghệ lọc tạp âm chủ động chủ động. Thời lượng pin cực khủng lên đến 40 giờ sử dụng liên tục.</div>
</div>
<button class="phone-card-btn" style="margin-top: 16px;">Thêm vào giỏ hàng</button>
</div>${bnav(0)}</div></div>`;}

/* ── Màn 3: Giỏ hàng ── */
function ph3(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-title">Giỏ hàng (3)</div></div>
<div class="phone-content">
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.ps}; color:${p.fg}">Áo</div><div class="phone-list-info"><div class="phone-list-title">Áo Polo Nam Cotton</div><div class="phone-list-sub">Đen / Size L</div><div style="font-weight: 700; color: ${p.pr}; font-size:12px; margin-top: 4px;">299.000đ</div></div><div style="display: flex; align-items: center; gap: 8px;"><span style="width: 24px; height: 24px; border-radius: 4px; background: ${p.sm}; display: flex; align-items: center; justify-content: center; font-weight: 700; cursor: pointer;">-</span><span>1</span><span style="width: 24px; height: 24px; border-radius: 4px; background: ${p.sm}; display: flex; align-items: center; justify-content: center; font-weight: 700; cursor: pointer;">+</span></div></div>
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.as}; color:${p.fg}">Loa</div><div class="phone-list-info"><div class="phone-list-title">Loa Bluetooth Mini V3</div><div class="phone-list-sub">Bạc / Bass Trầm</div><div style="font-weight: 700; color: ${p.pr}; font-size:12px; margin-top: 4px;">450.000đ</div></div><div style="display: flex; align-items: center; gap: 8px;"><span style="width: 24px; height: 24px; border-radius: 4px; background: ${p.sm}; display: flex; align-items: center; justify-content: center; font-weight: 700; cursor: pointer;">-</span><span>2</span><span style="width: 24px; height: 24px; border-radius: 4px; background: ${p.sm}; display: flex; align-items: center; justify-content: center; font-weight: 700; cursor: pointer;">+</span></div></div>
<div style="margin-top: 24px; border-top: 1px solid ${p.bd}; padding-top: 16px;">
  <div style="display: flex; justify-content: space-between; font-size: 13px; color: ${p.mu}; margin-bottom: 8px;"><span>Tạm tính</span><span>1.199.000đ</span></div>
  <div style="display: flex; justify-content: space-between; font-size: 13px; color: ${p.mu}; margin-bottom: 12px;"><span>Khuyến mãi</span><span style="color: ${p.sc}">-50.000đ</span></div>
  <div style="display: flex; justify-content: space-between; font-size: 15px; font-weight: 700; color: ${p.fg}; margin-bottom: 16px;"><span>Tổng thanh toán</span><span>1.149.000đ</span></div>
</div>
<button class="phone-card-btn">Tiến hành đặt hàng</button>
</div>${bnav(2)}</div></div>`;}

/* ── Màn 4: Thanh toán & Vận chuyển ── */
function ph4(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-icon">${IC.back}</div><div class="phone-appbar-title">Thanh toán</div></div>
<div class="phone-content">
<div class="section-title">Địa chỉ nhận hàng</div>
<div style="background: var(--p-surface); border: 1px solid ${p.bd}; padding: 12px; border-radius: 10px; margin-bottom: 16px;">
  <div style="font-weight: 700; font-size: 13px; color: ${p.fg};">Nguyễn Văn An — 0987.654.321</div>
  <div style="font-size: 12px; color: ${p.mu}; margin-top: 4px;">123 Đường Ba Tháng Hai, Phường 12, Quận 10, Thành phố Hồ Chí Minh</div>
</div>
<div class="section-title">Phương thức thanh toán</div>
<div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
  <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid ${p.pr}; background: ${p.ps}; border-radius: 10px;">
    <input type="radio" checked style="accent-color: ${p.pr}">
    <span style="font-size: 13px; font-weight: 600; color: ${p.fg}; display: flex; align-items: center; gap: 6px;">${IC.card.replace('width="24"','width="18"')} Ví điện tử MoMo / ZaloPay</span>
  </label>
  <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid ${p.bd}; border-radius: 10px;">
    <input type="radio" style="accent-color: ${p.pr}">
    <span style="font-size: 13px; color: ${p.mu}; display: flex; align-items: center; gap: 6px;">Thanh toán khi nhận hàng (COD)</span>
  </label>
</div>
<div style="background: ${p.ss}; border: 1px solid ${p.sc}; color: ${p.sc}; padding: 10px; border-radius: 8px; font-size: 11px; margin-bottom: 16px; font-weight: 500; text-align: center;">Đơn hàng của bạn đủ điều kiện miễn phí vận chuyển</div>
<button class="phone-card-btn">Xác nhận thanh toán</button>
</div>${bnav(2)}</div></div>`;}

/* ── Màn 5: Ưu đãi & Vouchers ── */
function ph5(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-title">Kho ưu đãi</div></div>
<div class="phone-content">
<div class="phone-input-group"><input class="phone-input" placeholder="Nhập mã voucher..."></div>
<div class="section-title">Khuyến mãi của bạn</div>
<div style="background: var(--p-surface); border: 2px dashed ${p.ac}; padding: 12px; border-radius: 10px; margin-bottom: 12px; position: relative;">
  <div style="font-weight: 700; font-size: 14px; color: ${p.fg};">Giảm 50k phí vận chuyển</div>
  <div style="font-size: 11px; color: ${p.mu}; margin-top: 2px;">Cho đơn hàng từ 250k. Hạn sử dụng: 31/07</div>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
    <span style="font-family: var(--t-mono); font-weight: 600; background: ${p.as}; color: ${p.fg}; padding: 2px 8px; border-radius: 4px; font-size: 11px;">FREESHIP50K</span>
    <span style="font-size: 12px; color: ${p.pr}; font-weight: 700; cursor: pointer;">Áp dụng</span>
  </div>
</div>
<div style="background: var(--p-surface); border: 1px solid ${p.bd}; padding: 12px; border-radius: 10px; margin-bottom: 12px; opacity: 0.9;">
  <div style="font-weight: 700; font-size: 14px; color: ${p.fg};">Giảm 10% Tổng hóa đơn</div>
  <div style="font-size: 11px; color: ${p.mu}; margin-top: 2px;">Giảm tối đa 100k cho thành viên mới.</div>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
    <span style="font-family: var(--t-mono); font-weight: 600; background: ${p.sm}; color: ${p.mu}; padding: 2px 8px; border-radius: 4px; font-size: 11px;">WELCOME10</span>
    <span style="font-size: 12px; color: ${p.mu}; font-weight: 600;">Đã lưu</span>
  </div>
</div>
</div>${bnav(3)}</div></div>`;}

/* ── Màn 6: Hồ sơ cá nhân ── */
function ph6(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-title">Hồ sơ cá nhân</div></div>
<div class="phone-content">
<div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
  <div style="width: 56px; height: 56px; border-radius: 50%; background: ${p.ct}; color: ${p.oc}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 20px;">AN</div>
  <div>
    <div style="font-weight: 700; font-size: 16px; color: ${p.fg};">Nguyễn Văn An</div>
    <div style="font-size: 11px; color: ${p.mu}; margin-top: 2px;">Thành viên vàng (Tích lũy: 1,200 điểm)</div>
  </div>
</div>
<div style="background: var(--p-surface); border: 1px solid ${p.bd}; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; border-bottom: 1px solid ${p.bd};">
    <span style="font-size: 13px; font-weight: 500; color: ${p.fg}; display: flex; align-items: center; gap: 10px;">Đơn hàng của tôi</span>
    <span style="font-size: 11px; color: ${p.mu}; display: flex; align-items: center;">Xem lịch sử ${IC.arrow.replace('width="24"','width="12"')}</span>
  </div>
  <div style="display: flex; justify-content: space-around; padding: 12px 0; background: ${p.sm};">
    <div style="text-align: center;"><div style="font-size: 11px; color: ${p.fg}; font-weight: 600;">Chờ xác nhận</div><div style="font-size: 18px; font-weight: 700; color: ${p.pr}; margin-top: 4px;">1</div></div>
    <div style="text-align: center;"><div style="font-size: 11px; color: ${p.fg}; font-weight: 600;">Đang giao hàng</div><div style="font-size: 18px; font-weight: 700; color: ${p.pr}; margin-top: 4px;">2</div></div>
    <div style="text-align: center;"><div style="font-size: 11px; color: ${p.fg}; font-weight: 600;">Đã hoàn thành</div><div style="font-size: 18px; font-weight: 700; color: ${p.pr}; margin-top: 4px;">45</div></div>
  </div>
</div>
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.sm}; color:${p.fg}">💳</div><div class="phone-list-info"><div class="phone-list-title">Ví ShopeePay / Liên kết ngân hàng</div><div class="phone-list-sub">Đã liên kết Vietcombank</div></div></div>
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.sm}; color:${p.fg}">⚙️</div><div class="phone-list-info"><div class="phone-list-title">Thiết lập tài khoản</div><div class="phone-list-sub">Thông tin nhận hàng, mật khẩu</div></div></div>
</div>${bnav(4)}</div></div>`;}

function buildPanel(p,i){
const grp=[
{t:'Nền',items:[['bg',p.bg],['surface',p.surface],['surface-muted',p.sm]]},
{t:'Chữ',items:[['fg',p.fg],['muted',p.mu],['subtle',p.su]]},
{t:'Viền',items:[['border',p.bd],['border-strong',p.bs]]},
{t:'Chính (Primary)',items:[['primary',p.pr],['primary-hover',p.ph],['primary-soft',p.ps],['control',p.ct],['on-control',p.oc]]},
{t:'Nhấn (Accent)',items:[['accent',p.ac],['accent-soft',p.as]]},
{t:'Trạng thái',items:[['success',p.sc],['success-soft',p.ss],['warning',p.wn],['warning-soft',p.ws],['danger',p.dg],['danger-soft',p.ds],['info',p.inf],['info-soft',p.is]]}
];
let s=grp.map(g=>`<div class="swatch-section"><div class="section-title">${g.t}</div><div class="swatch-grid">${g.items.map(x=>sw(x[0],x[1])).join('')}</div></div>`).join('');
let tags=p.tags.map(t=>`<span class="panel-tag">${t}</span>`).join('');
return`<div class="panel" id="panel-${p.id}">
<div class="panel-header"><div class="panel-name">${String(i+1).padStart(2,'0')} / ${p.name}</div><div class="panel-desc">${p.desc}</div><div class="panel-tags">${tags}</div></div>
${s}
<div class="demo-section"><div class="section-title">Giao diện mẫu trên điện thoại</div>
<div class="demo-grid">
  <div class="phone-wrap"><div class="phone-label">Trang chủ Shopping</div><div class="phone-watermark">Màn hình minh họa</div>${ph1(p)}</div>
  <div class="phone-wrap"><div class="phone-label">Chi tiết sản phẩm</div><div class="phone-watermark">Màn hình minh họa</div>${ph2(p)}</div>
  <div class="phone-wrap"><div class="phone-label">Giỏ hàng</div><div class="phone-watermark">Màn hình minh họa</div>${ph3(p)}</div>
  <div class="phone-wrap"><div class="phone-label">Thanh toán & Vận chuyển</div><div class="phone-watermark">Màn hình minh họa</div>${ph4(p)}</div>
  <div class="phone-wrap"><div class="phone-label">Kho Voucher & Ưu đãi</div><div class="phone-watermark">Màn hình minh họa</div>${ph5(p)}</div>
  <div class="phone-wrap"><div class="phone-label">Hồ sơ cá nhân</div><div class="phone-watermark">Màn hình minh họa</div>${ph6(p)}</div>
</div></div></div>`;}

function init(){
const nav=document.getElementById('paletteNav');
const ct=document.getElementById('panelsContainer');
P.forEach((p,i)=>{
const it=document.createElement('div');
it.className='nav-item'+(i===0?' active':'');
it.innerHTML=`<div class="nav-dot" style="background:${p.pr}"></div><span class="nav-label">${String(i+1).padStart(2,'0')}. ${p.name}</span>`;
it.addEventListener('click',()=>go(i));
nav.appendChild(it);
ct.insertAdjacentHTML('beforeend',buildPanel(p,i));
});
go(0);
const mb=document.getElementById('menuBtn'),sb=document.getElementById('sidebar');
let ov=document.createElement('div');ov.className='sidebar-overlay';document.body.appendChild(ov);
mb.addEventListener('click',()=>{sb.classList.toggle('open');ov.classList.toggle('show');});
ov.addEventListener('click',()=>{sb.classList.remove('open');ov.classList.remove('show');});
}

function go(i){
const p=P[i];ap(p);
document.getElementById('topbarTitle').textContent=p.name;
document.querySelectorAll('.nav-item').forEach((n,x)=>n.classList.toggle('active',x===i));
document.querySelectorAll('.panel').forEach((el,x)=>el.classList.toggle('active',x===i));
document.getElementById('sidebar').classList.remove('open');
const ov=document.querySelector('.sidebar-overlay');if(ov)ov.classList.remove('show');
}

document.addEventListener('DOMContentLoaded',init);
