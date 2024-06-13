AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
    once: true
});

function openDropdown(dropdownContentId) {
    document.getElementById(dropdownContentId).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showMobileMenu() {
    var element = document.getElementById("mobile-menu");
    element.classList.add("active");
}
function hiddenMobileMenu() {
    var element = document.getElementById("mobile-menu");
    element.classList.remove("active");
}


$( function() {
    $( "#tabs" ).tabs();
    $( "#tabs-production" ).tabs();
    $( "#tabs-advantages" ).tabs();
    $( ".product-block-content-left" ).tabs();
    $( "#tab-history" ).tabs();
    $( "#faq" ).accordion();
    $('.counter').counterUp({
        delay: 20,
        time: 1500
    });

    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        share: false,
        download: false,
    });
} );
