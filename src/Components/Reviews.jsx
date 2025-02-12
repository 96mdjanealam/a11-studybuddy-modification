import React from "react";
import { Quote } from "lucide-react";

const Reviews = () => {
  return (
    <section className="p-12 border-t-2 border-base-300 bg-base-200 text-base-content text-center relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary rounded-full blur-3xl opacity-20"></div>

      <h3 className="text-4xl font-bold mb-12 relative">What Students Say</h3>

      <div className="flex flex-col items-center gap-12 mt-8 relative">
        {/* First Review */}
        <div className="relative max-w-2xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300">
          <Quote size={40} className="absolute -top-6 -left-6 text-primary opacity-40" />
          <p className="text-xl italic text-left">  
            &quot;Study Buddy made my assignments so easy!&quot;  
          </p>
          <h4 className="font-semibold text-right mt-4">- Alex</h4>
        </div>

        <hr className="border-t border-gray-400 w-full opacity-50" />

        {/* Second Review */}
        <div className="relative max-w-2xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300">
          <Quote size={40} className="absolute -top-6 -left-6 text-secondary opacity-40" />
          <p className="text-xl italic text-left">  
            &quot;I love the instant feedback feature!&quot;  
          </p>
          <h4 className="font-semibold text-right mt-4">- Sarah</h4>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
