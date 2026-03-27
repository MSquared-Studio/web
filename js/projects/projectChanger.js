import { projects } from "./projects.js";
import { tags } from "./tags.js";

let currentProject;

export function showProject(currProj){
    currentProject = currProj;
    const projectsSection = document.querySelector('.projects');
    // console.log(projectsSection);

    const name = projectsSection.querySelector('#name');
    const img = projectsSection.querySelector('#img');
    const tagsContainer = projectsSection.querySelector('#tags');
    const desc = projectsSection.querySelector('#desc');

    const project = projects[currProj];

    name.innerHTML = project.name;
    img.src = 'img/'+project.img;
    tagsContainer.innerHTML = '';
    project.tags.forEach((tag) => {
        tagsContainer.innerHTML += `<div class="tag" id="${tag}">${tags[tag]}</div>`
    });
    desc.innerHTML = project.desc;
}

export function nextProject(){
    const maxCount = projects.length;
    currentProject++;
    if (currentProject>=maxCount) currentProject=0;

    showProject(currentProject);
}

export function prevProject(){
    const maxCount = projects.length;
    currentProject--;
    if (currentProject<0) currentProject=maxCount-1;

    showProject(currentProject);
}