import ProgressBar from "./ProgressBar.jsx";

export default function SidePanel({ stage, progress, total, correctCount, weakPoints }) {
  return (
    <aside className="side-panel">
      <div>
        <p className="eyebrow">Stage</p>
        <h2>{stage.name}</h2>
        <p>{stage.jpName}</p>
      </div>
      <ProgressBar value={progress} max={total} label="Progress" />
      <div className="stat-list">
        <div>
          <span>Correct</span>
          <strong>{correctCount}</strong>
        </div>
        <div>
          <span>Weak Points</span>
          <strong>{weakPoints.length}</strong>
        </div>
      </div>
    </aside>
  );
}
