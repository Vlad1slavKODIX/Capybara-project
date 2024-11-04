"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./layout.module.scss";
import { CLOSE_MESSAGE, MESSAGE } from "@/mocks/layout";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 2 * 60 * 1000); 
  };

  return (
    <div id={s.body}>
      {isVisible && (
        <>
          <Image src={MESSAGE} id={s.capyMessage} alt="Message" />
          <Image 
            src={CLOSE_MESSAGE} 
            id={s.closeMessage} 
            alt="Close message" 
            onClick={handleClose} 
          />
        </>
      )}
      {children}
    </div>
  );
}
