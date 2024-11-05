import React from 'react';
import { BookOpen, Target, ArrowUpRight } from 'lucide-react';

export function Walkthrough() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Purpose</h3>
                  <p className="text-gray-600">
                    This interactive game helps you develop essential communication skills 
                    for software engineering through real-world scenarios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Learning Process</h3>
                  <p className="text-gray-600">
                    Each scenario presents a common communication challenge. Choose your 
                    response and receive detailed feedback on your choice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  <ArrowUpRight className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Progression</h3>
                  <p className="text-gray-600">
                    You must select the correct answer to proceed. Each incorrect choice 
                    provides feedback to help you understand better approaches to communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}