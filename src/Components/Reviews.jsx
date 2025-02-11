import React from 'react';
import { Quote } from 'lucide-react';

const Reviews = () => {
  return (
    <section className="p-8 bg-[#73EC8B] dark:text-black text-center">
      <h3 className="text-3xl font-bold">What Students Say</h3>
      <div className="flex justify-center gap-8 mt-4 flex-col items-center">
        <div className="relative bg-white p-6 shadow-lg max-w-lg rounded-lg text-left">
          <Quote size={32} className="absolute top-2 left-2 text-gray-400" />
          <p className="text-lg italic mt-4">&quot;Study Buddy made my assignments so easy!&quot;</p>
          <h4 className="font-semibold mt-2 text-right">- Alex</h4>
        </div>
        <div className="relative bg-white p-6 shadow-lg max-w-lg rounded-lg text-left">
          <Quote size={32} className="absolute top-2 left-2 text-gray-400" />
          <p className="text-lg italic mt-4">&quot;I love the instant feedback feature!&quot;</p>
          <h4 className="font-semibold mt-2 text-right">- Sarah</h4>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
