/* =========================================================
   EQUIPSHARE HUB - FARMER DASHBOARD
   Frontend Demo / API-ready structure
   ========================================================= */

/*
  IMPORTANT:
  This version uses localStorage so the frontend can be tested
  without a backend.

  When your backend is ready, replace the localStorage functions
  with fetch() calls to your API.

  Example:
  POST /api/farmers/profile
  POST /api/farmers/profile/submit
  GET  /api/farmers/profile/status
  GET  /api/farmer/notifications
  POST /api/requests
*/


/* =========================================================
   CONFIG
   ========================================================= */

const ROLE_SELECTION_PAGE = "role.html";

/*
  When backend is ready:

  const API_BASE_URL = "http://localhost:5000/api";

  Then use:
  fetch(`${API_BASE_URL}/...`)
*/

const STORAGE_KEY = "equipshare_farmer_data";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {

    appName: "EquipShare Hub",
    home: "Home",
    menu: "Menu",
    help: "Help",
    contactUs: "Contact Us",
    adminDashboard: "Admin Dashboard",
    signOut: "Sign Out",

    notifications: "Notifications",

    completeProfile: "Complete Your Profile",
    profileSubtitle: "Fill in your details — admin will review & approve",
    farmer: "Farmer",
    requiredFields: "Fields marked * are required",

    fullName: "Full Name *",
    mobileNumber: "Mobile Number *",
    aadhaarNumber: "Aadhaar Number *",
    village: "Village / Town *",
    district: "District *",
    state: "State *",
    cropType: "Crop Type",
    landSize: "Land Size (acres)",
    surveyNumber: "Land Survey No.",
    address: "Address *",

    fullNamePlaceholder: "Enter Full Name",
    mobilePlaceholder: "Enter Mobile Number",
    aadhaarPlaceholder: "Enter Aadhaar Number",
    villagePlaceholder: "Enter Village / Town",
    districtPlaceholder: "Enter District",
    statePlaceholder: "Enter State",
    cropPlaceholder: "Enter Crop Type",
    landSizePlaceholder: "Enter Land Size (acres)",
    surveyPlaceholder: "Enter Land Survey No.",
    addressPlaceholder: "Enter Address",
    messagePlaceholder: "Type your message...",

    submitApproval: "Submit for Admin Approval →",

    waitingTitle: "Waiting for Admin Approval",
    waitingText: "Your profile has been submitted successfully. Please wait while the Admin reviews your details.",
    status: "Status",
    pending: "Pending",
    editProfile: "Edit Profile",

    rejectedTitle: "Admin Rejected Your Profile",
    rejectedText: "Your profile was rejected by the Admin. Please check your details, make the required changes, and submit again.",
    editAndResubmit: "Edit & Resubmit",

    welcome: "Welcome",
    approved: "Approved",

    equipment: "Equipment",
    availableEquipment: "Available Equipment",

    requests: "Requests",
    myRequests: "My Equipment Requests",

    bookings: "Bookings",
    currentBookings: "Current Bookings",
    activeBookings: "Active Bookings",
    pastBookings: "Past Bookings",
    completedBookings: "Completed Bookings",

    ownerName: "Owner Name",
    mobile: "Mobile",
    ownerAddress: "Address",
    dailyPrice: "Daily Price",
    advance: "Advance",

    requestEquipment: "Request Equipment",
    waitingApproval: "Waiting for Approval",
    accepted: "Accepted",
    rejected: "Rejected",
    completed: "Completed",
    active: "Active",

    noRequests: "No equipment requests yet.",
    noActiveBookings: "No active bookings.",
    noPastBookings: "No past bookings.",
    noNotifications: "No notifications yet.",

    profileSubmitted: "Your profile has been submitted for Admin approval.",
    requestSent: "Equipment request sent successfully.",
    alreadyRequested: "You have already requested this equipment.",
    adminApproved: "Your profile has been approved by the Admin.",
    adminRejected: "Admin rejected your profile.",
    ownerAccepted: "Owner accepted your equipment request.",
    ownerRejected: "Owner rejected your equipment request.",
    paymentCompleted: "Payment completed successfully.",
    bookingCompleted: "Your booking has been completed.",

    helpMessage: "For help, please contact the EquipShare support team.",
    contactMessage: "Contact EquipShare support through the registered contact details.",
    logoutMessage: "You have been signed out.",

    confirmLogout: "Are you sure you want to sign out?",
    completeRequired: "Please complete all required fields.",
    invalidMobile: "Please enter a valid 10-digit mobile number.",
    invalidAadhaar: "Please enter a valid 12-digit Aadhaar number.",

    owner: "Owner",
    typeMessage: "Type your message..."
  },


  te: {

    appName: "ఎక్విప్‌షేర్ హబ్",
    home: "హోమ్",
    menu: "మెనూ",
    help: "సహాయం",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    adminDashboard: "అడ్మిన్ డ్యాష్‌బోర్డ్",
    signOut: "సైన్ అవుట్",

    notifications: "నోటిఫికేషన్స్",

    completeProfile: "మీ ప్రొఫైల్‌ను పూర్తి చేయండి",
    profileSubtitle: "మీ వివరాలను నమోదు చేయండి — అడ్మిన్ పరిశీలించి ఆమోదిస్తారు",
    farmer: "రైతు",
    requiredFields: "* గుర్తు ఉన్న ఫీల్డ్స్ తప్పనిసరి",

    fullName: "పూర్తి పేరు *",
    mobileNumber: "మొబైల్ నంబర్ *",
    aadhaarNumber: "ఆధార్ నంబర్ *",
    village: "గ్రామం / పట్టణం *",
    district: "జిల్లా *",
    state: "రాష్ట్రం *",
    cropType: "పంట రకం",
    landSize: "భూమి పరిమాణం (ఎకరాలు)",
    surveyNumber: "ల్యాండ్ సర్వే నంబర్",
    address: "చిరునామా *",

    fullNamePlaceholder: "పూర్తి పేరు నమోదు చేయండి",
    mobilePlaceholder: "మొబైల్ నంబర్ నమోదు చేయండి",
    aadhaarPlaceholder: "ఆధార్ నంబర్ నమోదు చేయండి",
    villagePlaceholder: "గ్రామం / పట్టణం నమోదు చేయండి",
    districtPlaceholder: "జిల్లా నమోదు చేయండి",
    statePlaceholder: "రాష్ట్రం నమోదు చేయండి",
    cropPlaceholder: "పంట రకం నమోదు చేయండి",
    landSizePlaceholder: "భూమి పరిమాణం నమోదు చేయండి",
    surveyPlaceholder: "సర్వే నంబర్ నమోదు చేయండి",
    addressPlaceholder: "చిరునామా నమోదు చేయండి",
    messagePlaceholder: "మీ సందేశాన్ని టైప్ చేయండి...",

    submitApproval: "అడ్మిన్ ఆమోదం కోసం పంపండి →",

    waitingTitle: "అడ్మిన్ ఆమోదం కోసం వేచి ఉంది",
    waitingText: "మీ ప్రొఫైల్ విజయవంతంగా పంపబడింది. అడ్మిన్ మీ వివరాలను పరిశీలించే వరకు వేచి ఉండండి.",
    status: "స్థితి",
    pending: "పెండింగ్",
    editProfile: "ప్రొఫైల్ మార్చండి",

    rejectedTitle: "అడ్మిన్ మీ ప్రొఫైల్‌ను తిరస్కరించారు",
    rejectedText: "అడ్మిన్ మీ ప్రొఫైల్‌ను తిరస్కరించారు. వివరాలను పరిశీలించి అవసరమైన మార్పులు చేసి మళ్లీ పంపండి.",
    editAndResubmit: "మార్చి మళ్లీ పంపండి",

    welcome: "స్వాగతం",
    approved: "ఆమోదించబడింది",

    equipment: "పరికరాలు",
    availableEquipment: "అందుబాటులో ఉన్న పరికరాలు",

    requests: "రిక్వెస్ట్లు",
    myRequests: "నా పరికరాల రిక్వెస్ట్లు",

    bookings: "బుకింగ్స్",
    currentBookings: "ప్రస్తుత బుకింగ్స్",
    activeBookings: "యాక్టివ్ బుకింగ్స్",
    pastBookings: "గత బుకింగ్స్",
    completedBookings: "పూర్తయిన బుకింగ్స్",

    ownerName: "ఓనర్ పేరు",
    mobile: "మొబైల్",
    ownerAddress: "చిరునామా",
    dailyPrice: "రోజువారీ ధర",
    advance: "అడ్వాన్స్",

    requestEquipment: "పరికరాన్ని రిక్వెస్ట్ చేయండి",
    waitingApproval: "ఆమోదం కోసం వేచి ఉంది",
    accepted: "ఆమోదించబడింది",
    rejected: "తిరస్కరించబడింది",
    completed: "పూర్తయింది",
    active: "యాక్టివ్",

    noRequests: "ఇంకా ఎలాంటి పరికరాల రిక్వెస్ట్లు లేవు.",
    noActiveBookings: "యాక్టివ్ బుకింగ్స్ లేవు.",
    noPastBookings: "గత బుకింగ్స్ లేవు.",
    noNotifications: "ఇంకా నోటిఫికేషన్స్ లేవు.",

    profileSubmitted: "మీ ప్రొఫైల్ అడ్మిన్ ఆమోదం కోసం పంపబడింది.",
    requestSent: "పరికరాల రిక్వెస్ట్ విజయవంతంగా పంపబడింది.",
    alreadyRequested: "మీరు ఇప్పటికే ఈ పరికరాన్ని రిక్వెస్ట్ చేశారు.",
    adminApproved: "అడ్మిన్ మీ ప్రొఫైల్‌ను ఆమోదించారు.",
    adminRejected: "అడ్మిన్ మీ ప్రొఫైల్‌ను తిరస్కరించారు.",
    ownerAccepted: "ఓనర్ మీ పరికరాల రిక్వెస్ట్‌ను ఆమోదించారు.",
    ownerRejected: "ఓనర్ మీ పరికరాల రిక్వెస్ట్‌ను తిరస్కరించారు.",
    paymentCompleted: "పేమెంట్ విజయవంతంగా పూర్తయింది.",
    bookingCompleted: "మీ బుకింగ్ పూర్తయింది.",

    helpMessage: "సహాయం కోసం EquipShare సపోర్ట్ టీమ్‌ను సంప్రదించండి.",
    contactMessage: "రిజిస్టర్ చేసిన కాంటాక్ట్ వివరాల ద్వారా EquipShare సపోర్ట్‌ను సంప్రదించండి.",
    logoutMessage: "మీరు సైన్ అవుట్ అయ్యారు.",

    confirmLogout: "మీరు సైన్ అవుట్ చేయాలనుకుంటున్నారా?",
    completeRequired: "అన్ని తప్పనిసరి వివరాలను పూర్తి చేయండి.",
    invalidMobile: "చెల్లుబాటు అయ్యే 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.",
    invalidAadhaar: "చెల్లుబాటు అయ్యే 12 అంకెల ఆధార్ నంబర్ నమోదు చేయండి.",

    owner: "ఓనర్",
    typeMessage: "మీ సందేశాన్ని టైప్ చేయండి..."
  }

};


/* =========================================================
   STATE
   ========================================================= */

let language = localStorage.getItem("equipshare_language") || "en";

let currentEquipment = null;
let currentChatRequest = null;


/* =========================================================
   DEFAULT DATA
   ========================================================= */

const defaultData = {
  profile: null,

  profileStatus: "incomplete",
  rejectionReason: "",

  notifications: [],

  requests: [],

  activeBookings: [],

  pastBookings: [],

  messages: {},

  equipment: [
    {
      id: "EQ001",
      name: "Tractor",
      image: "https://images.unsplash.com/photo-1592982537447-6f7f7c0a1e2e?auto=format&fit=crop&w=900&q=80",
      ownerName: "Ravi Kumar",
      ownerMobile: "9876543210",
      ownerAddress: "Vizianagaram, Andhra Pradesh",
      dailyPrice: 1200,
      advance: 2000
    },

    {
      id: "EQ002",
      name: "Rotavator",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
      ownerName: "Suresh",
      ownerMobile: "9876501234",
      ownerAddress: "Srikakulam, Andhra Pradesh",
      dailyPrice: 700,
      advance: 1000
    },

    {
      id: "EQ003",
      name: "Power Tiller",
      image: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=900&q=80",
      ownerName: "Ramesh",
      ownerMobile: "9988776655",
      ownerAddress: "Visakhapatnam, Andhra Pradesh",
      dailyPrice: 900,
      advance: 1500
    }
  ]
};


/* =========================================================
   STORAGE
   ========================================================= */

function loadData() {

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultData)
    );

    return structuredClone(defaultData);
  }

  try {

    const data = JSON.parse(saved);

    return {
      ...structuredClone(defaultData),
      ...data
    };

  } catch {

    return structuredClone(defaultData);
  }
}


let data = loadData();


function saveData() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}


/* =========================================================
   TRANSLATION
   ========================================================= */

function t(key) {

  return translations[language][key]
    || translations.en[key]
    || key;
}


function applyTranslations() {

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    element.textContent = t(key);

  });


  document.querySelectorAll("[data-placeholder]").forEach(element => {

    const key = element.getAttribute("data-placeholder");

    element.placeholder = t(key);

  });

}


/*
  You can add a language button to your existing UI.

  Example:

  <button onclick="toggleLanguage()">తెలుగు / English</button>
*/

function toggleLanguage() {

  language = language === "en" ? "te" : "en";

  localStorage.setItem(
    "equipshare_language",
    language
  );

  applyTranslations();
  renderCurrentScreen();
  renderEquipment();
  renderRequests();
  renderBookings();
  renderNotifications();
}


/* =========================================================
   SCREEN MANAGEMENT
   ========================================================= */

function hideAllScreens() {

  document.querySelectorAll(".screen").forEach(screen => {

    screen.classList.add("hidden");

  });
}


function showScreen(id) {

  hideAllScreens();

  document
    .getElementById(id)
    .classList.remove("hidden");
}


function renderCurrentScreen() {

  if (data.profileStatus === "incomplete") {

    showScreen("profileScreen");

  }

  else if (data.profileStatus === "pending") {

    showScreen("waitingScreen");

  }

  else if (data.profileStatus === "rejected") {

    showScreen("rejectedScreen");

    document.getElementById("rejectionReason").textContent =
      data.rejectionReason ||
      "Profile requires correction.";

  }

  else if (data.profileStatus === "approved") {

    showScreen("dashboardScreen");

    if (data.profile) {

      document.getElementById("farmerNameDisplay").textContent =
        data.profile.fullName || "Farmer";

    }

    updateCounts();

  }

  applyTranslations();
}


/* =========================================================
   PROFILE
   ========================================================= */

function fillProfileForm() {

  if (!data.profile) return;

  const p = data.profile;

  document.getElementById("fullName").value =
    p.fullName || "";

  document.getElementById("mobile").value =
    p.mobile || "";

  document.getElementById("aadhaar").value =
    p.aadhaar || "";

  document.getElementById("village").value =
    p.village || "";

  document.getElementById("district").value =
    p.district || "";

  document.getElementById("state").value =
    p.state || "";

  document.getElementById("cropType").value =
    p.cropType || "";

  document.getElementById("landSize").value =
    p.landSize || "";

  document.getElementById("surveyNo").value =
    p.surveyNo || "";

  document.getElementById("address").value =
    p.address || "";
}


function getProfileFromForm() {

  return {

    fullName:
      document.getElementById("fullName").value.trim(),

    mobile:
      document.getElementById("mobile").value.trim(),

    aadhaar:
      document.getElementById("aadhaar").value.trim(),

    village:
      document.getElementById("village").value.trim(),

    district:
      document.getElementById("district").value.trim(),

    state:
      document.getElementById("state").value.trim(),

    cropType:
      document.getElementById("cropType").value.trim(),

    landSize:
      document.getElementById("landSize").value.trim(),

    surveyNo:
      document.getElementById("surveyNo").value.trim(),

    address:
      document.getElementById("address").value.trim(),

    updatedAt:
      new Date().toISOString()
  };
}


function validateProfile(profile) {

  const required = [

    profile.fullName,
    profile.mobile,
    profile.aadhaar,
    profile.village,
    profile.district,
    profile.state,
    profile.address

  ];

  if (required.some(value => !value)) {

    showToast(t("completeRequired"));

    return false;
  }


  if (!/^\d{10}$/.test(profile.mobile)) {

    showToast(t("invalidMobile"));

    return false;
  }


  if (!/^\d{12}$/.test(profile.aadhaar)) {

    showToast(t("invalidAadhaar"));

    return false;
  }


  return true;
}


document
  .getElementById("farmerProfileForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const profile = getProfileFromForm();

    if (!validateProfile(profile)) return;

    data.profile = profile;

    /*
      REAL BACKEND CONNECTION:

      await fetch(`${API_BASE_URL}/farmers/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
      });
    */


    data.profileStatus = "pending";

    data.rejectionReason = "";

    addNotification(
      "Profile Submitted",
      t("profileSubmitted")
    );

    saveData();

    renderCurrentScreen();

    showToast(t("profileSubmitted"));

  });


/* =========================================================
   EDIT PROFILE
   ========================================================= */

document
  .getElementById("editProfileBtn")
  .addEventListener("click", function() {

    fillProfileForm();

    data.profileStatus = "incomplete";

    saveData();

    renderCurrentScreen();

  });


document
  .getElementById("editRejectedProfileBtn")
  .addEventListener("click", function() {

    fillProfileForm();

    data.profileStatus = "incomplete";

    saveData();

    renderCurrentScreen();

  });


/* =========================================================
   HOME
   ========================================================= */

function goToRoleSelection() {

  /*
    Change ROLE_SELECTION_PAGE if your actual file
    has another name.
  */

  window.location.href = ROLE_SELECTION_PAGE;
}


document
  .getElementById("homeBtn")
  .addEventListener("click", goToRoleSelection);


document
  .getElementById("profileHomeBtn")
  .addEventListener("click", goToRoleSelection);


/* =========================================================
   SIDE MENU
   ========================================================= */

const sideMenu =
  document.getElementById("sideMenu");

const overlay =
  document.getElementById("overlay");


function openMenu() {

  sideMenu.classList.add("open");

  overlay.classList.add("show");

}


function closeMenu() {

  sideMenu.classList.remove("open");

  overlay.classList.remove("show");

}


document
  .getElementById("menuBtn")
  .addEventListener("click", openMenu);


document
  .getElementById("closeMenu")
  .addEventListener("click", closeMenu);


overlay.addEventListener("click", closeMenu);


/* =========================================================
   MENU ACTIONS
   ========================================================= */

document
  .getElementById("helpBtn")
  .addEventListener("click", function() {

    closeMenu();

    showToast(t("helpMessage"));

  });


document
  .getElementById("contactBtn")
  .addEventListener("click", function() {

    closeMenu();

    showToast(t("contactMessage"));

  });


document
  .getElementById("adminBtn")
  .addEventListener("click", function() {

    closeMenu();

    /*
      Replace with your real admin dashboard file.
    */

    window.location.href = "admin.html";

  });


document
  .getElementById("logoutBtn")
  .addEventListener("click", function() {

    if (!confirm(t("confirmLogout"))) return;

    /*
      With a real authentication system,
      call your backend logout endpoint here.
    */

    localStorage.removeItem(STORAGE_KEY);

    showToast(t("logoutMessage"));

    setTimeout(() => {

      window.location.href = "role.html";

    }, 700);

  });


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function addNotification(title, message) {

  data.notifications.unshift({

    id:
      Date.now().toString(),

    title,

    message,

    date:
      new Date().toISOString(),

    read: false

  });

  saveData();

  renderNotifications();

}


function renderNotifications() {

  const list =
    document.getElementById("notificationList");

  if (!data.notifications.length) {

    list.innerHTML = `
      <div class="notification-item">
        ${t("noNotifications")}
      </div>
    `;

    updateNotificationCount();

    return;
  }


  list.innerHTML =
    data.notifications.map(notification => {

      return `

        <div class="notification-item
          ${notification.read ? "" : "unread"}">

          <strong>
            ${escapeHTML(notification.title)}
          </strong>

          <div>
            ${escapeHTML(notification.message)}
          </div>

          <small>
            ${formatDate(notification.date)}
          </small>

        </div>

      `;

    }).join("");


  updateNotificationCount();

}


function updateNotificationCount() {

  const unread =
    data.notifications.filter(
      n => !n.read
    ).length;

  document.getElementById(
    "notificationCount"
  ).textContent = unread;


  document.getElementById(
    "dashboardNotificationCount"
  ).textContent = unread;

}


document
  .getElementById("notificationBtn")
  .addEventListener("click", function() {

    const panel =
      document.getElementById("notificationPanel");

    panel.classList.toggle("show");

    data.notifications.forEach(
      notification => {
        notification.read = true;
      }
    );

    saveData();

    renderNotifications();

  });


document
  .getElementById("closeNotifications")
  .addEventListener("click", function() {

    document
      .getElementById("notificationPanel")
      .classList.remove("show");

  });


/* =========================================================
   EQUIPMENT
   ========================================================= */

function renderEquipment() {

  const grid =
    document.getElementById("equipmentGrid");

  grid.innerHTML =
    data.equipment.map(equipment => {

      return `

        <article class="equipment-card">

          <img
            src="${equipment.image}"
            alt="${escapeHTML(equipment.name)}"
          >

          <div class="equipment-body">

            <h3>
              ${escapeHTML(equipment.name)}
            </h3>

            <p>
              ${t("ownerName")}: 
              ${escapeHTML(equipment.ownerName)}
            </p>

            <p>
              ₹${equipment.dailyPrice} / day
            </p>

            <button
              class="view-btn"
              onclick="openEquipment('${equipment.id}')">

              ${t("requestEquipment")}

            </button>

          </div>

        </article>

      `;

    }).join("");

}


function openEquipment(id) {

  currentEquipment =
    data.equipment.find(
      equipment => equipment.id === id
    );

  if (!currentEquipment) return;


  document.getElementById(
    "modalEquipmentImage"
  ).src =
    currentEquipment.image;


  document.getElementById(
    "modalEquipmentName"
  ).textContent =
    currentEquipment.name;


  document.getElementById(
    "modalOwnerName"
  ).textContent =
    currentEquipment.ownerName;


  document.getElementById(
    "modalOwnerMobile"
  ).textContent =
    currentEquipment.ownerMobile;


  document.getElementById(
    "modalOwnerAddress"
  ).textContent =
    currentEquipment.ownerAddress;


  document.getElementById(
    "modalDailyPrice"
  ).textContent =
    `₹${currentEquipment.dailyPrice}`;


  document.getElementById(
    "modalAdvance"
  ).textContent =
    `₹${currentEquipment.advance}`;


  document
    .getElementById("equipmentModal")
    .classList.add("show");

}


document
  .getElementById("closeEquipmentModal")
  .addEventListener("click", function() {

    document
      .getElementById("equipmentModal")
      .classList.remove("show");

  });


/* =========================================================
   SEND EQUIPMENT REQUEST
   ========================================================= */

document
  .getElementById("requestEquipmentBtn")
  .addEventListener("click", function() {

    if (!currentEquipment) return;


    const alreadyRequested =
      data.requests.some(
        request =>
          request.equipmentId === currentEquipment.id &&
          request.status !== "rejected"
      );


    if (alreadyRequested) {

      showToast(t("alreadyRequested"));

      return;
    }


    const request = {

      id:
        "REQ-" + Date.now(),

      equipmentId:
        currentEquipment.id,

      equipmentName:
        currentEquipment.name,

      ownerName:
        currentEquipment.ownerName,

      ownerMobile:
        currentEquipment.ownerMobile,

      dailyPrice:
        currentEquipment.dailyPrice,

      advance:
        currentEquipment.advance,

      status:
        "pending",

      createdAt:
        new Date().toISOString()

    };


    data.requests.unshift(request);


    /*
      REAL BACKEND CONNECTION:

      await fetch(`${API_BASE_URL}/requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      });
    */


    addNotification(
      "Equipment Request",
      `${currentEquipment.name} - ${t("waitingApproval")}`
    );


    saveData();

    document
      .getElementById("equipmentModal")
      .classList.remove("show");


    renderRequests();

    updateCounts();

    showToast(t("requestSent"));

  });


/* =========================================================
   REQUESTS
   ========================================================= */

function renderRequests() {

  const container =
    document.getElementById("requestsList");


  if (!data.requests.length) {

    container.innerHTML = `
      <div class="list-card">
        ${t("noRequests")}
      </div>
    `;

    return;
  }


  container.innerHTML =
    data.requests.map(request => {

      let statusText = t("waitingApproval");

      if (request.status === "accepted")
        statusText = t("accepted");

      if (request.status === "rejected")
        statusText = t("rejected");


      const chatButton =
        request.status === "accepted"
          ? `
            <button
              class="chat-btn"
              onclick="openChat('${request.id}')">
              💬 Message
            </button>
          `
          : "";


      return `

        <div class="list-card">

          <div>

            <h3>
              ${escapeHTML(request.equipmentName)}
            </h3>

            <p>
              ${t("ownerName")}:
              ${escapeHTML(request.ownerName)}
            </p>

            <p>
              ₹${request.dailyPrice} / day
            </p>

            ${chatButton}

          </div>

          <span class="status ${request.status}">
            ${statusText}
          </span>

        </div>

      `;

    }).join("");

}


/* =========================================================
   BOOKINGS
   ========================================================= */

function renderBookings() {

  const activeContainer =
    document.getElementById("activeBookingsList");

  const pastContainer =
    document.getElementById("pastBookingsList");


  if (!data.activeBookings.length) {

    activeContainer.innerHTML = `
      <div class="list-card">
        ${t("noActiveBookings")}
      </div>
    `;

  } else {

    activeContainer.innerHTML =
      data.activeBookings.map(booking => {

        return `

          <div class="list-card">

            <div>

              <h3>
                ${escapeHTML(booking.equipmentName)}
              </h3>

              <p>
                ${t("ownerName")}:
                ${escapeHTML(booking.ownerName)}
              </p>

              <p>
                ₹${booking.dailyPrice} / day
              </p>

              <button
                class="chat-btn"
                onclick="openChat('${booking.requestId}')">

                💬 Message Owner

              </button>

            </div>

            <span class="status accepted">
              ${t("active")}
            </span>

          </div>

        `;

      }).join("");

  }


  if (!data.pastBookings.length) {

    pastContainer.innerHTML = `
      <div class="list-card">
        ${t("noPastBookings")}
      </div>
    `;

  } else {

    pastContainer.innerHTML =
      data.pastBookings.map(booking => {

        return `

          <div class="list-card">

            <div>

              <h3>
                ${escapeHTML(booking.equipmentName)}
              </h3>

              <p>
                ${t("ownerName")}:
                ${escapeHTML(booking.ownerName)}
              </p>

              <p>
                ₹${booking.dailyPrice} / day
              </p>

            </div>

            <span class="status completed">
              ${t("completed")}
            </span>

          </div>

        `;

      }).join("");

  }

}


/* =========================================================
   CHAT
   ========================================================= */

function openChat(requestId) {

  const request =
    data.requests.find(
      r => r.id === requestId
    );

  if (!request) return;


  currentChatRequest = request;


  document.getElementById(
    "chatOwnerName"
  ).textContent =
    request.ownerName;


  renderChatMessages();


  document
    .getElementById("chatModal")
    .classList.add("show");

}


function renderChatMessages() {

  if (!currentChatRequest) return;


  const messages =
    data.messages[currentChatRequest.id]
    || [];


  const container =
    document.getElementById("chatMessages");


  if (!messages.length) {

    container.innerHTML = `
      <p style="text-align:center;color:#777">
        No messages yet.
      </p>
    `;

    return;
  }


  container.innerHTML =
    messages.map(message => {

      return `

        <div class="message ${message.sender === "farmer"
          ? "mine"
          : "theirs"}">

          ${escapeHTML(message.text)}

        </div>

      `;

    }).join("");


  container.scrollTop =
    container.scrollHeight;

}


document
  .getElementById("closeChatModal")
  .addEventListener("click", function() {

    document
      .getElementById("chatModal")
      .classList.remove("show");

  });


document
  .getElementById("chatForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    if (!currentChatRequest) return;


    const input =
      document.getElementById("chatInput");


    const text =
      input.value.trim();


    if (!text) return;


    if (!data.messages[currentChatRequest.id]) {

      data.messages[currentChatRequest.id] = [];

    }


    data.messages[currentChatRequest.id].push({

      sender: "farmer",

      text,

      date:
        new Date().toISOString()

    });


    /*
      REAL BACKEND:

      POST /api/messages
    */


    input.value = "";

    saveData();

    renderChatMessages();

  });


/* =========================================================
   COUNTS
   ========================================================= */

function updateCounts() {

  document.getElementById(
    "requestCount"
  ).textContent =
    data.requests.length;


  document.getElementById(
    "activeBookingCount"
  ).textContent =
    data.activeBookings.length;


  document.getElementById(
    "pastBookingCount"
  ).textContent =
    data.pastBookings.length;


  updateNotificationCount();

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  const toast =
    document.getElementById("toast");


  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 3000);

}


/* =========================================================
   UTILITY
   ========================================================= */

function formatDate(date) {

  try {

    return new Date(date).toLocaleString();

  } catch {

    return "";

  }

}


function escapeHTML(value) {

  const div =
    document.createElement("div");

  div.textContent =
    value ?? "";

  return div.innerHTML;

}


/* =========================================================
   DEMO ADMIN/OWNER EVENTS
   =========================================================

   These functions are ONLY for testing the frontend.

   In the real application, the backend/Admin/Owner dashboard
   will change these statuses automatically.
*/


function demoApproveFarmer() {

  data.profileStatus = "approved";

  addNotification(
    "Admin Approval",
    t("adminApproved")
  );

  saveData();

  renderCurrentScreen();

}


function demoRejectFarmer(reason = "Please check your submitted details.") {

  data.profileStatus = "rejected";

  data.rejectionReason = reason;

  addNotification(
    "Admin Rejection",
    t("adminRejected")
  );

  saveData();

  renderCurrentScreen();

}


function demoOwnerAccept(requestId) {

  const request =
    data.requests.find(
      r => r.id === requestId
    );

  if (!request) return;


  request.status = "accepted";


  data.activeBookings.push({

    requestId:
      request.id,

    equipmentName:
      request.equipmentName,

    ownerName:
      request.ownerName,

    dailyPrice:
      request.dailyPrice,

    status:
      "active",

    createdAt:
      new Date().toISOString()

  });


  addNotification(
    "Owner Accepted",
    t("ownerAccepted")
  );


  saveData();

  renderRequests();

  renderBookings();

  updateCounts();

}


function demoCompleteBooking(requestId) {

  const index =
    data.activeBookings.findIndex(
      booking =>
        booking.requestId === requestId
    );


  if (index === -1) return;


  const booking =
    data.activeBookings.splice(
      index,
      1
    )[0];


  booking.status = "completed";

  booking.completedAt =
    new Date().toISOString();


  data.pastBookings.unshift(
    booking
  );


  addNotification(
    "Booking Completed",
    t("bookingCompleted")
  );


  saveData();

  renderBookings();

  updateCounts();

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initialize() {

  applyTranslations();

  fillProfileForm();

  renderCurrentScreen();

  renderEquipment();

  renderRequests();

  renderBookings();

  renderNotifications();

  updateCounts();

}


initialize();


/* =========================================================
   OPTIONAL LANGUAGE BUTTON SUPPORT
   =========================================================

   If you add this button anywhere:

   <button onclick="toggleLanguage()">
      English / తెలుగు
   </button>

   it will switch the entire interface.
*/