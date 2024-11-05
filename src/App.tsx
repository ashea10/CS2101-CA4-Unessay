import { useState } from 'react';
import { Brain, Home } from 'lucide-react';
import { Question } from './components/Question';
import { Walkthrough } from './components/Walkthrough';
import { ResourceSection } from './components/ResourceSection';
import { QuizSelection } from './components/QuizSelection';
import { QuizCompletion } from './components/QuizCompletion';
import { QuizGroup, questions } from './types';

type Tab = 'home' | 'walkthrough' | 'resources' | 'quiz-types' | 'quiz';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedQuizType, setSelectedQuizType] = useState<QuizGroup | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleSelectQuizType = (quizType: QuizGroup) => {
    setSelectedQuizType(quizType);
    setGameStarted(true);
    setActiveTab('quiz');
    setCurrentQuestionIndex(0);
    setQuizComplete(false);
    setShowNextButton(false);
  };

  const handleCorrectAnswer = () => {
    setShowNextButton(true);
  };

  const handleIncorrectAnswer = () => {
    setShowNextButton(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= getQuizQuestions().length - 1) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowNextButton(false);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedQuizType(null);
    setQuizComplete(false);
    setActiveTab('home');
  };

  const getQuizQuestions = () => {
    if (!selectedQuizType) return [];
    
    if (selectedQuizType === QuizGroup.GENERAL) {
      // For general quiz, randomly select 10 questions from all groups
      return [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    }
    
    // For specific quiz types, return all questions of that type
    return questions.filter(q => q.group === selectedQuizType);
  };

  const renderContent = () => {
    if (activeTab === 'walkthrough') {
      return <Walkthrough />;
    }

    if (activeTab === 'resources') {
      return <ResourceSection />;
    }

    if (activeTab === 'quiz-types') {
      return <QuizSelection onSelectQuiz={handleSelectQuizType} />;
    }

    if (!gameStarted) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Brain className="w-16 h-16 text-indigo-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Software Engineer's Communication Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Embark on an interactive journey to master the art of communication in software engineering. 
              Face real-world scenarios and learn how to navigate complex communication challenges.
            </p>
            <button
              onClick={() => setActiveTab('quiz-types')}
              className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Start Journey
            </button>
          </div>
        </div>
      );
    }

    if (quizComplete) {
      return (
        <QuizCompletion
          totalQuestions={getQuizQuestions().length}
          onGoHome={resetGame}
          onRetake={() => {
            setCurrentQuestionIndex(0);
            setQuizComplete(false);
            setShowNextButton(false);
          }}
          onNewQuiz={() => {
            setActiveTab('quiz-types');
            setGameStarted(false);
            setCurrentQuestionIndex(0);
            setQuizComplete(false);
            setShowNextButton(false);
          }}
          onViewResources={() => {
            setActiveTab('resources');
            setGameStarted(false);
          }}
        />
      );
    }

    const quizQuestions = getQuizQuestions();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={resetGame}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Home
                </button>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <Question
            question={quizQuestions[currentQuestionIndex]}
            onCorrectAnswer={handleCorrectAnswer}
            onIncorrectAnswer={handleIncorrectAnswer}
          />

          {showNextButton && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`py-4 px-3 text-sm font-medium border-b-2 ${
                activeTab === 'home'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('walkthrough')}
              className={`py-4 px-3 text-sm font-medium border-b-2 ${
                activeTab === 'walkthrough'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Walkthrough
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-3 text-sm font-medium border-b-2 ${
                activeTab === 'resources'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Personal Thoughts
            </button>
            <button
              onClick={() => setActiveTab('quiz-types')}
              className={`py-4 px-3 text-sm font-medium border-b-2 ${
                activeTab === 'quiz-types'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Quiz Types
            </button>
          </div>
        </div>
      </nav>

      {renderContent()}
    </>
  );
}

export default App;