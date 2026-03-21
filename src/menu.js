import pastaUrl from './assets/pasta.jpg';
import salmonUrl from './assets/salmon.jpg';
import burgerUrl from './assets/burger.jpg';    

export default function createMenu() {
    const menuDiv = document.createElement('div');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';
    menuDiv.appendChild(heading);

    const grid = document.createElement('div');
    grid.classList.add('menu-grid');

    // 1. Create the Reusable Modal Structure
    // We check if it already exists so we don't create multiple if the user navigates back and forth
    let modalOverlay = document.getElementById('food-modal');
    
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'food-modal';
        modalOverlay.classList.add('modal-overlay');
        
        // Define the inner HTML of the modal
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <button class="close-btn" aria-label="Close modal">&times;</button>
                <img id="modal-img" src="" alt="" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                <h3 id="modal-title"></h3>
                <p id="modal-desc" style="margin: 15px 0;"></p>
                <div id="modal-price" class="price" style="font-size: 1.5rem;"></div>
                <button style="margin-top: 20px; padding: 10px 25px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1.1rem;">Add to Order</button>
            </div>
        `;
        
        // Append it directly to the body, outside of our main #content div
        document.body.appendChild(modalOverlay);

        // --- Event Listeners to Close the Modal ---
        const closeBtn = modalOverlay.querySelector('.close-btn');
        
        // Close when clicking the 'X'
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
        
        // Close when clicking the dark background outside the modal box
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // Array of food items to generate the grid dynamically
    const foods = [
        { name: 'Truffle Pasta', desc: 'Handmade fettuccine in rich truffle sauce.', price: '$24.00', img: pastaUrl },
        { name: 'Grilled Salmon', desc: 'Atlantic salmon with a lemon-herb glaze.', price: '$28.00', img: salmonUrl },
        { name: 'Truffle Pasta', desc: 'Handmade fettuccine in rich truffle sauce.', price: '$24.00', img: pastaUrl },
        { name: 'Grilled Salmon', desc: 'Atlantic salmon with a lemon-herb glaze.', price: '$28.00', img: salmonUrl },
        { name: 'Wagyu Burger', desc: 'Premium beef with aged cheddar.', price: '$22.00', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
        { name: 'Wagyu Burger', desc: 'Premium beef with aged cheddar.', price: '$22.00', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
        { name: 'Truffle Pasta', desc: 'Handmade fettuccine in rich truffle sauce.', price: '$24.00', img: pastaUrl },
        { name: 'Grilled Salmon', desc: 'Atlantic salmon with a lemon-herb glaze.', price: '$28.00', img: salmonUrl },
        { name: 'Truffle Pasta', desc: 'Handmade fettuccine in rich truffle sauce.', price: '$24.00', img: pastaUrl },
        { name: 'Grilled Salmon', desc: 'Atlantic salmon with a lemon-herb glaze.', price: '$28.00', img: salmonUrl },
        { name: 'Wagyu Burger', desc: 'Premium beef with aged cheddar.', price: '$22.00', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
        { name: 'Wagyu Burger', desc: 'Premium beef with aged cheddar.', price: '$22.00', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' }
    ];

    foods.forEach(food => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item');

        itemCard.innerHTML = `
            <img src="${food.img}" alt="${food.name}" class="food-image">
            <div class="item-details">
                <h3>${food.name}</h3>
                <p>${food.desc}</p>
                <div class="price">${food.price}</div>
            </div>
        `;
        // The Magic: When a card is clicked, update the modal's data and show it
        itemCard.addEventListener('click', () => {
            document.getElementById('modal-img').src = food.img;
            document.getElementById('modal-img').alt = food.name;
            document.getElementById('modal-title').textContent = food.name;
            document.getElementById('modal-desc').textContent = food.desc;
            document.getElementById('modal-price').textContent = food.price;
            
            // Trigger the CSS transition
            modalOverlay.classList.add('active');
        });
        grid.appendChild(itemCard);
    });

    menuDiv.appendChild(grid);
    return menuDiv;
}