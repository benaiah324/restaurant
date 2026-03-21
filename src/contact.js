export default function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-container');
    
    contactDiv.innerHTML = `
        <h2>Get in Touch</h2>
        <div style="margin-top: 20px; line-height: 2;">
            <p><strong>Address:</strong> 123 Culinary Lane, Food City</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> reservations@goldenfork.com</p>
        </div>
        <div class="review-form-container">
            <h3 style="margin-bottom: 20px; text-align: center; color: #2c3e50;">Leave a Review</h3>
            <form id="customer-review-form">
                <div class="form-group">
                    <label for="customer-name">Name</label>
                    <input type="text" id="customer-name" name="name" required placeholder="E.g. Jane Doe">
                </div>
                
                <div class="form-group">
                    <label for="customer-rating">Rating (1 to 5)</label>
                    <input type="number" id="customer-rating" name="rating" min="1" max="5" required placeholder="5">
                </div>
                
                <div class="form-group">
                    <label for="customer-review">Your Experience</label>
                    <textarea id="customer-review" name="review" required placeholder="Tell us about your meal..."></textarea>
                </div>
                
                <button type="submit" class="submit-btn">Submit Review</button>
                <div id="form-success-msg" class="success-message">Thank you for your feedback!</div>
            </form>
        </div>
    `;

    // --- Form Submission Logic ---
    const form = contactDiv.querySelector('#customer-review-form');
    const successMsg = contactDiv.querySelector('#form-success-msg');

    form.addEventListener('submit', (e) => {
        // 1. Prevent the default browser refresh
        e.preventDefault(); 
        
        // 2. Gather the data from the form inputs
        const formData = new FormData(form);
        const reviewData = Object.fromEntries(formData.entries());
        
        // 3. Log the data to the console (simulating sending it to a backend)
        console.log('New Review Submitted:', reviewData);

        // 4. Show a success message to the user
        successMsg.style.display = 'block';
        
        // 5. Clear the form fields
        form.reset();

        // 6. Hide the success message after 3 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    });
    

    return contactDiv;
}