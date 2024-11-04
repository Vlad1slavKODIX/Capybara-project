import s from "./work.module.scss";
import { capybara, WORK_TEXT, WORK_TITLE } from "@/mocks/work";
import WorkCard from "./workCard";

export default function Work() {
  return (
    <section className={`${s.workUnit} ${s.sectionUnit}`} id="work">
      <div className={s.container}>
        <article className={s.textContainer}>
          <h1 className={`${s.h1_bold_desktop} ${s.grayTitle}`}>
            {WORK_TITLE}
          </h1>
          <p className={`${s.subtitle_normal_desktop} ${s.grayTitle}`}>
            {WORK_TEXT}
          </p>
        </article>
        <WorkCard capybara={capybara} />
      </div>
    </section>
  );
}
