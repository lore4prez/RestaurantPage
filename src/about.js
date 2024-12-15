import {content} from "./home.js";

function addAboutHeader() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h1");

    contentHeader.textContent = "About Us";
    contentDiv.appendChild(contentHeader);
    content.appendChild(contentDiv);
}

function addContactInfo() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h3");
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

export {addAboutHeader, addContactInfo};