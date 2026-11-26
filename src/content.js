/* =====================================================================
   CONTENT.JS — this is the ONLY file you need to edit for text.
   Everything on the page is read from the objects below.
   Nothing here is fetched from an API — it is all local text you own.
   ===================================================================== */

export const profile = {
  name: 'Dexter Carl S. Lozano',
  firstName: 'Dexter Carl',
  lastName: 'Lozano',
  title: 'Android Developer & Electronics Technician',
  location: 'Floridablanca, Pampanga, PH',

  email: 'lozanodexter981@gmail.com',
  phone: '09666585925',

  // Drop a photo in /public (e.g. /public/photo.jpg) then write '/photo.jpg'
  // here. While this is null the site shows a framed placeholder box instead.
  photo: null,

  // Small pill in the header: "Open for work" vs "Not taking work".
  available: true,

  // Numbers shown in the hero spec sheet.
  facts: {
    technicianYears: '2 yrs',
    webYears: '2 yrs',
    androidMonths: '2 mos',
    devices: '100+',
    stack: 'Kotlin / MERN',
  },

  links: {
    github: 'https://github.com/dxtcarl',
    // Paste the full URL, e.g. 'https://facebook.com/dexter.carl'.
    // Left empty it simply does not render — no fake link is shown.
    facebook: '',
  },
}

/* Hero line — one sentence under the big name. */
export const heroLine =
  'I build Android apps in Kotlin and repair phones on the bench, down to the board.'

/* About paragraphs — 2 to 3 sentences each. Written from what you told me; edit freely. */
export const bio = [
  'Most of my week splits in two: an Android codebase in Kotlin, and a bench under daylight where phones get opened up.',
  'Two years as an electronics technician has put more than a hundred devices back in people\u2019s hands, and roughly the same time on the MERN stack. The Android work is newer \u2014 about two months in Kotlin so far.',
  'I like the part of the job where something is broken and the fix has to be exact: a cold joint, a bad port, a layout that does not match the design.',
]

/* Skills, grouped. Add or delete lines — the layout adapts. */
export const skills = [
  {
    label: 'Android / Software',
    items: ['Kotlin', 'Android SDK', 'XML layouts', 'REST / JSON', 'Git', 'Android Studio'],
  },
  {
    label: 'Web',
    items: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
  },
  {
    label: 'Bench / Hardware',
    items: ['Micro-soldering', 'Board-level diagnostics', 'Component replacement', 'Charging port repair', 'Screen replacement'],
  },
]

/* ---------------------------------------------------------------------
   PROJECTS — SAMPLE CONTENT.
   I filled these with your three real apps so the layout is not empty.
   Each entry has isSample: true, which shows the SAMPLE tag on the card.
   Rewrite the copy, then set isSample: false to remove the tag.
   Delete any entry you would rather not show publicly.
   --------------------------------------------------------------------- */
export const projects = [
  {
    id: 'rockygo',
    tag: 'APP 01',
    name: 'RockyGo Customer',
    summary:
      'Food-delivery app for ordering from nearby restaurants, with city switching and a full cart-to-checkout flow.',
    role: 'Android developer — screen UI, API wiring, device testing.',
    stack: ['Kotlin', 'XML + DataBinding', 'REST API'],
    status: 'Private client app',
    link: '',
    // Screenshots render as phone frames on the card. Replace the files in
    // public/shots/ with your own (same names) or point these at new ones.
    images: [
      { src: '/shots/rockygo-home.webp', label: 'Home', alt: 'RockyGo home screen: location, search, trending restaurants nearby' },
      { src: '/shots/rockygo-store.webp', label: 'Store', alt: 'RockyGo restaurant page for GravyBaby with hours, rating and menu' },
      { src: '/shots/rockygo-item.webp', label: 'Item', alt: 'RockyGo menu item detail with price, note field and add to cart' },
    ],
    isSample: true,
  },
  {
    id: 'duobudget',
    tag: 'APP 02',
    name: 'DuoBudget',
    summary:
      'Offline-first budgeting app that tracks accounts, budgets and spending, keeping everything on the device.',
    role: 'Solo build — UI, state and local storage.',
    stack: ['Kotlin', 'Jetpack Compose', 'Local JSON storage'],
    status: 'Personal project',
    link: '',
    images: [
      { src: '/shots/duobudget-budget.webp', label: 'Budget', alt: 'DuoBudget home: per-person balances, half-month period, cap and spend' },
      { src: '/shots/duobudget-shopping.webp', label: 'Shopping', alt: 'DuoBudget shopping list with still-to-buy total and add bar' },
      { src: '/shots/duobudget-receipts.webp', label: 'Receipts', alt: 'DuoBudget receipt history with total spend and trip rows' },
    ],
    isSample: true,
  },
  {
    id: 'eetrainer',
    tag: 'APP 03',
    name: 'EE Trainer',
    summary:
      'Electrical-engineering reviewer app: lessons and quizzes shipped with the app so it works with no connection.',
    role: 'Solo build — content pipeline, screens, quiz logic.',
    stack: ['Kotlin', 'Jetpack Compose', 'JSON assets'],
    status: 'In progress',
    link: '',
    isSample: true,
  },
  {
    id: 'ctsdo',
    tag: 'WEB 01',
    name: 'CTSDO Online Management System',
    summary:
      'Management system for the Community Training and Skills Development Office in Porac: a public site, a student portal and an admin side, covering course registration through certificate release.',
    role: 'Full stack on a team — React front end, Express and MongoDB API.',
    stack: ['React 19 + TypeScript', 'Express 5', 'MongoDB', 'JWT auth', 'PDF documents'],
    status: 'Capstone · team project',
    link: 'https://github.com/ryan-lintag/ctsdo_frontend',
    wide: true,
    // Modules verified against the repo's routes and models.
    modules: [
      { name: 'Public site', detail: 'Home, about and FAQ — text editable from admin settings' },
      { name: 'Student portal', detail: 'Email-verified accounts, courses, certifications, progress' },
      { name: 'Registrations', detail: 'Course enrolment and scholarship applications with review states' },
      { name: 'Job matching', detail: 'Trainees matched to openings after certification' },
      { name: 'Documents', detail: 'Certificates and portfolios rendered to PDF from templates' },
      { name: 'Admin', detail: 'Dashboards, student records, courses, FAQs, homepage content' },
    ],
    isSample: false,
  },
]

/* ---------------------------------------------------------------------
   BENCH LOG — SAMPLE CONTENT.
   Typical micro-soldering / repair jobs. Replace with jobs you actually
   did (device, fault, work performed, result) and set isSample: false.
   --------------------------------------------------------------------- */
export const benchJobs = [
  {
    device: 'Smartphone',
    fault: 'No charge — dead charging port',
    work: 'Port flex replacement, then charge-current test',
    result: 'Charging normally',
    isSample: true,
  },
  {
    device: 'Smartphone',
    fault: 'Liquid damage, will not boot',
    work: 'Board cleaning, corrosion removal, component rework',
    result: 'Booted, battery replaced',
    isSample: true,
  },
  {
    device: 'Phablet',
    fault: 'Loose DC jack, intermittent power',
    work: 'Jack removed, pads cleaned, re-soldered',
    result: 'Stable power',
    isSample: true,
  },
  {
    device: 'Smartphone',
    fault: 'Battery swelling / fast drain',
    work: 'Battery swap with fresh adhesive seal',
    result: 'Returned to customer',
    isSample: true,
  },
]

/* Bench photo — the wide image above the repair log. */
export const benchPhoto = {
  src: '/shots/bench-pi.webp',
  alt: 'Raspberry Pi 4 Model B held in a helping-hands soldering jig with gold heatsinks fitted',
  caption: 'Raspberry Pi 4 — held in the jig, heatsinks seated',
}

/* Desk photos — the two-up strip at the bottom of About. */
export const setupPhotos = [
  {
    src: '/shots/setup-desk-1.webp',
    alt: 'Desk with a MacBook and an external monitor running Android Studio, a phone on a stand, printed receipts and a barcode scanner',
    caption: 'Android Studio · MacBook + second screen',
  },
  {
    src: '/shots/setup-desk-2.webp',
    alt: 'Monitor mirroring a phone running the RockyGo app next to a page of API documentation',
    caption: 'Device mirroring · API docs alongside',
  },
]

/* Services / "Hire me" — `experience` is how long you have actually done
   each one. Keep it honest; it is the first thing a client reads.
   `price` stays "Contact for quote" until you set your own numbers. */
export const services = [
  {
    n: '01',
    title: 'Android app builds',
    body: 'Kotlin apps from first screen to release build: UI work, REST integration, local storage, testing on real devices.',
    experience: '2 months',
    price: 'Contact for quote',
  },
  {
    n: '02',
    title: 'Web builds',
    body: 'MERN sites and dashboards — React front end, Node and Express API, MongoDB behind it.',
    experience: '2 years',
    price: 'Contact for quote',
  },
  {
    n: '03',
    title: 'Micro-soldering',
    body: 'Board-level work by hand: port and connector replacement, rework, short tracing, component swaps.',
    experience: '2 months',
    price: 'Contact for quote',
  },
  {
    n: '04',
    title: 'Bench technician',
    body: 'Day-to-day repair work: diagnostics, teardown and reassembly, screens, batteries and charging ports — tested before it goes back.',
    experience: '2 years',
    price: 'Contact for quote',
  },
]

/* Extra credibility line under the hero. Edit or delete. */
export const statLine = [
  { value: '2 yrs', label: 'as a technician' },
  { value: '100+', label: 'devices repaired' },
  { value: '2 mos', label: 'building Android' },
  { value: '2 yrs', label: 'MERN stack' },
]

export const tickerWords = [
  'ANDROID',
  'KOTLIN',
  'MERN STACK',
  'MICRO-SOLDERING',
  'BOARD-LEVEL REPAIR',
  'FLORIDABLANCA, PAMPANGA',
  'OPEN FOR WORK',
]
