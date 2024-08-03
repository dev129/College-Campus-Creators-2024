'use client';

import { useState } from 'react';

const faqs = [
  {
    "question": "What technologies can I use during the hackathon?",
    "answer": "You can use HTML, CSS, and vanilla JavaScript to build your projects. The Tailwind CSS framework is also allowed to help you style your applications. However, please refrain from using any AI website builders or software that automates the development process."
  },
  {
    "question": "Can I use AI tools to assist with my coding?",
    "answer": "Yes! You are welcome to use AI tools like ChatGPT and GitHub Copilot for assistance with coding, debugging, and brainstorming ideas. Just remember that the final implementation must be your own work."
  },
  {
    "question": "How do I upload my code on github ?",
    "answer": "After your successful registration a guie shall be uploaded on the official whatsapp  channel where you will know how to upload and share your github code. "
  },
  {
    "question": "Is there a specific format for submitting my project?",
    "answer": "Yes, please ensure that your project is submitted as a GitHub repository. Include a README file that explains your project, its features, and how to run it. Detailed instructions will help the judges understand your work better."
  },
  {
    "question": "Can I use external libraries or frameworks besides Tailwind CSS?",
    "answer": "No, for this hackathon, you are limited to using only HTML, CSS, vanilla JavaScript, and the Tailwind CSS framework. This ensures a level playing field and allows participants to showcase their skills in these core technologies."
  },
  {
    "question": "What if I encounter technical issues during the hackathon?",
    "answer": "If you face any technical difficulties, please reach out to the support team via the designated communication channel."
  },
  {
    "question": "Are there any restrictions on the project themes?",
    "answer": "While there are no strict restrictions on themes, we encourage you to create projects that are innovative, user-friendly, and demonstrate your creativity and are useful for colleges . Please ensure that your project adheres to the hackathon's guidelines and values."
  },
  {
    "question": "How will the projects be judged?",
    "answer": "Projects will be evaluated based on creativity, functionality, user experience, and adherence to the hackathon guidelines. A panel of judges will review each submission, and winners will be announced at the end of the event."
  },
  {
    "question": "What resources are available to help me during the hackathon?",
    "answer": "We will provide access to a variety of resources, including tutorials, documentation, and links to helpful tools. Additionally, you can connect with mentors and other participants for guidance and support."
  },
  {
    "question": "Can I participate if I am a beginner in web development?",
    "answer": "Absolutely! This hackathon is open to participants of all skill levels. It's a great opportunity to learn, collaborate, and improve your skills in frontend development. Don't hesitate to ask for help when you need it!"
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
