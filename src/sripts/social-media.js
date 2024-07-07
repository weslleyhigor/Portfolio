import { socialMedias } from "./data.js"

const socialMediaContainer = document.querySelector('.social-media-container')
const socialMediaContactContainer = document.querySelector('.social-media-card-container > div')

export function createSocialMedia () {
    socialMedias.forEach((element) => {
        socialMediaContainer.insertAdjacentHTML("beforeend", `
            <a class="card-scale" href="${element.link}" target="_blank">
                <img src="${element.logoUrl}">
            </a>
        `)
    })

    socialMedias.forEach((element) => {
        if (element.nameSocialMedia != 'Github') {
            socialMediaContactContainer.insertAdjacentHTML("afterbegin", `
                <a class="social-media-card card-scale" href="${element.link}" target="_blank">
                    <li>
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