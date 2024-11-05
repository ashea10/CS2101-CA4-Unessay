import React from 'react';
import { Book, Users, Shield, Wrench, MessageSquare } from 'lucide-react';

interface Section {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  {
    title: "The Silent Dance: My Journey Through the Communication Maze",
    content: "Throughout my CS journey, I've discovered that communication isn't just about the words we speak—it's in every line of code I write, every pull request I submit, and every standup I attend. Simply put - it is omnipresent being in every aspect of my work. Whether I'm actively participating in team discussions or simply responding to messages, I'm constantly sending and receiving signals that shape my effectiveness as a developer. Communication impacts how others see and interpret us. In our digital world, I've learned that even my silence communicates something—communication has become the invisible thread weaving together every aspect of my professional life, turning silence into a powerful statement and every interaction into an opportunity for growth.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Lightbulb Moments: Communication Milestones That Changed My Game",
    content: "Looking back at my learning path, three communication skills have fundamentally transformed how I work: emotional intelligence in team dynamics, cross-cultural communication in global projects, and technical documentation. These weren't just academic concepts—they became real tools when I had to navigate team conflicts, collaborate with international teammates (during internships and classes), and explain my code to others. Each skill has built upon the others, creating a foundation for effective collaboration. These skills are significant simply because of their pervasiveness - no matter where you go, as a software engineer you will be bound to experience situations (like those above) in which these skills are crucial. No amount of technical knowledge can compensate for these three fundamentally significant communication skills.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Breaking Through My Communication Barriers",
    content: "My biggest hurdle? Public speaking anxiety, especially during technical presentations. Every time I stood up to present my projects, my heart would race and my thoughts would scatter. Not to say that I’m perfect now, but I’m actively working on it, utilizing every opportunity I get to showcase my public speaking. Even if not relevant, I want to take each and every opportunity to speak and present - each presentation is a small step forward, and I'm already seeing improvement in my confidence and delivery. Practice makes perfect - getting out of my comfort zone and starting to practice is the solution which I have identified, and it seems to be working, slowly but surely.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "My Communication Toolkit: From Classroom to Code",
    content: "The most valuable skills in my toolkit are clear technical writing and active listening. When I documented my first major project, I realized these skills weren't just for assignments and mods like these—they're essential for my future as a software engineer. I use technical writing daily in my project documentation, and active listening helps me understand project requirements better. Many a times we “just want to dive into it” - we fail to listen first to understand what truly the requirements are. These skills have already improved my team collaborations and will be crucial in my future engineering role.",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Level Up Your Communication Game",
    content: "Simply put - stop disregarding “communication” as irrelevant to you as a SWE. Start treating communication skills as important as your technical skills—because they are. Practice explaining complex concepts in simple terms, learn to read the room in team meetings (or classes), and always seek feedback on your communication style. Remember: great code alone doesn't make a great engineer. Your ability to collaborate, explain, and influence is what will set you miles apart in your software engineering career.",
    icon: <Book className="w-6 h-6" />
  }
];

export function ResourceSection() {
  const [activeSection, setActiveSection] = React.useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/3 bg-gray-50 p-4 border-r border-gray-200">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-full text-left p-4 rounded-lg mb-2 flex items-center gap-3 transition-all ${
                    activeSection === index
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className={`${
                    activeSection === index ? 'text-indigo-600' : 'text-gray-500'
                  }`}>
                    {section.icon}
                  </div>
                  <span className="font-medium text-sm">{section.title}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="w-2/3 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  {sections[activeSection].icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {sections[activeSection].title}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {sections[activeSection].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}