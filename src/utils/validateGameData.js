export function validateGameData({ stages, stageThemes, questions, enemyArt }) {
  const errors = [];
  const stageIds = new Set(stages.map((stage) => stage.id));
  const enemyIds = new Set(Object.keys(enemyArt));

  for (const stage of stages) {
    if (!stageThemes[stage.id]) {
      errors.push(`Stage "${stage.id}" is missing a stage theme.`);
    }

    const questionCount = questions.filter((question) => question.stage === stage.id).length;
    if (questionCount < 1) {
      errors.push(`Stage "${stage.id}" must have at least one question.`);
    }
  }

  for (const question of questions) {
    if (!stageIds.has(question.stage)) {
      errors.push(`Question "${question.id}" uses an unknown stage "${question.stage}".`);
    }

    if (!enemyIds.has(question.enemy)) {
      errors.push(`Question "${question.id}" uses an unknown enemy "${question.enemy}".`);
    }

    if (!Array.isArray(question.choices) || question.choices.length !== 4) {
      errors.push(`Question "${question.id}" must have exactly 4 choices.`);
    }

    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer > 3) {
      errors.push(`Question "${question.id}" answer must be an integer from 0 to 3.`);
    }

    if (!question.prompt || question.prompt.trim().length === 0) {
      errors.push(`Question "${question.id}" prompt must not be empty.`);
    }

    if (!question.explanation || question.explanation.trim().length === 0) {
      errors.push(`Question "${question.id}" explanation must not be empty.`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
