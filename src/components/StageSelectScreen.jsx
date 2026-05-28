import StageCard from "./StageCard.jsx";

export default function StageSelectScreen({ stages, stageThemes, questions, player, onSelectStage }) {
  return (
    <main className="screen shell">
      <header className="screen-header">
        <div>
          <p className="eyebrow">Choose your route</p>
          <h1>English Quest</h1>
        </div>
        <div className="player-chip">
          <strong>Level {player.level}</strong>
          <span>{player.exp} EXP</span>
        </div>
      </header>

      <section className="stage-grid" aria-label="Stage list">
        {stages.map((stage) => (
          <StageCard
            key={stage.id}
            stage={stage}
            theme={stageThemes[stage.id]}
            questionCount={questions.filter((question) => question.stage === stage.id).length}
            onSelect={onSelectStage}
          />
        ))}
      </section>
    </main>
  );
}
