export default function HpBar({ label, hp, maxHp, tone = "hero" }) {
  const percent = maxHp > 0 ? Math.min(100, Math.max(0, (hp / maxHp) * 100)) : 0;

  return (
    <div className={`hp hp--${tone}`}>
      <div className="hp__row">
        <strong>{label}</strong>
        <span>
          {hp}/{maxHp}
        </span>
      </div>
      <div className="hp__track">
        <div className="hp__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
