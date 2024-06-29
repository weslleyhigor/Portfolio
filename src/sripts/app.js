import { openNavegation, closeNavegation, optionsNavegation } from "./menu.js";
import { createCardSkills } from "./cards-skills.js";
import { createCardExperiences } from "./cards-experiences.js";
import { contentAbout } from "./about.js";
import { createSocialMedia } from "./social-media.js";

openNavegation();
closeNavegation();
optionsNavegation();

contentAbout();
createCardSkills();
createCardExperiences();
createSocialMedia();

