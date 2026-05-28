const DEFAULT_WRONG_REASON =
  "語順・文法・意味のどこかが正解の表現と合っていません。正解の形と比べて確認しましょう。";

export default function Choices({
  choices,
  selectedAnswer,
  correctAnswer,
  explanation,
  choiceExplanations,
  isAnswered,
  onAnswer,
}) {
  return (
    <div className="choices">
      {choices.map((choice, index) => {
        const isSelected = selectedAnswer === index;
        const isCorrect = correctAnswer === index;
        const stateClass = isAnswered
          ? isCorrect
            ? "choice choice--correct"
            : isSelected
              ? "choice choice--wrong"
              : "choice"
          : "choice";

        const feedback = isCorrect ? explanation : choiceExplanations?.[index] || DEFAULT_WRONG_REASON;

        return (
          <button className={stateClass} type="button" key={choice} disabled={isAnswered} onClick={() => onAnswer(index)}>
            <span className="choice__letter">{String.fromCharCode(65 + index)}</span>
            <span className="choice__body">
              <span className="choice__text">{choice}</span>
              {isAnswered && (
                <span className="choice__feedback">
                  <span className="choice__feedback-label">{isCorrect ? "正解" : "理由"}</span>
                  {feedback}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
