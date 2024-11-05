export interface Choice {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Question {
  title: string;
  description: string;
  choices: Choice[];
  group: QuizGroup;
}

export enum QuizGroup {
  INTERPERSONAL = "interpersonal",
  AUDIENCE = "audience",
  FEEDBACK = "feedback",
  CULTURAL = "cultural",
  GENERAL = "general"
}

export interface QuizType {
  id: QuizGroup;
  title: string;
  description: string;
  icon: string;
  focusPoints: string[];
}

export const quizTypes: QuizType[] = [
  {
    id: QuizGroup.INTERPERSONAL,
    title: "Interpersonal Communication & Team Dynamics",
    description: "Master the art of team interactions and relationship building",
    icon: "Users",
    focusPoints: [
      "Team collaboration and conflict resolution",
      "Emotional intelligence in workplace interactions",
      "Building trust and rapport within teams",
      "Effective meeting participation"
    ]
  },
  {
    id: QuizGroup.AUDIENCE,
    title: "Audience Awareness & Adaptation",
    description: "Learn to tailor your message for different audiences",
    icon: "Target",
    focusPoints: [
      "Technical vs non-technical communication",
      "Presentation skills for diverse audiences",
      "Documentation for different stakeholders",
      "Clear and concise messaging"
    ]
  },
  {
    id: QuizGroup.FEEDBACK,
    title: "Constructive Feedback & Mentorship",
    description: "Develop skills for effective feedback and mentoring",
    icon: "MessageCircle",
    focusPoints: [
      "Giving and receiving feedback",
      "Mentoring junior developers",
      "Code review communication",
      "Growth-oriented feedback"
    ]
  },
  {
    id: QuizGroup.CULTURAL,
    title: "Cross-Cultural & Digital Communication",
    description: "Navigate multicultural and remote work environments",
    icon: "Globe",
    focusPoints: [
      "Cultural sensitivity in communication",
      "Remote team collaboration",
      "Time zone management",
      "Digital communication etiquette"
    ]
  },
  {
    id: QuizGroup.GENERAL,
    title: "General Communication Skills",
    description: "Test your knowledge across all communication aspects",
    icon: "Sparkles",
    focusPoints: [
      "Comprehensive communication assessment",
      "Random selection from all categories",
      "Varied scenarios and challenges",
      "Overall communication proficiency"
    ]
  }
];

export const questions: Question[] = [
  // Group 1: Interpersonal Communication & Team Dynamics
  {
    title: "Handling Criticism During Code Review",
    description: "A teammate points out issues in your code during a review and seems a bit blunt. How do you respond?",
    group: QuizGroup.INTERPERSONAL,
    choices: [
      {
        text: "Thank them and acknowledge their points, then explain any unclear areas of your code",
        isCorrect: true,
        feedback: "Good choice! Accepting feedback positively and clarifying where needed maintains team harmony and keeps code reviews constructive."
      },
      {
        text: "Defend your code and argue back point-by-point",
        isCorrect: false,
        feedback: "This can make the review tense and reduce trust. It's best to take a more collaborative approach."
      },
      {
        text: "Ignore their comments and continue as before",
        isCorrect: false,
        feedback: "Ignoring feedback can create misunderstandings and missed opportunities for improvement. Acknowledge their input for better teamwork."
      }
    ]
  },
  {
    title: "Dominating Teammate in Meetings",
    description: "One team member tends to dominate discussions. How do you handle this?",
    group: QuizGroup.INTERPERSONAL,
    choices: [
      {
        text: "Directly tell them they talk too much",
        isCorrect: false,
        feedback: "This can come off as abrasive. It's better to approach it more diplomatically."
      },
      {
        text: "Ignore the behavior and let them continue",
        isCorrect: false,
        feedback: "Ignoring the issue can discourage quieter team members from sharing. Aim for inclusive participation."
      },
      {
        text: "Gently suggest that everyone shares their thoughts and encourage quieter team members to contribute",
        isCorrect: true,
        feedback: "Great choice! This approach ensures all voices are heard without confrontation."
      }
    ]
  },
  {
    title: "Receiving Constructive Feedback",
    description: "A senior engineer gives you constructive feedback on your design. What's the best way to respond?",
    group: QuizGroup.INTERPERSONAL,
    choices: [
      {
        text: "Point out the flaws in their feedback",
        isCorrect: false,
        feedback: "This can come across as defensive. Try to approach feedback with an open mind."
      },
      {
        text: "Thank them, and ask if they have further suggestions",
        isCorrect: true,
        feedback: "Perfect! This shows openness to learning and allows you to benefit from their experience."
      },
      {
        text: "Stay silent and make the changes without acknowledging",
        isCorrect: false,
        feedback: "It's best to respond positively and show appreciation for constructive feedback."
      }
    ]
  },
  {
    title: "Addressing Missed Deadlines",
    description: "A team member keeps missing deadlines due to personal issues. How do you approach them?",
    group: QuizGroup.INTERPERSONAL,
    choices: [
      {
        text: "Have a private chat to understand their situation and find ways to support them",
        isCorrect: true,
        feedback: "Excellent! Showing empathy and working together to find solutions fosters trust and maintains team cohesion."
      },
      {
        text: "Report them to your manager immediately",
        isCorrect: false,
        feedback: "Reporting without first discussing can create unnecessary conflict. Private conversations should come first."
      },
      {
        text: "Give them another deadline without discussion",
        isCorrect: false,
        feedback: "This approach doesn't address the underlying issue. A supportive conversation would be more helpful."
      }
    ]
  },
  // Group 2: Audience Awareness & Adaptation
  {
    title: "Explaining a Bug to a Non-Technical Team Member",
    description: "How do you describe a bug in a way that a non-technical team member can understand?",
    group: QuizGroup.AUDIENCE,
    choices: [
      {
        text: "Use technical jargon and provide full details",
        isCorrect: false,
        feedback: "This might confuse a non-technical person. Keep it simple and relatable."
      },
      {
        text: "Use simple language and relate it to something they're familiar with",
        isCorrect: true,
        feedback: "Great! Analogies and simple language make technical issues easier for non-technical people to grasp."
      },
      {
        text: "Tell them it's complicated and they wouldn't understand",
        isCorrect: false,
        feedback: "Avoid this approach, as it's dismissive. Help them understand with simpler explanations."
      }
    ]
  },
  {
    title: "Mixed Audience in a Presentation",
    description: "You're presenting a technical concept to a mixed audience. What's your approach?",
    group: QuizGroup.AUDIENCE,
    choices: [
      {
        text: "Use visuals and analogies to cater to both technical and non-technical attendees",
        isCorrect: true,
        feedback: "Excellent! Visuals and analogies help bridge the gap for different audience types."
      },
      {
        text: "Stick to a technical explanation only",
        isCorrect: false,
        feedback: "This might lose the interest of non-technical listeners. Aim to balance both perspectives."
      },
      {
        text: "Focus only on non-technical explanations",
        isCorrect: false,
        feedback: "Ignoring technical details might leave the technical team members unsatisfied. Try to balance both."
      }
    ]
  },
  {
    title: "Executive Project Updates",
    description: "How do you present project updates to senior executives who are short on time?",
    group: QuizGroup.AUDIENCE,
    choices: [
      {
        text: "Summarize key points and focus on the business impact",
        isCorrect: true,
        feedback: "Perfect! Executives usually want a high-level overview with clear business relevance."
      },
      {
        text: "Detail every technical step taken so far",
        isCorrect: false, 
        feedback: "This level of detail is usually unnecessary for executives. Keep it high-level."
      },
      {
        text: "Send a lengthy email with detailed documentation",
        isCorrect: false,
        feedback: "Avoid lengthy documents for executive updates. A concise overview is more effective."
      }
    ]
  },
  {
    title: "Technical Documentation",
    description: "You're writing documentation for other developers. What's the best approach?",
    group: QuizGroup.AUDIENCE,
    choices: [
      {
        text: "Provide detailed, technical information with code examples",
        isCorrect: true,
        feedback: "Great choice! Developers usually prefer detailed technical docs with examples."
      },
      {
        text: "Keep it very brief and high-level",
        isCorrect: false,
        feedback: "Developers typically need detail, so keep it thorough yet organized."
      },
      {
        text: "Write only in plain language with minimal technical details",
        isCorrect: false,
        feedback: "Technical audiences need specific details. Plain language without depth may be unhelpful."
      }
    ]
  },
  {
    title: "Presenting Data Analytics",
    description: "You're presenting data analytics to marketing. What's the best approach?",
    group: QuizGroup.AUDIENCE,
    choices: [

      {
        text: "Describe each statistical method used in the analysis",
        isCorrect: false,
        feedback: "Too much detail can overwhelm non-technical listeners. Focus on actionable insights instead."
      },
      {
        text: "Highlight key takeaways and use visuals to support your points",
        isCorrect: true,
        feedback: "Excellent! Key points and visuals help non-technical teams understand data's relevance."
      },
      {
        text: "Provide the raw data and let them interpret it",
        isCorrect: false,
        feedback: "Raw data might be hard to interpret without context. Summarize the data's meaning and impact."
      }
    ]
  },
  // Group 3: Constructive Feedback & Mentorship
  {
    title: "Giving Feedback to a Junior Developer",
    description: "A junior developer makes repeated mistakes in their code. How do you address this?",
    group: QuizGroup.FEEDBACK,
    choices: [

      {
        text: "List all their mistakes at once",
        isCorrect: false,
        feedback: "This can overwhelm them. A focused approach is more constructive."
      },
      {
        text: "Avoid addressing the issue altogether",
        isCorrect: false,
        feedback: "Avoiding the issue can hinder their growth. Constructive feedback is important for development."
      },
      {
        text: "Highlight one area for improvement and provide guidance on how to fix it",
        isCorrect: true,
        feedback: "Great! Focusing on one area and offering guidance can be more effective and supportive."
      }
    ]
  },
  {
    title: "Providing Feedback After a Presentation",
    description: "A team member struggles with presenting. What's the best way to provide feedback?",
    group: QuizGroup.FEEDBACK,
    choices: [

      {
        text: "Critique every area they struggled with",
        isCorrect: false,
        feedback: "Too much criticism can discourage them. Try a more balanced approach."
      },
      {
        text: "Start with positives, then give specific, actionable tips",
        isCorrect: true,
        feedback: "Excellent! Starting with positives and offering actionable tips builds confidence."
      },
      {
        text: "Avoid giving feedback to avoid hurting their feelings",
        isCorrect: false,
        feedback: "Constructive feedback helps them improve. Frame it positively and supportively."
      }
    ]
  },
  {
    title: "Mixed Audience in a Presentation",
    description: "You're presenting a technical concept to a mixed audience. What's your approach?",
    group: QuizGroup.FEEDBACK,
    choices: [
      {
        text: "Use visuals and analogies to cater to both technical and non-technical attendees",
        isCorrect: true,
        feedback: "Excellent! Visuals and analogies help bridge the gap for different audience types."
      },
      {
        text: "Stick to a technical explanation only",
        isCorrect: false,
        feedback: "This might lose the interest of non-technical listeners. Aim to balance both perspectives."
      },
      {
        text: "Focus only on non-technical explanations",
        isCorrect: false,
        feedback: "Ignoring technical details might leave the technical team members unsatisfied. Try to balance both."
      }
    ]
  },
  // Group 4: Cross-Cultural & Digital Communication
  {
    title: "Addressing Language Barriers",
    description: "Your team has members from various linguistic backgrounds. How can you ensure everyone understands your instructions?",
    group: QuizGroup.CULTURAL,
    choices: [

      {
        text: "Proceed as usual, assuming they will ask if they don't understand",
        isCorrect: false,
        feedback: "Not everyone feels comfortable asking. Simplifying language shows cultural sensitivity."
      },
      {
        text: "Direct them to resources to improve their language skills",
        isCorrect: false,
        feedback: "This can come across as insensitive. Adapt your communication to be inclusive."
      },
      {
        text: "Use simple language and avoid idioms or jargon",
        isCorrect: true,
        feedback: "Excellent! Simplifying language makes instructions clearer for non-native speakers."
      },
    ]
  },
  {
    title: "Different Time Zones in Remote Collaboration",
    description: "How do you handle meeting scheduling for a team spread across multiple time zones?",
    group: QuizGroup.CULTURAL,
    choices: [
      {
        text: "Rotate meeting times to accommodate everyone's time zone",
        isCorrect: true,
        feedback: "Great! Rotating meeting times is considerate and makes it fair for all members."
      },
      {
        text: "Set a time that works for you and inform others",
        isCorrect: false,
        feedback: "This disregards others' schedules. Aim for flexibility when scheduling."
      },
      {
        text: "Only hold meetings within standard working hours in your time zone",
        isCorrect: false,
        feedback: "Fixed hours might inconvenience remote members. Try a more inclusive approach."
      }
    ]
  },
  {
    title: "Addressing Language Barriers",
    description: "Your team has members from various linguistic backgrounds. How can you ensure everyone understands your instructions?",
    group: QuizGroup.CULTURAL,
    choices: [

      {
        text: "Proceed as usual, assuming they will ask if they don't understand",
        isCorrect: false, 
        feedback: "Not everyone feels comfortable asking. Simplifying language shows cultural sensitivity."
      },
      {
        text: "Use simple language and avoid idioms or jargon",
        isCorrect: true,
        feedback: "Excellent! Simplifying language makes instructions clearer for non-native speakers."
      },
      {
        text: "Direct them to resources to improve their language skills",
        isCorrect: false,
        feedback: "This can come across as insensitive. Adapt your communication to be inclusive."
      }
    ]
  },
  {
    title: "Remote Team Collaboration",
    description: "How do you handle meeting scheduling for a team spread across multiple time zones?",
    group: QuizGroup.CULTURAL,
    choices: [
      {
        text: "Rotate meeting times to accommodate everyone's time zone",
        isCorrect: true,
        feedback: "Great! Rotating meeting times is considerate and makes it fair for all members."
      },
      {
        text: "Set a time that works for you and inform others",
        isCorrect: false,
        feedback: "This disregards others' schedules. Aim for flexibility when scheduling."
      },
      {
        text: "Only hold meetings within standard working hours in your time zone",
        isCorrect: false,
        feedback: "Fixed hours might inconvenience remote members. Try a more inclusive approach."
      }
    ]
  }
];