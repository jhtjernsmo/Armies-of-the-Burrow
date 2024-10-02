
const ResourceModule = (() => {
    let resources = {
        gold: 0,
        metal: 0,
        wood: 0,
    };

    const loadMyResources = () => {
        const storedResources = JSON.parse(localStorage.getItem('resources'));
        if (storedResources) {
            resources = structuredClone(storedResources);
        }
    };

    const saveResources = () => {
        localStorage.setItem('resources', JSON.stringify(resources));
    };

    const getResources = () => structuredClone(resources);

    const addResource = (type, amount) => {
        resources[type] += amount;
        saveResources();
    };

    loadMyResources();

    return {
        getResources,
        addResource
    };
})();

export default ResourceModule;
