import React from "react";
import s from "./experience.module.scss"; 

interface ExperienceDataProps {
  experience: { data: string }[];
  onDateClick: (index: number) => void; 
  selectedExperience: number; 
}

const ExperienceData: React.FC<ExperienceDataProps> = ({
  experience,
  onDateClick,
  selectedExperience,
}) => {
  return (
    <section className={s.experienceData}>
      {experience.map((exp, index) => (
        <button key={exp.data} className={`${s.dateButton} ${s.body2_normal_all} ${index === selectedExperience ? s.active : ""}`} onClick={() => onDateClick(index)}         >
          {exp.data}
        </button>
      ))}
    </section>
  );
};

export default ExperienceData;
