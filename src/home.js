// export default function createHome() {
//     const homeDiv = document.createElement('div');
//     homeDiv.classList.add('home-content');

//     const heading = document.createElement('h2');
//     heading.textContent = 'Welcome to Culinary Excellence';

//     const para = document.createElement('p');
//     para.textContent = 'Experience the finest dining in the heart of the city. We source our ingredients locally to bring you the freshest flavors imaginable.';

//     homeDiv.appendChild(heading);
//     homeDiv.appendChild(para);

//     return homeDiv;
// }

export default function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-container');

    homeDiv.innerHTML = `
        <div class="hero">
            <h2>Experience Culinary Excellence</h2>
            <p>Step into a world of extraordinary flavors. At The Golden Fork, we blend traditional recipes with modern techniques to create unforgettable dining moments.</p>
            <button class="cta-btn" id="explore-menu-btn">Explore Our Menu</button>
        </div>

        <div class="features-grid">
            <div class="feature-box">
                <h3>🌱 Fresh Ingredients</h3>
                <p>We source our produce and meats daily from local, sustainable farms to ensure peak flavor in every bite.</p>
            </div>
            <div class="feature-box">
                <h3>👨‍🍳 Master Chefs</h3>
                <p>Our kitchen is led by award-winning culinary experts dedicated to the art of fine dining.</p>
            </div>
            <div class="feature-box">
                <h3>🍷 Elegant Ambience</h3>
                <p>Enjoy your meal in a beautifully designed space perfect for romantic dinners, family gatherings, or business lunches.</p>
            </div>
        </div>

        <div class="story-section">
            <h3>Our Story</h3>
            <p>Founded in 2024, The Golden Fork started with a simple mission: to serve exceptional food with genuine hospitality. What began as a small passion project has grown into the city's premier destination for food lovers. We believe that a great meal is more than just food—it is an experience that brings people together.</p>
        </div>
    `;

    // Add functionality to the "Explore Our Menu" button
    // We simulate a click on the main navigation menu button so the app routes properly
    const ctaBtn = homeDiv.querySelector('#explore-menu-btn');
    ctaBtn.addEventListener('click', () => {
        const menuNavButton = document.querySelector('nav button[data-target="menu"]');
        if (menuNavButton) {
            menuNavButton.click(); 
        }
    });

    return homeDiv;
}