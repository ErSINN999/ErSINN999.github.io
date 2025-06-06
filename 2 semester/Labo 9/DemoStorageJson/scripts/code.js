const setup = () => {
    document.getElementById("btnSave").addEventListener("click", saveSettings);
    document.getElementById("btnShow").addEventListener("click", showSettings);
};



const saveSettings = () => {
    let settings = {};
    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen
    settings.age = parseInt(document.getElementById("txtAge").value);
    settings.weight = parseInt(document.getElementById("txtWeight").value);
    settings.budget = parseInt(document.getElementById("txtBudget").value);

    // bewaar settings als JSON string in local storage
    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("VIVES.be.settingsPerson", settingsJSON);


};

// Local storage zorg dat de informatie bewaard wordt in de Local voor altijd
// Session storage zorg dat je informatie bewaard alleen voor 1 keer
const showSettings = () => {
    let settings;
    let settingsJSON = localStorage.getItem("VIVES.be.settingsPerson");

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (settingsJSON === undefined) {
        settings = {
            age: 0,
            weight: 0,
            budget: 0
        };
    } else {
        settings = JSON.parse(settingsJSON);
    }

    // vul de invoervelden met de settings-waarden
    document.getElementById("txtAge").value = settings.age;
    document.getElementById("txtWeight").value = settings.weight;
    document.getElementById("txtBudget").value = settings.budget;
};

window.addEventListener("load", setup);