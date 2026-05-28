import { ChevronRight } from "lucide-react";

export default function StageCard({ stage, questionCount, theme, onSelect }) {
  return (
    <button className="stage-card" type="button" onClick={() => onSelect(stage.id)}>
      <span className="stage-card__accent" style={{ background: theme.accent }} />
      <span className="stage-card__body">
        <span className="stage-card__topline">Level {stage.recommendedLevel}</span>
        <strong>{stage.name}</strong>
        <span className="stage-card__jp">{stage.jpName}</span>
        <span>{stage.topic}</span>
        <small>{stage.description}</small>
        <span className="stage-card__footer">
          {questionCount} questions
          <ChevronRight size={18} />
        </span>
      </span>
    </button>
  );
}
