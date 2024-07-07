import { xpAcademic, xpProfessional } from "./data.js";

const cardAcademic = document.querySelector('.cards-xp-academic > div')
const cardProfessional = document.querySelector('.cards-xp-professional > div')

export function createCardExperiences () {
    xpAcademic.forEach((element)=>{
        cardAcademic.insertAdjacentHTML("beforeend", `
            <li class="xp-card card-scale">
                <div class="xp-container-name">
                    <img src="${element.logoUrl}">
                    <p class="xp-description-name">${element.nameCompany}</p>
                </div>

                <div class="xp-description-container">
                    <p>${element.occupation}</p>
                    <p><span>Inicio:</span> ${element.timeStart}</p>
                    <p><span>Término:</span> ${element.timeEnd}</p>
                    <p><span>Status:</span> ${element.status}</p>
                </div>
            </li>    
        `)
    })

    xpProfessional.forEach((element)=>{
        cardProfessional.insertAdjacentHTML("beforeend", `
            <li class="xp-card card-scale">
                <div class="xp-container-name">
                    <img src="${element.logoUrl}">
                    <p class="xp-description-name">${element.nameCompany}</p>
                </div>

                <div class="xp-description-container">
                    <p>${element.occupation}</p>
                    <p><span>Inicio:</span> ${element.timeStart}</p>
                    <p><span>Término:</span> ${element.timeEnd}</p>
                </div>
            </li>    
        `)
    })
}