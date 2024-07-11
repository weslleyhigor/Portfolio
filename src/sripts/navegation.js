const homeContainer = document.querySelector('.home-container')
const aboutContainer = document.querySelector('.about-container')
const skillsContainer = document.querySelector('.skills-container')
const experiencesContainer = document.querySelector('.experiences-container')
const projectsContainer = document.querySelector('.projects-container')
const contactContainer = document.querySelector('.contact-container')
const menuNavegation = document.querySelector(".menu")

export function openNavegation () { 
    const menuButton = document.querySelector(".menu-burguer-open")

    menuButton.addEventListener('click', () => {
        displayFlex();
    })
}

export function closeNavegation () {
    const menuButton = document.querySelector('.menu-burguer-close')

    menuButton.addEventListener('click', () => {
        displayNone();
    })
}

export function optionsNavegation () {
    const homeButton = document.querySelector('#home-button')
    const aboutButton = document.querySelector('#about-button')
    const skillsButton = document.querySelector('#skills-button')
    const experiencesButton = document.querySelector('#experiences-button')
    const projectsButton = document.querySelector('#projects-button')
    const contactsButton = document.querySelector('#contacts-button')


    homeButton.addEventListener('click', () => {
        displayNone();
    })

    aboutButton.addEventListener('click', ()=> {
        displayNone();
    })

    skillsButton.addEventListener('click', ()=> {
        displayNone();
    })

    experiencesButton.addEventListener('click', ()=> {
        displayNone();
    })

    projectsButton.addEventListener('click', ()=> {
        displayNone();
    })

    contactsButton.addEventListener('click', ()=> {
        displayNone();
    })

}

function displayFlex () {
    menuNavegation.classList.remove('display-none')
    menuNavegation.classList.add('display-flex')

    homeContainer.classList.add('display-none')
    aboutContainer.classList.add('display-none')
    skillsContainer.classList.add('display-none')
    experiencesContainer.classList.add('display-none')
    projectsContainer.classList.add('display-none')
    contactContainer.classList.add('display-none')
}


function displayNone () {
    menuNavegation.classList.remove('display-flex')
    menuNavegation.classList.add('display-none')

    homeContainer.classList.remove('display-none')
    aboutContainer.classList.remove('display-none')
    skillsContainer.classList.remove('display-none')
    experiencesContainer.classList.remove('display-none')
    projectsContainer.classList.remove('display-none')
    contactContainer.classList.remove('display-none')
}
