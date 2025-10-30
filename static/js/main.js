document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Clear the form
        contactForm.reset();
        alert('Thank you for your message!');
    });
});