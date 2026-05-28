export default function ProgressBar({ value, max, label }) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div className="meter">
      <div className="meter__label">
        <span>{label}</span>
        <span>
          {value}/{max}
        </span>
      </div>
      <div className="meter__track">
        <div className="meter__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
