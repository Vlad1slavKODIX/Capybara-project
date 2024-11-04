// components/Skills.tsx
import SkillsSlider from "@/components/skills/skillsSlider";
import { ORANGE_IMG, skills, SKILLS_TEXT, SKILLS_TITLE } from "@/mocks/skills";
import s from "./skills.module.scss";
import Image from "next/image";

export default function Skills() {
  return (
    <section className={`${s.skillsUnit} ${s.sectionUnit}`}>
      <div className={s.container}>
        <article className={s.textContainer}>
          <h1 className={`${s.h1_bold_desktop} ${s.grayTitle}`}>{SKILLS_TITLE}</h1>
          <p className={`${s.subtitle_normal_desktop} ${s.grayTitle}`}>
            {SKILLS_TEXT}
          </p>
        </article>
        <section className={s.sliderIcons}>
          <SkillsSlider skills={skills} />
        </section>
      </div>
      <Image src={ORANGE_IMG} alt="Orange photo" className={s.orangeImg}/>
    </section>
  );
}
