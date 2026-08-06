// ----------header-Toggle-Menu----------
$(".hamburgerMenu").click(function(){
  $(this).toggleClass('active');
  $(".headerNav").toggleClass('show');
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

