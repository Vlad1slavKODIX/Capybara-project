import React from "react";
import s from "./experience.module.scss";
import { GOOGLE_ICON } from "@/mocks/experience";
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  listItems: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  listItems,
}) => {
  return (
    <section className={s.experienceCard}>
      <Image src={GOOGLE_ICON} alt="Google icon" />
      <article>
        <h2 className={s.subtitle_semiBold_desktop}>{title}</h2>
        <ul>
          {listItems.map((item) => (
            <li key={item} className={s.body2_normal_all}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default ExperienceCard;
