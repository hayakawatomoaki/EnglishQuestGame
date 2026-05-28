export default function ResultPanel({ question, selectedAnswer, onNext, isLastQuestion }) {
  const isCorrect = selectedAnswer === question.answer;

  return (
    <section className={`result-panel ${isCorrect ? "result-panel--correct" : "result-panel--wrong"}`}>
      <div className="result-panel__summary">
        <strong>{isCorrect ? "Correct!" : "Weak Point Found"}</strong>
        <p>選択肢の中で理由を確認できます。</p>
      </div>

      <button className="primary-button" type="button" onClick={onNext}>
        {isLastQuestion ? "Stage Clear" : "Next Battle"}
      </button>
    </section>
  );
}
