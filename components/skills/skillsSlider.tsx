"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import s from "./skills.module.scss";
import { Autoplay } from "swiper/modules";

interface Skill {
  id: number;
  image: string;
  title: string;
}

interface SkillsSliderProps {
  skills: Skill[];
}

const SkillsSlider: React.FC<SkillsSliderProps> = ({ skills }) => {
  return (
    <Swiper
      slidesPerView={5}
      slidesPerGroup={5}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      speed={1000}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      }}
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill.id}>
          <div className={s.sliderItem}>
            <Image src={skill.image} alt={skill.title} />
            <p className={s.body1_normal_desktop}>{skill.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkillsSlider;
