function homeDisplay(page) {
    page.style.gridTemplateRows = "0.5fr 1fr 1fr 0.5fr 0.1fr";
    page.style.gridTemplateAreas = 
    `
    "header"
    "content1"
    "content2"
    "content3"
    "footer"
    `;
}

function menuDisplay(page, allContent) {
    page.style.gridTemplateRows = "0.2fr 1fr 1fr 1fr 1fr 1fr 0.2fr";
    page.style.gridTemplateAreas = 
    `
    "header"
    "menucontent1"
    "menucontent2"
    "menucontent3"
    "menucontent4"
    "menucontent5"
    "footer"
    `;
    allContent.forEach(item => {
        item.style.display = "grid";
    });
}

function aboutDisplay(page) {
    page.style.gridTemplateRows = "0.5fr 1fr 2fr 0.1fr";
    page.style.gridTemplateAreas = 
    `
    "header"
    "content1"
    "contact"
    "footer"
    `;
}

export {homeDisplay, menuDisplay, aboutDisplay};