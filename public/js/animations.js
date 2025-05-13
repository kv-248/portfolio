// Animation effects for Elden Ring theme

/**
 * Creates a subtle parallax effect on scroll
 */
function initParallaxEffect() {
  const heroSection = document.querySelector('.hero-section');
  const floatingRunes = document.querySelectorAll('.floating-rune');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    
    // Apply parallax to floating runes
    floatingRunes.forEach((rune, index) => {
      const speed = 0.05 * (index + 1);
      const yPos = scrollPosition * speed;
      rune.style.transform = `translateY(${yPos}px)`;
    });
  });
}

/**
 * Adds glowing effect to elements
 */
function initGlowEffects() {
  const glowElements = document.querySelectorAll('.btn, .section-title');
  
  glowElements.forEach(element => {
    // Random interval for glow effect to create a more organic feel
    const interval = Math.random() * 2000 + 1000; // Between 1-3 seconds
    
    setInterval(() => {
      element.classList.add('glow-pulse');
      
      setTimeout(() => {
        element.classList.remove('glow-pulse');
      }, 500);
    }, interval);
  });
}

/**
 * Creates flickering torch-like effect for certain elements
 */
function initFlickerEffect() {
  const elements = document.querySelectorAll('.hero-title, .footer-title');
  
  elements.forEach(element => {
    setInterval(() => {
      const opacity = 0.8 + Math.random() * 0.2; // Between 0.8 and 1
      element.style.opacity = opacity;
    }, 100);
  });
}

/**
 * Adds rune activation animations when scrolling to the skills section
 */
function initRuneActivation() {
  const skillRunes = document.querySelectorAll('.skill-rune');
  const skillsSection = document.getElementById('skills');
  
  window.addEventListener('scroll', () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPosition = window.innerHeight * 0.7;
    
    if (sectionTop < triggerPosition) {
      // Activate runes with staggered timing
      skillRunes.forEach((rune, index) => {
        setTimeout(() => {
          rune.classList.add('rune-activated');
        }, index * 100);
      });
    }
  });
}

/**
 * Adds magic circle animation to the project cards
 */
function initMagicCircles() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const circle = document.createElement('div');
      circle.classList.add('magic-circle');
      card.appendChild(circle);
      
      setTimeout(() => {
        circle.classList.add('expand');
      }, 10);
      
      setTimeout(() => {
        circle.remove();
      }, 1000);
    });
  });
}

/**
 * Initialize runic border animation for buttons
 */
function initRunicBorders() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    const runicEffect = document.createElement('div');
    runicEffect.classList.add('runic-effect');
    button.appendChild(runicEffect);
  });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initParallaxEffect();
  initGlowEffects();
  initFlickerEffect();
  initRuneActivation();
  initMagicCircles();
  initRunicBorders();
  
  // Add class to body when page is fully loaded
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
});
