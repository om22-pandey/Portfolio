  const containerId = 'bg1';

  // Base particle configuration
  const baseConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        // value: "#ffffff"
        value: "#c0392b"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 7
        }
      },
      opacity: {
        value: 0.3,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: true
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 150,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  // Hover configuration
  const hoverConfig = JSON.parse(JSON.stringify(baseConfig)); // Deep copy
  hoverConfig.particles.color.value = "#00ffff";
  hoverConfig.particles.line_linked.color = "#00ffff";
  hoverConfig.interactivity.modes.size = 20;

  // Function to destroy existing particles and reinitialize
  function reloadParticles(id, config) {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach(p => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    }
    particlesJS(id, config);
  }

  // Initial load
  reloadParticles(containerId, baseConfig);

///////////////////////////////////////////////////////////////

const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

function removeActiveClasses() {
    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));
}

function activateTab(tabIndex) {
    removeActiveClasses();
    tabLinks[tabIndex].classList.add('active-link');
    tabContents[tabIndex].classList.add('active-tab');
}

tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => activateTab(index));
});


// -------------------------------responsive----------------------------



var bar = document.getElementById('bar');
var cross = document.getElementById('cross');
var nav_ul = document.getElementById('list');


// hideNav();
function showNav() {
    // nav_ul.setAttribute('style','display:block'; 'color: black');
    nav_ul.style.display = 'block';
    bar.style.display = 'none';
}
function hideNav() {
    // nav_ul.setAttribute('style','display:block'; 'color: black');
    nav_ul.style.display = 'none';
    bar.style.display = 'block';
}

bar.addEventListener('click', showNav);
cross.addEventListener('click',hideNav);


// function copyEmail(){
//     document.execCommand("copy");
// }

function refresh_page() {
    location.reload();
    // document.getElementById('myform').reset();
}