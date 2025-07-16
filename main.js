
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (placeholder - would need more implementation)
document.querySelector('button').addEventListener('click', function () {
    alert('Mobile menu would open here in a full implementation.');
});

// Skill card hover effect
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        const icon = this.querySelector('.skill-icon');
        icon.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', function () {
        const icon = this.querySelector('.skill-icon');
        icon.style.transform = 'scale(1)';
    });
});

// Projects 
const projects = [
    {
        title: 'Studiverse',
        description: 'An E-learning app built with MERN stack',
        image: 'project_studiverse.png',
        link: 'https://huy-studiverse.vercel.app/',
        techs: ['Next', 'Tailwindcss', 'TypeScript', 'Express', 'MongoDB']
    },
    {
        title: 'CarbonWise',
        description: 'A voluntary carbon credit exchange platform with integrated RAG chatbot',
        image: 'project_carbonwise.png',
        link: 'https://greenmind-ohck.onrender.com/',
        techs: ['Langchain.js', 'Nomic.ai', 'Next', 'Tailwindcss', 'TypeScript', 'Express', 'MongoDB']
    },
    {
        title: 'WorkDi',
        description: '[Developing] Website for team projects management and knowledge sharing via blogs',
        image: 'project_workdi.png',
        link: '#',
        techs: ['React', 'Tailwindcss', 'TypeScript', 'Firebase']
    }
]
const projectDiv = document.querySelector('#projects');

const app = {
    init: function() {
        this.renderProjects();
    },

    renderProjects: function() {
        let html = ''; 
        html = projects.map(project => `
            <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover transition duration-300">
                <div class="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                    <image src="./images/${project.image}" alt="Project Image" />
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">
                        <a href="${project.link || '#'}" target="_blank">
                            ${project.title}
                        </a>
                    </h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${
                            project.techs.map(tech => `
                                <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">${tech}</span>
                            `).join('')
                        }
                    </div>
                </div>
            </div>
        `).join('');
        projectDiv.innerHTML = html;
    },
};

window.onload = function() {
    app.init();
}

