/**
 * Template Name: Logis
 * Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });
})();

// Initialize the map
var map = L.map("map").setView([-7.305917222411976, 112.73742039488022], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.locate({ setView: true, maxZoom: 16 });

var markerIcon = L.icon({
  iconUrl: "assets/img/marker2.png",
  shadowUrl: "leaf-shadow.png",
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  tooltipAnchor: [22, 50],
});

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng, { icon: markerIcon })
    .addTo(map)
    .bindPopup("Anda Disini")
    .openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on("locationfound", onLocationFound);

function onLocationError(e) {
  alert(e.message);
}
map.on("locationerror", onLocationError);

L.LogoControl = L.Control.extend({
  options: {
    position: "bottomright",
  },

  onAdd: function (map) {
    var container = L.DomUtil.create(
      "div",
      "leaflet-bar leaflet-control logo-control"
    );
    var button = L.DomUtil.create("a", "", container);
    button.innerHTML =
      '<img src="https://png.pngtree.com/png-clipart/20220711/ourlarge/pngtree-arah-kompas-atau-mata-angin-untuk-undangan-png-image_5868557.png">';
    L.DomEvent.disableClickPropagation(button);
    container.title = "Compass";

    // Adjust the position slightly
    container.style.marginBottom = "90px";
    container.style.marginRight = "100px";

    return container;
  },
});

new L.LogoControl().addTo(map);

L.LogoControl = L.Control.extend({
  options: {
    position: "bottomleft",
  },

  onAdd: function (map) {
    var container = L.DomUtil.create(
      "div",
      "leaflet-bar leaflet-control logo1-control"
    );
    var button = L.DomUtil.create("a", "", container);
    button.innerHTML =
      '<img src="https://1.bp.blogspot.com/-HdHzdjSnL1g/VW-O_xG0i3I/AAAAAAAAA74/7lhJHixQf0Q/s1600/legenda%2Bpeta.JPG">';
    L.DomEvent.disableClickPropagation(button);
    container.title = "Legenda";

    // Adjust the position slightly
    container.style.marginBottom = "90px";
    container.style.marginRight = "400px";

    return container;
  },
});

new L.LogoControl().addTo(map);

// Marker untuk Bus Kota
var halteMarkerJoyoBoyo = L.marker([
  -7.298717445208517, 112.73651463865124,
]).bindPopup(
  '<b>Terminal Joyoboyo</b><br>Jl. Wonokromo, Surabaya<br><a href="https://maps.app.goo.gl/K49PppnKhBqVBXq5A"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerBratang = L.marker([
  -7.298580859934724, 112.76115245796822,
]).bindPopup(
  '<b>Terminal Bratang</b><br>Jl. Bratang Raya, Surabaya<br><a href="https://maps.app.goo.gl/Ky53mddu6ukd13WT6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerTanjungPerak = L.marker([
  -7.199408396352415, 112.73449707913173,
]).bindPopup(
  '<b>Terminal Tanjung Perak</b><br>Jl. Perak, Surabaya<br><a href="https://maps.app.goo.gl/V8E8oPZHnVKZ3Piw8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerUjung = L.marker([
  -7.197230886513778, 112.73370183555258,
]).bindPopup(
  '<b>Terminal Ujung</b><br>Jl., Surabaya<br><a href="https://maps.app.goo.gl/RcwKBV3FZ7q4EDEj8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerTambakOsowilangun = L.marker([
  -7.217779392241288, 112.6549541908318,
]).bindPopup(
  '<b>Terminal Tambak Osowilangun</b><br>Jl. Karang Menjangan, Surabaya<br><a href="https://maps.app.goo.gl/zuZ2VwQaNcQFP6M97"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerKalimas = L.marker([
  -7.223014055568507, 112.73778921763756,
]).bindPopup(
  '<b>Terminal Kalimas</b><br>Jl. Keputran Raya, Surabaya<br><a href="https://maps.app.goo.gl/3ecS2n1Dx3CAtVjJ9"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerPergirian = L.marker([
  -7.229261083371892, 112.74588399437222,
]).bindPopup(
  '<b>Terminal Pergirian</b><br>Jl. Peneleh, Surabaya<br><a href="https://maps.app.goo.gl/eVnbWGiVHQmWkJ9BA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerKeputih = L.marker([
  -7.29457459482408, 112.80176036035004,
]).bindPopup(
  '<b>Terminal Keputih</b><br>Jl. Keputih, Surabaya<br><a href="https://maps.app.goo.gl/on1eZEDfr4RVNTZw7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerBenowo = L.marker([
  -7.235072682230659, 112.60791509936885,
]).bindPopup(
  '<b>Terminal Benowo</b><br>Jl. Benowo Pakal, Surabaya<br><a href="https://maps.app.goo.gl/Jw8AsdiT7DusRoKn8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerManukan = L.marker([
  -7.268228015557616, 112.66655780370948,
]).bindPopup(
  '<b>Terminal Manukan</b><br>Jl. Manukan Rejo, Surabaya<br><a href="https://maps.app.goo.gl/5jE7ypDhouRTVUXZA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerBalongsari = L.marker([
  -7.258953757630492, 112.67859817780693,
]).bindPopup(
  '<b>Terminal Balongsari</b><br>Jl. Balongsari, Surabaya<br><a href="https://maps.app.goo.gl/UDCJt54HMcQSMCJY8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMarkerBungurasih = L.marker([
  -7.351285407253965, 112.72455358263885,
]).bindPopup(
  '<b>Terminal Bungurasih</b><br>Jl. Bungurasih Timur, Surabaya<br><a href="https://maps.app.goo.gl/nsidaMgMRExDYXZg6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);

// Membuat Layer Group untuk Bus Kota
var buskota = L.layerGroup([
  halteMarkerJoyoBoyo,
  halteMarkerBratang,
  halteMarkerTanjungPerak,
  halteMarkerUjung,
  halteMarkerTambakOsowilangun,
  halteMarkerKalimas,
  halteMarkerPergirian,
  halteMarkerKeputih,
  halteMarkerBenowo,
  halteMarkerManukan,
  halteMarkerBalongsari,
  halteMarkerBungurasih,
]);

// Marker untuk Feeder
var halteTunjunganPlaza = L.marker([
  -7.260050682553981, 112.73975045722177,
]).bindPopup(
  '<b>Halte Tunjungan Plaza</b><br>Jl. Tunjungan<br> <a href="https://maps.app.goo.gl/xhXAudEAFNT8rVwDA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteGrahadi = L.marker([
  -7.2628933670137155, 112.74185428522172,
]).bindPopup(
  '<b>Halte Grahadi</b><br>Jl. Embong Kaliasin Genteng, Surabaya<br> <a href="https://maps.app.goo.gl/CJVSjVbMc43pabnN8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteBalaiKota = L.marker([-7.2659149, 112.7488388]).bindPopup(
  '<b>Halte Balai Kota</b><br>Jl. Sedap Malam Ketabang, Surabaya<br><a href="https://maps.app.goo.gl/oHoNRSvXXvukSDqGA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteRSDarmo = L.marker([-7.2638763, 112.7454485]).bindPopup(
  '<b>Halte RS Darmo</b><br>Jl. Yos Sudarso, Surabaya<br><a href="https://maps.app.goo.gl/iYBtG9yrbETVKG328"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteSiola = L.marker([-7.257181757476443, 112.73782190145246]).bindPopup(
  '<b>Halte Siola</b><br>Jl. Genteng, Surabaya<br><a href="https://maps.app.goo.gl/2GuzJiGF5CuxLQ3z9"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var haltePasarTuri = L.marker([
  -7.245937772875167, 112.73710874049821,
]).bindPopup(
  '<b>Halte Pasar Turi</b><br>Jl. Bubutan, Surabaya<br><a href="https://maps.app.goo.gl/pnqseVM8XusPiE3z9"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteUripSumoharjo = L.marker([
  -7.274031203119551, 112.74215002535851,
]).bindPopup(
  '<b>Halte Urip Sumoharjo</b><br>Jl. Keputran, Surabaya<br><a href="https://maps.app.goo.gl/tMd7AThrh1R2GTVS6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteDeltaPlaza = L.marker([
  -7.265200822467888, 112.74765390658213,
]).bindPopup(
  '<b>Halte Delta Plaza</b><br>Jl. Embong Kaliasin, Surabaya<br><a href="https://maps.app.goo.gl/oaSuf1GSUKGzSotRA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteGubernurSuryo = L.marker([
  -7.263561208975308, 112.74403685214475,
]).bindPopup(
  '<b>Halte Gubernur Suryo</b><br>Jl. Embong Kaliasin, Surabaya<br><a href="https://maps.app.goo.gl/SF7U529fLVWreLkCA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteTuguPahlawan = L.marker([
  -7.243876296760908, 112.73838862666493,
]).bindPopup(
  '<b>Halte Tugu Pahlawan</b><br>Jl. Krembangan, Surabaya<br><a href="https://maps.app.goo.gl/ciY8v7b6sD7tti9e9"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteTanjungPerak = L.marker([
  -7.213000369785626, 112.73386460309169,
]).bindPopup(
  '<b>Halte Tanjung Perak</b><br>Jl. Perak Timur, Surabaya<br><a href="https://maps.app.goo.gl/W89D7itqMGuj2W1y5"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteJembatanMerahPlaza = L.marker([
  -7.235426908100587, 112.73646566987023,
]).bindPopup(
  '<b>Halte Jembatan Merah Plaza</b><br>Jl. Krembangan, Surabaya<br><a href="https://maps.app.goo.gl/rCVu3Gw7c2fnGLDw7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteKenjeranPark = L.marker([
  -7.252525846846198, 112.79601489262619,
]).bindPopup(
  '<b>Halte Kenjeran Park</b><br>Jl. Sukolilo Baru, Surabaya<br><a href="https://maps.app.goo.gl/VmVbJoqfA6KDJjPW9"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteKyaKya = L.marker([-7.236870417255592, 112.73942548757135]).bindPopup(
  '<b>Halte Kya Kya</b><br>Jl. Kembang Jepun, Surabaya<br><a href="https://maps.app.goo.gl/ipgJTEr9QzTMMyXv7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteKapasan = L.marker([-7.240261003649429, 112.74531598382283]).bindPopup(
  '<b>Halte Kapasan</b><br>Jl. Bongkaran, Surabaya<br><a href="https://maps.app.goo.gl/Lv5rQxqL1T9q79gq7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteSemutIndah = L.marker([
  -7.242243025282836, 112.73957600238937,
]).bindPopup(
  '<b>Halte Semut Indah</b><br>Jl. Bongkaran Pabean, Surabaya<br><a href="https://maps.app.goo.gl/zDsPP8FoH516vGCU6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var haltePegirian = L.marker([
  -7.228133124982026, 112.74876267318594,
]).bindPopup(
  '<b>Halte Pegirian</b><br>Jl. Sidotopo, Surabaya<br><a href="https://maps.app.goo.gl/BBxYcLBA73oy3ncE6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteKalimasBaru = L.marker([
  -7.224373179073661, 112.73585653997517,
]).bindPopup(
  '<b>Halte Kalimas Baru</b><br>Jl. Pabean, Surabaya<br><a href="https://maps.app.goo.gl/kZzhGNsE7AbeNBmG6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var haltePakuwonTradeCenter = L.marker([
  -7.2882304053156295, 112.67722471406297,
]).bindPopup(
  '<b>Halte Pakuwon Trade Center</b><br>Jl. Babatan, Surabaya<br><a href="https://maps.app.goo.gl/Sp1rUJeqr748PHSp8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteLenmarcMall = L.marker([
  -7.284819788526998, 112.6814104097696,
]).bindPopup(
  '<b>Halte Lenmarc Mall</b><br>Jl. Dukuhpakis, Surabaya<br><a href="https://maps.app.goo.gl/gW1ySQz8JvTKMGaJ7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteCitraland = L.marker([
  -7.2872685493366935, 112.64778684393517,
]).bindPopup(
  '<b>Halte Citraland</b><br>Jl. Sambikerep, Surabaya<br><a href="https://maps.app.goo.gl/aDLAavLgmkWJ1Fqt6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteManukan = L.marker([-7.255789272926918, 112.66336429859696]).bindPopup(
  '<b>Halte Manukan</b><br>Jl. Manukan, Surabaya<br><a href="https://maps.app.goo.gl/dZk4FTPy5Wb4FguY6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteSatelit = L.marker([-7.274919184975567, 112.6855838288624]).bindPopup(
  '<b>Halte Satelit</b><br>Jl. Sukomanunggal, Surabaya<br><a href="https://maps.app.goo.gl/Areo5o5tiUmikqDPA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteUnesa = L.marker([-7.296818341388646, 112.67542591947084]).bindPopup(
  '<b>Halte Unesa</b><br>Jl. Raya Kampus Unesa, Surabaya<br><a href="https://maps.app.goo.gl/ymg8cZEeKyESkjnP8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteTandes = L.marker([-7.258613014805818, 112.6791889516048]).bindPopup(
  '<b>Halte Tandes</b><br>Jl. Balongsari, Surabaya<br><a href="https://maps.app.goo.gl/kKNhSCvVkpAQ8Ppx6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteWiyung = L.marker([-7.313090098311653, 112.70453788681155]).bindPopup(
  '<b>Halte Wiyung</b><br>Jl. Raya Wiyung, Surabaya<br><a href="https://maps.app.goo.gl/eRgUFrbstPnZouN68"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteKarangpilang = L.marker([
  -7.324694157618176, 112.70921052795038,
]).bindPopup(
  '<b>Halte Karangpilang</b><br>Jl. Kedurus, Surabaya<br><a href="https://maps.app.goo.gl/zUiW1txzQoDw2Uqb9"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteITS = L.marker([-7.27922204743312, 112.78987437430158]).bindPopup(
  '<b>Halte ITS</b><br>Jl. Raya Kertajaya Indah, Surabaya<br><a href="https://maps.app.goo.gl/RFznNUyWrvdU1b3cA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteGalaxyMall = L.marker([
  -7.275570703125014, 112.78156198529453,
]).bindPopup(
  '<b>Halte Galaxy Mall</b><br>Jl. Mulyorejo, Surabaya<br><a href="https://maps.app.goo.gl/MHce8W19RnFP34Nx7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMERR = L.marker([-7.338479493541267, 112.78502669876873]).bindPopup(
  '<b>Halte MERR</b><br>Jl. Gunung Anyar, Surabaya<br><a href="https://maps.app.goo.gl/bRi9Tf95x9FQSnPo8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteRungkutIndustri = L.marker([
  -7.330695501251476, 112.7636497274955,
]).bindPopup(
  '<b>Halte Rungkut Industri</b><br>Jl. Rungkut Kidul, Surabaya<br><a href="https://maps.app.goo.gl/Hey9vHrnjYTJCxX5A"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteUPNVeteran = L.marker([
  -7.332498758688617, 112.7897794939292,
]).bindPopup(
  '<b>Halte UPN Veteran</b><br>Jl. Medokan Ayu, Surabaya<br><a href="https://maps.app.goo.gl/khACZub972eWuhvG7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteUniversitasAirlangga = L.marker([
  -7.27021319373113, 112.75850954514588,
]).bindPopup(
  '<b>Halte Universitas Airlangga</b><br>Jl. Airlangga Gubeng, Surabaya<br><a href="https://maps.app.goo.gl/MSKUi5A5vjVvieHR6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteDharmawangsa = L.marker([
  -7.273371861726625, 112.75618587016199,
]).bindPopup(
  '<b>Halte Dharmawangsa</b><br>Jl. Dharmawangsa, Surabaya<br><a href="https://maps.app.goo.gl/XurQkfbsqU231ENKA"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteRungkutAsri = L.marker([
  -7.331367515085195, 112.78786056860444,
]).bindPopup(
  '<b>Halte Rungkut Asri</b><br>Jl. Rungkut Asri, Surabaya<br><a href="https://maps.app.goo.gl/NWDwThgYXwT96eEu8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteManyarKertoarjo = L.marker([
  -7.278970180918108, 112.76371666145779,
]).bindPopup(
  '<b>Halte Manyar Kertoarjo</b><br>Jl. Manyar SAMSAT, Surabaya<br><a href="https://maps.app.goo.gl/azQuvuYfgfh5EqFN8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteRoyalPlaza = L.marker([
  -7.308498851006417, 112.73516697913308,
]).bindPopup(
  '<b>Halte Royal Plaza</b><br>Jl. Wonokromo, Surabaya<br><a href="https://maps.app.goo.gl/de3buYz58sZLCmQN7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteKBS = L.marker([-7.298674935052674, 112.73780494990737]).bindPopup(
  '<b>Halte KBS</b><br>Jl. Darmo Wonokromo, Surabaya<br><a href="https://maps.app.goo.gl/rj2a6xgS4mjTFV72A"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteAhmadYani = L.marker([-7.30800340992319, 112.7360079708331]).bindPopup(
  '<b>Halte Ahmad Yani</b><br>Jl. Jagir Wonokromo, Surabaya<br><a href="https://maps.app.goo.gl/3eUyqjcWFPUJpGnu7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteJemursari = L.marker([
  -7.328584742317062, 112.73171242487818,
]).bindPopup(
  '<b>Halte Jemursari</b><br>Jl. Jemur Wonosari, Surabaya<br><a href="https://maps.app.goo.gl/brEx1sZUtDGR7eaV9"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMenanggal = L.marker([
  -7.343326197972517, 112.72893302813434,
]).bindPopup(
  '<b>Halte Menanggal</b><br>Jl. Gayungan, Surabaya<br><a href="https://maps.app.goo.gl/RAx9KiJBY2eKGdyp8"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteWonokromo = L.marker([
  -7.303122834902533, 112.73679792785687,
]).bindPopup(
  '<b>Halte Wonokromo</b><br>Jl. Wonokromo, Surabaya<br><a href="https://maps.app.goo.gl/zDovwwyZHF44PtGG6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteMargorejo = L.marker([
  -7.316097139388028, 112.7351291093512,
]).bindPopup(
  '<b>Halte Margorejo</b><br>Jl. Margorejo Indah, Surabaya<br><a href="https://maps.app.goo.gl/G6vcBfWs8bFdtED48"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteGayungsari = L.marker([
  -7.33765759003382, 112.72062260403588,
]).bindPopup(
  '<b>Halte Gayungsari</b><br>Jl. Gayungsari, Surabaya<br><a href="https://maps.app.goo.gl/BJaG84JeKLFAsrze7"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);
var halteCito = L.marker([-7.345702165087509, 112.72793606559505]).bindPopup(
  '<b>Halte Cito</b><br>Jl. Waru Ahmad Yani, Surabaya<br><a href="https://maps.app.goo.gl/fRaYyDv6pcbNogds6"> >>Liat Halte<< </a><br><img src="img/tablejam.jpeg" width="300" height="200">'
);

// Membuat Layer Group untuk Feeder
var feeder = L.layerGroup([
  halteTunjunganPlaza,
  halteGrahadi,
  halteBalaiKota,
  halteRSDarmo,
  halteSiola,
  haltePasarTuri,
  halteUripSumoharjo,
  halteDeltaPlaza,
  halteGubernurSuryo,
  halteTuguPahlawan,
  halteTanjungPerak,
  halteJembatanMerahPlaza,
  halteKenjeranPark,
  halteKyaKya,
  halteKapasan,
  halteSemutIndah,
  haltePegirian,
  halteKalimasBaru,
  haltePakuwonTradeCenter,
  halteLenmarcMall,
  halteCitraland,
  halteManukan,
  halteSatelit,
  halteUnesa,
  halteTandes,
  halteWiyung,
  halteKarangpilang,
  halteITS,
  halteGalaxyMall,
  halteMERR,
  halteRungkutIndustri,
  halteUPNVeteran,
  halteUniversitasAirlangga,
  halteDharmawangsa,
  halteRungkutAsri,
  halteManyarKertoarjo,
  halteRoyalPlaza,
  halteKBS,
  halteAhmadYani,
  halteJemursari,
  halteMenanggal,
  halteWonokromo,
  halteMargorejo,
  halteGayungsari,
  halteCito,
]);

var suroboyobus = L.layerGroup([
  halteTunjunganPlaza,
  halteGrahadi,
  halteBalaiKota,
  halteRSDarmo,
  halteSiola,
  haltePasarTuri,
  halteUripSumoharjo,
  halteDeltaPlaza,
  halteGubernurSuryo,
  halteTuguPahlawan,
  halteTanjungPerak,
  halteJembatanMerahPlaza,
  halteKenjeranPark,
  halteKyaKya,
  halteKapasan,
  halteSemutIndah,
  haltePegirian,
  halteKalimasBaru,
  haltePakuwonTradeCenter,
  halteLenmarcMall,
  halteCitraland,
  halteManukan,
  halteSatelit,
  halteUnesa,
  halteTandes,
  halteWiyung,
  halteKarangpilang,
  halteITS,
  halteGalaxyMall,
  halteMERR,
  halteRungkutIndustri,
  halteUPNVeteran,
  halteUniversitasAirlangga,
  halteDharmawangsa,
  halteRungkutAsri,
  halteManyarKertoarjo,
  halteRoyalPlaza,
  halteKBS,
  halteAhmadYani,
  halteJemursari,
  halteMenanggal,
  halteWonokromo,
  halteMargorejo,
  halteGayungsari,
  halteCito,
]);

var overlayMaps = {
  "Suroboyo Bus": suroboyobus,
  "Bus Kota": buskota,
  Feeder: feeder,
};

L.control.layers(overlayMaps).addTo(map);

buskota.addTo(map);
