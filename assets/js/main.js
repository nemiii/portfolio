(function ($) {
    "use strict";

    const offcanvasToggle = document.getElementById('offcanvas-toggle');
    const offcanvas = document.getElementById('offcanvas');

    offcanvasToggle.addEventListener('click', function () {
        offcanvas.classList.toggle('offcanvas-open')
    })

    const offcanvasClose = document.getElementById('offcanvas-close')

    offcanvasClose.addEventListener('click', function () {
        offcanvas.classList.toggle('offcanvas-open')
    })

})(jQuery);
