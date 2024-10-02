import ResourceModule from "./ResourceModule.js";

const MountModule = (()=>{

    const mounts = [
        {
            id: 1,
            name: "Wolvie",
            priceGold: 1000,
            image: "wolverinemount.png",
            catagoryName: "Mount",
        },
        {
            id: 2,
            name: "Wolfie",
            priceGold: 1250,
            image: "wolfmount.png",
            catagoryName: "Mount",
        },
        {
            id: 3,
            name: "Todie",
            priceGold: 700,
            image: "toadmount.png",
            catagoryName: "Moung",
        }
    ];

   
    const getAll = () => {
        return structuredClone(mounts);
    }

    const getMountById = (id) => {
        return mounts.find(mount => mount.id === parseInt(id));
    };

    const getPurchasedMounts = () => {
        return JSON.parse(localStorage.getItem('purchasedMounts')) || [];
    };

    const savePurchasedMounts = (purchasedMounts) => {
        localStorage.setItem('purchasedMounts', JSON.stringify(purchasedMounts));
    };

    // money "spending" sound
    const moneySound = new Audio('audio/money-sound.mp3');

    const buyMount = (mountId, resources) => {
        const mount = getMountById(mountId);
        if (resources.gold >= mount.priceGold) {
            resources.gold -= mount.priceGold;

            ResourceModule.addResource('gold', -mount.priceGold); 

            let purchasedMounts = getPurchasedMounts();
            
            purchasedMounts.push(mount);
            
            savePurchasedMounts(purchasedMounts);

            console.log(`Successfully bought ${mount.name}.`);
            moneySound.play();
        } else {
            alert(`Not enough gold to buy ${mount.name}.`);
        }
    };

    return {
        getAll,
        getMountById,
        buyMount,
        getPurchasedMounts 
    };
})();

export default MountModule;