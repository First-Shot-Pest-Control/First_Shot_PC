document.addEventListener('DOMContentLoaded', () => {
    
    // Select all buttons that are meant to be accordions
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the active state on the button
            const arrow = button.querySelector('.arrow');
            arrow.classList.toggle('rotate');

            // Find the content div immediately following the button
            const content = button.nextElementSibling;
            
            // Toggle the max-height for the slide animation
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Close it
            } else {
                // Set it to its full scroll height so it opens exactly enough
                content.style.maxHeight = content.scrollHeight + "px"; 
            }
        });
    });
});
