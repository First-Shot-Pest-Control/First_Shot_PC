document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select all buttons that have the class 'accordion-header'
    const accordions = document.querySelectorAll('.accordion-header');

    // 2. Loop through each button and add the click event
    accordions.forEach(button => {
        button.addEventListener('click', () => {
            
            // Toggle the rotation on the arrow icon inside this specific button
            const arrow = button.querySelector('.arrow');
            if (arrow) { // simple check to make sure the arrow exists
                arrow.classList.toggle('rotate');
            }

            // Find the "content" div that comes immediately after the button
            const content = button.nextElementSibling;
            
            // Toggle the menu opening and closing
            if (content.style.maxHeight) {
                // If it is open, close it (remove max-height)
                content.style.maxHeight = null; 
            } else {
                // If it is closed, open it to the exact height of its content
                content.style.maxHeight = content.scrollHeight + "px"; 
            }
        });
    });
});
