//smooth scroll - general scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//smooth scroll - when clicking on nav anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


//burger navbar appear on scroll - only if section 1 is not visible
const section1 = document.getElementById("section-1");
const burger = document.querySelector(".burger");
const homeLink = document.querySelector(".home-link");
const navBar = document.querySelector(".nav-links");

const videos = document.querySelectorAll('.video');

const observerBurger = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            burger.classList.add("hidden-burger");
            homeLink.style.display = "none";

            if (navBar.classList.contains("nav-active")) {
                burger.click();
            }
        } else {
            burger.classList.remove("hidden-burger");
            homeLink.style.display = "inline-block";
        }
    });
});

observerBurger.observe(section1);

//burger navlinks toggle - when burger is visible
const navSlide = () => {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".link");
        
    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        //burger animation
        nav.classList.toggle("nav-links-burger");
        burger.classList.toggle("toggle");
    });
}

navSlide();

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

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
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
        innerCursor.innerHTML = "View";
    });
    
    video.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow');
        outerCursor.classList.remove('grow');

        innerCursor.classList.add('shrink');
        outerCursor.classList.add('shrink');
        innerCursor.innerHTML = "";
    });
});

//logo events when mouseover
let logo = document.getElementById("logo");

logo.addEventListener("mouseover", () => {
    logo.setAttribute("src", "./src/img/Logo-hover.png");
});

logo.addEventListener("mouseleave", () => {
    logo.setAttribute("src", "./src/img/Logo.png");
});


//h1 animation
const myName = new SplitType("#my-name");

gsap.to(".char", {
   y: 0,
   stagger: 0.05,
   duration: .1 
});

//animation - section 3 project names
const projectNames = document.querySelectorAll(".prj-name");

const observerProjectNames = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-project-name");
        } else {
            entry.target.classList.remove("show-project-name");
        }
    });
});

projectNames.forEach((item) => {
    observerProjectNames.observe(item);
});


//animation - section 4 about me
const hiddenEducationItem = document.querySelectorAll(".hidden-education-item");

const observerEducationItem = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-education-item");
        } else {
            entry.target.classList.remove("show-education-item");
        }
    });
});

hiddenEducationItem.forEach((item) => {
    observerEducationItem.observe(item);
});


//animation - section 5 info box
const hiddenInfoBox = document.querySelector(".hidden-infoBox");

const observerInfoBox = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-infoBox");
        } else {
            entry.target.classList.remove("show-infoBox");
        }
    });
});

observerInfoBox.observe(hiddenInfoBox);