export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && (
        <p>
          {winner === "K"
            ? " K has 3 squares covered. But Zeynep is still the winner..."
            : `${winner} won!`}{" "}
        </p>
      )}
      {!winner && <p>No one filled 3 consecutive squares. So Zeynep won...</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
