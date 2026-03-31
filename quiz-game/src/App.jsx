import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import ResultScreen from './components/ResultScreen';
import MainMenu from './components/MainMenu';
import { questions_data as questions, categories } from './constants/questions';

export default function App() {
  const [gameState, setGameState] = useState('menu'); // menu, playing, result
  const [difficulty, setDifficulty] = useState('normal');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [categoryScores, setCategoryScores] = useState({});

  const handleStartGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setCategoryScores(
      categories.reduce((acc, cat) => {
        acc[cat] = { correct: 0, total: 0 };
        return acc;
      }, {})
    );
  };

  const handleAnswerQuestion = (selectedIndex) => {
    const questionData = questions[difficulty][currentQuestion];
    const isCorrect = selectedIndex === questionData.answer;

    // Update score
    if (isCorrect) {
      setScore(score + 1);
    }

    // Update category scores
    setCategoryScores(prev => ({
      ...prev,
      [questionData.category]: {
        correct: prev[questionData.category].correct + (isCorrect ? 1 : 0),
        total: prev[questionData.category].total + 1
      }
    }));

    // Store answer
    setAnswers([...answers, {
      questionId: questionData.id,
      selected: selectedIndex,
      correct: questionData.answer,
      isCorrect
    }]);

    // Move to next question or finish
    if (currentQuestion < questions[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  const handleSkipQuestion = () => {
    const questionData = questions[difficulty][currentQuestion];

    // Store answer as skipped
    setAnswers([...answers, {
      questionId: questionData.id,
      selected: -1,
      correct: questionData.answer,
      isCorrect: false
    }]);

    // Update category scores
    setCategoryScores(prev => ({
      ...prev,
      [questionData.category]: {
        correct: prev[questionData.category].correct,
        total: prev[questionData.category].total + 1
      }
    }));

    // Move to next question
    if (currentQuestion < questions[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestion > 0) {
      // Remove last answer
      const lastAnswer = answers[answers.length - 1];
      setAnswers(answers.slice(0, -1));

      // Restore score and category scores
      if (lastAnswer.isCorrect) {
        setScore(score - 1);
      }

      const questionData = questions[difficulty][currentQuestion - 1];
      setCategoryScores(prev => ({
        ...prev,
        [questionData.category]: {
          correct: prev[questionData.category].correct - (lastAnswer.isCorrect ? 1 : 0),
          total: prev[questionData.category].total - 1
        }
      }));

      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRetryGame = () => {
    setGameState('menu');
  };

  return (
    <div className="app">
      {gameState === 'menu' && (
        <MainMenu onStartGame={handleStartGame} />
      )}

      {gameState === 'playing' && (
        <GamePlay
          question={questions[difficulty][currentQuestion]}
          currentQuestionNum={currentQuestion + 1}
          totalQuestions={questions[difficulty].length}
          onAnswer={handleAnswerQuestion}
          onSkip={handleSkipQuestion}
          onBack={handleBackQuestion}
          canGoBack={currentQuestion > 0}
        />
      )}

      {gameState === 'result' && (
        <ResultScreen
          score={score}
          totalQuestions={questions[difficulty].length}
          categoryScores={categoryScores}
          difficulty={difficulty}
          onRetry={handleRetryGame}
        />
      )}
    </div>
  );
}
