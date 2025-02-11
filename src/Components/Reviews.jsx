import React from 'react';
import { Quote } from 'lucide-react';

const Reviews = () => {
  return (
    <section className="p-8 bg-[#73EC8B] dark:text-black text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#5CE198] rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#A0F2C4] rounded-full blur-3xl opacity-50"></div>

      <h3 className="text-4xl font-bold mb-20 relative ">What Students Say</h3>

      <div className="flex flex-col items-center gap-12 mt-8 relative">
        {/* First Review */}
        <div className="relative max-w-2xl mx-auto">
          <Quote size={48} className="absolute -top-8 -left-8 text-white opacity-50" />
          <p className="text-xl italic text-left text-gray-800">
            &quot;Study Buddy made my assignments so easy!&quot;
          </p>
          <h4 className="font-semibold text-right mt-4 text-gray-800">- Alex</h4>
        </div>
        <hr className='border-t-2 w-full opacity-50' />

        {/* Second Review */}
        <div className="relative max-w-2xl mx-auto">
          <Quote size={48} className="absolute -top-8 -left-8 text-white opacity-50" />
          <p className="text-xl italic text-left text-gray-800">
            &quot;I love the instant feedback feature!&quot;
          </p>
          <h4 className="font-semibold text-right mt-4 text-gray-800">- Sarah</h4>
        </div>
      </div>
    </section>
  );
};

export default Reviews;