import { openNavegation, closeNavegation, optionsNavegation } from "./navegation.js";
import { createCardSkills } from "./cards-skills.js";
import { createCardExperiences } from "./cards-experiences.js";
import { contentAbout } from "./about.js";
import { createSocialMedia } from "./social-media.js";
import { createCardProject } from "./projects.js";
import { darkLightMode } from "./dark-light-mode.js";

openNavegation();
closeNavegation();
optionsNavegation();

contentAbout();
createCardSkills();
createCardExperiences();
createCardProject();
createSocialMedia();
darkLightMode();