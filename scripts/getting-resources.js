import ResourceModule from './modules/ResourceModule.js';
import myResources from './utilities/myResources.js';

const mineResourceImage = document.querySelector(".mine-resource-image");
const woodResourceImage = document.querySelector(".wood-resource-image");

// "hit" sound
const mineSound = new Audio('audio/mining-sound.mp3');
const chopSound = new Audio('audio/chopping-sound.mp3');


// changes mouse image to pickaxe or axe 

const setPickaxeCursor = (event) => {
    event.target.style.cursor = "url('images/pickaxe-cursor.png'), auto";
};

const setAxeCursor = (event) => {
    event.target.style.cursor = "url('images/axe-cursor.png'), auto";
};

const resetCursor = (event) => {
    event.target.style.cursor = "default";
};

// mining

const mineResource = () => {
    mineSound.play();
    const randomMineChance = Math.random();
    if (randomMineChance < 0.75) {
        const metalGained = Math.floor(Math.random() * 10) + 1;
        ResourceModule.addResource('metal', metalGained);
    } else {
        const goldGained = Math.floor(Math.random() * 5) + 1;
        ResourceModule.addResource('gold', goldGained);
    }
    myResources();
};

 // chopping wood
const chopWood = () => {
    chopSound.play();
    const woodGained = Math.floor(Math.random() * 15) + 1;
    ResourceModule.addResource('wood', woodGained);
    myResources();
};

myResources();

mineResourceImage.addEventListener("click", mineResource);
woodResourceImage.addEventListener("click", chopWood);
mineResourceImage.addEventListener("mouseenter", setPickaxeCursor);
woodResourceImage.addEventListener("mouseenter", setAxeCursor);
mineResourceImage.addEventListener("mouseleave", resetCursor);
woodResourceImage.addEventListener("mouseleave", resetCursor);

