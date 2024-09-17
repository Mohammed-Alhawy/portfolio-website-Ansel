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


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

