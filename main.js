//burger navbar appear on scroll - only if section 1 is not visible
const section1 = document.getElementById("section-1");
const burger = document.querySelector(".burger");

const videos = document.querySelectorAll('.video');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            burger.classList.add("hidden-burger");
        } else {
            burger.classList.remove("hidden-burger");
        }
    });
});

observer.observe(section1);

//play project videos on load
function playVideos() {
    videos.forEach(video => {
        video.play();
    });
}

playVideos();


//cursor styling - general
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
let cursorText = document.querySelector('.cursor-text');

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
    cursorText.style.left = `${x}px`;
    cursorText.style.top = `${y}px`;
}

document.addEventListener('mousemove', moveCursor);

//cursor events when mouse over videos
let videoWrappers = document.querySelectorAll(".project-video");

videoWrappers.forEach(video => {
    video.addEventListener('mouseover', () => {
        innerCursor.classList.add('grow');
        outerCursor.classList.add('grow');

        innerCursor.classList.remove('shrink');
        outerCursor.classList.remove('shrink');
    });
    
    video.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow');
        outerCursor.classList.remove('grow');

        innerCursor.classList.add('shrink');
        outerCursor.classList.add('shrink');
    });
});

// const observerCursor = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//             cursorText.classList.remove("hidden-cursor-text");
//         } else {
//             cursorText.classList.add("hidden-cursor-text");
//         }
//     });
// });

// videos.forEach(video => {
//     observerCursor.observe(video);
// });


//logo events when mouseover
let logo = document.getElementById("logo");

logo.addEventListener("mouseover", () => {
    logo.setAttribute("src", "./src/img/Logo-hover.png");
});

logo.addEventListener("mouseleave", () => {
    logo.setAttribute("src", "./src/img/Logo.png");
});