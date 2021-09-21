
import "index.css"
import "backgrounds.css"

// sticky header v3
if (document.getElementById("myHeader")) {
	window.onscroll = function() {getStuck()};

	var header = document.getElementById("myHeader");
	var sticky = header.offsetTop;
	function getStuck() {
		if (window.pageYOffset > sticky) {
			header.classList.add("mysticky");
		} else {
			header.classList.remove("mysticky");
		}
	}
}

// for alpinejs rendering svg
(function(){ 
  var templates = document.querySelectorAll('svg template');
  var el, template, attribs, attrib, count, child, content;
  for (var i=0; i<templates.length; i++) {
    el = templates[i];
    template = el.ownerDocument.createElement('template');
    el.parentNode.insertBefore(template, el);
    attribs = el.attributes;
    count = attribs.length;
    while (count-- > 0) {
      attrib = attribs[count];
      template.setAttribute(attrib.name, attrib.value);
      el.removeAttribute(attrib.name);
    }
    el.parentNode.removeChild(el);
    content = template.content;
    while ((child = el.firstChild)) {
      content.appendChild(child);
    }
  }
})();

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

// import swiper js
import Swiper, { Navigation, Pagination } from 'swiper';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',

	},
});

// lightgallery js
import lightGallery from 'lightgallery';

lightGallery(document.getElementById('lightgallery'), {
	licenseKey: '97696D4D-68C2406A-9C557B65-FAA1BACF',
	selector: '.lg-item',
});

// swup js
import Swup from 'swup';
const swup = new Swup();



// custom css file to override css from javascript plugins
import "custom.css"
import "animate.css"

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("Bridgetown is loaded!")
