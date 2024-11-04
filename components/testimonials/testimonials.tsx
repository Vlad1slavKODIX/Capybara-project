import { TEST_TEXT, TEST_TITLE } from "@/mocks/testimonials";
import s from "./testimonials.module.scss";
import TestimonialsCard from "./testimonialsCard";


export default function Testimonials() {
    return (
      <section className={`${s.greyUnit} ${s.sectionUnit}`} id="testimonials">
        <div className={s.container}>
          <article className={s.textContainer}>
            <h1 className={`${s.h1_bold_desktop} ${s.orangeTitle}`}>
                {TEST_TITLE}
            </h1>
            <p className={`${s.subtitle_normal_desktop} ${s.grayTitle}`}>
                {TEST_TEXT}
            </p>
          </article>
          <TestimonialsCard />
        </div>
      </section>
    );
  }