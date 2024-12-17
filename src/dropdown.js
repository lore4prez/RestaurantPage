import {content} from "./home.js";
import {menuDisplay} from "./reset-display.js";

// Dynamically create a dropdown 
function addDropDown() {
    // Create the elements needed
    const dropdown = document.createElement("div");
    const selectDiv = document.createElement("div");
    const selectedDiv = document.createElement("div");
    const caretDiv = document.createElement("div");

    // Add classes to each element
    dropdown.classList.add("dropdown");
    selectDiv.classList.add("select");
    selectedDiv.classList.add("selected");
    caretDiv.classList.add("caret");

    // Append the select and caret divs to overall container select div
    selectDiv.appendChild(selectedDiv);
    selectDiv.appendChild(caretDiv);

    const dropdownList = document.createElement("ul");
    dropdownList.classList.add("dropdown-list");
    const menuItemsList = ["Full Menu", "Breakfast", "Lunch", "Dinner", "Beverages", "Desserts"];
    selectedDiv.textContent = menuItemsList[0];

    for (let i = 0; i < menuItemsList.length; i++) {
        const item = document.createElement("li");
        item.textContent = menuItemsList[i];
        dropdownList.appendChild(item);
    }

    dropdownList.firstChild.classList.add("active");

    dropdown.appendChild(selectDiv);
    dropdown.appendChild(dropdownList);

    return dropdown;
}

// add event listeners to the dropdown element and its child elements
function dropdownEventListener(dropdown) {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const dropdownList = dropdown.querySelector(".dropdown-list");
    const options = dropdown.querySelectorAll(".dropdown-list li");
    const selected = dropdown.querySelector(".selected");

    // Add a click event to the select element
    select.addEventListener("click", () => {
        // Add the clicked select styles to the select element
        select.classList.toggle("select-clicked");
        // Add the rotate styles to the caret element
        caret.classList.toggle("caret-rotate");
        // Add the open styles to the menu element
        dropdownList.classList.toggle("dropdown-list-open");
    });

    // Add a click event to all of the dropdown list elements
    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent;
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            dropdownList.classList.remove("dropdown-list-open");

            // Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove("active");
            });

            // Add active class to clicked option element
            option.classList.add("active");
        });
    });
}

function filterMenuPage(dropdown) {
    const options = dropdown.querySelectorAll(".dropdown-list li");
    const allMenuContent = document.querySelectorAll(".menucontent");
    const menupage = document.querySelector(".menupage");

    options.forEach(option => {
        option.addEventListener("click", () => {
            if (option.textContent !== "Full Menu") {
                const menucontent = findWhichMenuContent(option.textContent);
                const activeMenu = document.querySelector("." + menucontent);
                menupage.style.gridTemplateRows = "0.2fr 1fr 0.2fr";
                menupage.style.gridTemplateAreas = 
                `
                "header"
                "${menucontent}"
                "footer"
                `;
                allMenuContent.forEach(item => {
                    item.style.display = "none";
                });
                activeMenu.style.display = "grid";
            }
            else {
                menuDisplay(menupage, allMenuContent);
            }
        });
    });
    
}

function findWhichMenuContent(option) {
    const optionList = new Map();
    optionList.set("Breakfast", "menucontent1");
    optionList.set("Lunch", "menucontent2");
    optionList.set("Dinner", "menucontent3");
    optionList.set("Beverages", "menucontent4");
    optionList.set("Desserts", "menucontent5");

    return optionList.get(option);
}

export {addDropDown, dropdownEventListener, filterMenuPage};