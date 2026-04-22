"use strict"

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");
    navToggle.classList.toggle("rotate");
})

const aboutSection = document.querySelector('.about-section');

window.addEventListener('scroll', () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add('show');
  }
});

document.querySelector('.about-btn').addEventListener('click', function(e) {
  const target = document.querySelector(this.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

const skillsSection = document.querySelector('.skills-section');
const progresses = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    progresses.forEach(progress => {
      progress.style.width = progress.getAttribute('data-width');
    });
  }
});

function openInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: href,
  }).click();
}

const timeline = document.getElementById("timeline");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

leftBtn.addEventListener("click", () => {
  timeline.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  timeline.scrollBy({ left: 300, behavior: "smooth" });
});

const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    await fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: formData
    });

    popup.classList.add("active"); // 🔥 show popup
    form.reset();

  } catch (error) {
    alert("Something went wrong.");
  }
});

/* Close popup */
function closePopup() {
  popup.classList.remove("active");
}