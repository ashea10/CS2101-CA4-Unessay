import { Users, Target, MessageCircle, Globe, Sparkles } from 'lucide-react';
import { QuizGroup, quizTypes } from '../types';

const icons = {
  Users,
  Target,
  MessageCircle,
  Globe,
  Sparkles
};

interface QuizSelectionProps {
  onSelectQuiz: (quizType: QuizGroup) => void;
}

export function QuizSelection({ onSelectQuiz }: QuizSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Communication Journey</h1>
          <p className="text-xl text-gray-600">Select a quiz type to focus on specific communication skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizTypes.map((type) => {
            const IconComponent = icons[type.icon as keyof typeof icons];
            
            return (
              <button
                key={type.id}
                onClick={() => onSelectQuiz(type.id)}
                className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:scale-105 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{type.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="space-y-2">
                  {type.focusPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}