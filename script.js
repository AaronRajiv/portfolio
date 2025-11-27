function validateForm(e) {
    e.preventDefault();

    var usn = document.getElementById('usn');
    var error = document.getElementById('usnError');
    var success = document.getElementById('successMsg');
    var form = document.getElementById('contactForm');

    var regex = /^4[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/i;

    if (regex.test(usn.value)) {
        error.style.display = 'none';
        success.style.display = 'block';
        form.reset();
        
        setTimeout(function() { 
            success.style.display = 'none'; 
        }, 3000);
    } else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
}