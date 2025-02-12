/*=============== CHANGE BACKGROUND HEADER ===============*/
const header=document.getElementById("header")

function  changeHeader () {

  if (window.scrollY>=50) {
    header.classList.add("scroll-header")
  }else{
    header.classList.remove("scroll-header")
  }

}

window.addEventListener("scroll" , changeHeader)

/*=============== SERVICES MODAL ===============*/

const servicesModel=document.querySelectorAll(".services_model")
const servicesButton=document.querySelectorAll(".services_button")
const servicesModelClose =document.querySelectorAll(".services_model_close")
const overlay = document.querySelector(".overlay");

servicesButton.forEach((item,index)=>{
  item.addEventListener("click" , ()=>{
    servicesModel[index].classList.add("active-model")
    overlay.classList.add("active-model")
  })
})


servicesModelClose.forEach((item,index)=>{
  item.addEventListener("click" , ()=>{
    servicesModel[index].classList.remove("active-model")
    overlay.classList.remove("active-model")

  })
})


overlay.addEventListener("click" , ()=>{
  servicesModel.forEach(item =>{
    item.classList.remove("active-model")
  })
  overlay.classList.remove("active-model")
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
  selectors: {
      target: '.work_card'
  },
  animation: {
      duration: 300
  }
});

/* Link active work */ 
const workItems=document.querySelectorAll(".work_item")

function removeAction() {
  workItems.forEach(item =>{
    item.classList.remove("active-work")
  })
}

workItems.forEach(L =>{
  L.addEventListener("click" ,(eo)=>{
    removeAction()
    eo.target.classList.add("active-work")
    
  })
})


/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial_container", {
  spaceBetween:30,
  slidesPerView: 2,
  autoplay: {
    delay: 1800,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  loop: true,

  
  breakpoints: {
  
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },


});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav_item a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav_item a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 



const dayNight=document.querySelector(".change-theme")
const body = document.body;


if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");

  dayNight.classList.remove("bxs-sun")
  dayNight.classList.add("bx-moon")



}else{
  dayNight.classList.remove("bx-moon")
  dayNight.classList.add("bxs-sun")



}

dayNight.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
      localStorage.setItem("theme", "light");

      dayNight.classList.remove("bxs-sun")
      dayNight.classList.add("bx-moon")
  } else {
      localStorage.setItem("theme", "dark");
      
      dayNight.classList.remove("bx-moon")
      dayNight.classList.add("bxs-sun")
  }
});

