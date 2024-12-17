// Dynamically create a dropdown 
function addDropDown() {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    const selectDiv = document.createElement("div");
    selectDiv.classList.add("select");
    const selectedDiv = document.createElement("div");
    selectedDiv.classList.add("selected");
    const caretDiv = document.createElement("div");
    caretDiv.classList.add("caret");

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

export {addDropDown, dropdownEventListener};