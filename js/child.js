
let main = document.querySelector('.main');//主畫面
let nav = document.querySelector('.nav')//左邊選單
let buttonMenu = document.querySelector('.button')//選單按鈕
function navOpen(e){
    document.body.classList.toggle('active')
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

//載入動畫

document.onreadystatechange =function(){
    let loading = document.querySelector('.loading')
    if(document.readyState == 'complete'){
        loading.classList.add('active')
    }
  }

//menu切換

const imgChange = {
    yaki:'../img/yakiMenu.png',
    ice:'../img/iceMenu.png',
    rice:'../img/riceMenu.png',
    noodle:'../img/menMenu.png',
}

//暫時
let chinese = document.querySelectorAll('.nav ul div a')
chinese[1].onclick = function(e){
    e.preventDefault()
    alert('建ています,まだ完成しません~')
}