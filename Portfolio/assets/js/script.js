let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
sections.forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop-150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');
if(top >= offset && top < offset + height) {
navLinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

});
};
});
};
const messages = [
    "Empowering Innovation Through Technology",
    "Creative Strategies, Real Results",
    "Marketing That Moves the Needle",
  ];
  let i = 0;
  setInterval(() => {
    document.getElementById("headline").textContent = messages[i];
    i = (i + 1) % messages.length;
  }, 1800);
  
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
  };
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
      }
    });
  });
document.getElementById("year").textContent = new Date().getFullYear();
//EMAIL
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Avo_85XuV4cdyRgSj");
  
    const form = document.getElementById("contact-form");
    const alertBox = document.getElementById("alert-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alertBox.style.display = "none";
  
      emailjs.sendForm("service_kd7o1vj", "template_3b02pv7", this)
        .then(() => {
          alertBox.textContent = "Message sent successfully!";
          alertBox.className = "alert success";
          alertBox.style.display = "block";
          form.reset();
        })
        .catch((error) => {
          alertBox.textContent = "Failed to send. Please try again!";
          alertBox.className = "alert error";
          alertBox.style.display = "block";
          console.error("EmailJS Error:", error);
        });
    });
  });
  