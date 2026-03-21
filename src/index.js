import './style.css';
// import logoUrl from './assets/logo.png'; 


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