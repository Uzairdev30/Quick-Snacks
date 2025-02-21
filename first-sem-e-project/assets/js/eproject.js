let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}
function abc() {
    let x = document.getElementById("demo");
    x.style.fontSize = "25px";
    x.style.color = "red";
}
function myFunction2() {
    alert("Added to see later");
}

function myFunction() {
    alert("Added to favourites");
}
function myFunction3() {
    alert("your message is sent we will reply soon");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,

});

const rate=document.querySelector('.rate')
const rts=document.querySelector('.rate-section')
const items=document.querySelectorAll('.item')
const submit=document.querySelector('.submit')
const successPopup=document.querySelector('.success-popup')
rate.addEventListener('click',()=>{
    if(rts.className==="rate-section"){
        rts.classList.add('rate-section-slide')
    }
    else{
        rts.classList.remove('rate-section-slide')  
    }
})

items.forEach(item=>{
    item.addEventListener('click',()=>{
        items.forEach(item=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

submit.addEventListener('click',()=>{
    successPopup.classList.add('success-popup-slide')
})



