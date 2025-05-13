// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initNavigation();
  initMobileMenu();
  initSectionReveal();
  initSmoothScrolling();
  initCustomCursor();
});

/**
 * Handle navigation behavior on scroll
 */
function initNavigation() {
  const navbar = document.getElementById('main-nav');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  });
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');
  
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });
  
  closeMenu.addEventListener('click', () => {
    closeMobileMenu();
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = ''; // Re-enable scrolling
  }
}

/**
 * Reveal sections on scroll
 */
function initSectionReveal() {
  const revealSections = document.querySelectorAll('.section-appear');
  
  function revealOnScroll() {
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.85) {
        section.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  // Initial check in case some sections are already in view
  window.addEventListener('load', revealOnScroll);
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Handle custom cursor effects
 */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const interactiveElements = document.querySelectorAll('a, button, .interactive');
  
  // Update cursor position
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  // Handle interactive elements
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
    });
  });
  
  // Hide cursor when it leaves the window
  document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === null || e.relatedTarget.nodeName === 'HTML') {
      cursor.style.display = 'none';
    }
  });
  
  document.addEventListener('mouseover', () => {
    cursor.style.display = 'block';
  });
}

/**
 * Add animated hover effects to skill elements
 */
document.querySelectorAll('.skill-rune').forEach(skill => {
  skill.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.05)';
    
    // Determine the appropriate shadow color based on the rune type
    let shadowColor = 'var(--elden-gold)';
    if (this.classList.contains('rune-crimson')) {
      shadowColor = 'var(--elden-crimson)';
    } else if (this.classList.contains('rune-blue')) {
      shadowColor = 'var(--elden-blue)';
    }
    
    this.style.boxShadow = `0 0 15px ${shadowColor}`;
  });
  
  skill.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '';
  });
});

/**
 * Add animated hover effects to project cards
 */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
    this.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.4)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '';
  });
});
