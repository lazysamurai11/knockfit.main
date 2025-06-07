// script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Prepare the WhatsApp message
            const name = encodeURIComponent(document.getElementById('name').value);
            const email = encodeURIComponent(document.getElementById('email').value);
            const message = encodeURIComponent(document.getElementById('message').value);
            const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const whatsappURL = `https://wa.me/917011868545?text=${whatsappMessage}`;
            
            // Redirect to WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Show success message
            formSuccess.classList.remove('hidden');
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                formSuccess.classList.add('hidden');
            }, 5000);
        });
    }
});