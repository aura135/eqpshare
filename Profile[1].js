/* =========================================================
   TRANSLATIONS
   Every static label in the app is looked up through t(key, vars).
   Elements with data-i18n="key" have their text replaced;
   elements with data-i18n-placeholder="key" have their placeholder
   replaced. Dynamically-built HTML (list/card renderers, toasts,
   notifications, chat messages) call t() directly.
   ========================================================= */
const I18N = {
  en: {
    menuSignOut: 'Sign Out',
    menuSendAdmin: 'Send Request to Admin',
    menuContact: 'Contact Us',
    menuHelpline: 'Helpline 1800-180-1551',
    menuAdmin: 'Admin Dashboard',

    messagesTitle: '💬 Messages',
    tabMessages: '💬 Messages',
    tabNotifications: '🔔 Notifications',
    noConversations: 'No conversations yet.',
    noConversationsSub: 'Chats open automatically when a booking is accepted.',
    noNotifications: 'No notifications yet.',
    chatInputPh: 'Type a message…',

    navListings: 'My Listings',
    navRequests: 'Requests',
    navBookings: 'Bookings',
    navEarnings: 'Earnings',
    navProfile: 'Profile',

    listingsTitle: 'My Listings',
    addEquipmentBtn: '+ Add Equipment',
    listingsEmpty: 'No equipment listed yet. Add your first equipment above.',
    statusPending: 'Pending Approval',
    statusApproved: 'Approved',
    statusRejected: 'Rejected',
    tagBooked: 'Booked',
    tagAvailable: 'Available',

    requestsTitle: 'Requests',
    simulateBtn: '+ Simulate Farmer Request',
    requestsEmpty: 'No requests yet. Once your equipment is approved, farmer booking requests will appear here.',
    newRequestBadge: 'New Request',
    labelEquipment: 'Equipment',
    labelDuration: 'Duration',
    labelRentalDates: 'Rental Dates',
    labelTotalRent: 'Total Rent',
    labelLandmark: 'Landmark',
    labelLandSize: 'Land Size',
    labelCrop: 'Crop',
    dayLabel: 'day',
    daysLabel: 'days',
    acresLabel: 'acres',
    advanceDue: 'Advance ₹{amount} — Due on approval',
    rejectBtn: '✕ Reject',
    approveBtn: '✓ Approve',
    dash: '—',

    statusBookedTag: 'Booked',
    statusCompletedTag: 'Completed',
    bookingsTitle: 'Bookings',
    bookingsEmpty: 'No bookings yet. Accepted requests will show up here.',
    labelAdvance: 'Advance',
    fullyPaid: 'Fully Paid',
    advanceReceivedPill: 'Advance Received',
    paymentPending: 'Payment Pending',
    advanceReceivedBtn: '💵 Advance Received',
    finalPaymentBtn: '💵 Final Payment Received',
    fullPaymentBtn: '💵 Full Payment Received',

    earningsTitle: 'Earnings',
    totalReceived: 'Total Received',
    adminCommission: 'Admin Commission',
    earningsEmpty: 'No earnings yet. Payments from farmers will appear here.',
    advancePaymentType: 'Advance Payment',
    finalPaymentType: 'Final Payment',
    adminFeeLabel: 'admin fee',

    modalAddEquipment: 'Add Equipment',
    sectionOwnerDetails: 'Owner Details',
    formName: 'Name',
    phName: 'Enter your full name',
    formMobile: 'Mobile Number',
    phMobile: '10-digit mobile number',
    formAddress: 'Address',
    phAddressForm: 'House no, street, village/town',
    useLocationBtn: '📍 Use My Current Location',
    formDistrict: 'District',
    phDistrict: 'District',
    formState: 'State',
    phState: 'State',
    sectionEquipmentDetails: 'Equipment Details',
    formEquipName: 'Equipment Name',
    phEquipName: 'e.g. Tractor, Rotavator',
    formRentPerDay: 'Rent Per Day (₹)',
    phRentPerDay: 'e.g. 200',
    formAdvanceAmount: 'Advance Amount (₹)',
    phAdvanceAmount: 'e.g. 500',
    formVehicleNumber: 'Vehicle Number',
    phVehicleNumber: 'e.g. AP07AB1234',
    formLicenseNumber: 'License Number',
    phLicenseNumber: 'License number',
    formRcNumber: 'RC Book Number',
    phRcNumber: 'RC book number',
    sectionUploadDocs: 'Upload Documents',
    labelLicensePhoto: 'License Photo',
    uploadLicensePlaceholder: '📷 Tap to upload license photo',
    licensePhotoSelected: 'License photo selected',
    labelRcPhoto: 'RC Book Photo',
    uploadRcPlaceholder: '📷 Tap to upload RC book photo',
    rcPhotoSelected: 'RC book photo selected',
    labelPlatePhoto: 'Number Plate Photo',
    uploadPlatePlaceholder: '📷 Tap to upload number plate photo',
    platePhotoSelected: 'Number plate photo selected',
    labelEquipPhoto: 'Equipment Photo (with Owner)',
    uploadEquipPlaceholder: '📷 Tap to upload equipment photo',
    equipPhotoSelected: 'Equipment photo selected',
    submitRequestBtn: 'Send Request to Admin',
    rentCaptionTemplate: 'You get ₹{owner}, Admin will take {percent}% (₹{fee}) per day.',

    signedOutTitle: 'Signed Out',
    signedOutMessage: "You've been signed out. Your equipment listings are now hidden from farmers.",
    signInBtn: 'Sign In',

    titleNew: 'Complete Your Profile',
    titleView: 'My Profile',
    titleEdit: 'Edit Profile',
    edit: 'Edit Profile',
    editing: 'Editing…',
    save: 'Save Changes',
    cancel: 'Cancel',
    saveProfile: 'Save Profile',
    banner: "👋 Welcome! Please fill in your details below to finish setting up your profile.",
    fFullName: 'Full Name',
    phFullName: 'Enter your full name',
    fMobile: 'Mobile Number',
    phMobileProfile: 'Enter your mobile number',
    fAddress: 'Address',
    phAddress: 'House no, street, city, state',
    fUpi: 'UPI ID',
    phUpi: 'yourname@upi',
    fBank: 'Bank Account',
    phBank: 'Account number',
    fIfsc: 'IFSC Code',
    phIfsc: 'e.g. SBIN0001234',
    role: 'Equipment Owner',
    yourName: 'Your Name',

    /* Toasts & notifications (with {placeholders}) */
    toastSignedOut: 'Signed out. Your equipment is now hidden from farmers.',
    toastSignedIn: 'Signed in. Your equipment is visible to farmers again.',
    toastContact: 'Contact us: support@equipsharehub.com',
    toastFillRequired: 'Please fill Full Name and a valid Mobile Number',
    toastProfileSaved: 'Profile saved — My Listings, Requests & more are now unlocked',
    toastProfileUpdated: 'Profile updated',
    toastPhotoUpdated: 'Profile photo updated',
    toastChooseImage: 'Please choose an image file',
    toastImageTooLarge: 'Image too large (max 5MB)',
    toastCouldNotRead: 'Could not read that file',
    toastEquipWaiting: 'Your equipment is waiting for approval',
    notifSentToAdmin: '"{name}" was sent to the admin dashboard for approval.',
    toastApproved: '{name} approved by admin — now visible to farmers',
    notifApproved: 'Your equipment "{name}" was approved by admin.',
    toastRejected: '{name} was rejected by admin',
    notifRejected: 'Your equipment "{name}" was rejected by admin.',
    toastAddEquipFirst: 'Add equipment and wait for admin approval first',
    toastNewRequest: 'New booking request from {name}',
    notifNewRequest: 'New booking request from {name} for {equip}.',
    toastBookingConfirmed: 'Booking confirmed for {name}',
    notifBookingConfirmed: 'Booking confirmed with {name}. Chat opened.',
    toastRequestRejected: 'Request from {name} rejected',
    notifRequestRejected: 'You rejected the booking request from {name}.',
    toastPaymentRecorded: '₹{amount} {type} recorded for {name}',
    notifPaymentReceived: '₹{amount} {type} payment received from {name}.',
    chatBookingConfirmed: 'Booking confirmed for {equip}. You can chat with {name} here — payment updates will also appear in this chat.',
    chatPaymentReceived: "💵 ₹{amount} {type} payment received. You'll get ₹{ownerReceives} after the {percent}% admin commission.",
    paymentTypeAdvance: 'advance',
    paymentTypeFinal: 'final'
  },

  te: {
    menuSignOut: 'సైన్ అవుట్',
    menuSendAdmin: 'అడ్మిన్‌కు రిక్వెస్ట్ పంపండి',
    menuContact: 'మమ్మల్ని సంప్రదించండి',
    menuHelpline: 'హెల్ప్‌లైన్ 1800-180-1551',
    menuAdmin: 'అడ్మిన్ డాష్‌బోర్డ్',

    messagesTitle: '💬 సందేశాలు',
    tabMessages: '💬 సందేశాలు',
    tabNotifications: '🔔 నోటిఫికేషన్లు',
    noConversations: 'ఇంకా సంభాషణలు లేవు.',
    noConversationsSub: 'బుకింగ్ ఆమోదించినప్పుడు చాట్ ఆటోమేటిక్‌గా తెరుచుకుంటుంది.',
    noNotifications: 'ఇంకా నోటిఫికేషన్లు లేవు.',
    chatInputPh: 'సందేశం టైప్ చేయండి…',

    navListings: 'నా లిస్టింగ్‌లు',
    navRequests: 'రిక్వెస్ట్‌లు',
    navBookings: 'బుకింగ్‌లు',
    navEarnings: 'ఆదాయం',
    navProfile: 'ప్రొఫైల్',

    listingsTitle: 'నా లిస్టింగ్‌లు',
    addEquipmentBtn: '+ పరికరం జోడించండి',
    listingsEmpty: 'ఇంకా పరికరాలు జోడించలేదు. పైన మీ మొదటి పరికరాన్ని జోడించండి.',
    statusPending: 'ఆమోదం పెండింగ్‌లో ఉంది',
    statusApproved: 'ఆమోదించబడింది',
    statusRejected: 'తిరస్కరించబడింది',
    tagBooked: 'బుక్ అయింది',
    tagAvailable: 'అందుబాటులో ఉంది',

    requestsTitle: 'రిక్వెస్ట్‌లు',
    simulateBtn: '+ రైతు రిక్వెస్ట్ అనుకరించండి',
    requestsEmpty: 'ఇంకా రిక్వెస్ట్‌లు లేవు. మీ పరికరం ఆమోదించబడిన తర్వాత, రైతుల బుకింగ్ రిక్వెస్ట్‌లు ఇక్కడ కనిపిస్తాయి.',
    newRequestBadge: 'కొత్త రిక్వెస్ట్',
    labelEquipment: 'పరికరం',
    labelDuration: 'వ్యవధి',
    labelRentalDates: 'అద్దె తేదీలు',
    labelTotalRent: 'మొత్తం అద్దె',
    labelLandmark: 'ల్యాండ్‌మార్క్',
    labelLandSize: 'భూమి పరిమాణం',
    labelCrop: 'పంట',
    dayLabel: 'రోజు',
    daysLabel: 'రోజులు',
    acresLabel: 'ఎకరాలు',
    advanceDue: 'అడ్వాన్స్ ₹{amount} — ఆమోదంపై చెల్లించాలి',
    rejectBtn: '✕ తిరస్కరించు',
    approveBtn: '✓ ఆమోదించు',
    dash: '—',

    statusBookedTag: 'బుక్ అయింది',
    statusCompletedTag: 'పూర్తయింది',
    bookingsTitle: 'బుకింగ్‌లు',
    bookingsEmpty: 'ఇంకా బుకింగ్‌లు లేవు. ఆమోదించిన రిక్వెస్ట్‌లు ఇక్కడ కనిపిస్తాయి.',
    labelAdvance: 'అడ్వాన్స్',
    fullyPaid: 'పూర్తిగా చెల్లించారు',
    advanceReceivedPill: 'అడ్వాన్స్ అందింది',
    paymentPending: 'చెల్లింపు పెండింగ్‌లో ఉంది',
    advanceReceivedBtn: '💵 అడ్వాన్స్ అందింది',
    finalPaymentBtn: '💵 తుది చెల్లింపు అందింది',
    fullPaymentBtn: '💵 పూర్తి చెల్లింపు అందింది',

    earningsTitle: 'ఆదాయం',
    totalReceived: 'మొత్తం అందింది',
    adminCommission: 'అడ్మిన్ కమీషన్',
    earningsEmpty: 'ఇంకా ఆదాయం లేదు. రైతుల నుండి చెల్లింపులు ఇక్కడ కనిపిస్తాయి.',
    advancePaymentType: 'అడ్వాన్స్ చెల్లింపు',
    finalPaymentType: 'తుది చెల్లింపు',
    adminFeeLabel: 'అడ్మిన్ ఫీజు',

    modalAddEquipment: 'పరికరం జోడించండి',
    sectionOwnerDetails: 'యజమాని వివరాలు',
    formName: 'పేరు',
    phName: 'మీ పూర్తి పేరు నమోదు చేయండి',
    formMobile: 'మొబైల్ నంబర్',
    phMobile: '10-అంకెల మొబైల్ నంబర్',
    formAddress: 'చిరునామా',
    phAddressForm: 'ఇంటి నెం, వీధి, గ్రామం/పట్టణం',
    useLocationBtn: '📍 నా ప్రస్తుత లొకేషన్ ఉపయోగించండి',
    formDistrict: 'జిల్లా',
    phDistrict: 'జిల్లా',
    formState: 'రాష్ట్రం',
    phState: 'రాష్ట్రం',
    sectionEquipmentDetails: 'పరికర వివరాలు',
    formEquipName: 'పరికరం పేరు',
    phEquipName: 'ఉదా. ట్రాక్టర్, రోటావేటర్',
    formRentPerDay: 'రోజుకు అద్దె (₹)',
    phRentPerDay: 'ఉదా. 200',
    formAdvanceAmount: 'అడ్వాన్స్ మొత్తం (₹)',
    phAdvanceAmount: 'ఉదా. 500',
    formVehicleNumber: 'వాహన నంబర్',
    phVehicleNumber: 'ఉదా. AP07AB1234',
    formLicenseNumber: 'లైసెన్స్ నంబర్',
    phLicenseNumber: 'లైసెన్స్ నంబర్',
    formRcNumber: 'RC బుక్ నంబర్',
    phRcNumber: 'RC బుక్ నంబర్',
    sectionUploadDocs: 'డాక్యుమెంట్లు అప్‌లోడ్ చేయండి',
    labelLicensePhoto: 'లైసెన్స్ ఫోటో',
    uploadLicensePlaceholder: '📷 లైసెన్స్ ఫోటో అప్‌లోడ్ చేయడానికి నొక్కండి',
    licensePhotoSelected: 'లైసెన్స్ ఫోటో ఎంపిక చేయబడింది',
    labelRcPhoto: 'RC బుక్ ఫోటో',
    uploadRcPlaceholder: '📷 RC బుక్ ఫోటో అప్‌లోడ్ చేయడానికి నొక్కండి',
    rcPhotoSelected: 'RC బుక్ ఫోటో ఎంపిక చేయబడింది',
    labelPlatePhoto: 'నంబర్ ప్లేట్ ఫోటో',
    uploadPlatePlaceholder: '📷 నంబర్ ప్లేట్ ఫోటో అప్‌లోడ్ చేయడానికి నొక్కండి',
    platePhotoSelected: 'నంబర్ ప్లేట్ ఫోటో ఎంపిక చేయబడింది',
    labelEquipPhoto: 'పరికర ఫోటో (యజమానితో)',
    uploadEquipPlaceholder: '📷 పరికర ఫోటో అప్‌లోడ్ చేయడానికి నొక్కండి',
    equipPhotoSelected: 'పరికర ఫోటో ఎంపిక చేయబడింది',
    submitRequestBtn: 'అడ్మిన్‌కు రిక్వెస్ట్ పంపండి',
    rentCaptionTemplate: 'మీకు ₹{owner} వస్తుంది, అడ్మిన్ రోజుకు {percent}% (₹{fee}) తీసుకుంటారు.',

    signedOutTitle: 'సైన్ అవుట్ అయ్యారు',
    signedOutMessage: 'మీరు సైన్ అవుట్ అయ్యారు. మీ పరికర లిస్టింగ్‌లు ఇప్పుడు రైతులకు కనిపించవు.',
    signInBtn: 'సైన్ ఇన్',

    titleNew: 'మీ ప్రొఫైల్ పూర్తి చేయండి',
    titleView: 'నా ప్రొఫైల్',
    titleEdit: 'ప్రొఫైల్ మార్చండి',
    edit: 'ప్రొఫైల్ మార్చండి',
    editing: 'మారుస్తోంది…',
    save: 'సేవ్ చేయండి',
    cancel: 'రద్దు చేయండి',
    saveProfile: 'ప్రొఫైల్ సేవ్ చేయండి',
    banner: '👋 స్వాగతం! మీ ప్రొఫైల్ పూర్తి చేయడానికి దిగువ వివరాలు నింపండి.',
    fFullName: 'పూర్తి పేరు',
    phFullName: 'మీ పూర్తి పేరు నమోదు చేయండి',
    fMobile: 'మొబైల్ నంబర్',
    phMobileProfile: 'మీ మొబైల్ నంబర్ నమోదు చేయండి',
    fAddress: 'చిరునామా',
    phAddress: 'ఇంటి నెం, వీధి, నగరం, రాష్ట్రం',
    fUpi: 'UPI ID',
    phUpi: 'yourname@upi',
    fBank: 'బ్యాంక్ ఖాతా',
    phBank: 'ఖాతా నంబర్',
    fIfsc: 'IFSC కోడ్',
    phIfsc: 'ఉదా. SBIN0001234',
    role: 'పరికరాల యజమాని',
    yourName: 'మీ పేరు',

    toastSignedOut: 'సైన్ అవుట్ అయ్యారు. మీ పరికరం ఇప్పుడు రైతులకు కనిపించదు.',
    toastSignedIn: 'సైన్ ఇన్ అయ్యారు. మీ పరికరం రైతులకు మళ్లీ కనిపిస్తుంది.',
    toastContact: 'మమ్మల్ని సంప్రదించండి: support@equipsharehub.com',
    toastFillRequired: 'దయచేసి పూర్తి పేరు మరియు సరైన మొబైల్ నంబర్ నింపండి',
    toastProfileSaved: 'ప్రొఫైల్ సేవ్ చేయబడింది — నా లిస్టింగ్‌లు, రిక్వెస్ట్‌లు మరియు మరిన్ని ఇప్పుడు అన్‌లాక్ చేయబడ్డాయి',
    toastProfileUpdated: 'ప్రొఫైల్ నవీకరించబడింది',
    toastPhotoUpdated: 'ప్రొఫైల్ ఫోటో నవీకరించబడింది',
    toastChooseImage: 'దయచేసి ఒక చిత్ర ఫైల్‌ను ఎంచుకోండి',
    toastImageTooLarge: 'చిత్రం చాలా పెద్దది (గరిష్టం 5MB)',
    toastCouldNotRead: 'ఆ ఫైల్‌ను చదవలేకపోయాము',
    toastEquipWaiting: 'మీ పరికరం ఆమోదం కోసం వేచి ఉంది',
    notifSentToAdmin: '"{name}" ఆమోదం కోసం అడ్మిన్ డాష్‌బోర్డ్‌కు పంపబడింది.',
    toastApproved: '{name} అడ్మిన్ ద్వారా ఆమోదించబడింది — ఇప్పుడు రైతులకు కనిపిస్తుంది',
    notifApproved: 'మీ పరికరం "{name}" అడ్మిన్ ద్వారా ఆమోదించబడింది.',
    toastRejected: '{name} అడ్మిన్ ద్వారా తిరస్కరించబడింది',
    notifRejected: 'మీ పరికరం "{name}" అడ్మిన్ ద్వారా తిరస్కరించబడింది.',
    toastAddEquipFirst: 'ముందుగా పరికరం జోడించి అడ్మిన్ ఆమోదం కోసం వేచి ఉండండి',
    toastNewRequest: '{name} నుండి కొత్త బుకింగ్ రిక్వెస్ట్',
    notifNewRequest: '{equip} కోసం {name} నుండి కొత్త బుకింగ్ రిక్వెస్ట్.',
    toastBookingConfirmed: '{name} కోసం బుకింగ్ ఖరారు చేయబడింది',
    notifBookingConfirmed: '{name}తో బుకింగ్ ఖరారు చేయబడింది. చాట్ తెరవబడింది.',
    toastRequestRejected: '{name} నుండి రిక్వెస్ట్ తిరస్కరించబడింది',
    notifRequestRejected: 'మీరు {name} నుండి బుకింగ్ రిక్వెస్ట్‌ను తిరస్కరించారు.',
    toastPaymentRecorded: '{name} కోసం ₹{amount} {type} నమోదు చేయబడింది',
    notifPaymentReceived: '{name} నుండి ₹{amount} {type} చెల్లింపు అందింది.',
    chatBookingConfirmed: '{equip} కోసం బుకింగ్ ఖరారు చేయబడింది. మీరు ఇక్కడ {name}తో చాట్ చేయవచ్చు — చెల్లింపు నవీకరణలు కూడా ఈ చాట్‌లో కనిపిస్తాయి.',
    chatPaymentReceived: '💵 ₹{amount} {type} చెల్లింపు అందింది. {percent}% అడ్మిన్ కమీషన్ తర్వాత మీకు ₹{ownerReceives} లభిస్తుంది.',
    paymentTypeAdvance: 'అడ్వాన్స్',
    paymentTypeFinal: 'తుది'
  }
};

let currentLang = 'en';

function t(key, vars) {
  const dict = I18N[currentLang] || I18N.en;
  let str = dict[key] !== undefined ? dict[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.split('{' + k + '}').join(vars[k]);
    });
  }
  return str;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Re-render everything that builds its own HTML with translated strings
  renderListings();
  renderRequests();
  renderBookings();
  renderEarnings();
  renderChatList();
  renderNotifications();

  // Profile card title depends on current mode (new/view/edit), not a static data-i18n key
  refreshProfileTitles();
}

/* =========================================================
   In-memory "database" (no backend yet).

   myListings            = equipment this owner has submitted (to admin).
   farmerRequests        = booking requests from farmers, waiting for
                            this owner to Accept / Reject.
   bookings              = requests the owner has Accepted.
   earningsRecords       = payments received against bookings.
   CONVERSATIONS         = chat threads, one per accepted booking.
   NOTIFICATIONS         = owner-facing notifications (equipment
                            approved/rejected, new requests, payments…).
   ========================================================= */
const myListings = [];
const farmerRequests = [];
const bookings = [];
const earningsRecords = [];
const CONVERSATIONS = [];
const NOTIFICATIONS = [];

const ADMIN_COMMISSION_PERCENT = 10;

/* Sample farmer names/villages used only to simulate incoming
   requests until the real farmer-side app + admin approval flow
   is wired up to this dashboard. */
const SAMPLE_FARMERS = [
  { name: 'Ramesh Naidu',  mobile: '9876543210', village: 'Kondapalli',  landmark: 'Near Sri Venkateswara Temple' },
  { name: 'Suresh Reddy',  mobile: '9123456780', village: 'Mangalagiri', landmark: 'Opposite Government School' },
  { name: 'Lakshmi Devi',  mobile: '9988776655', village: 'Tenali',      landmark: 'Near Bus Stand' },
  { name: 'Venkata Rao',   mobile: '9012345678', village: 'Gudivada',    landmark: 'Near Canal Bridge' }
];
const CROP_TYPES = ['Paddy', 'Cotton', 'Chilli', 'Maize', 'Sugarcane'];

/* ===================== Bottom nav / tab switching ===================== */
const navItems = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.tab-panel');

function switchTab(tab) {
  navItems.forEach(n => n.classList.toggle('active', n.dataset.tab === tab));
  panels.forEach(p => p.classList.toggle('active', p.id === `panel-${tab}`));
  if (tab === 'requests') clearRequestsBadge();
}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    switchTab(item.dataset.tab);
  });
});

/* ===================== Language toggle (top pill) ===================== */
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'te' : 'en';
  langToggle.textContent = currentLang === 'en' ? 'తెలుగు' : 'English';
  applyTranslations();
});

/* ===================== ⋮ dropdown menu ===================== */
const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  menuDropdown.classList.toggle('hidden');
});
document.addEventListener('click', () => menuDropdown.classList.add('hidden'));
menuDropdown.addEventListener('click', (e) => e.stopPropagation());

document.getElementById('signOutItem').addEventListener('click', () => {
  menuDropdown.classList.add('hidden');
  window.location.href = 'role.html';
});
// "Send Request to Admin" reuses the Add Equipment form, since that is
// how an owner sends a request to the admin in this app today.
document.getElementById('sendAdminRequestItem').addEventListener('click', () => {
  menuDropdown.classList.add('hidden');
  openModal();
});

document.getElementById('contactUsItem').addEventListener('click', () => {
  menuDropdown.classList.add('hidden');
  showToast(t('toastContact'));
});

/* ===================== Home icon ===================== */
document.getElementById('homeBtn').addEventListener('click', () => {
  window.location.href = 'role.html';
});
/* ===================== Sign out / sign in ===================== */
const signedOutScreen = document.getElementById('signedOutScreen');
const signInBtn = document.getElementById('signInBtn');
let signedIn = true;

function doSignOut() {
  signedIn = false;
  // Equipment is hidden from farmers while the owner is signed out.
  // A real farmer-facing app would check `visibleToFarmers` before
  // showing a listing to farmers.
  myListings.forEach(item => {
    if (item.status === 'approved') item.visibleToFarmers = false;
  });
  signedOutScreen.classList.remove('hidden');
  showToast(t('toastSignedOut'));
}

function doSignIn() {
  signedIn = true;
  myListings.forEach(item => {
    if (item.status === 'approved') item.visibleToFarmers = true;
  });
  signedOutScreen.classList.add('hidden');
  renderListings();
  showToast(t('toastSignedIn'));
}

signInBtn.addEventListener('click', doSignIn);

/* ===================== Add Equipment modal open/close ===================== */
const modalOverlay = document.getElementById('modalOverlay');
const addEquipmentBtn = document.getElementById('addEquipmentBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const equipmentForm = document.getElementById('equipmentForm');

function openModal() {
  modalOverlay.classList.add('open');
}
function closeModal() {
  modalOverlay.classList.remove('open');
}

addEquipmentBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

/* ===================== Live rent / commission caption ===================== */
const rentPerDayInput = document.getElementById('rentPerDay');
const rentCaption = document.getElementById('rentCaption');

rentPerDayInput.addEventListener('input', updateRentCaption);

function updateRentCaption() {
  const rent = parseFloat(rentPerDayInput.value);
  if (!rent || rent <= 0) {
    rentCaption.textContent = '';
    return;
  }
  const adminFee = Math.round((rent * ADMIN_COMMISSION_PERCENT) / 100);
  const ownerGets = rent - adminFee;
  rentCaption.textContent = t('rentCaptionTemplate', {
    owner: ownerGets,
    percent: ADMIN_COMMISSION_PERCENT,
    fee: adminFee
  });
}

/* ===================== Use my current location ===================== */
const useLocationBtn = document.getElementById('useLocationBtn');
const locationStatus = document.getElementById('locationStatus');
const ownerAddressField = document.getElementById('ownerAddress');
const ownerDistrictField = document.getElementById('ownerDistrict');
const ownerStateField = document.getElementById('ownerState');

useLocationBtn.addEventListener('click', () => {
  if (!('geolocation' in navigator)) {
    setLocationStatus('Location is not supported on this device/browser.', 'error');
    return;
  }

  setLocationStatus('Please turn on location access to detect your place…', '');

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      setLocationStatus('Detecting your address…', '');

      try {
        // Reverse-geocode the coordinates into a readable address.
        // Uses OpenStreetMap's free Nominatim API — swap for Google
        // Geocoding API if you have a key and need higher volume.
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=14&addressdetails=1`;
        const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
        const data = await res.json();
        const addr = data.address || {};

        const village = addr.village || addr.town || addr.city || addr.suburb || '';
        const district = addr.state_district || addr.county || '';
        const state = addr.state || '';

        if (village) ownerAddressField.value = village;
        if (district) ownerDistrictField.value = district;
        if (state) ownerStateField.value = state;

        setLocationStatus('Location detected successfully.', 'success');
      } catch (err) {
        setLocationStatus('Could not fetch address for your location. Please enter it manually.', 'error');
      }
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        setLocationStatus('Location permission denied. Please turn on location access and try again.', 'error');
      } else {
        setLocationStatus('Could not get your location. Please enter your address manually.', 'error');
      }
    }
  );
});

function setLocationStatus(msg, type) {
  locationStatus.textContent = msg;
  locationStatus.className = 'location-status' + (type ? ` ${type}` : '');
}

/* ===================== Photo upload previews ===================== */
setupPhotoUpload('licensePhoto', 'licensePhotoPreview', 'licensePhotoText', 'licensePhotoSelected');
setupPhotoUpload('rcPhoto', 'rcPhotoPreview', 'rcPhotoText', 'rcPhotoSelected');
setupPhotoUpload('platePhoto', 'platePhotoPreview', 'platePhotoText', 'platePhotoSelected');
setupPhotoUpload('equipPhoto', 'equipPhotoPreview', 'equipPhotoText', 'equipPhotoSelected');

function setupPhotoUpload(inputId, previewId, labelId, selectedTextKey) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  const label = document.getElementById(labelId);

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.classList.remove('hidden');
      label.textContent = t(selectedTextKey);
    };
    reader.readAsDataURL(file);
  });
}

/* ===================== Submit -> send request to admin ===================== */
equipmentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const rent = parseFloat(rentPerDayInput.value) || 0;
  const adminFee = Math.round((rent * ADMIN_COMMISSION_PERCENT) / 100);

  const listingData = {
    id: Date.now(),
    ownerName: document.getElementById('ownerName').value,
    ownerMobile: document.getElementById('ownerMobile').value,
    address: ownerAddressField.value,
    district: ownerDistrictField.value,
    state: ownerStateField.value,
    equipmentName: document.getElementById('equipName').value,
    rentPerDay: rent,
    ownerReceives: rent - adminFee,
    adminCommission: adminFee,
    advanceAmount: document.getElementById('advanceAmount').value,
    vehicleNumber: document.getElementById('vehicleNumber').value,
    licenseNumber: document.getElementById('licenseNumber').value,
    rcNumber: document.getElementById('rcNumber').value,
    licensePhoto: document.getElementById('licensePhotoPreview').src || null,
    rcPhoto: document.getElementById('rcPhotoPreview').src || null,
    platePhoto: document.getElementById('platePhotoPreview').src || null,
    equipPhoto: document.getElementById('equipPhotoPreview').src || null,
    status: 'pending', // 'pending' | 'approved' | 'rejected'
    visibleToFarmers: false,
    submittedAt: new Date().toISOString()
  };

  // In a real app this would POST to your backend / admin queue.
  // Save to shared storage so Admin dashboard can see it
  const allEquipment = JSON.parse(localStorage.getItem('equipshare_equipment')) || [];
  allEquipment.push(listingData);
  localStorage.setItem('equipshare_equipment', JSON.stringify(allEquipment));

  myListings.push(listingData);

  renderListings();
  showToast(t('toastEquipWaiting'));
  pushNotification('📤', t('notifSentToAdmin', { name: listingData.equipmentName }));
  equipmentForm.reset();
  resetUploadPreviews();
  rentCaption.textContent = '';
  closeModal();
});

/* ===================== Sync equipment status from Admin ===================== */
function syncListingsFromAdmin() {
  const allEquipment = JSON.parse(localStorage.getItem('equipshare_equipment')) || [];
  myListings.forEach(item => {
    const updated = allEquipment.find(e => e.id === item.id);
    if (updated && updated.status !== item.status) {
      item.status = updated.status;
      item.visibleToFarmers = updated.status === 'approved' && signedIn;
      if (updated.status === 'approved') {
        showToast(t('toastApproved', { name: item.equipmentName }));
        pushNotification('✅', t('notifApproved', { name: item.equipmentName }));
      } else if (updated.status === 'rejected') {
        showToast(t('toastRejected', { name: item.equipmentName }));
        pushNotification('❌', t('notifRejected', { name: item.equipmentName }));
      }
    }
  });
  renderListings();
}
setInterval(syncListingsFromAdmin, 3000);

function resetUploadPreviews() {
  ['licensePhotoPreview', 'rcPhotoPreview', 'platePhotoPreview', 'equipPhotoPreview'].forEach(id => {
    const img = document.getElementById(id);
    img.src = '';
    img.classList.add('hidden');
  });
  document.getElementById('licensePhotoText').textContent = t('uploadLicensePlaceholder');
  document.getElementById('rcPhotoText').textContent = t('uploadRcPlaceholder');
  document.getElementById('platePhotoText').textContent = t('uploadPlatePlaceholder');
  document.getElementById('equipPhotoText').textContent = t('uploadEquipPlaceholder');
}

/* ===================== Render "My Listings" cards ===================== */
const emptyState = document.getElementById('emptyState');
const listingCards = document.getElementById('listingCards');
const STATUS_LABEL_KEYS = { pending: 'statusPending', approved: 'statusApproved', rejected: 'statusRejected' };
const STATUS_BADGE_CLASS = { pending: '', approved: 'approved', rejected: 'rejected' };

function renderListings() {
  if (myListings.length === 0) {
    emptyState.classList.remove('hidden');
    listingCards.innerHTML = '';
    return;
  }

  emptyState.classList.add('hidden');
  listingCards.innerHTML = myListings.map(item => {
    const isBooked = bookings.some(b => b.listingId === item.id);
    const badgeClass = STATUS_BADGE_CLASS[item.status] || '';
    return `
      <div class="listing-card">
        <div class="listing-card-top">
          <div>
            <h4>${escapeHtml(item.equipmentName)}</h4>
            <p>₹${item.rentPerDay}/day · ${escapeHtml(item.district || '')} ${escapeHtml(item.state || '')}</p>
          </div>
          <div class="listing-badges">
            <span class="status-badge ${badgeClass}">${t(STATUS_LABEL_KEYS[item.status] || 'statusPending')}</span>
            ${item.status === 'approved' ? `<span class="booked-tag ${isBooked ? 'booked' : 'available'}">${isBooked ? t('tagBooked') : t('tagAvailable')}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ===================== Farmer booking REQUESTS ===================== */
const requestsEmptyState = document.getElementById('requestsEmptyState');
const requestCards = document.getElementById('requestCards');
const requestsBadge = document.getElementById('requestsBadge');
const simulateRequestBtn = document.getElementById('simulateRequestBtn');

function renderRequests() {
  if (farmerRequests.length === 0) {
    requestsEmptyState.classList.remove('hidden');
    requestCards.innerHTML = '';
    return;
  }

  requestsEmptyState.classList.add('hidden');
  requestCards.innerHTML = farmerRequests.map(req => `
    <div class="request-card">
      <div class="card-top">
        <div>
          <h4>${escapeHtml(req.farmerName)}</h4>
          <p>📞 ${escapeHtml(req.farmerMobile)} · ${escapeHtml(req.farmerVillage)}</p>
        </div>
        <span class="status-badge">${t('newRequestBadge')}</span>
      </div>

      <div class="detail-grid">
        <div class="detail-item">
          <div class="label">${t('labelEquipment')}</div>
          <div class="value">${escapeHtml(req.equipmentName)}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelDuration')}</div>
          <div class="value">${req.days} ${req.days > 1 ? t('daysLabel') : t('dayLabel')}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelRentalDates')}</div>
          <div class="value">${req.startDate} → ${req.endDate}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelTotalRent')}</div>
          <div class="value">₹${req.totalRent}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelLandmark')}</div>
          <div class="value">${escapeHtml(req.farmerLandmark || t('dash'))}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelLandSize')}</div>
          <div class="value">${req.acres ? `${req.acres} ${t('acresLabel')}` : t('dash')}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelCrop')}</div>
          <div class="value">${escapeHtml(req.cropType || t('dash'))}</div>
        </div>
      </div>

      <span class="payment-pill due">${t('advanceDue', { amount: req.advanceAmount })}</span>

      <div class="card-actions">
        <button class="reject-btn" onclick="rejectRequest(${req.id})">${t('rejectBtn')}</button>
        <button class="approve-btn" onclick="approveRequest(${req.id})">${t('approveBtn')}</button>
      </div>
    </div>
  `).join('');
}

function addFarmerRequest(req) {
  farmerRequests.push(req);
  renderRequests();
  bumpRequestsBadge();
  showToast(t('toastNewRequest', { name: req.farmerName }));
  pushNotification('📨', t('notifNewRequest', { name: req.farmerName, equip: req.equipmentName }));
}

function bumpRequestsBadge() {
  const count = farmerRequests.length;
  requestsBadge.textContent = count;
  requestsBadge.classList.toggle('hidden', count === 0);
}

function clearRequestsBadge() {
  requestsBadge.classList.add('hidden');
}

function approveRequest(id) {
  const idx = farmerRequests.findIndex(r => r.id === id);
  if (idx === -1) return;
  const req = farmerRequests[idx];

  farmerRequests.splice(idx, 1);

  const booking = {
    ...req,
    status: 'booked',
    advancePaid: false,
    fullyPaid: false,
    approvedAt: new Date().toISOString()
  };
  bookings.push(booking);

  // Approving a request opens a chat between the owner and this farmer.
  // Payment updates get posted into this same conversation as they happen.
  CONVERSATIONS.push({
    id: booking.id,
    farmerName: booking.farmerName,
    equipmentName: booking.equipmentName,
    messages: [
      {
        sender: 'system',
        text: t('chatBookingConfirmed', { equip: booking.equipmentName, name: booking.farmerName }),
        time: new Date().toISOString()
      }
    ]
  });
  renderChatList();

  renderListings();
  renderRequests();
  bumpRequestsBadge();
  renderBookings();
  showToast(t('toastBookingConfirmed', { name: req.farmerName }));
  pushNotification('✅', t('notifBookingConfirmed', { name: req.farmerName }));
}

function rejectRequest(id) {
  const idx = farmerRequests.findIndex(r => r.id === id);
  if (idx === -1) return;
  const req = farmerRequests[idx];

  farmerRequests.splice(idx, 1);
  renderRequests();
  bumpRequestsBadge();
  showToast(t('toastRequestRejected', { name: req.farmerName }));
  pushNotification('❌', t('notifRequestRejected', { name: req.farmerName }));
}

/* Demo button: creates a sample farmer request against one of your
   approved listings, so you can see the full flow without a live
   farmer-side app yet. */
simulateRequestBtn.addEventListener('click', () => {
  const approvedListings = myListings.filter(l => l.status === 'approved');
  if (approvedListings.length === 0) {
    showToast(t('toastAddEquipFirst'));
    return;
  }

  const listing = approvedListings[Math.floor(Math.random() * approvedListings.length)];
  const farmer = SAMPLE_FARMERS[Math.floor(Math.random() * SAMPLE_FARMERS.length)];
  const days = 1 + Math.floor(Math.random() * 3);
  const totalRent = listing.rentPerDay * days;
  const advanceAmount = Math.min(Math.round(totalRent * 0.3), totalRent);
  const acres = 1 + Math.floor(Math.random() * 8);
  const cropType = CROP_TYPES[Math.floor(Math.random() * CROP_TYPES.length)];

  const start = new Date();
  start.setDate(start.getDate() + 1);
  const end = new Date(start);
  end.setDate(end.getDate() + days - 1);

  addFarmerRequest({
    id: Date.now(),
    farmerName: farmer.name,
    farmerMobile: farmer.mobile,
    farmerVillage: farmer.village,
    farmerLandmark: farmer.landmark,
    acres,
    cropType,
    equipmentName: listing.equipmentName,
    listingId: listing.id,
    days,
    startDate: formatDate(start),
    endDate: formatDate(end),
    rentPerDay: listing.rentPerDay,
    totalRent,
    advanceAmount
  });
});

function formatDate(d) {
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

/* ===================== BOOKINGS ===================== */
const bookingsEmptyState = document.getElementById('bookingsEmptyState');
const bookingCards = document.getElementById('bookingCards');

function renderBookings() {
  if (bookings.length === 0) {
    bookingsEmptyState.classList.remove('hidden');
    bookingCards.innerHTML = '';
    return;
  }

  bookingsEmptyState.classList.add('hidden');
  bookingCards.innerHTML = bookings.map(b => `
    <div class="booking-card">
      <div class="card-top">
        <div>
          <h4>${escapeHtml(b.farmerName)}</h4>
          <p>📞 ${escapeHtml(b.farmerMobile)} · ${escapeHtml(b.farmerVillage)}</p>
        </div>
        <span class="status-badge ${b.fullyPaid ? 'completed' : 'booked'}">${b.fullyPaid ? t('statusCompletedTag') : t('statusBookedTag')}</span>
      </div>

      <div class="detail-grid">
        <div class="detail-item">
          <div class="label">${t('labelEquipment')}</div>
          <div class="value">${escapeHtml(b.equipmentName)}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelRentalDates')}</div>
          <div class="value">${b.startDate} → ${b.endDate}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelTotalRent')}</div>
          <div class="value">₹${b.totalRent}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelAdvance')}</div>
          <div class="value">₹${b.advanceAmount}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelLandSize')}</div>
          <div class="value">${b.acres ? `${b.acres} ${t('acresLabel')}` : t('dash')}</div>
        </div>
        <div class="detail-item">
          <div class="label">${t('labelCrop')}</div>
          <div class="value">${escapeHtml(b.cropType || t('dash'))}</div>
        </div>
      </div>

      ${b.fullyPaid
        ? `<span class="payment-pill paid">${t('fullyPaid')}</span>`
        : b.advancePaid
          ? `<span class="payment-pill paid">${t('advanceReceivedPill')}</span>`
          : `<span class="payment-pill due">${t('paymentPending')}</span>`
      }

      <div class="card-actions">
        ${!b.advancePaid ? `<button class="payment-btn" onclick="recordPayment(${b.id}, 'advance')">${t('advanceReceivedBtn')}</button>` : ''}
        ${b.advancePaid && !b.fullyPaid ? `<button class="payment-btn" onclick="recordPayment(${b.id}, 'full')">${t('finalPaymentBtn')}</button>` : ''}
        ${!b.advancePaid ? `<button class="payment-btn" onclick="recordPayment(${b.id}, 'full')">${t('fullPaymentBtn')}</button>` : ''}
      </div>
    </div>
  `).join('');
}

/* type: 'advance' or 'full' */
function recordPayment(bookingId, type) {
  const booking = bookings.find(b => b.id === bookingId);
  if (!booking) return;

  const amount = type === 'advance' ? booking.advanceAmount : booking.totalRent - (booking.advancePaid ? booking.advanceAmount : 0);
  const adminFee = Math.round((amount * ADMIN_COMMISSION_PERCENT) / 100);
  const ownerReceives = amount - adminFee;

  if (type === 'advance') {
    booking.advancePaid = true;
  } else {
    booking.advancePaid = true;
    booking.fullyPaid = true;
  }

  earningsRecords.push({
    id: Date.now(),
    farmerName: booking.farmerName,
    equipmentName: booking.equipmentName,
    type: type === 'advance' ? 'advance' : 'final', // code, translated at render
    amount,
    adminFee,
    ownerReceives,
    date: new Date().toISOString()
  });

  const typeLabel = type === 'advance' ? t('paymentTypeAdvance') : t('paymentTypeFinal');

  // Post the payment as a message in the chat with this farmer.
  const convo = CONVERSATIONS.find(c => c.id === booking.id);
  if (convo) {
    convo.messages.push({
      sender: 'system',
      text: t('chatPaymentReceived', { amount, type: typeLabel, ownerReceives, percent: ADMIN_COMMISSION_PERCENT }),
      time: new Date().toISOString()
    });
    renderChatList();
  }

  renderBookings();
  renderEarnings();
  showToast(t('toastPaymentRecorded', { amount, type: typeLabel, name: booking.farmerName }));
  pushNotification('💵', t('notifPaymentReceived', { amount, type: typeLabel, name: booking.farmerName }));
}

/* ===================== EARNINGS ===================== */
const earningsEmptyState = document.getElementById('earningsEmptyState');
const earningsList = document.getElementById('earningsList');
const totalEarningsAmount = document.getElementById('totalEarningsAmount');
const totalCommissionAmount = document.getElementById('totalCommissionAmount');
const EARNING_TYPE_KEY = { advance: 'advancePaymentType', final: 'finalPaymentType' };

function renderEarnings() {
  if (earningsRecords.length === 0) {
    earningsEmptyState.classList.remove('hidden');
    earningsList.innerHTML = '';
    totalEarningsAmount.textContent = '₹0';
    totalCommissionAmount.textContent = '₹0';
    return;
  }

  earningsEmptyState.classList.add('hidden');

  const totalReceived = earningsRecords.reduce((sum, r) => sum + r.ownerReceives, 0);
  const totalCommission = earningsRecords.reduce((sum, r) => sum + r.adminFee, 0);
  totalEarningsAmount.textContent = `₹${totalReceived}`;
  totalCommissionAmount.textContent = `₹${totalCommission}`;

  earningsList.innerHTML = earningsRecords.slice().reverse().map(r => `
    <div class="earning-row">
      <div>
        <h4>${escapeHtml(r.farmerName)} · ${escapeHtml(r.equipmentName)}</h4>
        <p>${t(EARNING_TYPE_KEY[r.type] || 'advancePaymentType')} · ${new Date(r.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</p>
      </div>
      <div class="earning-amount">
        <div class="plus">+₹${r.ownerReceives}</div>
        <div class="fee">−₹${r.adminFee} ${t('adminFeeLabel')}</div>
      </div>
    </div>
  `).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

/* ===================== Toast ===================== */
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 2600);
}

/* =========================================================
   MESSAGES modal (Messages / Notifications tabs)
   ========================================================= */
const messagesOverlay = document.getElementById('messagesOverlay');
const messageBtn = document.getElementById('messageBtn');
const closeMessagesBtn = document.getElementById('closeMessagesBtn');
const messagesHeaderBadge = document.getElementById('messagesHeaderBadge');

messageBtn.addEventListener('click', () => {
  messagesOverlay.classList.add('open');
  clearMessagesBadge();
});
closeMessagesBtn.addEventListener('click', () => messagesOverlay.classList.remove('open'));
messagesOverlay.addEventListener('click', (e) => {
  if (e.target === messagesOverlay) messagesOverlay.classList.remove('open');
});

const msgTabs = document.querySelectorAll('.msg-tab');
const msgPanels = document.querySelectorAll('.msg-tab-panel');
msgTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    msgTabs.forEach(t2 => t2.classList.toggle('active', t2 === tab));
    msgPanels.forEach(p => p.classList.toggle('active', p.id === `msgPanel-${tab.dataset.msgtab}`));
  });
});

function bumpMessagesBadge() {
  messagesHeaderBadge.classList.remove('hidden');
}
function clearMessagesBadge() {
  messagesHeaderBadge.classList.add('hidden');
}

/* ---- Notifications ---- */
const notificationsList = document.getElementById('notificationsList');
const notificationsEmptyState = document.getElementById('notificationsEmptyState');

function pushNotification(icon, text) {
  NOTIFICATIONS.unshift({ id: Date.now() + Math.random(), icon, text, time: new Date().toISOString() });
  renderNotifications();
  bumpMessagesBadge();
}

function renderNotifications() {
  if (NOTIFICATIONS.length === 0) {
    notificationsEmptyState.classList.remove('hidden');
    notificationsList.innerHTML = '';
    return;
  }
  notificationsEmptyState.classList.add('hidden');
  notificationsList.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item">
      <div class="notif-icon">${n.icon}</div>
      <div>
        <div class="notif-text">${escapeHtml(n.text)}</div>
        <div class="notif-time">${timeAgo(n.time)}</div>
      </div>
    </div>
  `).join('');
}

/* ---- Chat list ---- */
const chatList = document.getElementById('chatList');
const chatsEmptyState = document.getElementById('chatsEmptyState');

function renderChatList() {
  if (CONVERSATIONS.length === 0) {
    chatsEmptyState.classList.remove('hidden');
    chatList.innerHTML = '';
    return;
  }
  chatsEmptyState.classList.add('hidden');
  chatList.innerHTML = CONVERSATIONS.map(c => {
    const last = c.messages[c.messages.length - 1];
    return `
      <div class="chat-list-item" onclick="openChatThread(${c.id})">
        <div class="chat-avatar">${escapeHtml(c.farmerName.charAt(0))}</div>
        <div class="chat-info">
          <h4>${escapeHtml(c.farmerName)}</h4>
          <p>${escapeHtml(last ? last.text : '')}</p>
        </div>
        <div class="chat-time">${last ? timeAgo(last.time) : ''}</div>
      </div>
    `;
  }).join('');
}

/* ---- Chat thread ---- */
const chatThreadOverlay = document.getElementById('chatThreadOverlay');
const chatThreadTitle = document.getElementById('chatThreadTitle');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatBackBtn = document.getElementById('chatBackBtn');
const closeChatThreadBtn = document.getElementById('closeChatThreadBtn');

let activeChatId = null;

function openChatThread(id) {
  activeChatId = id;
  const convo = CONVERSATIONS.find(c => c.id === id);
  if (!convo) return;
  chatThreadTitle.textContent = convo.farmerName;
  renderChatMessages();
  messagesOverlay.classList.remove('open');
  chatThreadOverlay.classList.add('open');
}

function renderChatMessages() {
  const convo = CONVERSATIONS.find(c => c.id === activeChatId);
  if (!convo) return;
  chatMessages.innerHTML = convo.messages.map(m => `
    <div class="chat-bubble ${m.sender}">${escapeHtml(m.text)}</div>
  `).join('');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
  const text = chatInput.value.trim();
  if (!text || activeChatId == null) return;
  const convo = CONVERSATIONS.find(c => c.id === activeChatId);
  if (!convo) return;
  convo.messages.push({ sender: 'owner', text, time: new Date().toISOString() });
  chatInput.value = '';
  renderChatMessages();
  renderChatList();
}

chatSendBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatMessage(); });

chatBackBtn.addEventListener('click', () => {
  chatThreadOverlay.classList.remove('open');
  messagesOverlay.classList.add('open');
});
closeChatThreadBtn.addEventListener('click', () => {
  chatThreadOverlay.classList.remove('open');
});

/* Initial render */
renderListings();
renderRequests();
renderBookings();
renderEarnings();
renderChatList();
renderNotifications();

/* =========================================================
   PROFILE TAB
   Modes:
     "new"  -> first-time owner, empty editable fields, Save Profile button
     "view" -> profile already completed, read-only, Edit Profile button
     "edit" -> returning owner editing existing data, Save Changes / Cancel

   Login gate: a freshly-logged-in owner (no saved profile yet) can only
   see the Profile tab until they save it. Once saved, the rest of the
   dashboard (My Listings, Requests, Bookings, Earnings) unlocks and the
   owner is dropped onto My Listings.

   NOTE: profile data and the avatar are kept in memory (not
   localStorage). Browser storage isn't available inside the
   Claude.ai artifact preview, so it would fail silently there.
   If you run these files on your own server/hosting, feel free
   to swap profileData/avatarDataUrl for localStorage so the
   profile survives a page reload.
   ========================================================= */

const setupBanner   = document.getElementById('setupBanner');
const cardTitle      = document.getElementById('cardTitle');
const editBtn        = document.getElementById('editBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const saveRow        = document.getElementById('saveRow');
const saveBtn        = document.getElementById('saveBtn');
const cancelBtn      = document.getElementById('cancelBtn');
const displayName    = document.getElementById('displayName');

const profileFieldIds = ['fullName', 'mobile', 'address', 'upi', 'bank', 'ifsc'];
const profileInputs = profileFieldIds.map(id => document.getElementById(id));

let profileMode = 'new';
let profileSnapshot = {};
let profileData = JSON.parse(localStorage.getItem('equipshare_owner_profile')) || null;
let avatarDataUrl = localStorage.getItem('equipshare_owner_avatar') || null;

function collectFieldValues() {
  const data = {};
  profileInputs.forEach(i => data[i.id] = i.value.trim());
  return data;
}

function fillFieldValues(data) {
  profileInputs.forEach(i => i.value = (data && data[i.id]) || '');
}

function clearInvalidFields() {
  profileInputs.forEach(i => i.classList.remove('invalid'));
}

function validateProfileRequired() {
  clearInvalidFields();
  let valid = true;
  const fullNameField = document.getElementById('fullName');
  const mobileField = document.getElementById('mobile');

  if (!fullNameField.value.trim()) {
    fullNameField.classList.add('invalid');
    valid = false;
  }
  if (!mobileField.value.trim() || !/^\d{7,15}$/.test(mobileField.value.trim())) {
    mobileField.classList.add('invalid');
    valid = false;
  }
  return valid;
}

/* ---- Mode renderers ---- */
function renderProfileNewMode() {
  profileMode = 'new';
  setupBanner.classList.add('show');
  cardTitle.textContent = t('titleNew');
  displayName.textContent = t('titleNew');

  editBtn.style.display = 'none';
  saveProfileBtn.classList.add('show');
  saveRow.classList.remove('show');

  profileInputs.forEach(i => i.readOnly = false);
  fillFieldValues({});
}

function renderProfileViewMode(data) {
  profileMode = 'view';
  setupBanner.classList.remove('show');
  cardTitle.textContent = t('titleView');
  displayName.textContent = data.fullName || t('yourName');

  editBtn.style.display = 'inline-block';
  editBtn.textContent = t('edit');
  editBtn.classList.remove('active');
  saveProfileBtn.classList.remove('show');
  saveRow.classList.remove('show');

  profileInputs.forEach(i => i.readOnly = true);
  fillFieldValues(data);
}

function renderProfileEditMode() {
  profileMode = 'edit';
  profileSnapshot = collectFieldValues();

  cardTitle.textContent = t('titleEdit');
  editBtn.textContent = t('editing');
  editBtn.classList.add('active');
  saveProfileBtn.classList.remove('show');
  saveRow.classList.add('show');

  profileInputs.forEach(i => i.readOnly = false);
  profileInputs[0].focus();
}

// Re-applies the correct title strings for whichever profile mode is
// currently active, in the current language (used after a language switch).
function refreshProfileTitles() {
  if (profileMode === 'new') {
    cardTitle.textContent = t('titleNew');
    displayName.textContent = t('titleNew');
  } else if (profileMode === 'view') {
    cardTitle.textContent = t('titleView');
    editBtn.textContent = t('edit');
    displayName.textContent = (profileData && profileData.fullName) || t('yourName');
  } else if (profileMode === 'edit') {
    cardTitle.textContent = t('titleEdit');
    editBtn.textContent = t('editing');
  }
}

/* ---- Init: decide starting mode ---- */
function initProfile() {
  if (profileData && profileData.fullName) {
    renderProfileViewMode(profileData);
  } else {
    renderProfileNewMode();
  }
}

/* ---- Login gate: lock other tabs until profile is saved ---- */
function applyLoginGate() {
  const freshLogin = !(profileData && profileData.fullName);
  navItems.forEach(item => {
    if (item.dataset.tab === 'profile') return;
    item.disabled = freshLogin;
  });
  if (freshLogin) {
    switchTab('profile');
  }
}

/* ---- Event: first-time Save Profile ---- */
saveProfileBtn.addEventListener('click', () => {
  if (!validateProfileRequired()) {
    showToast(t('toastFillRequired'));
    return;
  }
  profileData = collectFieldValues();
localStorage.setItem('equipshare_owner_profile', JSON.stringify(profileData));
renderProfileViewMode(profileData);
  applyLoginGate();
  switchTab('listings');
  showToast(t('toastProfileSaved'));
});

/* ---- Event: Edit Profile (returning owner) ---- */
editBtn.addEventListener('click', () => {
  if (profileMode === 'view') renderProfileEditMode();
});

/* ---- Event: Cancel edit ---- */
cancelBtn.addEventListener('click', () => {
  fillFieldValues(profileSnapshot);
  clearInvalidFields();
  renderProfileViewMode(profileSnapshot);
});

/* ---- Event: Save Changes (returning owner) ---- */
saveBtn.addEventListener('click', () => {
  if (!validateProfileRequired()) {
    showToast(t('toastFillRequired'));
    return;
  }
  profileData = collectFieldValues();
  renderProfileViewMode(profileData);
  showToast(t('toastProfileUpdated'));
});

/* ---- Profile image upload ---- */
const avatar = document.getElementById('avatar');
const avatarEdit = document.getElementById('avatarEdit');
const avatarInput = document.getElementById('avatarInput');

function openAvatarPicker() {
  avatarInput.click();
}
avatar.addEventListener('click', openAvatarPicker);
avatarEdit.addEventListener('click', openAvatarPicker);

avatarInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast(t('toastChooseImage'));
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    showToast(t('toastImageTooLarge'));
    return;
  }

  const reader = new FileReader();
  reader.onload = (evt) => {
    avatarDataUrl = evt.target.result;
    avatar.style.backgroundImage = `url(${avatarDataUrl})`;
    avatar.textContent = '';
    showToast(t('toastPhotoUpdated'));
  };
  reader.onerror = () => showToast(t('toastCouldNotRead'));
  reader.readAsDataURL(file);
});

/* ---- Go! ---- */
applyTranslations();
initProfile();
applyLoginGate();
