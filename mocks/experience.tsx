import leftOranges from "@/images/left_oranges.png";
import rightOranges from "@/images/right_oranges.png";
import google_icon from '@/images/google_icon.png';

export const EXP_TITLE = "Experience";
export const EXP_TEXT =
  "Here is a quick summary of Capibarara most recent experiences:";
export const LEFT_ORANGES = leftOranges;
export const RIGHT_ORANGES = rightOranges;
export const GOOGLE_ICON = google_icon;

const DATA_MIDDLE = "May 2020 - Present";
const DATA_JUNIOR = "Dec 2019 - May 2020";
const DATA_TRAINEE = "May 2019 - Dec 2019";
const TITLE_MIDDLE = "Middle Frontend Developer";
const TITLE_JUNIOR = "Junior Frontend Developer";
const TITLE_TRAINEE = "Frontend Trainee";
const LI1_MIDDLE =
  "Collaborating with senior developers to enhance skills and learn new technologies";
const LI2_MIDDLE =
  "Mentoring and providing guidance to junior frontend developers";
const LI3_MIDDLE = "Optimizing the performance of web applications";
const LI1_JUNIOR = "Participating in code reviews and receiving feedback";
const LI2_JUNIOR =
  "Collaborating with UI/UX designers to implement usability and accessibility enhancements";
const LI1_TRAINEE = "Testing and debugging features or code snippets";
export const experience = [
  {
    data: DATA_MIDDLE,
    title: TITLE_MIDDLE,
    listItems: [LI1_MIDDLE, LI2_MIDDLE, LI3_MIDDLE],
  },
  {
    data: DATA_JUNIOR,
    title: TITLE_JUNIOR,
    listItems: [LI1_JUNIOR, LI2_JUNIOR],
  },
  {
    data: DATA_TRAINEE,
    title: TITLE_TRAINEE,
    listItems: [LI1_TRAINEE],
  },
];
