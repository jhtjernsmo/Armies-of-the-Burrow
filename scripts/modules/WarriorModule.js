import ResourceModule from './ResourceModule.js';

const WarriorModule = (()=>{

    const warriors = [
        {
            id: 1,
            name: "Otter Wizard",
            priceGold: 200,
            image: "warrior-1.png",
            catagoryName: "Otter Warrior",
        },
        {
            id: 2,
            name: "Otter Knight",
            priceGold: 250,
            image: "warrior-2.png",
            catagoryName: "Otter Warrior",
        },
        {
            id: 3,
            name: "Otter Archer",
            priceGold: 150,
            image: "warrior-3.png",
            catagoryName: "Otter Warrior",
        },
        {
            id: 4,
            name: "Otter Rouge",
            priceGold: 225,
            image: "warrior-4.png",
            catagoryName: "Otter Warrior",
        },
        {
            id: 5,
            name: "Otter Berserker",
            priceGold: 350,
            image: "warrior-5.png",
            catagoryName: "Otter Warrior",
        },
        {
            id: 6,
            name: "Otter Healer",
            priceGold: 300,
            image: "warrior-6.png",
            catagoryName: "Otter Warrior",
        }
    ];


    const getAll = () => {
        return structuredClone(warriors);
    }

    const getWarriorById = (id) => {
        return warriors.find(warrior => warrior.id === parseInt(id));
    };

    const getPurchasedWarriors = () => {
        return JSON.parse(localStorage.getItem('purchasedWarriors')) || [];
    };

    const savePurchasedWarriors = (purchasedWarriors) => {
        localStorage.setItem('purchasedWarriors', JSON.stringify(purchasedWarriors));
    };

    // money & failure sound
    const moneySound = new Audio('audio/money-sound.mp3');
    const failureSound = new Audio('audio/failure-sound.mp3');

    const buyWarrior = (warriorId, resources) => {
        const warrior = getWarriorById(warriorId);
        if (resources.gold >= warrior.priceGold) {
            resources.gold -= warrior.priceGold;

            ResourceModule.addResource('gold', -warrior.priceGold); 

            let purchasedWarriors = getPurchasedWarriors();
            
            purchasedWarriors.push(warrior);
            
            savePurchasedWarriors(purchasedWarriors);

            console.log(`Successfully bought ${warrior.name}.`);
            moneySound.play();
        } else {
            failureSound.play();
            alert(`Not enough gold to buy ${warrior.name}.`);
        }
    };

    return {
        getAll,
        getWarriorById,
        buyWarrior,
        getPurchasedWarriors 
    };
})();

export default WarriorModule;