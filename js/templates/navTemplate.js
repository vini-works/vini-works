function createNav() {
    let container = document.getElementById("nav__container");

    const homePath = document.createElement('a');
    const switcher = document.createElement('div');

    homePath.href = '/';
    homePath.textContent = 'Vinícius Queiróz';

    /*
    works.textContent = '[works]';
    if (window.location.pathname === '/' || window.location.pathname === `/index.html`) {
        works.href = "#project__container";
    }

    link2.href = '/';
    link2.textContent = '[about]';
    */

    switcher.innerHTML = `
    <div class="toggle-container">
        <input type="checkbox" id="themeToggle" class="ios-toggle">
        <label for="themeToggle" class="toggle-label"></label>
    </div>
`;

    container.appendChild(homePath);
    container.appendChild(switcher);

}

createNav();


let prevScrollPos = window.scrollY;
const navbar = document.querySelector("#nav__container");

navbar.style.transition = "top 0.3s"; // Add a transition for the top property


window.onscroll = function () {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0"; // Show the navbar when scrolling up
    } else {
        navbar.style.top = "-60px"; // Hide the navbar when scrolling down
    }

    prevScrollPos = currentScrollPos;
};