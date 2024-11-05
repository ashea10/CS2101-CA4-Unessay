import { Home, RefreshCw, List, BookOpen } from 'lucide-react';

interface QuizCompletionProps {
  totalQuestions: number;
  onGoHome: () => void;
  onRetake: () => void;
  onNewQuiz: () => void;
  onViewResources: () => void;
}

export function QuizCompletion({
  onGoHome,
  onRetake,
  onNewQuiz,
  onViewResources
}: QuizCompletionProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="inline-block p-4 bg-indigo-100 rounded-full">
        
                <div className="text-6xl">💪👏🎉</div>
              
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Quiz Complete!
          </h2>
          
          <p className="text-xl text-gray-600 mb-4">
            Hope You Had Fun!
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
                className="h-full rounded-full transition-all duration-1000 ease-out bg-indigo-600"
                style={{ width: '100%' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onGoHome}
            className="flex items-center justify-center gap-2 p-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>
          
          <button
            onClick={onRetake}
            className="flex items-center justify-center gap-2 p-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Retake Quiz
          </button>
          
          <button
            onClick={onNewQuiz}
            className="flex items-center justify-center gap-2 p-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <List className="w-5 h-5" />
            Try Another Quiz
          </button>
          
          <button
            onClick={onViewResources}
            className="flex items-center justify-center gap-2 p-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            View Resources
          </button>
        </div>
      </div>
    </div>
  );
}