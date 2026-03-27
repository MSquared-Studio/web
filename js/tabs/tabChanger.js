import { tabs } from "./tabs.js";

// console.log(tabs["hero"]);
let currentTab;
let doChange = true;
const main = document.getElementById('main');

export function changeTab(tabName){
    if (doChange) {
        currentTab = tabName;
        main.innerHTML = tabs[currentTab];
    }
}

