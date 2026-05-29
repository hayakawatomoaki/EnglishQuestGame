import Choices from "./Choices.jsx";

export default function QuestionPanel({ question, selectedAnswer, isAnswered, onAnswer, onNext, isLastQuestion }) {
  return (
    <section className="question-panel">
      <p className="eyebrow">Question</p>
      <h2>{question.prompt}</h2>
      <Choices
        choices={question.choices}
        selectedAnswer={selectedAnswer}
        correctAnswer={question.answer}
        explanation={question.explanation}
        choiceExplanations={question.choiceExplanations}
        isAnswered={isAnswered}
        onAnswer={onAnswer}
        onNext={onNext}
        isLastQuestion={isLastQuestion}
      />
    </section>
  );
}
