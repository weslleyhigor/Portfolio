import { skillsFrontend, skillsBackend } from "./data.js";

const cardFrontend = document.querySelector('.cards-frontend-container > div')
const cardBackend = document.querySelector('.cards-backend-container > div')

export function createCardSkills () {

    skillsFrontend.forEach((element)=>{
        cardFrontend.insertAdjacentHTML('beforeend', `
            <li class="skill-card card-scale">
                <img src="${element.logoUrl}">
                <p>${element.name}</p>
            </li>    
        `)
    })

    skillsBackend.forEach((element)=>{
        cardBackend.insertAdjacentHTML("beforeend", `
            <li class="skill-card card-scale">
                <img src="${element.logoUrl}">
                <p>${element.name}</p>
            </li>    
        `)
    })
}