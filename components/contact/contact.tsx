"use client";
import { useEffect, useState } from "react";
import { CONT_TEXT, CONT_TITLE } from "@/mocks/contact";
import s from "./contact.module.scss";

export default function Contact() {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const contForm = document.getElementById("contForm");
    const inputs = contForm?.querySelectorAll(
      "input[required]"
    ) as NodeListOf<HTMLInputElement>;

    const validateForm = () => {
      const allFieldsFilled = Array.from(inputs).every(
        (input) => input.value.trim() !== ""
      );
      setIsFormValid(allFieldsFilled);
    };

    inputs?.forEach((input) => {
      const label = input.previousElementSibling as HTMLLabelElement;

      input.addEventListener("focus", () => {
        input.style.border = "";
        if (label) {
          label.style.color = "";
        }
      });

      input.addEventListener("blur", () => {
        if (!input.value.trim() && input.hasAttribute("required")) {
          input.style.border = "1px solid rgba(204, 40, 40, 1)";
          if (label) {
            label.style.color = "rgba(204, 40, 40, 1)";
          }
        }
        validateForm();
      });

      input.addEventListener("input", () => {
        validateForm();
      });
    });
  }, []);

  return (
    <section className={`${s.contactUnit} ${s.sectionUnit}`} id="contact">
      <div className={s.container}>
        <article className={s.textContainer}>
          <h1 className={`${s.h1_bold_desktop} ${s.grayTitle}`}>
            {CONT_TITLE}
          </h1>
          <p className={`${s.subtitle_normal_desktop} ${s.grayTitle}`}>
            {CONT_TEXT}
          </p>
        </article>
        <form action="#" className={s.contactForm} id="contForm" method="get">
          <div className={s.groupForm}>
            <label htmlFor="subjectInput" className={s.body3_normal_all}>
              Subject*
            </label>
            <input
              type="text"
              id={s.subjectInput}
              name="subject"
              required
              pattern="[A-Za-zА-Яа-яЁё ]+"
              onKeyDown={(e) => {
                if (!/[A-Za-zА-Яа-яЁё ]/.test(e.key) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
          </div>

          <div className={s.groupForm}>
            <label htmlFor="nameInput" className={s.body3_normal_all}>
              Name*
            </label>
            <input
              type="text"
              id={s.nameInput}
              name="name"
              required
              pattern="[A-Za-zА-Яа-яЁё ]+"
              onKeyDown={(e) => {
                if (!/[A-Za-zА-Яа-яЁё ]/.test(e.key) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
          </div>

          <div className={s.groupForm}>
            <label htmlFor="telInput" className={s.body3_normal_all}>
              Phone*
            </label>
            <input
              type="tel"
              id={s.telInput}
              name="tel"
              placeholder="+7 ______-__-__"
              pattern="[0-9]*"
              required
              onKeyDown={(e) => {
                if (!/\d/.test(e.key) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
          </div>

          <div className={s.groupForm}>
            <label htmlFor="textareaInput" className={s.body3_normal_all}>
              Description
            </label>
            <textarea name="textarea" id="textareaInput"></textarea>
          </div>

          <button
            type="submit"
            id={s.formButton}
            className={s.body2_medium_all}
            disabled={!isFormValid} 
          >
            Send It!
          </button>
        </form>
      </div>
    </section>
  );
}
