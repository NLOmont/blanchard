window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.burger').addEventListener('click',function(){
      document.querySelector('.header__nav').classList.toggle('header__nav_active')
      document.querySelector('.burger').classList.toggle('burger_active')
    })
  })