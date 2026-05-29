import BattleField from "./BattleField.jsx";
import QuestionPanel from "./QuestionPanel.jsx";
import ResultPanel from "./ResultPanel.jsx";
import SidePanel from "./SidePanel.jsx";

export default function BattleScreen({
  stage,
  question,
  enemy,
  playerHp,
  playerMaxHp,
  enemyHp,
  selectedAnswer,
  isAnswered,
  progress,
  total,
  correctCount,
  weakPoints,
  onAnswer,
  onNext,
}) {
  return (
    <main className="screen shell battle-layout">
      <SidePanel
        stage={stage}
        progress={progress}
        total={total}
        correctCount={correctCount}
        weakPoints={weakPoints}
      />

      <div className="battle-main">
        <BattleField playerHp={playerHp} playerMaxHp={playerMaxHp} enemy={enemy} enemyHp={enemyHp} />
        <QuestionPanel
          question={question}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onAnswer={onAnswer}
          onNext={onNext}
          isLastQuestion={progress === total}
        />
        {isAnswered && (
          <ResultPanel
            question={question}
            selectedAnswer={selectedAnswer}
            onNext={onNext}
            isLastQuestion={progress === total}
          />
        )}
      </div>
    </main>
  );
}
