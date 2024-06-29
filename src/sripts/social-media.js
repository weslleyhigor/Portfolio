import { socialMedias } from "./data.js"

const socialMediaContainer = document.querySelector('.social-media-container')
const socialMediaContactContainer = document.querySelector('.social-media-card-container')

export function createSocialMedia () {
    socialMedias.forEach((element) => {
        socialMediaContainer.insertAdjacentHTML("beforeend", `
            <a href="${element.link}" target="_blank">
                <img src="${element.logoUrl}">
            </a>
        `)
    })

    socialMedias.forEach((element) => {
        if (element.nameSocialMedia != 'Github') {
            socialMediaContactContainer.insertAdjacentHTML("afterbegin", `
                <a href="${element.link}" target="_blank">
                    <li class="social-media-card">
                        <div>
                            <img src="${element.logoUrl}">
                        </div>
                        
                        <div class="container-data-social-media">
                            <p>${element.nameSocialMedia}</p>
                        </div>
                    </li>
                </a>
                
            `)
        }
    })

}