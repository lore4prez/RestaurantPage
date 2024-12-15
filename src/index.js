import "./styles.css";
import {content, addHomeHeader, addDescrip, addOpenHours, addLocation, addFooter} from "./home.js";
import {addMenuHeader, addBreakfastMenu, addLunchMenu, addDinnerMenu, addBeverages, addDessertsMenu} from "./menu.js";
import {addAboutHeader, addContactInfo, addAboutContent} from "./about.js";
import sukunaShrine from "./images/evilshrine.jpg";
import sukuna from "./images/sukuna.jpeg";

// default, home page will be shown
content.classList.add("homepage");
content.style.backgroundImage = `url(${sukunaShrine})`;
content.style.backgroundSize = "100%";
content.style.backgroundRepeat = "no-repeat";
content.style.backgroundPosition = "center";
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

    content.style.backgroundImage = `url(${sukunaShrine})`;
    content.style.backgroundSize = "100%";
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundPosition = "center";
    content.style.backgroundColor = "rgb(104, 4, 4)";
    

    addHomeHeader();
    addDescrip();
    addOpenHours();
    addLocation();
    addFooter();
}

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", goToHome);

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
menuBtn.addEventListener("click", goToMenu);

// About Page
function goToAbout() {
    content.innerHTML = "";
    if (content.classList.contains("homepage"))
        content.classList.remove("homepage");
    if (content.classList.contains("menupage"))
        content.classList.remove("menupage");
    if (!content.classList.contains("aboutpage"))
        content.classList.add("aboutpage");

    content.style.backgroundImage = `url(${sukuna})`;
    content.style.backgroundSize = "100%";
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundPosition = "center";

    addAboutHeader();
    addAboutContent();
    addContactInfo();
    addFooter();
}

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", goToAbout);