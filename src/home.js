const content = document.querySelector("#content");

function addHomeHeader() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h1");

    contentHeader.textContent = "Welcome to Sukuna's Malevolent Shrine";
    contentDiv.appendChild(contentHeader);
    content.appendChild(contentDiv);
}

function addDescrip() {
    const contentDiv = document.createElement("div");
    const contentDescript = document.createElement("p");

    contentDescript.textContent =   `Step into Sukuna's domain expansion where bold flavors, intricate techniques, and a touch of cursed energy collide. 
                                    Sukuna's Restaurant offers a one-of-a-kind sorcerer dining experience that celebrates ancient jujutsu traditions.
                                    Inspired by the fierce spirit of Ryomen Sukuna himself, the King of Curses, our restaurant with roots tracing back thousands of years, is where 
                                    tradition meets timeless flavor. Whether you're here for a quick bite or an indulgent feast, Sukuna offers an inviting atmosphere to both cursed users, spirits, and 
                                    jujutsu sorcerers. Our friendly, attentive staff ensures that your dining experience is nothing short of exceptional, making you 
                                    feel like a guest of honor in this culinary sanctuary.`

    contentDiv.appendChild(contentDescript);
    content.appendChild(contentDiv);
}

function addOpenHours() {
    const contentDiv = document.createElement("div");
    
    const contentHoursHeader = document.createElement("h3");
    contentHoursHeader.textContent = "Hours";

    const list = document.createElement("ul");
    list.style.listStyleType = "none";

    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const weekHours = ["8am - 8pm", "6am - 6pm", "6am - 6pm", "6am - 6pm", "6am - 6pm", "closed", "closed"];

    for (let i = 0; i < 7; i++) {
        const day = document.createElement("li");
        day.textContent = week[i] + ": " + weekHours[i];
        list.appendChild(day);
    }

    contentDiv.appendChild(contentHoursHeader);
    contentDiv.appendChild(list);
    content.appendChild(contentDiv);
}

function addLocation() {
    const contentDiv = document.createElement("div");
    const contentLocHeader = document.createElement("h3");
    const contentLoc = document.createElement("p");

    contentLocHeader.textContent = "Location";
    contentLoc.textContent = "2-180 Hon-machi, Furukawa-cho, Hida city, Gifu prefecture, 567-0888";

    contentDiv.appendChild(contentLocHeader);
    contentDiv.appendChild(contentLoc);
    content.appendChild(contentDiv);
}



export {addHomeHeader, addDescrip, addOpenHours, addLocation};