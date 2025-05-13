/**
 * Particle animation configuration for particles.js
 * Creates Elden Ring inspired particles in the hero section
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#d4af37", "#8b0000", "#7df9ff"]
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#d4af37",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  } else {
    console.warn('particles.js not loaded. Falling back to basic background.');
    
    // Create fallback particles using DOM elements if particles.js fails to load
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
      // Create fallback particles
      createFallbackParticles(particlesContainer);
    }
  }
});

/**
 * Creates simple particles using DOM elements as fallback
 * @param {HTMLElement} container - The container element for particles
 */
function createFallbackParticles(container) {
  const colors = ['#d4af37', '#8b0000', '#7df9ff'];
  const particleCount = 20;
  
  // Clear container
  container.innerHTML = '';
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Style particle
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animation = `float ${Math.random() * 5 + 3}s ease-in-out infinite`;
    
    // Add to container
    container.appendChild(particle);
  }
}
