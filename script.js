// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(59, 130, 246, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(59, 130, 246, 0.2)';
    }
});

// AI/ML Neural Network Connections
function createNeuralConnections() {
    const neuralNodes = document.querySelectorAll('.neural-node');
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 1;
        
        neuralNodes.forEach((node, i) => {
            const rect = node.getBoundingClientRect();
            const x1 = rect.left + rect.width / 2;
            const y1 = rect.top + rect.height / 2;
            
            neuralNodes.forEach((otherNode, j) => {
                if (i !== j && Math.random() > 0.7) {
                    const otherRect = otherNode.getBoundingClientRect();
                    const x2 = otherRect.left + otherRect.width / 2;
                    const y2 = otherRect.top + otherRect.height / 2;
                    
                    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                    if (distance < 300) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                }
            });
        });
    }
    
    drawConnections();
    setInterval(drawConnections, 2000);
}

// Data Flow Animation
function createDataFlow() {
    const dataPoints = document.querySelectorAll('.data-point');
    
    dataPoints.forEach((point, index) => {
        point.addEventListener('mouseenter', () => {
            point.style.animationDuration = '2s';
            point.style.transform = 'scale(2)';
            point.style.boxShadow = '0 0 30px rgba(16, 185, 129, 1)';
        });
        
        point.addEventListener('mouseleave', () => {
            point.style.animationDuration = '8s';
            point.style.transform = 'scale(1)';
            point.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.8)';
        });
    });
}

// Interactive Tech Icons
function enhanceTechIcons() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', () => {
            icon.style.animationDuration = '3s';
            icon.style.color = 'rgba(59, 130, 246, 1)';
            icon.style.transform = 'scale(1.5) rotate(360deg)';
            icon.style.textShadow = '0 0 20px rgba(59, 130, 246, 0.8)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.animationDuration = '12s';
            icon.style.color = 'rgba(59, 130, 246, 0.3)';
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.textShadow = 'none';
        });
    });
}

// Enhanced Skill Level Animations
function enhanceSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const skillLevel = item.querySelector('.skill-level');
        const level = skillLevel.getAttribute('data-level');
        
        // Set initial width to 0
        skillLevel.style.width = '0%';
        
        // Animate on hover with AI/ML effect
        item.addEventListener('mouseenter', () => {
            skillLevel.style.width = level + '%';
            skillLevel.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.6)';
            
            // Add pulsing effect
            item.style.transform = 'translateX(10px) scale(1.02)';
            item.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            skillLevel.style.width = '0%';
            skillLevel.style.boxShadow = 'none';
            item.style.transform = 'translateX(0) scale(1)';
            item.style.boxShadow = 'none';
        });
    });
}

// AI/ML Particle System
function createParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-2';
    document.body.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(59, 130, 246, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 10;
        const endX = startX + (Math.random() - 0.5) * 200;
        const endY = -10;
        const duration = 3000 + Math.random() * 2000;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        particle.style.transition = `all ${duration}ms linear`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.style.left = endX + 'px';
            particle.style.top = endY + 'px';
            particle.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration + 100);
    }
    
    setInterval(createParticle, 200);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Enhanced Skill Level Animations
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    const skillLevel = item.querySelector('.skill-level');
    const level = skillLevel.getAttribute('data-level');
    
    // Set initial width to 0
    skillLevel.style.width = '0%';
    
    // Animate on hover
    item.addEventListener('mouseenter', () => {
        skillLevel.style.width = level + '%';
    });
    
    item.addEventListener('mouseleave', () => {
        skillLevel.style.width = '0%';
    });
});

// Animate skill levels when they come into view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target.querySelector('.skill-level');
            const level = skillLevel.getAttribute('data-level');
            
            setTimeout(() => {
                skillLevel.style.width = level + '%';
            }, 500);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(item => {
    skillObserver.observe(item);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    
    // Reset to original text after typing effect
    setTimeout(() => {
        heroTitle.innerHTML = originalText;
    }, 3000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const target = parseInt(statNumber.textContent);
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Timeline animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Education cards animation
const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.education-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    educationObserver.observe(card);
});

// Contact items animation
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.contact-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    contactObserver.observe(item);
});

// Social links animation
document.querySelectorAll('.social-link').forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(20px)';
    link.style.transition = 'all 0.6s ease';
    
    setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
    }, 1000 + (index * 100));
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #3b82f6 !important;
        background: rgba(59, 130, 246, 0.1) !important;
    }
    .nav-link.active::after {
        width: 80% !important;
    }
`;
document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', () => {
    // Remove preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add reveal class to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
});

// Add reveal animation styles
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// Initialize reveal on load
revealOnScroll();

// Initialize AI/ML features when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        createNeuralConnections();
        createDataFlow();
        enhanceTechIcons();
        createParticleSystem();
    }, 1000);
});

// Enhanced mouse trail effect
function createMouseTrail() {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.width = '4px';
    trail.style.height = '4px';
    trail.style.background = 'rgba(59, 130, 246, 0.6)';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    trail.style.transition = 'all 0.1s ease';
    document.body.appendChild(trail);
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        trail.style.left = (mouseX - 2) + 'px';
        trail.style.top = (mouseY - 2) + 'px';
        trail.style.opacity = '1';
        trail.style.transform = 'scale(1)';
        
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0.5)';
        }, 100);
    });
}

// Initialize mouse trail
createMouseTrail(); 