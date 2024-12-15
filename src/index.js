import "./styles.css";
import {addContentHeader, addDescrip, addOpenHours, addLocation} from "./home.js";

// default, home page will be shown
addContentHeader();
addDescrip();
addOpenHours();
addLocation();

// Tab switching logic
// Home Page
const content = document.querySelector("#content");

function goToHome() {
    content.innerHTML = "";
    addContentHeader();
    addDescrip();
    addOpenHours();
    addLocation();
}

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", goToHome);

// Menu Page
function goToMenu() {
    content.innerHTML = "";
}

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", goToMenu);