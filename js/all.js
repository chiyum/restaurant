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
      // dots:true,
      infinite:true,
      speed:700,
      slidesToshow:1,
      // centerMode:true,
      // variablewidth:true,
      prevArrow: "<button type='button' class='slick-prev slick-arrow slickBtn''></button>",
         nextArrow: "<button type='button' class='slick-next slick-arrow slickBtn''></button>",
    })
    $('#gototopId').click(function(e){
      e.preventDefault()
      $('html,body').animate({scrollTop:0},555)
    })
    console.log(document.querySelector('#gototop'))
});

//載入動畫
// document.onreadystatechange =function(){
//   let loading = document.querySelector('.planet')
//   if(document.readyState == 'complete'){
//       loading.classList.add('active')
//   }
// }