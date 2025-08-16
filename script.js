document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById('menu-icon');
  const navContainer = document.querySelector('.nav-search-container');
  const darkToggle = document.getElementById('dark-toggle');
  const body = document.body;

 
  menuIcon.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
  });

  
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
      darkToggle.classList.replace('bx-moon', 'bx-sun');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      darkToggle.classList.replace('bx-sun', 'bx-moon');
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkToggle.classList.replace('bx-moon', 'bx-sun');
  }
});

  const chatBtn = document.getElementById("chatBtn");
  const chatPopup = document.getElementById("chatPopup");
  const closeChat = document.getElementById("closeChat");

  chatBtn.addEventListener("click", () => {
    chatPopup.style.display = chatPopup.style.display === "block" ? "none" : "block";
  });

  closeChat.addEventListener("click", () => {
    chatPopup.style.display = "none";
  });

  const notificationIcon = document.getElementById("notificationIcon");
const notificationDropdown = document.getElementById("notificationDropdown");

notificationIcon.addEventListener("click", () => {
  notificationDropdown.style.display = 
    notificationDropdown.style.display === "block" ? "none" : "block";
});


document.addEventListener("click", (event) => {
  if (!notificationIcon.contains(event.target) && 
      !notificationDropdown.contains(event.target)) {
    notificationDropdown.style.display = "none";
  }
});


window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function showSidebar(){
  document.querySelector('.sidebar').style.display = 'flex';
}
function hideSidebar(){
  document.querySelector('.sidebar').style.display = 'none';
}

document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('navMenu');

  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
  });
}); 

const fadeElements = document.querySelectorAll('.fade-up');

function revealOnScroll() {
  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


 var swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 3 },
      480: { slidesPerView: 2 },
      0: { slidesPerView: 1 }
    }
  });