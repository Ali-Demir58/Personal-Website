// script.js

// Function to display an alert when a blog card is clicked
function showAlert(blogTitle) {
    alert("You clicked on the " + blogTitle + " blog!");
}

// Attach event listeners to all blog cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card, .card-L');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardText = card.querySelector('.card-text').textContent;
            showAlert(cardText);
        });
    });
});
