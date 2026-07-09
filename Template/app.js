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
map:'<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
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

const stat=`<div class="phone-status"><span>9:41</span><div class="phone-status-right"><div class="phone-status-dot"></div><div class="phone-status-dot"></div><div class="phone-status-dot"></div></div></div>`;
function bnav(a){const t=['Trang chủ','Tìm kiếm','Giao dịch','Thông báo','Tài khoản'];
const i=[IC.home,IC.search,IC.grid,IC.bell,IC.user];
return`<div class="phone-bottomnav">${t.map((l,x)=>`<div class="phone-nav-tab${x===a?' active':''}">${i[x]}<span class="phone-nav-tab-label">${l}</span></div>`).join('')}</div>`;}

/* ── Phone 1: Trang chủ ── */
function ph1(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-title">Trang chủ</div><div class="phone-appbar-icon">${IC.bell}</div><div class="phone-appbar-icon">${IC.user}</div></div>
<div class="phone-content">
<div class="phone-metrics">
<div class="phone-metric"><div class="phone-metric-label">Căn hộ trống</div><div class="phone-metric-value">24</div><div class="phone-metric-trend up">+3 tuần này</div></div>
<div class="phone-metric"><div class="phone-metric-label">Lịch xem hôm nay</div><div class="phone-metric-value">8</div><div class="phone-metric-trend down">-2 so với hôm qua</div></div>
</div>
<div class="phone-card"><div class="phone-card-img"><div class="phone-card-img-placeholder">Hình ảnh căn hộ</div><div class="phone-card-badge" style="background:${p.ss};color:${p.sc}">Trống</div></div>
<div class="phone-card-body"><div class="phone-card-title">Vinhomes Grand Park S5.03</div><div class="phone-card-sub">Quận 9, TP.HCM — 2PN, 65m²</div><div class="phone-card-row"><div class="phone-card-price">12.500.000đ/tháng</div><div class="phone-card-meta">2 giờ trước</div></div><button class="phone-card-btn">Đặt lịch xem</button></div></div>
<div class="phone-card"><div class="phone-card-img"><div class="phone-card-img-placeholder">Hình ảnh căn hộ</div><div class="phone-card-badge" style="background:${p.ws};color:${p.wn}">Đã đặt cọc</div></div>
<div class="phone-card-body"><div class="phone-card-title">Masteri Thảo Điền T2.18</div><div class="phone-card-sub">Quận 2, TP.HCM — 1PN, 50m²</div><div class="phone-card-row"><div class="phone-card-price">9.800.000đ/tháng</div><div class="phone-card-meta">5 giờ trước</div></div><button class="phone-card-btn" style="background:${p.sm};color:${p.mu}">Xem chi tiết</button></div></div>
</div>${bnav(0)}</div></div>`;}

/* ── Phone 2: Tiến trình giao dịch ── */
function ph2(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-icon">${IC.back}</div><div class="phone-appbar-title">Giao dịch #TH-2847</div></div>
<div class="phone-content">
<div style="margin-bottom:14px">
<div class="phone-input-group"><div class="phone-input-label">Tên khách hàng</div><input class="phone-input" value="Nguyễn Văn An" readonly></div>
<div class="phone-input-group"><div class="phone-input-label">Căn hộ</div><input class="phone-input" value="Vinhomes S5.03 — 2PN, 65m²" readonly></div>
</div>
<div class="section-title" style="color:var(--p-muted);font-size:12px;margin-bottom:12px">Tiến trình thuê</div>
<div class="phone-timeline">
<div class="timeline-step done"><div class="timeline-line"></div><div class="timeline-dot">${IC.check}</div><div class="timeline-info"><div class="timeline-title">Tìm căn hộ</div><div class="timeline-sub">05/07/2026</div></div></div>
<div class="timeline-step done"><div class="timeline-line"></div><div class="timeline-dot">${IC.check}</div><div class="timeline-info"><div class="timeline-title">Đặt lịch xem</div><div class="timeline-sub">06/07/2026, 14:00</div></div></div>
<div class="timeline-step done"><div class="timeline-line"></div><div class="timeline-dot">${IC.check}</div><div class="timeline-info"><div class="timeline-title">Đặt cọc</div><div class="timeline-sub">07/07/2026 — 5.000.000đ</div></div></div>
<div class="timeline-step current"><div class="timeline-line"></div><div class="timeline-dot">${IC.dot}</div><div class="timeline-info"><div class="timeline-title">Tạo hợp đồng</div><div class="timeline-sub">Đang chờ xác nhận</div></div></div>
<div class="timeline-step pending"><div class="timeline-line"></div><div class="timeline-dot">${IC.clock}</div><div class="timeline-info"><div class="timeline-title">Thanh toán</div><div class="timeline-sub"></div></div></div>
<div class="timeline-step pending"><div class="timeline-line"></div><div class="timeline-dot">${IC.clock}</div><div class="timeline-info"><div class="timeline-title">Ghi nhận Blockchain</div><div class="timeline-sub"></div></div></div>
</div>
<button class="phone-card-btn" style="margin-top:8px">Xác nhận hợp đồng</button>
</div>${bnav(2)}</div></div>`;}

/* ── Phone 3: Tìm kiếm ── */
function ph3(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-title">Tìm kiếm</div><div class="phone-appbar-icon">${IC.filter}</div><div class="phone-appbar-icon">${IC.map}</div></div>
<div class="phone-content">
<div class="phone-input-group"><input class="phone-input" placeholder="Tìm theo tên, quận, dự án..."></div>
<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap">
<span style="padding:5px 14px;border-radius:20px;font-size:11px;font-weight:600;background:${p.ct};color:${p.oc}">Tất cả</span>
<span style="padding:5px 14px;border-radius:20px;font-size:11px;font-weight:500;background:${p.sm};color:${p.mu};border:1px solid ${p.bd}">1 phòng ngủ</span>
<span style="padding:5px 14px;border-radius:20px;font-size:11px;font-weight:500;background:${p.sm};color:${p.mu};border:1px solid ${p.bd}">2 phòng ngủ</span>
<span style="padding:5px 14px;border-radius:20px;font-size:11px;font-weight:500;background:${p.sm};color:${p.mu};border:1px solid ${p.bd}">Dưới 10 triệu</span>
</div>
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.ct}">${IC.home}</div><div class="phone-list-info"><div class="phone-list-title">The Sun Avenue A3.12</div><div class="phone-list-sub">Quận 2 — 2PN, 73m² — 14.000.000đ</div></div><div class="phone-list-action" style="color:${p.sc}">Trống</div></div>
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.ac}">${IC.home}</div><div class="phone-list-info"><div class="phone-list-title">Saigon Pearl B2.05</div><div class="phone-list-sub">Bình Thạnh — 1PN, 52m² — 11.500.000đ</div></div><div class="phone-list-action" style="color:${p.sc}">Trống</div></div>
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.pr}">${IC.home}</div><div class="phone-list-info"><div class="phone-list-title">Landmark 81 T3.22</div><div class="phone-list-sub">Bình Thạnh — 3PN, 110m² — 35.000.000đ</div></div><div class="phone-list-action" style="color:${p.wn}">Đã đặt cọc</div></div>
<div class="phone-list-item"><div class="phone-list-avatar" style="background:${p.ct}">${IC.home}</div><div class="phone-list-info"><div class="phone-list-title">Sunrise City X1.08</div><div class="phone-list-sub">Quận 7 — 2PN, 68m² — 12.000.000đ</div></div><div class="phone-list-action" style="color:${p.sc}">Trống</div></div>
</div>${bnav(1)}</div></div>`;}

/* ── Phone 4: Chat AI ── */
function ph4(p){return`<div class="phone-frame"><div class="phone-screen">${stat}
<div class="phone-appbar"><div class="phone-appbar-icon">${IC.back}</div><div class="phone-appbar-title">Trợ lý AI</div></div>
<div class="phone-content">
<div class="phone-chat">
<div class="chat-bubble ai">Xin chào! Tôi là trợ lý AI của TH-PropTech. Tôi có thể giúp bạn tìm căn hộ, giải thích hợp đồng hoặc theo dõi tiến trình giao dịch.</div>
<div class="chat-chips"><span class="chat-chip" style="background:${p.as};color:${p.fg};border:1px solid ${p.ac}">Gợi ý căn hộ</span><span class="chat-chip" style="background:${p.as};color:${p.fg};border:1px solid ${p.ac}">Giải thích hợp đồng</span><span class="chat-chip" style="background:${p.as};color:${p.fg};border:1px solid ${p.ac}">Lịch xem hôm nay</span></div>
<div class="chat-bubble user" style="background:${p.ps};color:${p.fg}">Tôi muốn tìm căn hộ 2 phòng ngủ ở Quận 2, giá dưới 15 triệu/tháng.</div>
<div class="chat-bubble ai">Tôi tìm được 3 căn hộ phù hợp:<br><br><b>1. Vinhomes S5.03</b> — 2PN, 65m², 12.5tr/tháng<br><b>2. The Sun A3.12</b> — 2PN, 73m², 14tr/tháng<br><b>3. Masteri T1.09</b> — 2PN, 60m², 11tr/tháng<br><br>Bạn muốn đặt lịch xem căn nào?</div>
<div class="chat-bubble user" style="background:${p.ps};color:${p.fg}">Cho tôi đặt lịch xem căn Vinhomes S5.03 vào thứ 7 tuần này.</div>
<div class="chat-bubble ai">Đã ghi nhận! Lịch xem căn Vinhomes Grand Park S5.03 vào <b>thứ 7, 12/07/2026</b>. Nhân viên sẽ liên hệ xác nhận trong vòng 24 giờ.</div>
</div>
<div style="display:flex;gap:8px;padding:8px 0;margin-top:auto">
<input class="phone-input" placeholder="Nhập tin nhắn..." style="flex:1;margin:0">
<button style="width:44px;height:44px;border-radius:50%;background:${p.ct};border:none;display:flex;align-items:center;justify-content:center;cursor:pointer">${IC.send.replace('stroke:var(--p-muted)','stroke:'+p.oc)}</button>
</div>
</div>${bnav(3)}</div></div>`;}

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
<div class="demo-grid"><div class="phone-wrap"><div class="phone-label">Trang chủ</div>${ph1(p)}</div><div class="phone-wrap"><div class="phone-label">Tìm kiếm</div>${ph3(p)}</div><div class="phone-wrap"><div class="phone-label">Tiến trình giao dịch</div>${ph2(p)}</div><div class="phone-wrap"><div class="phone-label">Trợ lý AI</div>${ph4(p)}</div></div></div></div>`;}

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
