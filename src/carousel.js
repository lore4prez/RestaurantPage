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

function makeMenuCarousel() {
    const container = document.createElement("div");
    const prevArrow = document.createElement("div");
    const nextArrow = document.createElement("div");
    const imagesDiv = document.createElement("div");

    container.classList.add("carousel-container");
    prevArrow.classList.add("prev-arrow");
    nextArrow.classList.add("next-arrow");
    imagesDiv.classList.add("images-container");

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
    ]
    const imagesList = [bdish1, bdish2, bdish3, ldish1, ldish2, ldish3, ddish1, ddish2, ddish3, drink1, drink2, drink3, dessert1, dessert2, dessert3];

    for (let i = 0; i < imagesList.length; i++) {
        const tempImage = document.createElement("img");
        tempImage.classList.add("image");
        tempImage.src = imagesList[i];
        tempImage.alt = foodList[i];
        imagesDiv.appendChild(tempImage);
    }

    container.appendChild(prevArrow);
    container.appendChild(imagesDiv);
    container.appendChild(nextArrow);
    
    return container;
}

export {makeMenuCarousel};