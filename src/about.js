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
    contentHeader.classList.add("contactHeader");
    contentDiv.appendChild(contentHeader);

    const nameList = ["Ryomen Sukuna", "Ryomen Uraume"];
    const roleList = ["Owner", "Head Chef"];
    const phoneNumList = ["+9(999)9999-9999", "+1(111)1111-1111"];
    const emailList = ["sukunaistheking@gmail.com", "ilovesukuna<3@gmail.com"];

    for (let i = 0; i < nameList.length; i++) {
        const contactDiv = document.createElement("div");
        const name = document.createElement("h4");
        const role = document.createElement("p");
        const phoneNum = document.createElement("p");
        const email = document.createElement("p");

        name.textContent = nameList[i];
        role.textContent = roleList[i];
        phoneNum.textContent = phoneNumList[i];
        email.textContent = emailList[i];
        role.style.fontSize = "20px";
        role.style.fontStyle = "italic";

        contactDiv.appendChild(name);
        contactDiv.appendChild(role);
        contactDiv.appendChild(phoneNum);
        contactDiv.appendChild(email);
        contactDiv.classList.add("contact" + (i+1));
        contentDiv.appendChild(contactDiv);
    }
    content.appendChild(contentDiv);
}

export {addAboutHeader, addContactInfo, addAboutContent};