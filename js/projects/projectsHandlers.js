import { nextProject, prevProject, showProject } from "./projectChanger.js";

export function projectsHandlersInit(){
    showProject(0);

    const controlBtns = document.querySelector('.control-btns');
    // console.log(controlBtns);
    const nextBtn = controlBtns.querySelector('#next');
    const prevBtn = controlBtns.querySelector('#prev');

    nextBtn.addEventListener('click', () =>{
        nextProject();
    });
    prevBtn.addEventListener('click', () =>{
        prevProject();
    });
}