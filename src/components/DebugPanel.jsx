export default function DebugPanel({ validation }) {
  if (validation.isValid) {
    return null;
  }

  return (
    <div className="debug-panel" role="alert">
      <strong>Game data error</strong>
      <ul>
        {validation.errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
}
