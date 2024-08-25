(function() {
    "use strict";

    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
    /**
     * Initiate Pure Counter
     */
    new PureCounter();
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
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
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
  
  })();
  
  // Initialize the map
  var map = L.map ("map").setView([-7.3059172224119762112, 73742039488022], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  map.locate({ setView: true, maxZoom: 16 });
  
  var markerIcon = L.icon({
    iconUrl: 'assets/img/marker2.png',
    shadowUrl: 'leaf-shadow.png',
  
    iconSize:     [44, 44], 
    iconAnchor:   [22, 44], 
    tooltipAnchor: [22, 50],  
  });
  
  function onLocationFound(e) {
    var radius = e.accuracy;
  
    L.marker(e.latlng, {icon: markerIcon})
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
        position: 'bottomright'
    },
  
    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control logo-control');
        var button = L.DomUtil.create('a', '', container);
        button.innerHTML = '<img src="https://png.pngtree.com/png-clipart/20220711/ourlarge/pngtree-arah-kompas-atau-mata-angin-untuk-undangan-png-image_5868557.png">';
        L.DomEvent.disableClickPropagation(button);
        container.title = "Compass";
        
        // Adjust the position slightly
        container.style.marginBottom = '100px';
        container.style.marginRight = '100px';
  
        return container;
    }
  });
  
  new L.LogoControl().addTo(map)

  L.LogoControl = L.Control.extend({
    options: {
        position: 'bottomleft'
    },
  
    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control logo1-control');
        var button = L.DomUtil.create('a', '', container);
        button.innerHTML = '<img src="https://1.bp.blogspot.com/-HdHzdjSnL1g/VW-O_xG0i3I/AAAAAAAAA74/7lhJHixQf0Q/s1600/legenda%2Bpeta.JPG">';
        L.DomEvent.disableClickPropagation(button);
        container.title = "Legenda";
        
        // Adjust the position slightly
        container.style.marginBottom = '90px';
        container.style.marginRight = '400px';
  
        return container;
    }
  });
  
  new L.LogoControl().addTo(map)
  
  // surabaya pusat
  
  // Tambahkan marker untuk Halte A
var halteMarker = L.marker([-7.298717445208517, 112.73651463865124])
.addTo(map)
.bindPopup("Halte A");

// Tambahkan marker untuk Terminal Joyoboyo dengan tabel waktu keberangkatan
L.marker([-7.298717445208517, 112.73651463865124])
.addTo(map)
.bindPopup(`
<b>Terminal Joyoboyo</b><br>
Jl. Wonokromo, Surabaya <br>
<a href="https://maps.app.goo.gl/K49PppnKhBqVBXq5A"> >>Liat Halte<< </a><br>
<table style="border-collapse: collapse; width: 300px;">
  <tr>
    <td style="border: 1px solid black;">5:30</td>
    <td style="border: 1px solid black;">5:40</td>
    <td style="border: 1px solid black;">5:50</td>
    <td style="border: 1px solid black;">6:00</td>
    <td style="border: 1px solid black;">6:10</td>
    <td style="border: 1px solid black;">6:20</td>
    <td style="border: 1px solid black;">6:30</td>
    <td style="border: 1px solid black;">6:40</td>
    <td style="border: 1px solid black;">6:50</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">7:00</td>
    <td style="border: 1px solid black;">7:10</td>
    <td style="border: 1px solid black;">7:20</td>
    <td style="border: 1px solid black;">7:30</td>
    <td style="border: 1px solid black;">7:40</td>
    <td style="border: 1px solid black;">7:50</td>
    <td style="border: 1px solid black;">8:00</td>
    <td style="border: 1px solid black;">8:10</td>
    <td style="border: 1px solid black;">8:20</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">8:30</td>
    <td style="border: 1px solid black;">8:40</td>
    <td style="border: 1px solid black;">8:50</td>
    <td style="border: 1px solid black;">9:00</td>
    <td style="border: 1px solid black;">9:10</td>
    <td style="border: 1px solid black;">9:20</td>
    <td style="border: 1px solid black;">9:30</td>
    <td style="border: 1px solid black;">9:40</td>
    <td style="border: 1px solid black;">9:50</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">10:00</td>
    <td style="border: 1px solid black;">10:10</td>
    <td style="border: 1px solid black;">10:20</td>
    <td style="border: 1px solid black;">10:30</td>
    <td style="border: 1px solid black;">10:40</td>
    <td style="border: 1px solid black;">10:50</td>
    <td style="border: 1px solid black;">11:00</td>
    <td style="border: 1px solid black;">11:10</td>
    <td style="border: 1px solid black;">11:20</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">11:30</td>
    <td style="border: 1px solid black;">11:40</td>
    <td style="border: 1px solid black;">11:50</td>
    <td style="border: 1px solid black;">12:00</td>
    <td style="border: 1px solid black;">12:10</td>
    <td style="border: 1px solid black;">12:20</td>
    <td style="border: 1px solid black;">12:30</td>
    <td style="border: 1px solid black;">12:40</td>
    <td style="border: 1px solid black;">12:50</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">13:00</td>
    <td style="border: 1px solid black;">13:10</td>
    <td style="border: 1px solid black;">13:20</td>
    <td style="border: 1px solid black;">13:30</td>
    <td style="border: 1px solid black;">13:40</td>
    <td style="border: 1px solid black;">13:50</td>
    <td style="border: 1px solid black;">14:00</td>
    <td style="border: 1px solid black;">14:10</td>
    <td style="border: 1px solid black;">14:20</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">14:30</td>
    <td style="border: 1px solid black;">14:40</td>
    <td style="border: 1px solid black;">14:50</td>
    <td style="border: 1px solid black;">15:00</td>
    <td style="border: 1px solid black;">15:10</td>
    <td style="border: 1px solid black;">15:20</td>
    <td style="border: 1px solid black;">15:30</td>
    <td style="border: 1px solid black;">15:40</td>
    <td style="border: 1px solid black;">15:50</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">16:00</td>
    <td style="border: 1px solid black;">16:10</td>
    <td style="border: 1px solid black;">16:20</td>
    <td style="border: 1px solid black;">16:30</td>
    <td style="border: 1px solid black;">16:40</td>
    <td style="border: 1px solid black;">16:50</td>
    <td style="border: 1px solid black;">17:00</td>
    <td style="border: 1px solid black;">17:10</td>
    <td style="border: 1px solid black;">17:20</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">17:30</td>
    <td style="border: 1px solid black;">17:40</td>
    <td style="border: 1px solid black;">17:50</td>
    <td style="border: 1px solid black;">18:00</td>
    <td style="border: 1px solid black;">18:10</td>
    <td style="border: 1px solid black;">18:20</td>
    <td style="border: 1px solid black;">18:30</td>
    <td style="border: 1px solid black;">18:40</td>
    <td style="border: 1px solid black;">18:50</td>
  </tr>
  <tr>
    <td style="border: 1px solid black;">19:00</td>
    <td style="border: 1px solid black;">19:10</td>
    <td style="border: 1px solid black;">19:20</td>
    <td style="border: 1px solid black;">19:30</td>
    <td style="border: 1px solid black;">19:40</td>
    <td style="border: 1px solid black;">19:50</td>
    <td style="border: 1px solid black;">20:00</td>
    <td style="border: 1px solid black;">20:10</td>
    <td style="border: 1px solid black;">20:20</td>
  </tr>
</table>
`)
.openPopup();

// Tambahkan kontrol routing
L.Routing.control({
waypoints: [
L.latLng(-7.298717445208517, 112.73651463865124), // Titik awal (Terminal Joyoboyo)
L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
]
}).addTo(map);

  
  var halteMarker = L.marker([-7.298580859934724, 112.76115245796822])
    .addTo(map)
    .bindPopup("Halte B");
  halteMarker
    .bindPopup(`
      <b>Terminal Bratang</b><br>Jl. Bratang Raya, Surabaya  <br> <a href="https://maps.app.goo.gl/Ky53mddu6ukd13WT6"> >>Liat Halte<< </a><br>
      <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">7:00</td>
        <td style="border: 1px solid black;">7:10</td>
        <td style="border: 1px solid black;">7:20</td>
        <td style="border: 1px solid black;">7:30</td>
        <td style="border: 1px solid black;">7:40</td>
        <td style="border: 1px solid black;">7:50</td>
        <td style="border: 1px solid black;">8:00</td>
        <td style="border: 1px solid black;">8:10</td>
        <td style="border: 1px solid black;">8:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">8:30</td>
        <td style="border: 1px solid black;">8:40</td>
        <td style="border: 1px solid black;">8:50</td>
        <td style="border: 1px solid black;">9:00</td>
        <td style="border: 1px solid black;">9:10</td>
        <td style="border: 1px solid black;">9:20</td>
        <td style="border: 1px solid black;">9:30</td>
        <td style="border: 1px solid black;">9:40</td>
        <td style="border: 1px solid black;">9:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">10:00</td>
        <td style="border: 1px solid black;">10:10</td>
        <td style="border: 1px solid black;">10:20</td>
        <td style="border: 1px solid black;">10:30</td>
        <td style="border: 1px solid black;">10:40</td>
        <td style="border: 1px solid black;">10:50</td>
        <td style="border: 1px solid black;">11:00</td>
        <td style="border: 1px solid black;">11:10</td>
        <td style="border: 1px solid black;">11:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">11:30</td>
        <td style="border: 1px solid black;">11:40</td>
        <td style="border: 1px solid black;">11:50</td>
        <td style="border: 1px solid black;">12:00</td>
        <td style="border: 1px solid black;">12:10</td>
        <td style="border: 1px solid black;">12:20</td>
        <td style="border: 1px solid black;">12:30</td>
        <td style="border: 1px solid black;">12:40</td>
        <td style="border: 1px solid black;">12:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">13:00</td>
        <td style="border: 1px solid black;">13:10</td>
        <td style="border: 1px solid black;">13:20</td>
        <td style="border: 1px solid black;">13:30</td>
        <td style="border: 1px solid black;">13:40</td>
        <td style="border: 1px solid black;">13:50</td>
        <td style="border: 1px solid black;">14:00</td>
        <td style="border: 1px solid black;">14:10</td>
        <td style="border: 1px solid black;">14:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">14:30</td>
        <td style="border: 1px solid black;">14:40</td>
        <td style="border: 1px solid black;">14:50</td>
        <td style="border: 1px solid black;">15:00</td>
        <td style="border: 1px solid black;">15:10</td>
        <td style="border: 1px solid black;">15:20</td>
        <td style="border: 1px solid black;">15:30</td>
        <td style="border: 1px solid black;">15:40</td>
        <td style="border: 1px solid black;">15:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">16:00</td>
        <td style="border: 1px solid black;">16:10</td>
        <td style="border: 1px solid black;">16:20</td>
        <td style="border: 1px solid black;">16:30</td>
        <td style="border: 1px solid black;">16:40</td>
        <td style="border: 1px solid black;">16:50</td>
        <td style="border: 1px solid black;">17:00</td>
        <td style="border: 1px solid black;">17:10</td>
        <td style="border: 1px solid black;">17:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">17:30</td>
        <td style="border: 1px solid black;">17:40</td>
        <td style="border: 1px solid black;">17:50</td>
        <td style="border: 1px solid black;">18:00</td>
        <td style="border: 1px solid black;">18:10</td>
        <td style="border: 1px solid black;">18:20</td>
        <td style="border: 1px solid black;">18:30</td>
        <td style="border: 1px solid black;">18:40</td>
        <td style="border: 1px solid black;">18:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">19:00</td>
        <td style="border: 1px solid black;">19:10</td>
        <td style="border: 1px solid black;">19:20</td>
        <td style="border: 1px solid black;">19:30</td>
        <td style="border: 1px solid black;">19:40</td>
        <td style="border: 1px solid black;">19:50</td>
        <td style="border: 1px solid black;">20:00</td>
        <td style="border: 1px solid black;">20:10</td>
        <td style="border: 1px solid black;">20:20</td>
      </tr>
    </table>
     `)
    .openPopup();

    L.Routing.control({
      waypoints: [
      L.latLng(-7.298580859934724, 112.76115245796822), // Titik awal (Terminal Joyoboyo)
      L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
      ]
      }).addTo(map);
  
  var halteMarker = L.marker([-7.199408396352415, 112.73449707913173])
    .addTo(map)
    .bindPopup('Halte C');
  halteMarker.
  bindPopup(`
    <b> Terminal Tanjung Perak</b><br>Jl. Perak ,Surabaya <br> <a href="https://maps.app.goo.gl/V8E8oPZHnVKZ3Piw8"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">7:00</td>
        <td style="border: 1px solid black;">7:10</td>
        <td style="border: 1px solid black;">7:20</td>
        <td style="border: 1px solid black;">7:30</td>
        <td style="border: 1px solid black;">7:40</td>
        <td style="border: 1px solid black;">7:50</td>
        <td style="border: 1px solid black;">8:00</td>
        <td style="border: 1px solid black;">8:10</td>
        <td style="border: 1px solid black;">8:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">8:30</td>
        <td style="border: 1px solid black;">8:40</td>
        <td style="border: 1px solid black;">8:50</td>
        <td style="border: 1px solid black;">9:00</td>
        <td style="border: 1px solid black;">9:10</td>
        <td style="border: 1px solid black;">9:20</td>
        <td style="border: 1px solid black;">9:30</td>
        <td style="border: 1px solid black;">9:40</td>
        <td style="border: 1px solid black;">9:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">10:00</td>
        <td style="border: 1px solid black;">10:10</td>
        <td style="border: 1px solid black;">10:20</td>
        <td style="border: 1px solid black;">10:30</td>
        <td style="border: 1px solid black;">10:40</td>
        <td style="border: 1px solid black;">10:50</td>
        <td style="border: 1px solid black;">11:00</td>
        <td style="border: 1px solid black;">11:10</td>
        <td style="border: 1px solid black;">11:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">11:30</td>
        <td style="border: 1px solid black;">11:40</td>
        <td style="border: 1px solid black;">11:50</td>
        <td style="border: 1px solid black;">12:00</td>
        <td style="border: 1px solid black;">12:10</td>
        <td style="border: 1px solid black;">12:20</td>
        <td style="border: 1px solid black;">12:30</td>
        <td style="border: 1px solid black;">12:40</td>
        <td style="border: 1px solid black;">12:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">13:00</td>
        <td style="border: 1px solid black;">13:10</td>
        <td style="border: 1px solid black;">13:20</td>
        <td style="border: 1px solid black;">13:30</td>
        <td style="border: 1px solid black;">13:40</td>
        <td style="border: 1px solid black;">13:50</td>
        <td style="border: 1px solid black;">14:00</td>
        <td style="border: 1px solid black;">14:10</td>
        <td style="border: 1px solid black;">14:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">14:30</td>
        <td style="border: 1px solid black;">14:40</td>
        <td style="border: 1px solid black;">14:50</td>
        <td style="border: 1px solid black;">15:00</td>
        <td style="border: 1px solid black;">15:10</td>
        <td style="border: 1px solid black;">15:20</td>
        <td style="border: 1px solid black;">15:30</td>
        <td style="border: 1px solid black;">15:40</td>
        <td style="border: 1px solid black;">15:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">16:00</td>
        <td style="border: 1px solid black;">16:10</td>
        <td style="border: 1px solid black;">16:20</td>
        <td style="border: 1px solid black;">16:30</td>
        <td style="border: 1px solid black;">16:40</td>
        <td style="border: 1px solid black;">16:50</td>
        <td style="border: 1px solid black;">17:00</td>
        <td style="border: 1px solid black;">17:10</td>
        <td style="border: 1px solid black;">17:20</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">17:30</td>
        <td style="border: 1px solid black;">17:40</td>
        <td style="border: 1px solid black;">17:50</td>
        <td style="border: 1px solid black;">18:00</td>
        <td style="border: 1px solid black;">18:10</td>
        <td style="border: 1px solid black;">18:20</td>
        <td style="border: 1px solid black;">18:30</td>
        <td style="border: 1px solid black;">18:40</td>
        <td style="border: 1px solid black;">18:50</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">19:00</td>
        <td style="border: 1px solid black;">19:10</td>
        <td style="border: 1px solid black;">19:20</td>
        <td style="border: 1px solid black;">19:30</td>
        <td style="border: 1px solid black;">19:40</td>
        <td style="border: 1px solid black;">19:50</td>
        <td style="border: 1px solid black;">20:00</td>
        <td style="border: 1px solid black;">20:10</td>
        <td style="border: 1px solid black;">20:20</td>
      </tr>
    </table>
    `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.199408396352415, 112.73449707913173), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);
  
  var halteMarkerD = L.marker([-7.197230886513778, 112.73370183555258])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Ujung</b><br>
    Jl. , Surabaya <br> 
    <a href="https://maps.app.goo.gl/RcwKBV3FZ7q4EDEj8"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.197230886513778, 112.73370183555258), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);

var halteMarkerE = L.marker([-7.217779392241288, 112.6549541908318])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Tambak Osowilangun</b><br>
    Jl. Karang Menjangan, Surabaya <br> 
    <a href="https://maps.app.goo.gl/zuZ2VwQaNcQFP6M97"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  
  L.Routing.control({
    waypoints: [
    L.latLng(-7.217779392241288, 112.6549541908318), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);
  

var halteMarkerF = L.marker([-7.223014055568507, 112.73778921763756])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Kalimas</b><br>
    Jl. Keputran Raya, Surabaya <br> 
    <a href="https://maps.app.goo.gl/3ecS2n1Dx3CAtVjJ9"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.223014055568507, 112.73778921763756), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);

var halteMarkerG = L.marker([-7.229261083371892, 112.74588399437222])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Pergirian</b><br>
    Jl. Peneleh, Surabaya <br> 
    <a href="https://maps.app.goo.gl/eVnbWGiVHQmWkJ9BA"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.229261083371892, 112.74588399437222), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);

var halteMarkerH = L.marker([-7.29457459482408, 112.80176036035004])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Keputih</b><br>
    Jl. Keputih, Surabaya <br> 
    <a href="https://maps.app.goo.gl/on1eZEDfr4RVNTZw7"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.29457459482408, 112.80176036035004), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);

var halteMarkerI = L.marker([-7.235072682230659, 112.60791509936885])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Benowo</b><br>
    Jl. Benowo Pakal, Surabaya <br> 
    <a href="https://maps.app.goo.gl/Jw8AsdiT7DusRoKn8"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.235072682230659, 112.60791509936885), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);

var halteMarkerJ = L.marker([-7.268228015557616, 112.66655780370948])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Manukan</b><br>
    Jl. Manukan Rejo, Surabaya <br> 
    <a href="https://maps.app.goo.gl/5jE7ypDhouRTVUXZA"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.268228015557616, 112.66655780370948), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);

var halteMarkerK = L.marker([-7.258953757630492, 112.67859817780693])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Balongsari</b><br>
    Jl. Balongsari, Surabaya <br> 
    <a href="https://maps.app.goo.gl/UDCJt54HMcQSMCJY8"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.258953757630492, 112.67859817780693), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);

var halteMarkerL = L.marker([-7.351285407253965, 112.72455358263885])
  .addTo(map)
  .bindPopup(`
    <b>Terminal Bungurasih</b><br>
    Jl. Bungurasih Timur, Surabaya <br> 
    <a href="https://maps.app.goo.gl/nsidaMgMRExDYXZg6"> >>Liat Halte<< </a><br>
    <table style="border-collapse: collapse; width: 300px;">
      <tr>
        <td style="border: 1px solid black;">5:30</td>
        <td style="border: 1px solid black;">5:40</td>
        <td style="border: 1px solid black;">5:50</td>
        <td style="border: 1px solid black;">6:00</td>
        <td style="border: 1px solid black;">6:10</td>
        <td style="border: 1px solid black;">6:20</td>
        <td style="border: 1px solid black;">6:30</td>
        <td style="border: 1px solid black;">6:40</td>
        <td style="border: 1px solid black;">6:50</td>
      </tr>
      <!-- Tambahan waktu berikutnya di sini -->
    </table>
  `)
  .openPopup();

  L.Routing.control({
    waypoints: [
    L.latLng(-7.351285407253965, 112.72455358263885), // Titik awal (Terminal Joyoboyo)
    L.latLng(-7.3295351146434715, 112.80430838280022) // Titik tujuan (dapat diubah sesuai keperluan)
    ]
    }).addTo(map);
