// Navigation highlighting and smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
  // Function to highlight active navigation links
  function highlightActiveNavigation() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href*="#"]');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      // Check if this is an anchor link
      if (href.includes('#')) {
        const targetId = href.split('#')[1];
        
        if (targetId === 'about' || targetId === 'contact') {
          // Remove existing active classes
          link.classList.remove('text-secondary');
          
          // Check if we're currently viewing this section
          if (currentHash === `#${targetId}`) {
            link.classList.add('text-secondary');
          } else {
            // Check if section is in viewport
            const targetElement = document.getElementById(targetId);
            if (targetElement && isElementInViewport(targetElement)) {
              link.classList.add('text-secondary');
            }
          }
        }
      }
    });
  }
  
  // Function to check if element is in viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Consider element in viewport if it's at least 50% visible
    return (
      rect.top <= windowHeight * 0.5 &&
      rect.bottom >= windowHeight * 0.5
    );
  }
  
  // Smooth scrolling for anchor links
  function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href*="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal anchor links
        if (href.includes('#') && (href.startsWith('#') || href.includes(window.location.pathname))) {
          const targetId = href.split('#')[1];
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            e.preventDefault();
            
            // Calculate offset for fixed header
            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            
            // Update URL hash
            history.pushState(null, null, `#${targetId}`);
            
            // Highlight the active link
            setTimeout(highlightActiveNavigation, 100);
          }
        }
      });
    });
  }
  
  // Initialize functionality
  setupSmoothScrolling();
  highlightActiveNavigation();
  
  // Update highlighting on scroll
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(highlightActiveNavigation, 100);
  });
  
  // Update highlighting on hash change
  window.addEventListener('hashchange', highlightActiveNavigation);
});
