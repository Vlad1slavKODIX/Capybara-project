"use client";
import { useState } from "react";
import {
  EXP_TEXT,
  EXP_TITLE,
  experience,
  LEFT_ORANGES,
  RIGHT_ORANGES,
} from "@/mocks/experience";
import s from "./experience.module.scss";
import Image from "next/image";
import ExperienceCard from "./experienceCard";
import ExperienceData from "./experienceData";

export default function Experience() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

  const handleDateClick = (index: number) => {
    setSelectedExperienceIndex(index);
  };

  return (
    <section className={`${s.greyUnit} ${s.sectionUnit} ${s.expUnit}`} id="experience">
      <div className={s.container}>
        <article className={s.textContainer}>
          <h1 className={`${s.h1_bold_desktop} ${s.orangeTitle}`}>
            {EXP_TITLE}
          </h1>
          <p className={`${s.subtitle_normal_desktop} ${s.grayTitle}`}>
            {EXP_TEXT}
          </p>
        </article>

        <section className={s.experienceWrapper}>
          <ExperienceData
            experience={experience}
            onDateClick={handleDateClick}
            selectedExperience={selectedExperienceIndex}
          />

          <ExperienceCard
            key={selectedExperienceIndex}
            title={experience[selectedExperienceIndex].title}
            listItems={experience[selectedExperienceIndex].listItems}
          />
        </section>
      </div>
      <Image src={LEFT_ORANGES} alt="Left oranges" className={s.leftOranges} />
      <Image
        src={RIGHT_ORANGES}
        alt="Right oranges"
        className={s.rightOranges}
      />
    </section>
  );
}
