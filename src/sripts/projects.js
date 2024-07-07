import { projects } from "./data.js"

const containerProjects = document.querySelector('.cards-projects-container > div')

export function createCardProject () {
    projects.forEach((element) => {

        const tecnologiesHTML = element.tecnologies.map(tech => `<img src="${tech.logoUrl}">`).join('');

        containerProjects.insertAdjacentHTML("beforeend", `
            <li class="projects-card card-scale">
                <img src="${element.imgPreviewUrl}">
                
                <div>
                    <p class="name-project">${element.nameProject}</p>
                    <p class="description-project">${element.description}</p>
                    
                    <div class="tecnologies-project">
                        ${tecnologiesHTML}
                    </div>
                    
                    <a class="github-project" href="${element.urlGithub}" target="_blank">Link Github</a>
                    <a class="link-project" href="${element.urlViewProject}" target="_blank"><span>Ver Projeto
                    </span></a>
                </div>
            </li>
        `)
    })
}