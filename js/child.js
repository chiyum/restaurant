
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

let yakiImg = document.querySelector('#yakiImgId').onclick = function(){
    
}
let yakiId =document.querySelector('#yakiId')
let iceid =document.querySelector('#iceId')
let riceId =document.querySelector('#riceId')
let noodleId =document.querySelector('#noodleId') 
let list =document.querySelector('.list')

// list.innerHTML = `<img src="${imgChange.yaki}" alt="">`
function update(e){
    e.preventDefault()
}

