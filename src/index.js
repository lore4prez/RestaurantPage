import "./styles.css";
import {content, addHomeHeader, addDescrip, addOpenHours, addLocation} from "./home.js";
import {addMenuHeader, addBreakfastMenu, addLunchMenu, addDinnerMenu, addBeverages, addDessertsMenu} from "./menu.js";
import {addAboutHeader, addContactInfo} from "./about.js";


// default, home page will be shown
addHomeHeader();
addDescrip();
addOpenHours();
addLocation();

// Tab switching logic
// Home Page
// const content = document.querySelector("#content");

function goToHome() {
    content.innerHTML = "";
    addHomeHeader();
    addDescrip();
    addOpenHours();
    addLocation();
}

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", goToHome);

// Menu Page
function goToMenu() {
    content.innerHTML = "";
    addMenuHeader();
    addBreakfastMenu();
    addLunchMenu();
    addDinnerMenu();
    addBeverages();
    addDessertsMenu();
}

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", goToMenu);

// About Page
function goToAbout() {
    content.innerHTML = "";
    addAboutHeader();
    addContactInfo();
}

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", goToAbout);