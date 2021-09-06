window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-catalog__country-btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const country = event.currentTarget.dataset.country
            document.querySelectorAll('.section-catalog__content').forEach(function(tabContent) {
                tabContent.classList.remove('section-catalog__content_active')
            })
            document.querySelector(`[data-target="${country}"]`).classList.add('section-catalog__content_active')
            
            document.querySelectorAll('.section-catalog__country-btn').forEach(
                (child) => child.classList.remove('section-catalog__country-btn_active')
            )
            tabsBtn.classList.add('section-catalog__country-btn_active')
        })
    })
})


window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-catalog__people-btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const person = event.currentTarget.dataset.person
            document.querySelectorAll('.section-catalog__person').forEach(function(tabContent) {
                tabContent.classList.remove('section-catalog__person_active')              
            })     
            document.querySelector(`[data-target="${person}"]`).classList.add('section-catalog__person_active')

            document.querySelectorAll('.section-catalog__people-btn').forEach(
                (child) => child.classList.remove('section-catalog__people-btn_active')
            )
            tabsBtn.classList.add('section-catalog__people-btn_active')
        })
    })
})

mediaMobile = window.matchMedia('(max-width: 500px)');

function peopleLinksMobile() {
    if (mediaMobile.matches) {
        document.querySelectorAll('.section-catalog__people-btn').forEach(function(person) {
                person.setAttribute("href", "#person")
        });
    }
}

mediaMobile.addListener(peopleLinksMobile);
peopleLinksMobile(mediaMobile);
