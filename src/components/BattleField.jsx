import { motion } from "framer-motion";
import HpBar from "./HpBar.jsx";

const MotionDiv = motion.div;

export default function BattleField({ playerHp, playerMaxHp, enemy, enemyHp }) {
  return (
    <section className="battlefield">
      <div className="combatant">
        <div className="combatant__sprite combatant__sprite--hero">🛡</div>
        <HpBar label="Player" hp={playerHp} maxHp={playerMaxHp} />
      </div>

      <MotionDiv
        className="combatant combatant--enemy"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="combatant__sprite">{enemy.icon}</div>
        <HpBar label={enemy.name} hp={enemyHp} maxHp={enemy.maxHp} tone="enemy" />
      </MotionDiv>
    </section>
  );
}
