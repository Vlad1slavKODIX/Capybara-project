"use client";
import { useState } from "react";
import s from "./header.module.scss";
import Image from "next/image";
import {
  NAV_EXPERIENCE,
  NAV_WORK,
  NAV_TESTIMONIALS,
  NAV_CONTACT,
  LOGO,
  MENU,
  CLOSE,
} from "@/mocks/header";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id={s.header}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Image src={LOGO} alt="logo" />
          {isMenuOpen && (
            <button onClick={toggleMenu} className={s.closeButton}>
              <Image src={CLOSE} alt="Close menu" id={s.closeMenuIcon} />
            </button>
          )}
          <nav className={isMenuOpen ? s.menuOpen : s.menuClosed}>
            <ul>
              <li>
                <a href="#experience" className={s.body2_medium_all}>
                  {NAV_EXPERIENCE}
                </a>
              </li>
              <li>
                <a href="#work" className={s.body2_medium_all}>
                  {NAV_WORK}
                </a>
              </li>
              <li>
                <a href="#testimonials" className={s.body2_medium_all}>
                  {NAV_TESTIMONIALS}
                </a>
              </li>
              <li>
                <a href="#contact" className={s.body2_medium_all}>
                  {NAV_CONTACT}
                </a>
              </li>
            </ul>
          </nav>
          {!isMenuOpen && (
            <button onClick={toggleMenu} className={s.menuButton}>
              <Image src={MENU} alt="Menu" id={s.menuIcon} />
            </button>
          )}

          
          
        </div>
      </div>
    </header>
  );
}
