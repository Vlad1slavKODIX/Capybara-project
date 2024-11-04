import { StaticImageData } from "next/image";
import s from "./work.module.scss";
import Image from "next/image";

interface WorkCardProps {
  capybara: {
    image: StaticImageData;
    title: string;
    text: string;
    href: string;
    lang: string[];
    link: string;
  }[];
}

const WorkCard: React.FC<WorkCardProps> = ({ capybara }) => {
  return (
    <div className={s.workCardsMain}>
      {capybara.map((item, index) => (
        <section
          key={index}
          className={`${s.workCard} ${index % 2 === 0 ? "" : s.reversedLayout}`}
        >
          <div className={s.imageContainer}>
            <Image src={item.image} alt={item.title} />
          </div>
          <article>
            <h3 className={s.subtitle_semiBold_desktop}>{item.title}</h3>
            <p className={s.body2_normal_all}>{item.text}</p>

            <ul className={s.langList}>
              {item.lang.map((lang, langIndex) => (
                <li
                  key={langIndex}
                  className={`${s.langItem} ${s.body3_medium_all}`}
                >
                  {lang}
                </li>
              ))}
            </ul>
            <a href={item.href} target="_blank" className={s.link}>
              <Image src={item.link} alt="Link icon" />
            </a>
          </article>
        </section>
      ))}
    </div>
  );
};

export default WorkCard;
