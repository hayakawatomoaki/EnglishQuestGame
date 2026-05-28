import { motion } from "framer-motion";
import { Swords } from "lucide-react";

const MotionDiv = motion.div;

export default function TitleScreen({ onStart }) {
  return (
    <main className="title-screen">
      <MotionDiv
        className="title-screen__content"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="title-screen__badge">
          <Swords size={18} />
          English Quiz RPG
        </div>
        <h1>English Quest</h1>
        <p>英語の4択クイズでモンスターと戦い、弱点を復習しながらレベルアップしよう。</p>
        <button className="primary-button" type="button" onClick={onStart}>
          Adventure Start
        </button>
      </MotionDiv>
    </main>
  );
}
