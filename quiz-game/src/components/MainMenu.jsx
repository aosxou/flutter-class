import './MainMenu.css';

export default function MainMenu({ onStartGame }) {
  return (
    <div className="main-menu">
      {/* Title */}
      <div className="menu-header">
        <div className="logo">🦦</div>
        <h1 className="title">개발자 퀴즈</h1>
        <p className="subtitle">자료구조, 알고리즘, 코딩테스트, 시스템/네트워크</p>
      </div>

      {/* Character Welcome */}
      <div className="menu-character">
        <div className="character-large">🦦</div>
        <p className="welcome-message">안녕! 나는 띠띠야. 함께 퀴즈를 풀어볼까?</p>
      </div>

      {/* Game Info */}
      <div className="game-info">
        <div className="info-item">
          <span className="icon">📝</span>
          <span className="text">총 40문제</span>
        </div>
        <div className="info-item">
          <span className="icon">⏱</span>
          <span className="text">문제당 30초</span>
        </div>
        <div className="info-item">
          <span className="icon">📊</span>
          <span className="text">즉시 피드백</span>
        </div>
      </div>

      {/* Difficulty Selection */}
      <div className="difficulty-section">
        <h2>난이도를 선택하세요</h2>

        <div className="difficulty-buttons">
          <button
            className="difficulty-btn easy"
            onClick={() => onStartGame('easy')}
          >
            <span className="difficulty-label">쉬움</span>
            <span className="difficulty-desc">초급자용</span>
          </button>

          <button
            className="difficulty-btn normal"
            onClick={() => onStartGame('normal')}
          >
            <span className="difficulty-label">보통</span>
            <span className="difficulty-desc">중급자용 (추천)</span>
          </button>

          <button
            className="difficulty-btn hard"
            onClick={() => onStartGame('hard')}
          >
            <span className="difficulty-label">어려움</span>
            <span className="difficulty-desc">고급자용</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="menu-footer">
        <p>점수를 기록하고 다른 개발자들과 경쟁하세요! 🚀</p>
      </div>
    </div>
  );
}
