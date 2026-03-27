import { projectsHandlersInit } from "../projects/projectsHandlers.js";
import { changeTab } from "./tabChanger.js";

export function headerTabsHandler(){
    const header = document.querySelector('header');
    // console.log(header);
    
    const about = header.querySelector('#about');
    const hero = header.querySelector('#hero');
    const projects = header.querySelector('#projects');
    const philosophy = header.querySelector('#philosophy');
    const join = header.querySelector('#join');


    about.addEventListener('click', () => {
        changeTab('about');
    });
    hero.addEventListener('click', () => {
        changeTab('hero');
    });
    projects.addEventListener('click', () => {
        changeTab('projects');
        projectsHandlersInit();
    });
    philosophy.addEventListener('click', () => {
        changeTab('philosophy');
    });
    join.addEventListener('click', () => {
        changeTab('join');
    });
}