import { xpAcademic, xpProfessional } from "./data.js";

const cardAcademic = document.querySelector('.cards-xp-academic')

const cardProfessional = document.querySelector('.cards-xp-professional')

export function createCardExperiences () {
    xpAcademic.forEach((element)=>{
        const card = document.createElement('li')
        card.classList.add('xp-card')

        const containerName = document.createElement('div')
        containerName.classList.add('xp-container-name')

        const imgXp = document.createElement('img')
        imgXp.src = element.logo

        const nameXp = document.createElement('p')
        nameXp.classList.add('xp-description-name')
        nameXp.innerHTML = element.nameCompany
        
        containerName.appendChild(imgXp)
        containerName.appendChild(nameXp)

        card.appendChild(containerName)

        const containerDescription = document.createElement('div')
        containerDescription.classList.add('xp-description-container')

        const occupation = document.createElement('p')
        occupation.innerHTML = element.occupation

        const timeStart = document.createElement('p')
        timeStart.innerHTML = `<span>Inicio:</span> ${element.timeStart}`

        const timeEnd = document.createElement('p')
        timeEnd.innerHTML = `<span>Término:</span> ${element.timeEnd}`

        const status = document.createElement('p')
        status.innerHTML = `<span>Status:</span>  ${element.status}`

        containerDescription.appendChild(occupation)
        containerDescription.appendChild(timeStart)
        containerDescription.appendChild(timeEnd)
        containerDescription.appendChild(status)

        card.appendChild(containerDescription)

        cardAcademic.appendChild(card)
    })

    xpProfessional.forEach((element)=>{
        const card = document.createElement('li')
        card.classList.add('xp-card')

        const containerName = document.createElement('div')
        containerName.classList.add('xp-container-name')

        const imgXp = document.createElement('img')
        imgXp.src = element.logo

        const nameXp = document.createElement('p')
        nameXp.classList.add('xp-description-name')
        nameXp.innerHTML = element.nameCompany
        
        containerName.appendChild(imgXp)
        containerName.appendChild(nameXp)

        card.appendChild(containerName)

        const containerDescription = document.createElement('div')
        containerDescription.classList.add('xp-description-container')

        const occupation = document.createElement('p')
        occupation.innerHTML = element.occupation

        const timeStart = document.createElement('p')
        timeStart.innerHTML = `<span>Inicio:</span> ${element.timeStart}`

        const timeEnd = document.createElement('p')
        timeEnd.innerHTML = `<span>Término:</span> ${element.timeEnd}`


        containerDescription.appendChild(occupation)
        containerDescription.appendChild(timeStart)
        containerDescription.appendChild(timeEnd)

        card.appendChild(containerDescription)

        cardProfessional.appendChild(card)
    })

}