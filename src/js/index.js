/** Bootstrap JS */
import 'bootstrap';

/** jQuery */
import 'jquery';

/** PopperJS */
import '@popperjs/core';

/** Botstrap SCSS **/
import '../scss/style.scss';

// Contact Form Validation
(function() {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
})();