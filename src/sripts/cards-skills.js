import { skillsFrontend, skillsBackend } from "./data.js";

const cardFrontend = document.querySelector('.cards-frontend-container')

const cardBackend = document.querySelector('.cards-backend-container')

export function createCardSkills () {
    skillsFrontend.forEach((element)=>{
        const card = document.createElement('li')
        card.classList.add('skill-card')

        const imgSkill = document.createElement('img')
        imgSkill.src = element.logo

        const nameSkill = document.createElement('p')
        nameSkill.innerHTML = element.name
        
        card.appendChild(imgSkill)
        card.appendChild(nameSkill)

        cardFrontend.appendChild(card)
    })

    skillsBackend.forEach((element)=>{
        const card = document.createElement('li')
        card.classList.add('skill-card')

        const imgSkill = document.createElement('img')
        imgSkill.src = element.logo

        const nameSkill = document.createElement('p')
        nameSkill.innerHTML = element.name
        
        card.appendChild(imgSkill)
        card.appendChild(nameSkill)

        cardBackend.appendChild(card)
    })
}