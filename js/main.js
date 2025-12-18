

// about-section
const aboutCanvas = document.getElementById("aboutParticleCanvas");
const aboutCtx = aboutCanvas.getContext("2d");
let aboutParticles = [];
const aboutParticleCount = 40;

function resizeAboutCanvas() {
    const section = document.querySelector(".about-section");
    aboutCanvas.width = section.offsetWidth;
    aboutCanvas.height = section.offsetHeight;
}
resizeAboutCanvas();
window.addEventListener("resize", resizeAboutCanvas);

class AboutParticle {
    constructor() {
        this.x = Math.random() * aboutCanvas.width;
        this.y = Math.random() * aboutCanvas.height;
        this.r = Math.random() * 2 + 0.8;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > aboutCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > aboutCanvas.height) this.vy *= -1;
    }
    draw() {
        aboutCtx.beginPath();
        aboutCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        aboutCtx.fillStyle = "rgba(13,110,253,0.25)";
        aboutCtx.fill();
    }
}

function initAboutParticles() {
    aboutParticles = [];
    for (let i = 0; i < aboutParticleCount; i++) {
        aboutParticles.push(new AboutParticle());
    }
}
initAboutParticles();

function animateAboutParticles() {
    aboutCtx.clearRect(0, 0, aboutCanvas.width, aboutCanvas.height);
    aboutParticles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateAboutParticles);
}
animateAboutParticles();

// core-service-section
const serviceLinks = document.querySelectorAll('.service-link');
const panels = document.querySelectorAll('.service-panel');

serviceLinks.forEach(link => {
    link.addEventListener('click', () => {
        serviceLinks.forEach(l => l.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        link.classList.add('active');
        document.getElementById(link.dataset.service).classList.add('active');
    });
});

// portfolio-section
const items = document.querySelectorAll(".portfolio-item");
items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

/* ================= CORE SERVICES PARTICLES ================= */
const coreCanvas = document.getElementById("coreParticleCanvas");
const coreCtx = coreCanvas.getContext("2d");
let coreParticles = [];
function resizeCoreCanvas() {
    const section = document.querySelector(".core-services-v2");
    coreCanvas.width = section.offsetWidth;
    coreCanvas.height = section.offsetHeight;
}
resizeCoreCanvas();
window.addEventListener("resize", resizeCoreCanvas);

class CoreParticle {
    constructor() {
        this.x = Math.random() * coreCanvas.width;
        this.y = Math.random() * coreCanvas.height;
        this.r = Math.random() * 2 + 1;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > coreCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > coreCanvas.height) this.vy *= -1;
    }
    draw() {
        coreCtx.beginPath();
        coreCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        coreCtx.fillStyle = "rgba(13,110,253,0.25)";
        coreCtx.fill();
    }
}

function initCoreParticles() {
    coreParticles = [];
    for (let i = 0; i < 40; i++) {
        coreParticles.push(new CoreParticle());
    }
}
initCoreParticles();

function animateCoreParticles() {
    coreCtx.clearRect(0, 0, coreCanvas.width, coreCanvas.height);
    coreParticles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateCoreParticles);
}
animateCoreParticles();

/* ================= PORTFOLIO PARTICLES ================= */
const portfolioCanvas = document.getElementById("portfolioParticleCanvas");
const portfolioCtx = portfolioCanvas.getContext("2d");
let portfolioParticles = [];

function resizePortfolioCanvas() {
    const section = document.querySelector(".portfolio-section");
    portfolioCanvas.width = section.offsetWidth;
    portfolioCanvas.height = section.offsetHeight;
}
resizePortfolioCanvas();
window.addEventListener("resize", resizePortfolioCanvas);

class PortfolioParticle {
    constructor() {
        this.x = Math.random() * portfolioCanvas.width;
        this.y = Math.random() * portfolioCanvas.height;
        this.r = Math.random() * 2 + 1;
        this.vx = Math.random() * 0.3 - 0.15;
        this.vy = Math.random() * 0.3 - 0.15;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > portfolioCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > portfolioCanvas.height) this.vy *= -1;
    }
    draw() {
        portfolioCtx.beginPath();
        portfolioCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        portfolioCtx.fillStyle = "rgba(13,110,253,0.2)";
        portfolioCtx.fill();
    }
}

function initPortfolioParticles() {
    portfolioParticles = [];
    for (let i = 0; i < 35; i++) {
        portfolioParticles.push(new PortfolioParticle());
    }
}
initPortfolioParticles();

function animatePortfolioParticles() {
    portfolioCtx.clearRect(0, 0, portfolioCanvas.width, portfolioCanvas.height);
    portfolioParticles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animatePortfolioParticles);
}
animatePortfolioParticles();

// faq
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".faq-icon").textContent = "+";
            }
        });

        item.classList.toggle("active");
        const icon = item.querySelector(".faq-icon");
        icon.textContent = item.classList.contains("active") ? "−" : "+";
    });
});

