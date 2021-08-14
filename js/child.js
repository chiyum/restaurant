
let main = document.querySelector('.main');//主畫面
let nav = document.querySelector('.nav')//左邊選單
let buttonMenu = document.querySelector('.button')//選單按鈕

function navOpen(e){

    nav.classList.toggle('active')
    main.classList.toggle('active')
}

buttonMenu.addEventListener('click',navOpen)//監聽按鈕

//選單結束


// 回到頂端
$(document).ready(function () {
    
    $('.gotopClass').click(function(){
        $('html,body').animate({scrollTop:0},555);
    })
    

});