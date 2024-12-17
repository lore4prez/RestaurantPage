import "./styles.css";
import "./dropdown.css";
import {content, addHomeHeader, addDescrip, addOpenHours, addLocation, addFooter} from "./home.js";
import {addMenuHeader, addBreakfastMenu, addLunchMenu, addDinnerMenu, addBeverages, addDessertsMenu, addDropDown} from "./menu.js";
import {addAboutHeader, addContactInfo, addAboutContent} from "./about.js";
import sukunaShrine from "./images/evilshrine.jpg";
import sukuna from "./images/sukuna.jpeg";

// default, home page will be shown
content.classList.add("homepage");
if (!(window.innerWidth <= 768)) {
    content.style.backgroundImage = `url(${sukunaShrine})`;
    content.style.backgroundSize = "100%";
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundPosition = "center";
}
else {
    content.style.backgroundImage = "none";
}
addHomeHeader();
addDescrip();
addOpenHours();
addLocation();
addFooter();

// Tab switching logic
// Home Page
// const content = document.querySelector("#content");

function goToHome() {
    content.innerHTML = "";
    if (content.classList.contains("aboutpage"))
        content.classList.remove("aboutpage");
    if (content.classList.contains("menupage"))
        content.classList.remove("menupage");
    if (!content.classList.contains("homepage"))
        content.classList.add("homepage");
    
    if (!(window.innerWidth <= 768)) {
        content.style.backgroundImage = `url(${sukunaShrine})`;
        content.style.backgroundSize = "100%";
        content.style.backgroundRepeat = "no-repeat";
        content.style.backgroundPosition = "center";
    }
    else {
        content.style.backgroundImage = "none";
    }
    

    addHomeHeader();
    addDescrip();
    addOpenHours();
    addLocation();
    addFooter();
}

const homeBtn = document.querySelector(".home");
const homeBtn2 = document.querySelector(".home2");
homeBtn.addEventListener("click", goToHome);
homeBtn2.addEventListener("click", goToHome);

// Menu Page
function goToMenu() {
    content.innerHTML = "";
    if (content.classList.contains("aboutpage"))
        content.classList.remove("aboutpage");
    if (content.classList.contains("homepage"))
        content.classList.remove("homepage");
    if (!content.classList.contains("menupage"))
        content.classList.add("menupage");

    content.style.backgroundImage = "none";

    addMenuHeader();
    addBreakfastMenu();
    addLunchMenu();
    addDinnerMenu();
    addBeverages();
    addDessertsMenu();
    addFooter();
}

const menuBtn = document.querySelector(".menu");
const menuBtn2 = document.querySelector(".menu2");
menuBtn.addEventListener("click", goToMenu);
menuBtn2.addEventListener("click", goToMenu);

// About Page
function goToAbout() {
    content.innerHTML = "";
    if (content.classList.contains("homepage"))
        content.classList.remove("homepage");
    if (content.classList.contains("menupage"))
        content.classList.remove("menupage");
    if (!content.classList.contains("aboutpage"))
        content.classList.add("aboutpage");

    if (!(window.innerWidth <= 768)) {
        content.style.backgroundImage = `url(${sukuna})`;
        content.style.backgroundSize = "100%";
        content.style.backgroundRepeat = "no-repeat";
        content.style.backgroundPosition = "center";
    }
    else {
        content.style.backgroundImage = "none";
    }

    addAboutHeader();
    addAboutContent();
    addContactInfo();
    addFooter();
}

const aboutBtn = document.querySelector(".about");
const aboutBtn2 = document.querySelector(".about2");
aboutBtn.addEventListener("click", goToAbout);
aboutBtn2.addEventListener("click", goToAbout);


const hamburgerBtn = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".close-btn");
const sideMenuButtons = sideMenu.querySelectorAll('button');

sideMenu.style.left = '-250px'

// Side menu transitions to the right
hamburgerBtn.addEventListener("click", () => {
    if (sideMenu.style.left === '-250px') {
        sideMenu.style.left = "0";
    }
    else {
        sideMenu.style.left = '-250px';
    }
});

// Close menu when a button is clicked
sideMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        sideMenu.style.left = '-250px'; 
    });
});

// Slide the menu out of view
closeBtn.addEventListener('click', () => {
    sideMenu.style.left = '-250px'; 
});



// dropdown 
document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector(".select");
    select.addEventListener("click", () => {
        alert("select is clicked");
    })
})

