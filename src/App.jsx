import { useMemo, useState } from "react";
import BattleScreen from "./components/BattleScreen.jsx";
import DebugPanel from "./components/DebugPanel.jsx";
import StageClearScreen from "./components/StageClearScreen.jsx";
import StageSelectScreen from "./components/StageSelectScreen.jsx";
import TitleScreen from "./components/TitleScreen.jsx";
import { enemyArt } from "./data/enemies.js";
import { questions } from "./data/questions.js";
import { stages, stageThemes } from "./data/stages.js";
import { validateGameData } from "./utils/validateGameData.js";

const PLAYER_MAX_HP = 80;
const CORRECT_DAMAGE = 12;
const WRONG_DAMAGE = 14;
const EXP_PER_CORRECT = 10;

function getLevel(exp) {
  return Math.floor(exp / 50) + 1;
}

function getStageQuestions(stageId) {
  return questions.filter((question) => question.stage === stageId);
}

function createBattleState(stageId) {
  const stageQuestions = getStageQuestions(stageId);
  const firstQuestion = stageQuestions[0];
  const firstEnemy = enemyArt[firstQuestion.enemy];

  return {
    stageId,
    questionIndex: 0,
    playerHp: PLAYER_MAX_HP,
    enemyHp: firstEnemy.maxHp,
    selectedAnswer: null,
    correctCount: 0,
    weakPoints: [],
  };
}

export default function App() {
  const [screen, setScreen] = useState("title");
  const [playerExp, setPlayerExp] = useState(0);
  const [battle, setBattle] = useState(null);
  const [lastResult, setLastResult] = useState(null);

  const validation = useMemo(
    () => validateGameData({ stages, stageThemes, questions, enemyArt }),
    [],
  );

  const player = {
    exp: playerExp,
    level: getLevel(playerExp),
  };

  function startStage(stageId) {
    setBattle(createBattleState(stageId));
    setLastResult(null);
    setScreen("battle");
  }

  function answerQuestion(answerIndex) {
    setBattle((current) => {
      const stageQuestions = getStageQuestions(current.stageId);
      const question = stageQuestions[current.questionIndex];
      const isCorrect = answerIndex === question.answer;
      const nextEnemyHp = isCorrect ? Math.max(0, current.enemyHp - CORRECT_DAMAGE) : current.enemyHp;
      const nextPlayerHp = isCorrect ? current.playerHp : Math.max(0, current.playerHp - WRONG_DAMAGE);
      const nextWeakPoints = isCorrect ? current.weakPoints : [...current.weakPoints, question];

      return {
        ...current,
        selectedAnswer: answerIndex,
        correctCount: isCorrect ? current.correctCount + 1 : current.correctCount,
        enemyHp: nextEnemyHp,
        playerHp: nextPlayerHp,
        weakPoints: nextWeakPoints,
      };
    });
  }

  function goToNextQuestion() {
    const stageQuestions = getStageQuestions(battle.stageId);
    const answered = battle.questionIndex + 1;
    const isStageFinished = answered >= stageQuestions.length;

    if (isStageFinished) {
      const expGained = battle.correctCount * EXP_PER_CORRECT;
      const accuracy = Math.round((battle.correctCount / stageQuestions.length) * 100);

      setPlayerExp((current) => current + expGained);
      setLastResult({
        correct: battle.correctCount,
        answered: stageQuestions.length,
        accuracy,
        expGained,
        weakPoints: battle.weakPoints,
        stageId: battle.stageId,
      });
      setScreen("clear");
      return;
    }

    const nextQuestion = stageQuestions[answered];
    const nextEnemy = enemyArt[nextQuestion.enemy];

    setBattle((current) => ({
      ...current,
      questionIndex: current.questionIndex + 1,
      enemyHp: nextEnemy.maxHp,
      selectedAnswer: null,
    }));
  }

  if (!validation.isValid) {
    return <DebugPanel validation={validation} />;
  }

  if (screen === "title") {
    return <TitleScreen onStart={() => setScreen("stages")} />;
  }

  if (screen === "stages") {
    return (
      <StageSelectScreen
        stages={stages}
        stageThemes={stageThemes}
        questions={questions}
        player={player}
        onSelectStage={startStage}
      />
    );
  }

  if (screen === "clear" && lastResult) {
    const clearedStage = stages.find((stage) => stage.id === lastResult.stageId);

    return (
      <StageClearScreen
        stage={clearedStage}
        stats={lastResult}
        weakPoints={lastResult.weakPoints}
        onBackToStages={() => setScreen("stages")}
        onRetry={() => startStage(lastResult.stageId)}
      />
    );
  }

  const stageQuestions = getStageQuestions(battle.stageId);
  const currentQuestion = stageQuestions[battle.questionIndex];
  const currentEnemy = enemyArt[currentQuestion.enemy];
  const currentStage = stages.find((stage) => stage.id === battle.stageId);

  return (
    <BattleScreen
      stage={currentStage}
      question={currentQuestion}
      enemy={currentEnemy}
      playerHp={battle.playerHp}
      playerMaxHp={PLAYER_MAX_HP}
      enemyHp={battle.enemyHp}
      selectedAnswer={battle.selectedAnswer}
      isAnswered={battle.selectedAnswer !== null}
      progress={battle.questionIndex + 1}
      total={stageQuestions.length}
      correctCount={battle.correctCount}
      weakPoints={battle.weakPoints}
      onAnswer={answerQuestion}
      onNext={goToNextQuestion}
    />
  );
}
