import ResourceModule from "./ResourceModule.js";

const WarmachineModule = (()=>{

    const warmachines = [
        {
            id: 1,
            name: "Catapult",
            priceGold: 2500,
            image: "catapult.png",
            catagoryName: "WarMachine",
        },
        {
            id: 2,
            name: "Canon",
            priceGold: 1500,
            image: "canon.png",
            catagoryName: "WarMachine",
        },
        {
            id: 3,
            name: "Battering Ram",
            priceGold: 2000,
            image: "battering-ram.png",
            catagoryName: "WarMachine",
        }
    ];

   
    const getAll = () => {
        return structuredClone(warmachines);
    }

    const getWarMachineById = (id) => {
        return warmachines.find(machine => machine.id === parseInt(id));
    };

    const getPurchasedWarMachines = () => {
        return JSON.parse(localStorage.getItem('purchasedWarMachines')) || [];
    };

    const savePurchasedWarMachines = (purchasedWarMachines) => {
        localStorage.setItem('purchasedWarMachines', JSON.stringify(purchasedWarMachines));
    };

    // money & failure sound
    const moneySound = new Audio('audio/money-sound.mp3');
    const failureSound = new Audio('audio/failure-sound.mp3');

    const buyWarMachine = (machineId, resources) => {
        const machine = getWarMachineById(machineId);

        if (resources.gold >= machine.priceGold) {
            resources.gold -= machine.priceGold;

            ResourceModule.addResource('gold', -machine.priceGold);

            let purchasedWarMachines = getPurchasedWarMachines();
            
            purchasedWarMachines.push(machine);

            savePurchasedWarMachines(purchasedWarMachines);

            console.log(`Successfully bought ${machine.name}.`);
            moneySound.play();
        } else {
            failureSound.play();
            alert(`Not enough gold to buy ${machine.name}.`);
        }
    };

    return {
        getAll,
        getWarMachineById,
        buyWarMachine,
        getPurchasedWarMachines
    };
})();


export default WarmachineModule;