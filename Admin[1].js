// ============================================================
// ADMIN DASHBOARD
// ============================================================

// ---- Secret code config ----
// Change this to whatever code you want admins to use.
const ADMIN_SECRET_CODE = 'EQUIP2026';
const SESSION_KEY = 'equipshare_admin_verified';

// ---- Elements: gate ----
const gate = document.getElementById('gate');
const dashboard = document.getElementById('dashboard');
const secretInput = document.getElementById('secretInput');
const verifyBtn = document.getElementById('verifyBtn');
const gateError = document.getElementById('gateError');

function unlockDashboard(){
  gate.style.display = 'none';
  dashboard.style.display = 'block';
  sessionStorage.setItem(SESSION_KEY, 'true');
  renderAll();
}

function checkCode(){
  const entered = secretInput.value.trim();
  if (entered === ADMIN_SECRET_CODE){
    gateError.classList.remove('show');
    unlockDashboard();
  } else {
    gateError.classList.add('show');
    secretInput.value = '';
    secretInput.focus();
  }
}

verifyBtn.addEventListener('click', checkCode);
secretInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkCode();
});

// Auto-unlock if already verified earlier in this browser session
if (sessionStorage.getItem(SESSION_KEY) === 'true'){
  unlockDashboard();
}

// ---- Back button ----
document.getElementById('backBtn').addEventListener('click', () => {
  window.history.back();
});

// ============================================================
// SAMPLE / SEED DATA
// In a real backend this would come from your database, and
// "status" / "activity" would be updated live as farmers and
// owners use the site. For now this is mock data so the admin
// screens are fully working and ready to wire up to a backend.
// ============================================================

// status: 'active' | 'pending' | 'blocked' | 'rejected'
const PROFILES = [
  {
    id: 1,
    name: 'Ravi Kumar',
    email: 'ravi@example.com',
    mobile: '9876543210',
    address: '12-3, Village Road, Guntur, AP',
    role: 'owner',
    upi: '',
    bank: '',
    ifsc: '',
    avatar: '🔧',
    avatarColor: '#dbeafe',
    status: 'active',
    activity: [
      { text: 'Profile created', time: '5 days ago' },
      { text: 'Posted equipment: Rotavator', time: '3 days ago' },
      { text: 'Updated bank account details', time: '1 day ago' }
    ]
  },
  {
    id: 2,
    name: 'Arjun Farmer',
    email: 'arjun@example.com',
    mobile: '9123456789',
    address: '4-5, Farm Colony, Mangalagiri, AP',
    role: 'farmer',
    upi: '',
    bank: '',
    ifsc: '',
    avatar: '🌱',
    avatarColor: '#d1fae5',
    status: 'active',
    activity: [
      { text: 'Profile created', time: '4 days ago' },
      { text: 'Booked equipment: Rotavator', time: '2 days ago' }
    ]
  },
  {
    id: 3,
    name: 'Suresh Reddy',
    email: 'suresh@example.com',
    mobile: '9988776655',
    address: '22-1, Kanuru, Vijayawada, AP',
    role: 'farmer',
    upi: '',
    bank: '',
    ifsc: '',
    avatar: '🌱',
    avatarColor: '#d1fae5',
    status: 'pending',
    activity: [
      { text: 'Profile submitted for approval', time: 'today' }
    ]
  }
];

// status: 'pending' | 'approved' | 'rejected'
function loadEquipment(){
  return JSON.parse(localStorage.getItem('equipshare_equipment')) || [];
}
function saveEquipment(){
  localStorage.setItem('equipshare_equipment', JSON.stringify(EQUIPMENT));
}
let EQUIPMENT = loadEquipment();

// Each completed booking earns the platform 10% commission
const WALLET_TXNS = [
  { equipment: 'Rotavator', farmer: 'Arjun Farmer', amount: 2000, date: '2 days ago' },
  { equipment: 'Rotavator', farmer: 'Suresh Reddy', amount: 1600, date: 'today' }
];

// Pull in real data saved by the farmer profile page, if present,
// so the admin dashboard reflects what the owner/farmer actually filled in.
// The role shown always matches whatever role they registered under.
(function mergeRealProfileData(){
  try {
    const saved = JSON.parse(localStorage.getItem('equipshare_profile_data'));
    if (saved && saved.fullName){
      const match = PROFILES.find(p => p.email === 'arjun@example.com');
      if (match){
        match.name = saved.fullName || match.name;
        match.mobile = saved.mobile || match.mobile;
        match.address = saved.address || match.address;
        match.upi = saved.upi || match.upi;
        match.bank = saved.bank || match.bank;
        match.ifsc = saved.ifsc || match.ifsc;
        if (saved.role) match.role = saved.role; // role always reflects what they filled
      }
    }
  } catch(e){ /* no saved data yet, ignore */ }
})();

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}
function shortAddress(addr){
  if (!addr) return '—';
  return addr.split(',')[0];
}

// ============================================================
// STAT CARDS
// ============================================================
function renderStats(){
  document.getElementById('statViewers').textContent = '17';
  document.getElementById('statProfiles').textContent = PROFILES.filter(p => p.status !== 'rejected').length;
  document.getElementById('statBookings').textContent = WALLET_TXNS.length;
  document.getElementById('statEquipment').textContent = EQUIPMENT.length;

  const totalCommission = WALLET_TXNS.reduce((sum, t) => sum + Math.round(t.amount * 0.10), 0);
  document.getElementById('statWallet').textContent = `₹${totalCommission}`;
}

// ============================================================
// PROFILES TAB
// ============================================================
const profileList = document.getElementById('profileList');
const profilesCount = document.getElementById('profilesCount');

function renderProfiles(){
  const visible = PROFILES.filter(p => p.status !== 'rejected');
  profilesCount.textContent = `All Profiles (${visible.length})`;
  profileList.innerHTML = '';

  visible.forEach(p => {
    const row = document.createElement('div');
    row.className = 'profile-row' + (p.status === 'blocked' ? ' is-blocked' : '');
    row.innerHTML = `
      <div class="profile-avatar" style="background:${p.avatarColor}">${p.avatar}</div>
      <div class="profile-info">
        <div class="p-name">${escapeHtml(p.name)}</div>
        <div class="p-email">${escapeHtml(p.email)}</div>
        <div class="p-meta">
          <span>📞 ${escapeHtml(p.mobile || '—')}</span>
          <span>📍 ${escapeHtml(shortAddress(p.address))}</span>
        </div>
      </div>
      <div class="profile-side">
        <span class="role-badge ${p.role}">${p.role}</span>
        ${p.status === 'blocked' ? '<span class="status-tag blocked">Blocked</span>' : ''}
        ${p.status === 'pending' ? '<span class="status-tag pending">Pending</span>' : ''}
        <span class="view-link">→ View</span>
      </div>
    `;
    row.addEventListener('click', () => openProfileModal(p.id));
    profileList.appendChild(row);
  });
}

// ============================================================
// APPROVALS TAB (pending profiles + pending equipment)
// ============================================================
const approvalsList = document.getElementById('approvalsList');
const approvalsCount = document.getElementById('approvalsCount');
const approvalsBadge = document.getElementById('approvalsBadge');

function getPendingItems(){
  const pendingProfiles = PROFILES.filter(p => p.status === 'pending')
    .map(p => ({ type: 'profile', data: p }));
  const pendingEquipment = EQUIPMENT.filter(e => e.status === 'pending')
    .map(e => ({ type: 'equipment', data: e }));
  return [...pendingProfiles, ...pendingEquipment];
}

function renderApprovals(){
  const pending = getPendingItems();
  approvalsCount.textContent = `Pending Approvals (${pending.length})`;

  if (pending.length === 0){
    approvalsBadge.style.display = 'none';
    approvalsList.innerHTML = '<p class="empty-state">🎉 Nothing waiting on your review right now.</p>';
    return;
  }

  approvalsBadge.style.display = 'inline-block';
  approvalsBadge.textContent = pending.length;
  approvalsList.innerHTML = '';

  pending.forEach(item => {
    const row = document.createElement('div');
    row.className = 'approval-row';

    if (item.type === 'profile'){
      const p = item.data;
      row.innerHTML = `
        <div class="approval-icon">${p.avatar}</div>
        <div class="approval-info">
          <div class="a-title">${escapeHtml(p.name)}</div>
          <div class="a-sub">New ${escapeHtml(p.role)} profile &middot; wants to join</div>
          <span class="approval-type-tag">Profile approval</span>
        </div>
      `;
      row.addEventListener('click', () => openProfileModal(p.id, true));
    } else {
      const e = item.data;
      row.innerHTML = `
        <div class="approval-icon">🚜</div>
        <div class="approval-info">
          <div class="a-title">${escapeHtml(e.name)}</div>
          <div class="a-sub">Submitted by ${escapeHtml(e.ownerName)} &middot; ${escapeHtml(e.submittedAt)}</div>
          <span class="approval-type-tag">Equipment approval</span>
        </div>
      `;
      row.addEventListener('click', () => openEquipmentModal(e.id, true));
    }

    approvalsList.appendChild(row);
  });
}

// ============================================================
// EQUIPMENT TAB (approved equipment only)
// ============================================================
const equipmentList = document.getElementById('equipmentList');
const equipmentCount = document.getElementById('equipmentCount');

function renderEquipment(){
  const approved = EQUIPMENT.filter(e => e.status === 'approved');
  equipmentCount.textContent = `Approved Equipment (${approved.length})`;
  equipmentList.innerHTML = '';

  if (approved.length === 0){
    equipmentList.innerHTML = '<p class="empty-state">No approved equipment yet.</p>';
    return;
  }

  approved.forEach(e => {
    const row = document.createElement('div');
    row.className = 'equipment-row';
    row.innerHTML = `
      <div class="equipment-icon">🚜</div>
      <div class="equipment-info">
        <div class="e-name">${escapeHtml(e.name)}</div>
        <div class="e-sub">${escapeHtml(e.ownerName)} &middot; ₹${e.pricePerDay}/day</div>
      </div>
      <div class="equipment-side">
        <span class="listed-tag ${e.listed ? 'active' : 'inactive'}">${e.listed ? 'Listed' : 'Not listed'}</span>
        <div>${e.takenBy.length} farmer${e.takenBy.length === 1 ? '' : 's'}</div>
      </div>
    `;
    row.addEventListener('click', () => openEquipmentModal(e.id, false));
    equipmentList.appendChild(row);
  });
}

// ============================================================
// WALLET TAB (commission earnings)
// ============================================================
const walletList = document.getElementById('walletList');

function renderWallet(){
  walletList.innerHTML = '';
  if (WALLET_TXNS.length === 0){
    walletList.innerHTML = '<p class="empty-state">No bookings completed yet.</p>';
    return;
  }
  WALLET_TXNS.forEach(t => {
    const commission = Math.round(t.amount * 0.10);
    const row = document.createElement('div');
    row.className = 'wallet-txn';
    row.innerHTML = `
      <div class="wallet-txn-info">
        <div class="w-title">${escapeHtml(t.equipment)}</div>
        <div class="w-sub">Booked by ${escapeHtml(t.farmer)} &middot; ${escapeHtml(t.date)}</div>
      </div>
      <div class="wallet-txn-amount">
        <div class="w-commission">+₹${commission}</div>
        <div class="w-total">of ₹${t.amount} booking</div>
      </div>
    `;
    walletList.appendChild(row);
  });
}

// ============================================================
// MODAL (shared by Profiles / Approvals / Equipment)
// ============================================================
const modalBackdrop = document.getElementById('modalBackdrop');
let modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
let modalStatus = document.getElementById('modalStatus');
const modalFields = document.getElementById('modalFields');
const modalPhotos = document.getElementById('modalPhotos');
const modalActivity = document.getElementById('modalActivity');
const modalActions = document.getElementById('modalActions');
const modalClose = document.getElementById('modalClose');

function closeModal(){
  modalBackdrop.classList.remove('show');
}
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});

function setModalStatus(status){
  const map = {
    active: 'Active',
    pending: 'Pending Approval',
    blocked: 'Blocked',
    rejected: 'Rejected'
  };
  if (!map[status]){
    modalStatus.style.display = 'none';
    modalStatus.textContent = '';
    modalStatus.className = 'modal-status';
    return;
  }
  modalStatus.style.display = 'inline-block';
  modalStatus.textContent = map[status];
  modalStatus.className = `modal-status status-tag ${status}`;
}

// ---- Profile modal (also used for pending-profile approvals) ----
function openProfileModal(profileId, isApprovalMode){
  const p = PROFILES.find(x => x.id === profileId);
  if (!p) return;

  modalAvatar.style.background = p.avatarColor;
  modalAvatar.textContent = p.avatar;
  modalName.textContent = p.name;
  modalRole.textContent = p.role;
  modalRole.className = `modal-role ${p.role}`;
  setModalStatus(p.status);

  const fields = [
    { label: 'Email', value: p.email },
    { label: 'Mobile Number', value: p.mobile },
    { label: 'Address', value: p.address },
    { label: 'UPI ID', value: p.upi },
    { label: 'Bank Account', value: p.bank },
    { label: 'IFSC Code', value: p.ifsc }
  ];
  modalFields.innerHTML = fields.map(f => `
    <div class="modal-field">
      <div class="mf-label">${escapeHtml(f.label)}</div>
      <div class="mf-value ${f.value ? '' : 'empty'}">${escapeHtml(f.value || 'Not provided')}</div>
    </div>
  `).join('');

  modalPhotos.style.display = 'none';

  // Activity log — what this farmer/owner has been doing on the site
  modalActivity.style.display = 'block';
  modalActivity.innerHTML = `
    <h4>Activity on the site</h4>
    ${(p.activity || []).map(a => `
      <div class="activity-item">
        <div class="activity-dot"></div>
        <div>
          <div class="a-text">${escapeHtml(a.text)}</div>
          <span class="a-time">${escapeHtml(a.time)}</span>
        </div>
      </div>
    `).join('') || '<p class="empty-state">No activity yet.</p>'}
  `;

  // Action buttons
  if (isApprovalMode && p.status === 'pending'){
    modalActions.innerHTML = `
      <button class="btn-reject" id="actReject">Reject</button>
      <button class="btn-approve" id="actApprove">Approve</button>
    `;
    document.getElementById('actApprove').addEventListener('click', () => {
      e.status = 'approved';
      e.listed = true;
      saveEquipment();
      closeModal();
      renderAll();
    });
    document.getElementById('actReject').addEventListener('click', () => {
      if (!confirm(`Reject "${e.name}"? ${e.ownerName} will be notified.`)) return;
      e.status = 'rejected';
      e.listed = false;
      saveEquipment();
      closeModal();
      renderAll();
    });
    
  } else {
    const blockLabel = p.status === 'blocked' ? 'Unblock' : 'Block';
    const blockClass = p.status === 'blocked' ? 'btn-unblock' : 'btn-block';
    modalActions.innerHTML = `
      <button class="${blockClass}" id="actBlock">${blockLabel}</button>
      <button class="btn-delete" id="actDelete">Delete</button>
    `;
    document.getElementById('actBlock').addEventListener('click', () => {
      p.status = p.status === 'blocked' ? 'active' : 'blocked';
      p.activity.push({ text: p.status === 'blocked' ? 'Profile blocked by admin' : 'Profile unblocked by admin', time: 'just now' });
      closeModal();
      renderAll();
    });
    document.getElementById('actDelete').addEventListener('click', () => {
      if (!confirm(`Delete ${p.name}'s profile permanently? This can't be undone.`)) return;
      const idx = PROFILES.findIndex(x => x.id === p.id);
      if (idx > -1) PROFILES.splice(idx, 1);
      closeModal();
      renderAll();
    });
  }

  modalBackdrop.classList.add('show');
}

// ---- Equipment modal (also used for pending-equipment approvals) ----
function openEquipmentModal(equipmentId, isApprovalMode){
  const e = EQUIPMENT.find(x => x.id === equipmentId);
  if (!e) return;

  modalAvatar.style.background = '#fde8d2';
  modalAvatar.textContent = '🚜';
  modalName.textContent = e.name;
  modalRole.textContent = e.category;
  modalRole.className = 'modal-role owner';
  setModalStatus(e.status === 'approved' ? 'active' : e.status);

  const fields = [
    { label: 'Owner', value: e.ownerName },
    { label: 'Category', value: e.category },
    { label: 'Price per day', value: `₹${e.pricePerDay}` },
    { label: 'Location', value: e.location },
    { label: 'Description', value: e.description },
    { label: 'Taken by', value: e.takenBy.length ? e.takenBy.join(', ') : '' },
    { label: 'Listed to farmers', value: e.listed ? 'Yes — visible in farmer list' : 'Not listed yet' }
  ];
  modalFields.innerHTML = fields.map(f => `
    <div class="modal-field">
      <div class="mf-label">${escapeHtml(f.label)}</div>
      <div class="mf-value ${f.value ? '' : 'empty'}">${escapeHtml(f.value || 'Not provided')}</div>
    </div>
  `).join('');

  // Photo gallery
  modalPhotos.style.display = 'block';
  let photoSlots = '';
  for (let i = 1; i <= (e.photos || 0); i++){
    photoSlots += `<div class="photo-slot">📷<span>Photo ${i}</span></div>`;
  }
  modalPhotos.innerHTML = `<h4>Uploaded Photos (${e.photos || 0})</h4><div class="photo-grid">${photoSlots || '<p class="empty-state">No photos uploaded.</p>'}</div>`;

  modalActivity.style.display = 'none';

  if (isApprovalMode && e.status === 'pending'){
    modalActions.innerHTML = `
      <button class="btn-reject" id="actReject">Reject</button>
      <button class="btn-approve" id="actApprove">Approve</button>
    `;
    document.getElementById('actApprove').addEventListener('click', () => {
      e.status = 'approved';
      e.listed = true;
      closeModal();
      renderAll();
    });
    document.getElementById('actReject').addEventListener('click', () => {
      if (!confirm(`Reject "${e.name}"? ${e.ownerName} will be notified.`)) return;
      e.status = 'rejected';
      e.listed = false;
      closeModal();
      renderAll();
    });
  } else {
    modalActions.innerHTML = '';
  }

  modalBackdrop.classList.add('show');
}

// ============================================================
// TAB SWITCHING
// ============================================================
const tabs = document.querySelectorAll('.tab');
const panels = {
  profiles: document.getElementById('panel-profiles'),
  approvals: document.getElementById('panel-approvals'),
  bookings: document.getElementById('panel-bookings'),
  wallet: document.getElementById('panel-wallet'),
  equipment: document.getElementById('panel-equipment')
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    Object.values(panels).forEach(p => p.style.display = 'none');
    panels[tab.dataset.tab].style.display = 'block';
  });
});

// ============================================================
// RENDER EVERYTHING
// ============================================================
function renderAll(){
  renderStats();
  renderProfiles();
  renderApprovals();
  renderEquipment();
  renderWallet();
}
