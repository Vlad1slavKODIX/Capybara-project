import { HERO_BUTTON, HERO_IMG, HERO_TEXT, HERO_TITLE } from "@/mocks/hero";
import s from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={`${s.heroSection} ${s.sectionUnit}`}>
      <div className={s.container}>
        <section className={s.heroInfo}>
            <h1 className={s.h1_bold_desktop }>{HERO_TITLE}</h1>
            <p className={s.body2_normal_all}>{HERO_TEXT}</p>
            <button className={s.subtitle_semiBold_desktop}><a href="#getInTouch">{HERO_BUTTON}</a></button>
        </section>
        <Image src={HERO_IMG} alt="Capybara photo" />
      </div>
    </section>
  );
}
