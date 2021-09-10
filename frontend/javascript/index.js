
import "index.css"
import "backgrounds.css"

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


// sticky header
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myStickyHeader()};

// Get the header
var header = document.getElementById("myHeader");
var content = document.getElementById("mycontent");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("mysticky");
	content.classList.add("mycontent")
  } else {
    header.classList.remove("mysticky");
	content.classList.remove("mycontent")
  }
}

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

// custom css file to override css from javascript plugins
import "custom.css"
import "animate.css"

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("Bridgetown is loaded!")
