// Page Transition Loader
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        // Wait 600ms to simulate the react transition when page loads
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 600);

        // Show loader before navigating to another HTML page
        document.querySelectorAll('a[href*=".html"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                loader.classList.remove('hidden');
                setTimeout(() => {
                    const url = new URL(link.href, window.location.href);
                    url.searchParams.set('theme', isDark ? 'dark' : 'light');
                    window.location.href = url.href;
                }, 300);
            });
        });
    }
});

// Theme Management
const themeToggles = document.querySelectorAll('.theme-toggle');
const rootElement = document.documentElement;
let isDark = rootElement.classList.contains('dark');

function updateTheme() {
    if (isDark) {
        rootElement.classList.add('dark');
    } else {
        rootElement.classList.remove('dark');
    }
}

themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        isDark = !isDark;
        updateTheme();
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});

// Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect & Hero Background Fade Out
const navbar = document.getElementById('navbar');
const animatedBg = document.querySelector('.animated-bg');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        if (animatedBg) animatedBg.classList.add('hidden');
    } else {
        navbar.classList.remove('scrolled');
        if (animatedBg) animatedBg.classList.remove('hidden');
    }
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const navOffset = 96;
            const top = targetElement.getBoundingClientRect().top + window.scrollY - navOffset;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
            history.replaceState(null, '', targetId);
        }
    });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .slide-in-left').forEach(el => {
    observer.observe(el);
});

// Skills Data
const competencyProjects = [
    {
        competencyTitle: "Réaliser",
        competencyDescription: "Concevoir, coder, tester et intégrer une solution informatique pour un client.",
        project: {
            title: "Jeu du Sokoban",
            description: "Développement seul, en C d'une version jouable en mode console du jeu de Sokoban. Implémentation des structures de données pour représenter la grille, gestion des mouvements et poussée de caisses et lecture / écriture de fichiers de niveaux personnalisés (.sok).",
            tech: ["C"],
            images: [
                "assets/img-skill/IMG_SKILL_1_1.png",
                "assets/img-skill/IMG_SKILL_1_2.png",
                "assets/img-skill/IMG_SKILL_1_3.png"
            ]
        }
    },
    {
        competencyTitle: "Optimiser",
        competencyDescription: "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources.",
        project: {
            title: "Solveur problème du cavalier",
            description: "Différent problème mathématiques étaient à résoudre en utilisant différents algorithmes. Le but est de trouver la meilleur, celle qui la plus optimisée en terme de temps et de ressources. Ce travail était à faire en groupe de 2 personnes.",
            tech: ["Python", "GitHub"],
            images: [
                "assets/img-skill/IMG_SKILL_2_1.png",
                "assets/img-skill/IMG_SKILL_2_2.png",
                "assets/img-skill/IMG_SKILL_2_3.png"
            ],
            github: "https://github.com/TMoq22/knights-tour"
        }
    },
    {
        competencyTitle: "Administrer",
        competencyDescription: "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation.",
        project: {
            title: "Automatisation traitement de fichier",
            description: "En groupe de 4, nous avons du réaliser un script d'automatisation qui convertit des fichiers brut en fichiers utilisable par une équipe de développement. Nous avons du détecter les fichiers qui étaient à convertir puis appliquer différentes modifications. Ces fichiers pouvait être des images, tableaux, textes, etc.",
            tech: ["Bash", "PHP", "Docker", "GitHub", "Linux"],
            images: [
                "assets/img-skill/IMG_SKILL_3_1.png",
                "assets/img-skill/IMG_SKILL_3_2.png",
                "assets/img-skill/IMG_SKILL_3_3.png"
            ],
            github: "https://github.com/liam-gen/sae1.03"
        }
    },
    {
        competencyTitle: "Gérer",
        competencyDescription: "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
        project: {
            title: "Création d'une base de données",
            description: "Par groupe de 2, nous avons du créer un modèle relationnel d'une base de données d'un comparateur d'offres d'électricité, puis nous avons créé les scripts de construction et de suppression de celle-ci. Nous avons pu comprendre les problématiques concrètes que suggère une base de données.",
            tech: ["Tutorial D Rel", "UML", "GitHub"],
            images: [
                "assets/img-skill/IMG_SKILL_4_1.png",
                "assets/img-skill/IMG_SKILL_4_2.png",
                "assets/img-skill/IMG_SKILL_4_3.png"
            ],
            github: "https://github.com/TMoq22/sae104"
        }
    },
    {
        competencyTitle: "Conduire",
        competencyDescription: "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
        project: {
            title: "Site web touristique",
            description: "Création d'un site web touristique sur un pays au choix en groupe de 4 étudiants. Mon groupe et moi avons choisis les Etats-Unis pour sa large culture. Le site est entièrement responsive et respecte une charte graphique définie.",
            tech: ["HTML", "CSS", "JavaScript", "GitHub", "Figma"],
            images: [
                "assets/img-skill/IMG_SKILL_5_1.png",
                "assets/img-skill/IMG_SKILL_5_2.png",
                "assets/img-skill/IMG_SKILL_5_3.png"
            ],
            github: "https://github.com/BastienAUL/SAE_1.05_Tourisme_USA"
        }
    },
    {
        competencyTitle: "Collaborer",
        competencyDescription: "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique",
        project: {
            title: "Etude de la RSE d'AMD",
            description: "Travail en équipe de 4 à 5 étudiants pour réaliser une étude sur la RSE d'une entreprise. Ce projet a mis l'accent sur la collaboration et la coordination de l'équipe afin de produire une soutenance orale complète.",
            tech: ["Canva", "Trello"],
            images: [
                "assets/img-skill/IMG_SKILL_6_1.png",
                "assets/img-skill/IMG_SKILL_6_2.png",
                "assets/img-skill/IMG_SKILL_6_3.png"
            ]
        }
    }
];

// Lightbox State
let currentImages = [];
let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxThumbnails = document.getElementById('lightbox-thumbnails');

// Render Projects
const projectsContainer = document.getElementById('projects-container');

if (projectsContainer) {
    competencyProjects.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-up';
        
        const imgUrl = item.project.images[0];
        
        card.innerHTML = `
            <div class="project-img-wrapper" onclick="openLightbox(${index}, 0)" style="cursor: pointer;">
                <img src="${imgUrl}" alt="${item.project.title}" class="project-img" loading="lazy">
                <div class="project-img-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${item.project.title}</h3>
                <p class="project-desc">${item.project.description}</p>
                ${item.project.github ? `
                <a href="${item.project.github}" target="_blank" rel="noopener noreferrer" class="project-link" style="display:inline-flex; align-items:center; gap:0.5rem; margin-top:1rem; color:hsl(var(--primary)); text-decoration:none; font-weight:600;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    Code source
                </a>
                ` : ''}
            </div>
        `;
        
        projectsContainer.appendChild(card);
        observer.observe(card);
    });
}

// Mobile Carousel Logic
window.updateMobileImg = function(projectIndex, imgIndex) {
    const project = competencyProjects[projectIndex];
    const imgEl = document.getElementById(`mobile-img-${projectIndex}`);
    const container = imgEl.parentElement;
    const dots = document.querySelectorAll(`#mobile-dots-${projectIndex} .carousel-dot`);
    
    imgEl.src = project.project.images[imgIndex];
    container.dataset.current = imgIndex;
    
    dots.forEach((d, i) => {
        d.classList.toggle('active', i === imgIndex);
    });
}

window.prevMobileImg = function(projectIndex) {
    const project = competencyProjects[projectIndex];
    const container = document.getElementById(`mobile-img-${projectIndex}`).parentElement;
    let current = parseInt(container.dataset.current);
    current = (current - 1 + project.project.images.length) % project.project.images.length;
    updateMobileImg(projectIndex, current);
}

window.nextMobileImg = function(projectIndex) {
    const project = competencyProjects[projectIndex];
    const container = document.getElementById(`mobile-img-${projectIndex}`).parentElement;
    let current = parseInt(container.dataset.current);
    current = (current + 1) % project.project.images.length;
    updateMobileImg(projectIndex, current);
}


// Lightbox Logic
window.openLightbox = function(projectIndex, imgIndex) {
    currentImages = competencyProjects[projectIndex].project.images;
    currentIndex = imgIndex;
    updateLightboxImg();
    renderLightboxThumbnails();
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImg() {
    lightboxImg.src = currentImages[currentIndex];
    updateActiveThumbnail();
}

function prevLightbox() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImg();
}

function nextLightbox() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImg();
}

function renderLightboxThumbnails() {
    lightboxThumbnails.innerHTML = currentImages.map((img, i) => `
        <div class="lightbox-thumb ${i === currentIndex ? 'active' : ''}" onclick="setLightboxIndex(${i})">
            <img src="${img}" alt="Thumbnail ${i+1}">
        </div>
    `).join('');
}

function updateActiveThumbnail() {
    const thumbs = lightboxThumbnails.querySelectorAll('.lightbox-thumb');
    thumbs.forEach((t, i) => {
        t.classList.toggle('active', i === currentIndex);
        if (i === currentIndex) {
            t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
}

window.setLightboxIndex = function(index) {
    currentIndex = index;
    updateLightboxImg();
}

// Lightbox Events
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); prevLightbox(); });
document.getElementById('lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); nextLightbox(); });

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
});
