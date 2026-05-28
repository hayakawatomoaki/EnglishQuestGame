import { RotateCcw, Trophy } from "lucide-react";

export default function StageClearScreen({ stage, stats, weakPoints, onBackToStages, onRetry }) {
  return (
    <main className="screen shell clear-screen">
      <section className="clear-hero">
        <Trophy size={42} />
        <p className="eyebrow">Stage Clear</p>
        <h1>{stage.name}</h1>
        <p>{stage.jpName}</p>
      </section>

      <section className="summary-grid" aria-label="Stage result">
        <div>
          <span>Correct</span>
          <strong>{stats.correct}</strong>
        </div>
        <div>
          <span>Answered</span>
          <strong>{stats.answered}</strong>
        </div>
        <div>
          <span>Accuracy</span>
          <strong>{stats.accuracy}%</strong>
        </div>
        <div>
          <span>EXP Gained</span>
          <strong>{stats.expGained}</strong>
        </div>
      </section>

      <section className="weak-review">
        <h2>Weak Point Review</h2>
        {weakPoints.length === 0 ? (
          <p>Perfect run. No weak points saved for this stage.</p>
        ) : (
          <ul>
            {weakPoints.map((point) => (
              <li key={point.id}>
                <strong>{point.prompt}</strong>
                <span>Correct answer: {point.choices[point.answer]}</span>
                <small>{point.explanation}</small>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="clear-actions">
        <button className="secondary-button" type="button" onClick={onRetry}>
          <RotateCcw size={18} />
          Retry Stage
        </button>
        <button className="primary-button" type="button" onClick={onBackToStages}>
          Stage Select
        </button>
      </div>
    </main>
  );
}
