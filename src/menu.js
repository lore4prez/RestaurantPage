import {content} from "./home.js";

function addMenuHeader() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h1");

    contentDiv.classList.add("header");
    contentHeader.textContent = "Menu";
    contentDiv.appendChild(contentHeader);
    content.appendChild(contentDiv);
}

function addBreakfastMenu() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h3");

    contentDiv.classList.add("menucontent1");
    contentHeader.textContent = "Breakfast Menu";
    contentHeader.classList.add("miniheader");
    contentDiv.appendChild(contentHeader); 

    const foodNameList = ["Sukuna's Cursed Pancakes", "Megumi's Shikigami Waflles", "Gojo's Infinity Omelette"];
    const foodPriceList = ["$7.50", "$5.50", "$9.50"];
    
    const foodInfoList = 
    [   
        `A stack of fluffy, golden-brown pancakes layered with rich, dark chocolate syrup, symbolizing Sukuna's cursed energy. The pancakes are topped with crispy bacon strips`,
        `A crisp and golden waffle topped with a variety of fresh fruits. The waffles are shaped like his shikigami. On top of the fruits, there is a drizzle of honey or maple syrup for sweetness.`,
        `A fluffy, perfectly folded omelette filled with a mix of savory ingredients like spinach, feta, mushrooms, and a blend of cheeses. It is accompanied by a side of crispy toast. `
    ]
    const foodTaglineList = 
    [
        `A meal fit for the King of Curses himself. Only the brave dare take on Sukuna’s cursed pancakes`,
        `A perfect balance of sweetness and nutrition. Megumi waffles bring forth the power of his shikigami`,
        `Boundless and perfect. Gojo's Infinity Omelette is a meal that transcends all limitations`
    ]
    for (let i = 0; i < 3; i++) {
        const foodDiv = document.createElement("div");
        const foodName = document.createElement("h4");
        const foodInfo = document.createElement("p");
        const foodPrice = document.createElement("p");
        const foodTagline = document.createElement("p");

        foodName.textContent = foodNameList[i];
        foodInfo.textContent = foodInfoList[i];
        foodPrice.textContent = foodPriceList[i];
        foodTagline.textContent = foodTaglineList[i];
        foodTagline.style.fontStyle = "italic";
        foodTagline.style.fontSize = "20px";

        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodInfo);
        foodDiv.appendChild(foodPrice);
        foodDiv.appendChild(foodTagline);
        foodDiv.classList.add("dish" + (i+1));
        contentDiv.appendChild(foodDiv);
    }
    content.appendChild(contentDiv);
}

function addLunchMenu() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h3");

    contentDiv.classList.add("menucontent2");
    contentHeader.textContent = "Lunch Menu";
    contentHeader.classList.add("miniheader");
    contentDiv.appendChild(contentHeader);

    const foodNameList = ["Sukuna's Great Offering", "Gojo's Limitless Ramen", "Shibuya Humans Splatter: Cursed Transformation"];
    const foodPriceList = ["$14.50", "$16.50", "12.50"];

    const foodInfoList = 
    [   
        `A decadent meal that includes a slow-braised short ribs or lamb shank cooked in a spicy, dark red wine reduction, paired with a luxurious truffle-infused mashed potato or buttery polenta`,
        `A bowl of rich, creamy miso ramen with an infinite amount of toppings. The broth is rich, silky, and deeply flavorful`,
        `A dark, bloody red curry made with spices and vegetables that blend to create a bold, spicy, and flavorful dish, slowly braised until tender and shredded. The dish is served with a "blood-red" sauce made from a combination of tomato, chili, and beetroot`
    ];

    const foodTaglineList = 
    [
        `A feast worthy of the King of Curses`,
        `unlimited toppings result limitless possibilities`,
        `Experience the intense transformation with every bite`
    ];

    for (let i = 0; i < 3; i++) {
        const foodDiv = document.createElement("div");
        const foodName = document.createElement("h4");
        const foodInfo = document.createElement("p");
        const foodPrice = document.createElement("p");
        const foodTagline = document.createElement("p");

        foodName.textContent = foodNameList[i];
        foodInfo.textContent = foodInfoList[i];
        foodPrice.textContent = foodPriceList[i];
        foodTagline.textContent = foodTaglineList[i];
        foodTagline.style.fontStyle = "italic";
        foodTagline.style.fontSize = "20px";

        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodInfo);
        foodDiv.appendChild(foodPrice);
        foodDiv.appendChild(foodTagline);
        foodDiv.classList.add("dish" + (i+1));
        contentDiv.appendChild(foodDiv);
    }
    content.appendChild(contentDiv);
}

function addDinnerMenu() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h3");

    contentDiv.classList.add("menucontent3");
    contentHeader.textContent = "Dinner Menu";
    contentHeader.classList.add("miniheader");
    contentDiv.appendChild(contentHeader);

    const foodNameList = ["Sukuna's Midnight Banquet", "Mahito's Cursed Spirit Feast", "Jogo's Lava Stew"];
    const foodPriceList = ["$15.50", "$14.50", "$19.50"];

    const foodInfoList = 
    [   
        `A slow-cooked Wagyu beef or bone-in lamb shank, with Black garlic mashed potatoes, and a drizzle of black truffle oil  `,
        `An innovative dish that feature ever-changing elements, where diners can transform or customize their own cursed creation`,
        `A spicy stew that combines smoldering heat and fiery intensity. Dish includes spicy braised short ribs, Chili peppers, tomatoes, and a blend of smoked paprika, cumin, and coriander, and Sautéed onions and roasted garlic`
    ];

    const foodTaglineList = 
    [
        `Satisfy your hunger for power and luxury`,
        `A dish that transforms before your eyes`,
        `A meal forged in the deep depths of a volcano`
    ];

    for (let i = 0; i < 3; i++) {
        const foodDiv = document.createElement("div");
        const foodName = document.createElement("h4");
        const foodInfo = document.createElement("p");
        const foodPrice = document.createElement("p");
        const foodTagline = document.createElement("p");

        foodName.textContent = foodNameList[i];
        foodInfo.textContent = foodInfoList[i];
        foodPrice.textContent = foodPriceList[i];
        foodTagline.textContent = foodTaglineList[i];
        foodTagline.style.fontStyle = "italic";
        foodTagline.style.fontSize = "20px";

        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodInfo);
        foodDiv.appendChild(foodPrice);
        foodDiv.appendChild(foodTagline);
        foodDiv.classList.add("dish" + (i+1));
        contentDiv.appendChild(foodDiv);
    }
    content.appendChild(contentDiv);
}

function addBeverages() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h3");

    contentDiv.classList.add("menucontent4");
    contentHeader.textContent = "Beverages";
    contentHeader.classList.add("miniheader");
    contentDiv.appendChild(contentHeader);

    const foodNameList = ["Nanami's Vacation: Beach Smoothie", "Hanami's Bloom: Sakura Lemonade", "Toge's Frizzy Drink: Sparkling"];
    const foodPriceList = ["$8.50", "$10.50", "$5.50"];

    const foodInfoList = 
    [   
        `This smoothie is the ultimate vacation escape. It’s cool, refreshing, and balanced. `,
        `The sakura rose lemonade blends floral flavors with a refreshing tartness`,
        `A soda drink with blue raspberry syrup that fizzles and pops in your mouth. `
    ];

    const foodTaglineList = 
    [
        `Take a break from the hustle and unwind with this creamy, cool smoothie—because even the hardest workers deserve a moment of peace. Unfortunate that Nanami could not go on his vacation.`,
        `A drink as beautiful and dangerous as Hanami’s cursed power`,
        `Dangerously refreshing!`
    ];

    for (let i = 0; i < 3; i++) {
        const foodDiv = document.createElement("div");
        const foodName = document.createElement("h4");
        const foodInfo = document.createElement("p");
        const foodPrice = document.createElement("p");
        const foodTagline = document.createElement("p");

        foodName.textContent = foodNameList[i];
        foodInfo.textContent = foodInfoList[i];
        foodPrice.textContent = foodPriceList[i];
        foodTagline.textContent = foodTaglineList[i];
        foodTagline.style.fontStyle = "italic";
        foodTagline.style.fontSize = "20px";

        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodInfo);
        foodDiv.appendChild(foodPrice);
        foodDiv.appendChild(foodTagline);
        foodDiv.classList.add("dish" + (i+1));
        contentDiv.appendChild(foodDiv);
    }
    content.appendChild(contentDiv);
}

function addDessertsMenu() {
    const contentDiv = document.createElement("div");
    const contentHeader = document.createElement("h3");

    contentDiv.classList.add("menucontent5");
    contentHeader.textContent = "Desserts";
    contentHeader.classList.add("miniheader");
    contentDiv.appendChild(contentHeader);

    const foodNameList = ["The Brothers: Jennifer Lawrence Jumbo Special", "Shoko's Specialty: Healing Strawberry Shortcake", "Rika's Love: Truffles Ring"];
    const foodPriceList = ["$8.50", "$6.50", "$12.50"];

    const foodInfoList = 
    [   
        `This massive ice cream special brings together two dynamic flavors. A perfect display of Yuji and Todo's brotherly relationship`,
        `A light and fluffy strawberry cake layered with whipped cream and fresh strawberries, this cake is designed to bring comfort and healing to anyone who eats it`,
        `These truffles come in a ring-shaped form, symbolizing eternal love and commitment, and the truffle ring is filled with a creamy strawberry ganache`
    ];

    const foodTaglineList = 
    [
        `What's your type?`,
        `This cake will soothe your soul and restore your energy, one bite at a time`,
        `A Love That Transcends Time, Wrapped in Chocolate.`
    ];

    for (let i = 0; i < 3; i++) {
        const foodDiv = document.createElement("div");
        const foodName = document.createElement("h4");
        const foodInfo = document.createElement("p");
        const foodPrice = document.createElement("p");
        const foodTagline = document.createElement("p");

        foodName.textContent = foodNameList[i];
        foodInfo.textContent = foodInfoList[i];
        foodPrice.textContent = foodPriceList[i];
        foodTagline.textContent = foodTaglineList[i];
        foodTagline.style.fontStyle = "italic";
        foodTagline.style.fontSize = "20px";

        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodInfo);
        foodDiv.appendChild(foodPrice);
        foodDiv.appendChild(foodTagline);
        foodDiv.classList.add("dish" + (i+1));
        contentDiv.appendChild(foodDiv);
    }
    content.appendChild(contentDiv);
}

export {addMenuHeader, addBreakfastMenu, addLunchMenu, addDinnerMenu, addBeverages, addDessertsMenu};