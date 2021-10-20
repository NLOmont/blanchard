window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-events__btn').forEach(function (eventBtn) {
        eventBtn.addEventListener('click', function() {
            document.querySelectorAll('.section-events__item').forEach(function(eventContent) {
                eventContent.style.display = "block";
            })

            eventBtn.classList.add('section-events__item_hide');
        })
    })
})