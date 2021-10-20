window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#search').addEventListener('click',function(){
      document.querySelector('#search').value = "";
    })
    document.querySelector('.header__search-btn-close').addEventListener('click',function(){
      document.querySelector('.header__search').classList.toggle('search_active')
    })
  })

  var mediaQuery = window.matchMedia("(max-width: 1024px)");
media(mediaQuery);

function media(mq) {
    document.querySelector('.header__search-btn').addEventListener('click',function(){
    document.querySelector('.header__search').classList.toggle('search_active')
    document.querySelector('#search').value = "";
  })
}

