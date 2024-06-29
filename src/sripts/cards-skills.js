import { skillsFrontend, skillsBackend } from "./data.js";

const cardFrontend = document.querySelector('.cards-frontend-container')
const cardBackend = document.querySelector('.cards-backend-container')

export function createCardSkills () {

    skillsFrontend.forEach((element)=>{
        cardFrontend.insertAdjacentHTML('beforeend', `
            <li class="skill-card">
                <img src="${element.logoUrl}">
                <p>${element.name}</p>
            </li>    
        `)
    })

    skillsBackend.forEach((element)=>{
        cardBackend.insertAdjacentHTML("beforeend", `
            <li class="skill-card">
                <img src="${element.logoUrl}">
                <p>${element.name}</p>
            </li>    
        `)
    })
}