import myResources from "./utilities/myResources.js";
import WarriorModule from "./modules/WarriorModule.js";
import MountModule from "./modules/MountModule.js";
import WarmachineModule from "./modules/WarmachineModule.js";

const warriorSection = document.querySelector("#warrior-section");
const mountSection = document.querySelector("#mount-section");
const warMachineSection = document.querySelector("#war-machine-section");


// functions to display purchased warriors, mounts and war machines

const showPurchasedWarriors = () => {
    const purchasedWarriors = WarriorModule.getPurchasedWarriors();

    if (purchasedWarriors.length === 0) {
        console.log("You have not purchased any warriors yet.");
        return;
    }

    let htmlTxt = "";

    purchasedWarriors.forEach(warrior => {
        htmlTxt += `
            <article class="army-box col-xs-6 col-sm-6 col-md-4">
                <h3>${warrior.name}</h3>
                <img src="images/${warrior.image}" alt="${warrior.name} - Image by ChatGPT">
            </article>
        `;
    });

    warriorSection.innerHTML = htmlTxt;
};

const showPurchasedMounts = () => {
    const purchasedMounts = MountModule.getPurchasedMounts();

    if (purchasedMounts.length === 0) {
        console.log("You have not purchased any mounts yet.");
        return;
    }

    let htmlTxt = "";

    purchasedMounts.forEach(mount => {
        htmlTxt += `
            <article class="army-box col-xs-6 col-sm-6 col-md-4">
                <h3>${mount.name}</h3>
                <img src="images/${mount.image}" alt="${mount.name}">
            </article>
        `;
    });

    mountSection.innerHTML = htmlTxt;
};

const showPurchasedWarMachines = () => {
    const purchasedWarMachines = WarmachineModule.getPurchasedWarMachines();

    if (purchasedWarMachines.length === 0) {
        console.log("You have not purchased any war machines yet.");
        return;
    }

    let htmlTxt = "";

    purchasedWarMachines.forEach(machine => {
        htmlTxt += `
            <article class="army-box col-xs-6 col-sm-6 col-md-4">
                <h3>${machine.name}</h3>
                <img src="images/${machine.image}" alt="${machine.name}">
            </article>
        `;
    });

    warMachineSection.innerHTML = htmlTxt;
};


showPurchasedWarMachines();
showPurchasedMounts();
showPurchasedWarriors();
myResources();

