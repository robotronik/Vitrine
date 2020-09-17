var $navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));

$navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
        toggleBurger(el);
        console.log(el);
    });
});

function toggleBurger(burger) {
    const $target = document.getElementById(burger.dataset.target);
    burger.classList.toggle('is-active');
    $target.classList.toggle('is-active');
}