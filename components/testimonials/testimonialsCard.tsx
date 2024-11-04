"use client";
import { useState } from "react";
import s from "./testimonials.module.scss";
import Image, { StaticImageData } from "next/image";
import {
  SARAH_AVA,
  SARAH_NAME,
  SARAH_JOB,
  SARAH_TEXT,
  JASON_AVA,
  JASON_NAME,
  JASON_JOB,
  JASON_TEXT,
  EMMA_AVA,
  EMMA_NAME,
  EMMA_JOB,
  EMMA_TEXT,
  MEGAN_AVA,
  MEGAN_NAME,
  MEGAN_JOB,
  MEGAN_TEXT,
} from "@/mocks/testimonials";

interface Testimonial {
  ava: StaticImageData;
  name: string;
  job: string;
  text: string;
}

export default function TestimonialsCard() {
  const [mainCard, setMainCard] = useState<Testimonial>({
    ava: SARAH_AVA,
    name: SARAH_NAME,
    job: SARAH_JOB,
    text: SARAH_TEXT,
  });

  const [rightUpperCard, setRightUpperCard] = useState<Testimonial>({
    ava: JASON_AVA,
    name: JASON_NAME,
    job: JASON_JOB,
    text: JASON_TEXT,
  });

  const [lowCard1, setLowCard1] = useState<Testimonial>({
    ava: EMMA_AVA,
    name: EMMA_NAME,
    job: EMMA_JOB,
    text: EMMA_TEXT,
  });

  const [lowCard2, setLowCard2] = useState<Testimonial>({
    ava: MEGAN_AVA,
    name: MEGAN_NAME,
    job: MEGAN_JOB,
    text: MEGAN_TEXT,
  });

  const handleCardClick = (
    setTargetCard: Function,
    targetCard: Testimonial
  ) => {
    const previousMainCard = { ...mainCard };
    setMainCard(targetCard);
    setTargetCard(previousMainCard);
  };

  return (
    <section className={s.testimonialsCards}>
      <section className={`${s.mainCard} ${s.card}`}>
        <article className={s.upperInfo}>
          <Image src={mainCard.ava} alt={mainCard.name} />
          <div>
            <h3 className={s.h3_semiBold_TM}>{mainCard.name}</h3>
            <h4 className={s.subtitle_normal_desktop}>{mainCard.job}</h4>
          </div>
        </article>
        <p className={s.body2_normal_all}>{mainCard.text}</p>
      </section>

      <div className={s.rightCards}>
        <section
          role="presentation"
          className={`${s.rightUpperCard} ${s.card}`}
          onClick={() => handleCardClick(setRightUpperCard, rightUpperCard)}
        >
          <article>
            <h3 className={s.subtitle_semiBold_desktop}>{rightUpperCard.name}</h3> <h4 className={s.body3_normal_all}>/ {rightUpperCard.job}</h4>
          </article>
          <p className={s.body2_normal_all}>{rightUpperCard.text}</p>
        </section>

        <div className={s.lowCards}>
          <section
            role="presentation"
            className={`${s.lowCard} ${s.card}`}
            onClick={() => handleCardClick(setLowCard1, lowCard1)}
          >
            <article>
              <h3 className={s.subtitle_semiBold_desktop}>{lowCard1.name}</h3>
              <h4 className={s.body3_normal_all}>/ {lowCard1.job}</h4>
            </article>
            <p className={s.body2_normal_all}>{lowCard1.text}</p>
          </section>

          <section
            role="presentation"
            className={`${s.lowCard} ${s.card}`}
            onClick={() => handleCardClick(setLowCard2, lowCard2)}
          >
            <article>
              <h3 className={s.subtitle_semiBold_desktop}>{lowCard2.name}</h3> <h4 className={s.body3_normal_all}>/ {lowCard2.job}</h4>
            </article>
            <p className={s.body2_normal_all}>{lowCard2.text}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
