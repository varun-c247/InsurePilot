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

// ----------mobile menu toggle----------

// -------FAQ JS------------
function toggleAccordion(btn) {
    const item = btn.closest('.accordetion-item');
    const body = item.querySelector('.accordition-body');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordetion-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.accordition-btn')?.classList.remove('active');
        el.querySelector('.accordition-body')?.classList.remove('active');
    });

    if (!isActive) {
        item.classList.add('active');
        btn.classList.add('active');
        body.classList.add('active');
    }
}
// -------FAQ JS------------    

//---------------------------video-js-start------------------------
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
});
//--------------------video-js-end-------------------------------

//---------------------counter-js-start------------------
document.querySelectorAll(".counter").forEach((counter) => {
    const countTo = parseInt(counter.getAttribute("data-count"), 10);
    const duration = 1000;
    const start = parseInt(counter.textContent, 10) || 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Linear easing
        const currentValue = Math.floor(start + (countTo - start) * progress);
        counter.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.textContent = countTo;
        }
    }

    requestAnimationFrame(update);
});
//-----------------counter-js-end-----------------

