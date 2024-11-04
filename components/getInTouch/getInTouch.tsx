"use client";
import { GET_MAIL, GET_PHONE, GET_TEXT, GET_TITLE } from "@/mocks/getInTouch";
import s from "./getInTouch.module.scss";

const applyClassesToWords = (text: string) => {
  return text.split(' ').map((word, wordIndex) => {
    const styledWord = Array.from(word).map((char, charIndex) => {
      const className = (charIndex % 2 === 0) ? s.orangeTitle : s.yellowText; // Четные и нечетные индексы
      return <span key={charIndex} className={className}>{char}</span>;
    });
    
    return (
      <span key={wordIndex}>
        {styledWord} 
      </span>
    );
  });
};

// Функция для копирования текста
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert(`Текст ${text} скопирован в буфер обмена!`); // Вы можете изменить это на любой другой способ уведомления
  } catch (err) {
    console.error("Не удалось скопировать текст: ", err);
  }
};

export default function GetInTouch() {
  return (
    <footer className={`${s.greyUnit} ${s.sectionUnit}`} id="getInTouch">
      <div className={s.container}>
        <article className={s.textContainer}>
          <h1 className={`${s.h1_bold_desktop} ${s.grayTitle}`}>{GET_TITLE}</h1>
          <p className={`${s.subtitle_normal_desktop} ${s.grayTitle}`}>
            {GET_TEXT}
          </p>
        </article>
        <div className={s.downInfo}>
          <a
            href={`mailto:${GET_MAIL}`}
            className={`${s.h2_semiBold_desktop} ${s.mailLink}`}
            onClick={(e) => {
              e.preventDefault(); // Предотвращает переход по ссылке
              copyToClipboard(GET_MAIL); // Копирует адрес почты
            }}
          >
            {applyClassesToWords(GET_MAIL)}
          </a>
          <a 
            href={`tel:${GET_PHONE.replace(/[^0-9]/g, "")}`} 
            className={`${s.h2_semiBold_desktop} ${s.phoneLink}`}
            onClick={(e) => {
              e.preventDefault(); // Предотвращает переход по ссылке
              copyToClipboard(GET_PHONE); // Копирует номер телефона
            }}
          >
            {applyClassesToWords(GET_PHONE)}
          </a>
        </div>
      </div>
    </footer>
  );
}
