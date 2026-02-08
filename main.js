// ===================================
// MAIN JAVASCRIPT FOR KUBER TECHNOLOGIES
// ===================================

// ===================================
// GITHUB PAGES AUTO-FETCH
// ===================================
async function fetchRepos() {
    const container = document.getElementById("repoContainer");
    
    try {
        const response = await fetch("https://api.github.com/orgs/Kuber-Group/repos");
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();
        container.innerHTML = "";
        
        // Filter for repositories with GitHub Pages enabled, excluding the main org page
        const pagesRepos = repos.filter(repo => 
            repo.has_pages && 
            repo.name.toLowerCase() !== "kuber-group.github.io"
        );
        
        if (pagesRepos.length === 0) {
            container.innerHTML = `
                <div class="loading-state">
                    <p>No GitHub Pages demos found yet. Check back soon!</p>
                </div>
            `;
            return;
        }
        
        // Create cards for each repository
        pagesRepos.forEach(repo => {
            const demoUrl = `https://kuber-group.github.io/${repo.name}`;
            const card = document.createElement("div");
            card.className = "card";
            
            // Extract topics/tags if available
            const topics = repo.topics || [];
            const topicsHTML = topics.length > 0 
                ? `<div class="project-tags">
                     ${topics.map(topic => `<span class="tag tech">${topic}</span>`).join('')}
                   </div>`
                : '';
            
            card.innerHTML = `
                <h4>${formatRepoName(repo.name)}</h4>
                <p>${repo.description || "Live demo project from Kuber Technologies."}</p>
                ${topicsHTML}
                <a class="btn btn-primary" href="${demoUrl}" target="_blank" rel="noopener noreferrer">View Demo →</a>
            `;
            
            container.appendChild(card);
        });
        
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        container.innerHTML = `
            <div class="loading-state">
                <p>Unable to load GitHub demos at this time. Please try again later.</p>
            </div>
        `;
    }
}

// Format repository names for display (convert kebab-case to Title Case)
function formatRepoName(name) {
    return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// ===================================
// FEATURED PROJECTS RENDERING
// ===================================
function renderFeaturedProjects(projects = featuredProjects) {
    const container = document.getElementById("projectsContainer");
    
    if (!container) return;
    
    container.innerHTML = "";
    
    if (projects.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="display: block;">
                <p>No featured projects match your current filters.</p>
            </div>
        `;
        return;
    }
    
    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.dataset.category = project.category;
        card.dataset.tech = project.techStack.join(',');
        
        const techStackHTML = project.techStack
            .map(tech => `<span class="tag tech">${tech}</span>`)
            .join('');
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                <span class="tag category">${project.category}</span>
                ${techStackHTML}
            </div>
            <a class="btn btn-primary" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">View Demo →</a>
        `;
        
        container.appendChild(card);
    });
}

// ===================================
// FILTERING FUNCTIONALITY
// ===================================
let activeFilters = {
    category: 'all',
    tech: 'all'
};

function filterProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const noResults = document.querySelector('.no-results');
    let visibleCount = 0;
    
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardTech = card.dataset.tech.split(',');
        
        // Check category filter
        const categoryMatch = activeFilters.category === 'all' || cardCategory === activeFilters.category;
        
        // Check tech filter
        const techMatch = activeFilters.tech === 'all' || cardTech.includes(activeFilters.tech);
        
        // Show/hide card based on filters
        if (categoryMatch && techMatch) {
            card.style.display = 'flex';
            card.style.animation = 'fadeInUp 0.5s ease-out';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.dataset.type;
            const filterValue = button.dataset.filter;
            
            // Update active filters
            activeFilters[filterType] = filterValue;
            
            // Update button states for this filter type
            document.querySelectorAll(`.filter-btn[data-type="${filterType}"]`).forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Apply filters
            filterProjects();
        });
    });
}

// ===================================
// SMOOTH SCROLLING ENHANCEMENTS
// ===================================
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe section headers and cards
    document.querySelectorAll('.section-header, .service-card, .why-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Fetch GitHub repos
    fetchRepos();
    
    // Render featured projects
    renderFeaturedProjects();
    
    // Setup filtering
    setupFilterButtons();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup navbar effects
    setupNavbarScroll();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    console.log('Kuber Technologies site initialized successfully!');
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchRepos,
        renderFeaturedProjects,
        filterProjects
    };
}
