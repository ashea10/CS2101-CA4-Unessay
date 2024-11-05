import React from 'react';
import { Book, Users, Shield, Wrench, MessageSquare } from 'lucide-react';

interface Section {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  {
    title: "Communication: The Invisible Threads That Bind Us",
    content: "Communication is a fundamental and omnipresent part of our personal and professional lives. Whether we're actively participating in a conversation or passively receiving information, we are constantly exchanging messages and ideas. This process is especially amplified in our digital, technology-driven world where communication happens through a variety of channels - from face-to-face interactions to email, chat, and online collaboration tools. Understanding the pervasive nature of communication is crucial for software engineers, as effective communication skills are just as important as technical abilities in delivering successful projects and working well on teams.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "The Communication Superpowers of Exceptional Engineers",
    content: "Throughout your studies and early career, certain communication topics are likely to stand out as particularly significant and beneficial. These may include emotional intelligence, cross-cultural communication, technical documentation, and presentation skills. Developing proficiency in these areas can greatly enhance your ability to convey complex technical concepts, collaborate productively with teammates, and engage effectively with stakeholders from diverse backgrounds.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Slaying the Communication Dragons: Overcoming Challenges",
    content: "Even the most experienced communicators face ongoing challenges. For aspiring software engineers, common hurdles may include overcoming speech anxiety, learning to provide and receive constructive feedback, and mastering the art of listening. To address these challenges, it's important to proactively seek out opportunities for improvement, such as joining toastmasters, practicing public speaking, and soliciting honest feedback from peers and mentors. By identifying your communication weaknesses and developing a plan to strengthen them, you'll be well on your way to becoming an effective communicator in both your academic and professional endeavors.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Communication: The Swiss Army Knife of Software Success",
    content: "Many of the communication skills you develop throughout your studies will prove invaluable in your future software engineering career. For example, the ability to write clear and concise technical documentation can help you share complex system designs with cross-functional teams. Similarly, mastering the art of persuasive communication can assist you in advocating for technical solutions, securing buy-in from stakeholders, and navigating organizational politics. Additionally, strong interpersonal skills like active listening and conflict resolution will serve you well in collaborative project work. By recognizing the broader applicability of communication topics beyond the classroom, you can intentionally hone these abilities and leverage them to become a more well-rounded and impactful software engineer.",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Speak Up, Stand Out: Communication Advice for Future Engineers",
    content: "As an aspiring software engineer, make communication a priority. Continuously seek out opportunities to practice public speaking, provide constructive feedback, and tailor your message to diverse audiences. These skills will serve you well throughout your career and help you stand out as a well-rounded professional.",
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