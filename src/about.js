import {content} from "./home.js";

function addAboutHeader() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h1");

    contentDiv.classList.add("header");
    contentHeader.textContent = "About Us";
    contentDiv.appendChild(contentHeader);
    content.appendChild(contentDiv);
}

function addAboutContent() {
    const contentDiv = document.createElement("div");
    const contentAboutUs = document.createElement("p");

    contentDiv.classList.add("content1");
    contentAboutUs.textContent = 
    `Welcome to Sukuna's Restaurant, where the flavors of the world collide in a dining experience unlike 
    any other. Inspired by the legendary King of Curses, Ryomen Sukuna, our restaurant offers an 
    unforgettable journey into the depths of culinary darkness. Every meal is an offering to the hungry 
    spirits of the cursed realm. Our culinary philosophy is rooted in bold flavors, unique ingredients, 
    and the powerful energy that flows through our food. Are you ready to embrace the curse?`;
    
    contentDiv.appendChild(contentAboutUs);
    content.appendChild(contentDiv);
}

function addContactInfo() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h3");

    contentDiv.classList.add("contact");
    contentHeader.textContent = "Contact Us";
    contentDiv.appendChild(contentHeader);

    const name = document.createElement("h4");
    const role = document.createElement("p");
    const phoneNum = document.createElement("p");
    const email = document.createElement("p");

    name.textContent = "Ryomen Sukuna";
    role.textContent = "Owner";
    phoneNum.textContent = "999-9999-9999";
    email.textContent = "sukunaistheking@gmail.com";

    contentDiv.appendChild(name);
    contentDiv.appendChild(role);
    contentDiv.appendChild(phoneNum);
    contentDiv.appendChild(email);

    content.appendChild(contentDiv);
}

export {addAboutHeader, addContactInfo, addAboutContent};