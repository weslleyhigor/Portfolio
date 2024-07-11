import { socialMedias } from "./data.js"

const socialMediaContainer = document.querySelector('.social-media-container')
const socialMediaContactContainer = document.querySelector('.social-media-card-container > div')

export function createSocialMedia () {
    socialMedias.forEach((element) => {
        console.log(element.nameSocialMedia)

        socialMediaContainer.insertAdjacentHTML("beforeend", `
            <a class="card-scale" href="${element.link}" target="_blank">
                ${element.logoSvg}
            </a>
        `)
    })

    socialMedias.forEach((element) => {
        if (element.nameSocialMedia != 'Github') {
            socialMediaContactContainer.insertAdjacentHTML("afterbegin", `
                <a class="social-media-card card-scale" href="${element.link}" target="_blank">
                    <li>
                        <div>
                            ${element.logoSvg}
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