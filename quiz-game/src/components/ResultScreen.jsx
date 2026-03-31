import './ResultScreen.css';

export default function ResultScreen({
  score,
  totalQuestions,
  categoryScores,
  difficulty,
  onRetry
}) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const categoryList = Object.keys(categoryScores);

  const getMessage = () => {
    if (percentage >= 90) return "천재네! 🏆";
    if (percentage >= 80) return "잘했어! 🌟";
    if (percentage >= 70) return "좋았어! 👍";
    if (percentage >= 60) return "괜찮았어! 💪";
    return "다시 도전해봐! 🚀";
  };

  return (
    <div className="result-screen">
      {/* Character Celebration */}
      <div className="result-character">
        <div className="character-big">🦦</div>
        <p className="result-message">{getMessage()}</p>
      </div>

      {/* Score Display */}
      <div className="score-box">
        <div className="score-main">
          <span className="score-number">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>
        <p className="score-label">점수</p>
      </div>

      {/* Percentage */}
      <div className="percentage-box">
        <span className="percentage">{percentage}%</span>
        <div className="percentage-bar">
          <div className="percentage-fill" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>

      {/* Category Scores */}
      <div className="category-results">
        <h3>카테고리별 성적</h3>
        <div className="category-list">
          {categoryList.map((category) => (
            <div key={category} className="category-item">
              <div className="category-name">{category}</div>
              <div className="category-score">
                {categoryScores[category].correct}/{categoryScores[category].total}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Info */}
      <div className="difficulty-info">
        <span>난이도: <strong>{difficulty === 'easy' ? '쉬움' : difficulty === 'hard' ? '어려움' : '보통'}</strong></span>
      </div>

      {/* Action Buttons */}
      <div className="result-buttons">
        <button className="replay-btn" onClick={onRetry}>
          다시 풀기
        </button>
      </div>
    </div>
  );
}
