'use client';

import { useState } from 'react';

const faqs = [
  {
    "question": "What technologies can I use during the hackathon?",
    "answer": "Any technological field be it AI, Blockchain, Web Developement and many more."
  },
  {
    "question": "Can I use AI tools to assist with my coding?",
    "answer": "Yes! You are welcome to use AI tools like ChatGPT and GitHub Copilot for assistance with coding, debugging, and brainstorming ideas. Just remember that the final implementation must be your own work."
  },
  {
    "question": "How do I upload my code on github ?",
    "answer": "Uploading code on github will be told in the later session."
  },
  {
    "question": "Is there a specific format for submitting my project?",
    "answer": "Yes, please ensure that your project is submitted as a GitHub repository. Include a README file that explains your project, its features, and how to run it. Detailed instructions will help the judges understand your work better."
  },
  {
    "question": "What if I encounter technical issues during the hackathon?",
    "answer": "If you face any technical difficulties, please reach out to the support team via the designated communication channel."
  },
  {
    "question": "What shall be the theme of my project ?",
    "answer": "Anything!  You can create anything which benefits colleges from a simple web app to robots. Please ensure that your project adheres to the hackathon's guidelines and values."
  },
  {
    "question": "How will the projects be judged?",
    "answer": "Projects will be evaluated based on creativity, functionality, user experience, and adherence to the hackathon guidelines. A panel of judges will review each submission, and winners will be announced at the end of the event."
  },
  {
    "question": "Can I participate if I am a beginner ?",
    "answer": "Absolutely! This hackathon is open to participants of all skill levels. It's a great opportunity to learn, collaborate, and improve your skills . Don't hesitate to ask for help when you need it!"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-5">
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b  border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-2 text-left text-lg font-medium  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 ">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
