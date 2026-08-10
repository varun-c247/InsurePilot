// ----------header-Toggle-Menu----------
$(".hamburgerMenu").click(function(){
  $(this).toggleClass('active');
  $(".headerNav").toggleClass('show');
  $(".body-overlay").toggleClass('active');
  $("html").toggleClass('freeze');
});
$(".body-overlay").click(function(){
  $(".hamburgerMenu").trigger("click");
});
// ----------header-Toggle-Menu----------

// ----------AOS scroll animations----------
AOS.init();
AOS.init({
    disable: function () {
        var maxWidth = 1024;
        return window.innerWidth < maxWidth;
    }
});
// ----------AOS scroll animations----------

// ----------dark-themeToggle-js-start-----------
    $(".themeToggle").on("click", function () {
        $("html").toggleClass("dark");
        const isDark = $("html").hasClass("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        $(".themeToggle").toggleClass("dark", isDark);
    });
    // Load Saved Theme
    const savedTheme = localStorage.getItem("theme");
    if (
        savedTheme === "dark" ||
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        $("html").addClass("dark");
        $(".themeToggle").addClass("dark");
    } else {
        $("html").removeClass("dark");
        $(".themeToggle").removeClass("dark");
    }
// theme-saved-js-end
// ----------dark-themeToggle-js-end-------------

// ---------Owl-Carousel-js-satrt------------
$('.hero-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        autoplay: true,
        mouseDrag: false,
        autoplayTimeout: 3500,
        autoplaySpeed: 3500,
        autoplayHoverPause:false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoHeight:true
    })
// ---------Owl-Carousel-js-end------------


