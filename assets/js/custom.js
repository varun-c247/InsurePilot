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

// -----------dropdown-menu-js-start-----------
$(document).ready(function () {

  $(".dropdown-btn").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $dropdown = $(this).closest(".dropdown");
    const $menu = $dropdown.find(".dropdown-menu");

    // Close all other dropdowns
    $(".dropdown").not($dropdown).find(".dropdown-menu").addClass("hidden");

    // Open/close clicked dropdown
    $menu.toggleClass("hidden");
  });

  // Close all dropdowns when clicking outside
 $(document).on("click", function () {
    $(".dropdown-menu").addClass("hidden");
  });

});
// -----------dropdown-menu-js-end-----------

// -----------dashboard-tab-js-start-----------
$(".tab-btn").on("click", function () {
    const targetTab = $(this).data("tab");

    // Remove active class from all buttons
    $(".tab-btn").removeClass("active");

    // Remove active class from all contents
    $(".tab-content").removeClass("active");

    // Add active class to clicked button
    $(this).addClass("active");

    // Show selected content
    $("#" + targetTab).addClass("active");
});
// -----------dashboard-tab-js-end-----------

// ------teable-empty-box-hideShow-js-start------
$(document).on("click", "#empty_state", function () {
    if ($(this).prop("checked")) {
        $(".table-box").addClass("hidden");
        $(".empty-box").removeClass("hidden").addClass("flex");
    } else {
        $(".table-box").removeClass("hidden");
        $(".empty-box").removeClass("flex").addClass("hidden");
    }
});
// ------teable-empty-box-hideShow-js-end------