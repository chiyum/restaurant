const menuBtn = document.querySelector('.button')


function menuClose(){
    let nav = document.querySelector('.nav')
    let main = document.querySelector('.main')
    // let head = document.querySelector('.header')
    nav.classList.toggle('active')
    main.classList.toggle('active')
    // head.classList.toggle('active')     
}

menuBtn.addEventListener('click',menuClose,false)


$(document).ready(function () {
    $('.imgTaketurn').slick({
      autoplay: true,
      // autoplaySpeed: 3000,
      dots:true,
      infinite:true,
      speed:300,
      slidesToshow:1,
      centerMode:true,
      variablewidth:true,
    })
});