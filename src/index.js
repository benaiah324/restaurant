import './style.css';
import logoUrl from './assets/logo2.png'; 
import createHome from './home.js';
import createMenu from './menu.js';


const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('header');
    
    const logo = document.createElement('img');
    logo.src = logoUrl;
    logo.alt = 'Restaurant Logo';
    logo.classList.add('logo');

    const nav = document.createElement('nav');
    
    // Create buttons for navigation
    const btns = ['Home', 'Menu', 'Contact'];
    btns.forEach(text => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.dataset.target = text.toLowerCase();
        nav.appendChild(btn);
    });

    header.appendChild(logo);
    header.appendChild(nav);
    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} The Golden Fork. All rights reserved.</p>`;
    return footer;
}

// Function to clear the main content area and load the new page
function loadPage(pageFunction) {
    const mainArea = document.querySelector('main');
    mainArea.innerHTML = ''; // Clear current content
    mainArea.appendChild(pageFunction());
}

// Initialize the website
function init() {
    const header = createHeader();
    const main = document.createElement('main'); // Container for dynamic content
    const footer = createFooter();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    // Setup event listeners for the navigation
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.dataset.target;
            
            if (target === 'home') loadPage(createHome);
            if (target === 'menu') loadPage(createMenu);
            if (target === 'contact') loadPage(createContact);
        });
    });

    // Load Home page by default
    loadPage(createHome);
}

init();