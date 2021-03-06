particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area":1000
      }
    },
    "color": {
      "value": ["#fff", "#fff", "#fff", "#fff"]
    },
    
    "shape": {
      "type": ["image", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"],
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://4.bp.blogspot.com/-jvsKPh4XVNs/VEDdOcEPlEI/AAAAAAAADX0/GtDHLMAica4/s1600/css3-shake-animation.png",
        "width": 87,
        "height": 98
      },
      "image2": {
        "src": "http://www.fullstack360.com/site/img/node.png",
        "width": 87,
        "height": 98
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 22,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 10,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 180,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 130,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});