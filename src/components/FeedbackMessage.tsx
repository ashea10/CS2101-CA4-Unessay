import { CheckCircle2, XCircle } from 'lucide-react';

interface FeedbackMessageProps {
  message: string;
  isCorrect: boolean;
}

export function FeedbackMessage({ message, isCorrect }: FeedbackMessageProps) {
  return (
    <div
      className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
        isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}
    >
      {isCorrect ? (
        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
      )}
      <p className="text-sm">{message}</p>
    </div>
  );
}