import { WAVE1_IMG, WAVE2_IMG, ORANGE1_IMG, ORANGE2_IMG } from "@/mocks/waves";
import s from "./waves.module.scss";
import Image from "next/image";

export default function Waves() {
  return (
    <div className={s.waveUnit}>
        <Image src={WAVE1_IMG} alt="Wave 1" className={s.wave1} />
        <Image src={WAVE2_IMG} alt="Wave 2" className={s.wave2} />
        <Image src={ORANGE1_IMG} alt="Orange 1" className={s.orange1} />
        <Image src={ORANGE2_IMG} alt="Orange 2" className={s.orange2} />
      </div>
  );
}
