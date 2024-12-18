import {content} from "./home.js";

import bdish1 from "./images/food-menu/breakfast/sukuna_cursed_pancakes.png";
import bdish2 from "./images/food-menu/breakfast/megumi_shikigami_waffles.png";
import bdish3 from "./images/food-menu/breakfast/gojo_infinity_omelette.png";

import ldish1 from "./images/food-menu/lunch/sukuna_great_offering.png";
import ldish2 from "./images/food-menu/lunch/gojo_limitless_ramen.png";
import ldish3 from "./images/food-menu/lunch/shibuya_humans_splatter.png";

import ddish1 from "./images/food-menu/dinner/sukuna_midnight_banquet.png";
import ddish2 from "./images/food-menu/dinner/mahito_spirit_feast.png";
import ddish3 from "./images/food-menu/dinner/jogo_lava_stew.png";

import drink1 from "./images/food-menu/beverages/nanami_beach_smoothie.png";
import drink2 from "./images/food-menu/beverages/hanami_sakura_lemonade.png";
import drink3 from "./images/food-menu/beverages/toge_frizzy_drink.png";

import dessert1 from "./images/food-menu/desserts/brothers_special.png";
import dessert2 from "./images/food-menu/desserts/shoko_shortcake.png";
import dessert3 from "./images/food-menu/desserts/rika_truffles_ring.png";

const foodList = 
    [
        "Sukuna's Cursed Pancakes", 
        "Megumi's Shikigami Waffles", 
        "Gojo's Infinity Omelette",
        "Sukuna's Great Offering", 
        "Gojo's Limitless Ramen", 
        "Shibuya Humans Splatter: Cursed Transformation",
        "Sukuna's Midnight Banquet", 
        "Mahito's Cursed Spirit Feast", 
        "Jogo's Lava Stew", 
        "Nanami's Vacation: Beach Smoothie", 
        "Hanami's Bloom: Sakura Lemonade", 
        "Toge's Frizzy Drink: Sparkling", 
        "The Brothers: Jennifer Lawrence Jumbo Special", 
        "Shoko's Specialty: Healing Strawberry Shortcake", 
        "Rika's Love: Truffles Ring"
    ];

const imagesList = [bdish1, bdish2, bdish3, ldish1, ldish2, ldish3, ddish1, ddish2, ddish3, drink1, drink2, drink3, dessert1, dessert2, dessert3];

function makeMenuCarousel() {
    const container = document.createElement("div");
    const miniContainer1 = document.createElement("div");
    const miniContainer2 = document.createElement("div");
    const prevArrow = document.createElement("div");
    const nextArrow = document.createElement("div");
    const imagesDiv = document.createElement("div");

    container.style.gridArea = "carousel";
    container.classList.add("carousel-container");
    miniContainer1.classList.add("mini-container1");
    miniContainer2.classList.add("mini-container2");
    prevArrow.classList.add("prev-arrow");
    nextArrow.classList.add("next-arrow");
    imagesDiv.classList.add("images-container");

    for (let i = 0; i < 3; i++) {
        const tempImage = document.createElement("img");
        tempImage.classList.add("image");
        // Get the very last dish first then the next two 
        tempImage.src = imagesList[(i - 1 + imagesList.length) % imagesList.length];
        tempImage.alt = foodList[(i - 1 + imagesList.length) % imagesList.length];
        imagesDiv.appendChild(tempImage);
    }

    miniContainer1.appendChild(prevArrow);
    miniContainer1.appendChild(imagesDiv);
    miniContainer1.appendChild(nextArrow);
    container.appendChild(miniContainer1);

    for (let i = 0; i < imagesList.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("carousel-dot");
        dot.setAttribute("index", i);
        miniContainer2.appendChild(dot);
    }

    container.appendChild(miniContainer2);
    
    return container;
}



function updateCarousel() {
    const image1 = document.querySelector(".images-container > img:first-child");
    const image2 = document.querySelector(".images-container > img:nth-child(2)");
    const image3 = document.querySelector(".images-container > img:nth-child(3)");

    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");

    const dotList = document.querySelectorAll(".carousel-dot");
    dotList[0].classList.add("active");

    let index = 0;

    function goNextSlide() {
        index = (index + 1) % imagesList.length; // So index doesnt go too far out of bounds
    
        image1.src = imagesList[(index - 1 + imagesList.length) % imagesList.length];
        image1.alt = foodList[(index - 1 + imagesList.length) % imagesList.length];
        image2.src = imagesList[(index + imagesList.length) % imagesList.length];
        image2.alt = foodList[(index + imagesList.length) % imagesList.length];
        image3.src = imagesList[(index + 1 + imagesList.length) % imagesList.length];
        image3.alt = foodList[(index + 1 + imagesList.length) % imagesList.length];
        
        dotList.forEach(item => {
            item.classList.remove("active")
        });
        dotList[index % imagesList.length].classList.add("active");
    }

    setInterval(goNextSlide, 3000);

    nextArrow.addEventListener("click", goNextSlide);

    prevArrow.addEventListener("click", () => {
        index = (index - 1 + imagesList.length) % imagesList.length; // So index doesnt go too far out of bounds

        image1.src = imagesList[(index - 1 + imagesList.length) % imagesList.length];
        image1.alt = foodList[(index - 1 + imagesList.length) % imagesList.length];
        image2.src = imagesList[(index + imagesList.length) % imagesList.length];
        image2.alt = foodList[(index + imagesList.length) % imagesList.length];
        image3.src = imagesList[(index + 1 + imagesList.length) % imagesList.length];
        image3.alt = foodList[(index + 1 + imagesList.length) % imagesList.length];
        
        dotList.forEach(item => {
            item.classList.remove("active")
        });
        dotList[(index + imagesList.length) % imagesList.length].classList.add("active");
    
    });

    dotList.forEach(dot => {
        dot.addEventListener("click", () => {
            index = parseInt(dot.getAttribute("index"));
            dotList.forEach(item => {
                item.classList.remove("active")
            });
            dotList[index].classList.add("active");

            image1.src = imagesList[index % imagesList.length];
            image1.alt = foodList[index % imagesList.length];
            image2.src = imagesList[(index + 1) % imagesList.length];
            image2.alt = foodList[(index + 1) % imagesList.length];
            image3.src = imagesList[(index + 2) % imagesList.length];
            image3.alt = foodList[(index + 2) % imagesList.length];
        })
    });
}

export {makeMenuCarousel, updateCarousel};