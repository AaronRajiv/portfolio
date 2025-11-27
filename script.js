function validateForm(e) {
    e.preventDefault(); // Stop page reload

    var usnInput = document.getElementById('usn');
    var errorText = document.getElementById('usnError');
    var successText = document.getElementById('successMsg');
    var form = document.getElementById('contactForm');

    // 1. Check USN Format
    // Format: 4 + 2 letters + 2 digits + 2 letters + 3 digits (e.g. 4MC22CS001)
    var usnRegex = /^4[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/i;

    if (usnRegex.test(usnInput.value)) {
        // Success
        errorText.style.display = 'none';
        successText.style.display = 'block';
        
        // Reset the form
        form.reset(); 
        
        // Hide success message after 3 seconds
        setTimeout(function() { 
            successText.style.display = 'none'; 
        }, 3000);
    } else {
        // Error
        errorText.style.display = 'block';
        successText.style.display = 'none';
    }
}