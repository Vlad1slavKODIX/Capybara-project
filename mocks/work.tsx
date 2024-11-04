import capyFacts from "@/images/capybaraFacts.png";
import capyTips from "@/images/capybaraTips.png";
import linkWork from "@/images/linkWork.svg";
import whatIS from "@/images/whatIsCapybara.png";

export const WORK_TITLE = "Work";
export const WORK_TEXT =
  "Some of the noteworthy projects Capibarara have built:";

const NEXTJS = "Next.js";
const TS = "Typescript";
const POSTGRE = "PostgreSQL";
const TAILWIND = "Tailwindcss";
const FIGMA = "Figma";
const STORYBOOK = "Storybook";
const GIT = "Git";
const REACT = "React";
const LINK = linkWork;

const FACTS_TITLE = "Capybara Facts";
const FACTS_TEXT =
  "This site provides detailed and accurate information about capybaras. It covers various topics such as their habitat, physical characteristics, behavior, diet, and lifecycle. It may also include interesting facts and trivia about capybaras. The site aims to educate visitors who are interested in learning more about these unique creatures";
const FACTS_IMG = capyFacts;
const FACTS_HREF = "https://capybarafacts.com";
const FACTS_LANG = [NEXTJS, TS, POSTGRE, TAILWIND, FIGMA, STORYBOOK, GIT];

const TIPS_IMG = capyTips;
const TIPS_TITLE = "CapybaraTips";
const TIPS_TEXT =
  "This website is dedicated to providing practical tips and guides on how to care for capybaras as pets. It covers essential topics such as feeding and nutrition, housing and environment setup, health and hygiene, socialization, and training. The site may also include testimonials or experiences shared by capybara owners or experts. It aims to assist individuals who are considering or already own capybaras as pets.";
const TIPS_LANG = [NEXTJS, TS, POSTGRE, TAILWIND, FIGMA, STORYBOOK, GIT];
const TIPS_HREF = "https://capybaratips.com";

const WHAT_TITLE = "What Is Capybara";
const WHAT_IMG = whatIS;
const WHAT_TEXT =
  "This site serves as a comprehensive introduction to capybaras for those who are unfamiliar with the species. It covers basic information, such as the capybara's classification, origin, and distinct features. It may include images or illustrations to help readers visualize the animal. The site's main objective is to provide a general overview for individuals seeking introductory knowledge about capybaras.";
const WHAT_LANG = [REACT, TS, POSTGRE, TAILWIND, FIGMA, STORYBOOK, GIT];
const WHAT_HREF = "https://whatiscapybara.com";
export const capybara = [
  {
    image: FACTS_IMG,
    title: FACTS_TITLE,
    text: FACTS_TEXT,
    link: LINK,
    lang: FACTS_LANG,
    href: FACTS_HREF,
  },
  {
    image: TIPS_IMG,
    title: TIPS_TITLE,
    text: TIPS_TEXT,
    link: LINK,
    lang: TIPS_LANG,
    href: TIPS_HREF,
  },
  {
    image: WHAT_IMG,
    title: WHAT_TITLE,
    text: WHAT_TEXT,
    link: LINK,
    lang: WHAT_LANG,
    href: WHAT_HREF,
  },
];
