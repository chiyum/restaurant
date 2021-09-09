const menuBtn = document.querySelector('.button')

//選單
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
    $('.imgTaketurn').slick({//輪播
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
    $('#gototopId').click(function(e){//回到頂端
      e.preventDefault()
      $('html,body').animate({scrollTop:0},555)
    })
});

//載入動畫
document.onreadystatechange =function(){
  let loading = document.querySelector('.loading')
  if(document.readyState == 'complete'){
      loading.classList.add('active')
  }
}


//暫時
let chinese = document.querySelectorAll('.nav ul div a')
chinese[1].onclick = function(e){
    e.preventDefault()
    alert('建ています,まだ完成しません~')
}