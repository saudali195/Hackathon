"use client"

import React, { useState } from 'react';

const faqData = [
  {
    question: 'What types of chairs do you offer?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi autem amet debitis libero voluptas enim repellat odio natus eum delectus deserunt, odit expedita eos molestiae ipsa ratione quisquam?',
  },
  {
    question: 'Do your chairs come with a warranty?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi autem amet debitis libero voluptas enim repellat odio natus eum delectus deserunt, odit expedita eos molestiae ipsa ratione quisquam?',
  },
  {
    question: 'Can I try a chair before purchasing?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi autem amet debitis libero voluptas enim repellat odio natus eum delectus deserunt, odit expedita eos molestiae ipsa ratione quisquam?',
  },
  {
    question: 'How can we get in touch with you?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi autem amet debitis libero voluptas enim repellat odio natus eum delectus deserunt, odit expedita eos molestiae ipsa ratione quisquam?',
  },
  {
    question: 'What will be delivered? And When?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi autem amet debitis libero voluptas enim repellat odio natus eum delectus deserunt, odit expedita eos molestiae ipsa ratione quisquam?',
  },
  {
    question: 'How do I clean and maintain my Comforty chair?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi autem amet debitis libero voluptas enim repellat odio natus eum delectus deserunt, odit expedita eos molestiae ipsa ratione quisquam?',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Questions Looks Here</h2>
      <p className="text-center text-gray-600 mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
              <span className="text-xl text-gray-800">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
