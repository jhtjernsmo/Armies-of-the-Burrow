import ResourceModule from "../modules/ResourceModule.js";

let goldCount = document.querySelector(".gold-count");
let metalCount = document.querySelector(".metal-count");
let woodCount = document.querySelector(".wood-count");

// updates current resources

const myCurrentResources = () => {
    const resources = ResourceModule.getResources();

    goldCount.innerHTML = resources.gold;
    metalCount.innerHTML = resources.metal;
    woodCount.innerHTML = resources.wood;
};

export default myCurrentResources;
