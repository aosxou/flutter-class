import { useState, useEffect } from 'react';
import './GamePlay.css';

export default function GamePlay({
  question,
  currentQuestionNum,
  totalQuestions,
  onAnswer,
  onSkip,
  onBack,
  canGoBack
}) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      onSkip();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Reset state for new question
  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [question.id]);

  const handleSelectAnswer = (index) => {
    if (!showFeedback) {
      setSelectedAnswer(index);
      setShowFeedback(true);

      // Auto move to next after 1.5 seconds
      setTimeout(() => {
        onAnswer(index);
      }, 1500);
    }
  };

  const progressPercentage = ((currentQuestionNum - 1) / totalQuestions) * 100;
  const isAnswerCorrect = selectedAnswer === question.answer;

  return (
    <div className="game-play">
      {/* Header */}
      <div className="game-header">
        <div className="progress-info">
          <span className="progress-text">{currentQuestionNum}/{totalQuestions}</span>
        </div>
        <div className="timer-box">
          <span className={`timer ${timeLeft <= 5 ? 'warning' : ''}`}>
            ⏱ {timeLeft}s
          </span>
        </div>
        <div className="category-badge">
          {question.category}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {/* Character */}
      <div className="character-section">
        <div className="character">🦦</div>
        <p className="character-message">
          {!showFeedback ? "화이팅! 너라면 할 수 있어!" : isAnswerCorrect ? "오오! 정답이야! 🎉" : "아쉬워! 다음 문제 파이팅! 💪"}
        </p>
      </div>

      {/* Question */}
      <div className="question-box">
        <p className="question-text">{question.question}</p>
      </div>

      {/* Options */}
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === index ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''
            } ${showFeedback && index === question.answer ? 'show-answer' : ''}`}
            onClick={() => handleSelectAnswer(index)}
            disabled={showFeedback}
          >
            <span className="option-number">{String.fromCharCode(65 + index)}.</span>
            <span className="option-text">{option}</span>
            {showFeedback && index === question.answer && <span className="checkmark">✓</span>}
            {showFeedback && selectedAnswer === index && isAnswerCorrect && <span className="checkmark">✓</span>}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showFeedback && (
        <div className={`explanation ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
          <p><strong>설명:</strong> {question.explanation}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="skip-btn" onClick={onSkip} disabled={showFeedback}>
          건너뛰기
        </button>
        <button
          className="back-btn"
          onClick={onBack}
          disabled={!canGoBack || showFeedback}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
}
