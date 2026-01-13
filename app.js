"use strict";

/* روابطچ */
const LINKS = {
  STORE_URL: "https://magenta-clafoutis-ce0a0c.netlify.app/",
  TOUR_URL: "https://my.matterport.com/show/?m=33mzsiPWyX2",
  BOOKING_URL: "https://houseofantiques.github.io/Booking-/",
  CONTACT_URL: "https://houseofantiques.github.io/housesocial/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGniCDmOaccxwt7q2csOp6uNhl0n3-FqMnNyIze42nCqCGYKphHcT4l6eBJITc_aem_b4O7UaSZ6uieuqc3fENCSw"
};

/* ✅ صور السلايدر (حطيهن داخل assets/) */
const HERO_SLIDES = [
  "assetshero-1.jpg",
  "assetshero-2.jpg",
  "assetshero-3.jpg",
  "assetshero-4.jpg",
  "assetshero-5.jpg"
];

/* ✅ صور كروت الصفحات (6) */
const CARD_IMAGES = [
  "assetscard-aboutus.jpg",
  "assetscard-store.jpg",
  "assetscard-tour.jpg",
  "assetscard-booking.jpg",
  "assetscard-auction.jpg",
  "assetscard-contact.jpg"
];

const LANGS = ["ar","en","ku"];
const RTL_LANGS = new Set(["ar","ku"]);
const LS_KEY = "hoa_lang";

let lang = localStorage.getItem(LS_KEY) || "ar";
if (!LANGS.includes(lang)) lang = "ar";

const I18N = {
  ar: {
    brand1:"بيت التحفيات",
    brand2:"House of Antiques",
    nav_home:"الرئيسية",
    nav_about:"نبذة",
    nav_store:"المتجر",
    nav_tour:"الجولة",
    nav_booking:"الحجز",
    nav_auction:"المزاد",
    nav_contact:"تواصل",
    kicker:"وجهة تراثية — بغداد",
    h1a:"مرحباً بكِ في",
    h1b:"بيت التحفيات",
    sub:"تجربة متحفية مع مقتنيات نادرة، قصص عائلة، وجولات افتراضية—واستكشاف القطع الفريدة عبر متجرنا.",
    cta1:"استكشف المتجر",
    cta2:"شاهد الجولة الافتراضية",
    cards:[
      {t:"نبذة عن بيت التحفيات", d:"قصة البيت، التاريخ، الصور", href:"about.html"},
      {t:"متجر بيت التحفيات", d:"تصفّح القطع كاملة", href:"store.html"},
      {t:"جولة افتراضية", d:"360° داخل بيت التحفيات", href:"tour.html"},
      {t:"احجز في بيت التحفيات", d:"فورما الحجز والزيارات", href:"booking.html"},
      {t:"مزاد بيت التحفيات", d:"الموعد القادم / قريباً", href:"auction.html"},
      {t:"تواصل معنا", d:"المواقع والأرقام والإيميل", href:"contact.html"},
    ]
  },
  en: {
    brand1:"House of Antiques",
    brand2:"Baghdad Heritage",
    nav_home:"Home",
    nav_about:"About",
    nav_store:"Store",
    nav_tour:"Virtual Tour",
    nav_booking:"Booking",
    nav_auction:"Auction",
    nav_contact:"Contact",
    kicker:"Heritage Destination — Baghdad",
    h1a:"WELCOME TO",
    h1b:"HOUSE OF ANTIQUES",
    sub:"A museum-like experience with rare pieces, stories, and virtual tours—plus a full online store to explore unique items.",
    cta1:"Explore Store",
    cta2:"View Virtual Tour",
    cards:[
      {t:"About House of Antiques", d:"Story, history, photos", href:"about.html"},
      {t:"House of Antiques Store", d:"Browse all items", href:"store.html"},
      {t:"Virtual Tour", d:"360° inside the house", href:"tour.html"},
      {t:"Book a Visit", d:"Booking form & visits", href:"booking.html"},
      {t:"House Auction", d:"Next date / Coming soon", href:"auction.html"},
      {t:"Contact Us", d:"Links, numbers & email", href:"contact.html"},
    ]
  },
  ku: {
    brand1:"ماڵی کەلەپوورییەکان",
    brand2:"House of Antiques",
    nav_home:"سەرەکی",
    nav_about:"دەربارە",
    nav_store:"فرۆشگا",
    nav_tour:"گەشت",
    nav_booking:"حەجز",
    nav_auction:"مزاد",
    nav_contact:"پەیوەندی",
    kicker:"شوێنێکی کەلەپووری — بەغدا",
    h1a:"بەخێربێیت بۆ",
    h1b:"ماڵی کەلەپوورییەکان",
    sub:"تاقیکردنەوەیەکی مۆزەیی لەگەڵ شتێکی نادر، چیرۆک و وێنە، و گەشتی 360° — هەروەها فرۆشگای تەواو.",
    cta1:"بینینی فرۆشگا",
    cta2:"بینینی گەشتی 360°",
    cards:[
      {t:"دەربارە", d:"چیرۆک، مێژوو، وێنەکان", href:"about.html"},
      {t:"فرۆشگا", d:"بینینی هەموو پارچەکان", href:"store.html"},
      {t:"گەشتی 360°", d:"ناو ماڵەکە بە 360°", href:"tour.html"},
      {t:"حەجز", d:"فۆرمی حەجز و سەردان", href:"booking.html"},
      {t:"مزاد", d:"کات/بەزووترین کات", href:"auction.html"},
      {t:"پەیوەندی", d:"لینک و زانیاری", href:"contact.html"},
    ]
  }
};

function applyDir(){
  const isRTL = RTL_LANGS.has(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
}

function t(key){
  return I18N[lang]?.[key] ?? "";
}

function setLang(newLang){
  lang = newLang;
  localStorage.setItem(LS_KEY, lang);
  renderAll();
}

function bindLangButtons(){
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });
}
function markActiveLang(){
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/* =========================
   HERO SLIDER
========================= */
let slideIndex = 0;
let slideTimer = null;

function setHeroSlide(i){
  slideIndex = (i + HERO_SLIDES.length) % HERO_SLIDES.length;

  const bg = document.getElementById("heroBg");
  const count = document.getElementById("slideCount");
  if (!bg) return;

  // fade transition
  bg.style.opacity = "0";
  window.setTimeout(()=>{
    bg.style.backgroundImage = `url("${HERO_SLIDES[slideIndex]}")`;
    bg.style.opacity = "1";
    if (count) count.textContent = `${slideIndex+1}/${HERO_SLIDES.length}`;
  }, 220);
}

function startSlider(){
  stopSlider();
  slideTimer = window.setInterval(()=>{
    setHeroSlide(slideIndex + 1);
  }, 3000); // ✅ كل ثانيتين
}

function stopSlider(){
  if (slideTimer) window.clearInterval(slideTimer);
  slideTimer = null;
}

function bindSliderButtons(){
  const prev = document.getElementById("prevSlide");
  const next = document.getElementById("nextSlide");
  if (prev) prev.addEventListener("click", ()=> { setHeroSlide(slideIndex-1); startSlider(); });
  if (next) next.addEventListener("click", ()=> { setHeroSlide(slideIndex+1); startSlider(); });
}

/* =========================
   CARDS
========================= */
function renderCards(){
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  const items = I18N[lang].cards;

  items.forEach((c, idx)=>{
    const a = document.createElement("a");
    a.className = "card";
    a.href = c.href;

    const thumb = document.createElement("div");
    thumb.className = "thumb";
    thumb.style.backgroundImage = `url("${CARD_IMAGES[idx] || CARD_IMAGES[0]}")`;

    const meta = document.createElement("div");
    meta.className = "meta";

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = c.t;

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = c.d;

    meta.appendChild(title);
    meta.appendChild(desc);

    a.appendChild(thumb);
    a.appendChild(meta);

    grid.appendChild(a);
  });
}

/* =========================
   HEADER TEXTS
========================= */
function renderHeader(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (key && t(key)) el.textContent = t(key);
  });
  markActiveLang();
}

function renderAll(){
  applyDir();
  renderHeader();
  renderCards();
}

/* =========================
   Redirect pages without iframe
========================= */
function redirectIfNeeded(){
  const page = document.body.getAttribute("data-page");
  if (!page || page === "home") return;

  if (page === "store") window.location.replace(LINKS.STORE_URL);
  if (page === "booking") window.location.replace(LINKS.BOOKING_URL);
  if (page === "tour") window.location.replace(LINKS.TOUR_URL);
  if (page === "contact") window.location.replace(LINKS.CONTACT_URL);
}

document.addEventListener("DOMContentLoaded", ()=>{
  bindLangButtons();
  bindSliderButtons();
  renderAll();

  // init slider
  setHeroSlide(0);
  startSlider();

  // redirect other pages if used same JS
  redirectIfNeeded();
});
