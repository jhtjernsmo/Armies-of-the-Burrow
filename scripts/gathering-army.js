import WarriorModule from "./modules/WarriorModule.js";
import MountModule from "./modules/MountModule.js";
import WarmachineModule from "./modules/WarmachineModule.js";
import myResources from "./utilities/myResources.js";
import ResourceModule from "./modules/ResourceModule.js";

const warriorSection = document.querySelector("#warrior-section");
const mountSection = document.querySelector("#mount-section");
const warMachineSection = document.querySelector("#war-machine-section");



// displayes warriors

const showWarriors = () => {
    
    const warriors = WarriorModule.getAll();

    console.log(warriors);

    let htmlTxt = "";

    warriors.forEach( warrior => {
        htmlTxt += `
            <article class="army-box col-xs-6 col-sm-6 col-md-4">
                <h3>${warrior.name}</h3>
                <img src="images/${warrior.image}" alt="${warrior.name} - Image by ChatGPT">
                <button data-id="${warrior.id}" id="warrior-buy" class="button button--buy">Buy Warrior ${warrior.priceGold}</button>
            </article>
        `;    
    });

    warriorSection.innerHTML = htmlTxt;

    // buys warrior

    const buyButton = document.querySelectorAll('#warrior-buy');
    buyButton.forEach(button => {
        button.addEventListener('click', (event) => {
            const warriorId = event.target.getAttribute('data-id');
            const resources = ResourceModule.getResources();
            WarriorModule.buyWarrior(warriorId, resources);
            myResources();
        });
        
    });
    

}; 

// displays mounts

const showMounts = () => {

    const mounts = MountModule.getAll();

    console.log(mounts);

    let htmlTxt = "";

    mounts.forEach( mount => {
        htmlTxt += `
            <article class="army-box col-xs-6 col-sm-6 col-md-4">
                <h3>${mount.name}</h3>
                <img src="images/${mount.image}" alt="${mount.name} - Image by ChatGPT">
                <button data-id="${mount.id}" id="mount-buy" class="button button--buy">Buy Warrior ${mount.priceGold}</button>
            </article>
        `
    });

    mountSection.innerHTML = htmlTxt;

    // buys mount

    const buyButtons = document.querySelectorAll('#mount-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const mountId = event.target.getAttribute('data-id');
            const resources = ResourceModule.getResources();
            MountModule.buyMount(mountId, resources);
            myResources();
        });
    });
};

// displayes war machines

const showMachines = () => {

    const machines = WarmachineModule.getAll();

    console.log(machines);

    let htmlTxt = "";

    machines.forEach( machine => {
        htmlTxt += `
            <article class="army-box col-xs-6 col-sm-6 col-md-4">
                <h3>${machine.name}</h3>
                <img src="images/${machine.image}" alt="${machine.name} - Image by ChatGPT">
                <button data-id="${machine.id}" class="button button--buy" id="war-machine-buy">Buy Warrior ${machine.priceGold}</button>
            </article>
        `
    });

    warMachineSection.innerHTML = htmlTxt;

    // buys machine

    const buyButtons = document.querySelectorAll('#war-machine-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const machineId = event.target.getAttribute('data-id');
            const resources = ResourceModule.getResources();
            WarmachineModule.buyWarMachine(machineId, resources);
            myResources();

        });
    });
};


showMachines();
showWarriors();
showMounts();
myResources();