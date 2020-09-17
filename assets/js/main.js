// clear preloader
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#preloader').classList.add('closed');
})


// image slider
let images = document.querySelectorAll('.slidein .slider img');
let lp = document.querySelector('.slidein');
let desc = document.querySelectorAll('.slidein .desc');
let index = 0,imgIndex = 1,img,url;
setInterval(()=>{
  clearClass("active");
  images[imgIndex].classList.add('active');
  img  = images[imgIndex].src.split('/');
  url = img[img.length - 1];
  // lp.style.background = `url('assets/images/bg/${url}') no-repeat`;
  (imgIndex == 2) ? imgIndex = 0 : imgIndex++
  desc[index].classList.add('hidden');
  if (index == 2) {
    index = 0
    desc[index].classList.remove('hidden');
  }else{
    desc[index+1].classList.remove('hidden');
    index++;}
},10000)



// change styles on mouse scroll
// let nav = document.querySelector('.header')
let links = document.querySelector('header .links')
// window.addEventListener('scroll',(evt)=>{
//   if(window.innerWidth > 640){
//   if(window.scrollY >= 50){
//     nav.style.padding = `0px`;
//     nav.style.boxShadow = `2px 2px 10px rgba(0,0,0,0.3)`;
//     links.style.visibility = 'hidden';
//     links.style.opacity = 0;
//   }else{
//     links.style.visibility = 'visible';
//     nav.style.boxShadow = `none`;
//     links.style.opacity = 1;
//     nav.style.padding = window.innerWidth <= 640 ? `0px`:  `20px`;
//   }
// }
// })




// toggle api_modal
let api_modal = document.querySelector('#api_modal');
let modalBtn = document.querySelector('#keys');
modalBtn.addEventListener('click',()=>{
  api_modal.classList.remove('hide');
})
api_modal.addEventListener('click',(e)=>{
  if(e.target.id == "api_modal")
    api_modal.classList.add('hide');
})




// copy Code
let text,text_id,copyBtn = document.querySelectorAll(".copy");

copyBtn.forEach((current)=>{
  current.addEventListener('click',()=>{
    text_id = current.getAttribute('data-id');
    text = document.querySelector(`#${text_id}`).innerText;
    window.copy(text);
  })
})


// slide menu
document.querySelector('.toggle-menu').addEventListener('click',()=>{
  links.classList.add('open');
})
document.querySelector('.toggle-close').addEventListener('click',()=>{
  links.classList.remove('open');
})


// functions
function clearClass(arg){
  images.forEach((e)=>{
    if(e.classList.contains(arg)){e.classList.remove(arg)}
  })
}
