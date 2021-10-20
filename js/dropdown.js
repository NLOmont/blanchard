document.querySelectorAll('.header__dropdown-btn').forEach((item) => 
item.addEventListener('click',() => {
    const parent = item.parentNode;

    if (parent.classList.contains('header__dropdown-menu_active')) {
        parent.classList.remove('header__dropdown-menu_active');
    } else {
        document
            .querySelectorAll('.header__dropdown-menu')
            .forEach((child) => child.classList.remove('header__dropdown-menu_active'));
        parent.classList.add('header__dropdown-menu_active');
    }
}))