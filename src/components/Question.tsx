import React, { useState, useEffect } from 'react';
import type { Question as QuestionType } from '../types';
import { FeedbackMessage } from './FeedbackMessage';

interface QuestionProps {
  question: QuestionType;
  onCorrectAnswer: () => void;
  onIncorrectAnswer: () => void;
}

export function Question({ question, onCorrectAnswer, onIncorrectAnswer }: QuestionProps) {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedChoice(null);
    setShowFeedback(false);
  }, [question]);

  const handleChoiceSelect = (index: number) => {
    setSelectedChoice(index);
    setShowFeedback(true);
    if (question.choices[index].isCorrect) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{question.title}</h2>
      <p className="text-gray-600 mb-6">{question.description}</p>
      
      <div className="space-y-3">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceSelect(index)}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              selectedChoice === index
                ? choice.isCorrect
                  ? 'bg-green-100 border-green-500'
                  : 'bg-red-100 border-red-500'
                : 'bg-gray-50 hover:bg-gray-100 border-transparent'
            } border-2`}
          >
            {choice.text}
          </button>
        ))}
      </div>

      {showFeedback && selectedChoice !== null && (
        <FeedbackMessage
          message={question.choices[selectedChoice].feedback}
          isCorrect={question.choices[selectedChoice].isCorrect}
        />
      )}
    </div>
  );
}