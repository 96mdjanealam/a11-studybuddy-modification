import React from "react";
import { Upload, Eye, CheckCircle } from "lucide-react"; // Import icons

const HowItWorks = () => {
  return (
    <section className="p-12 text-center bg-[#41B3A2]">
      <h3 className="text-4xl font-bold mb-6 dark:text-white">How It Works</h3>
      <div className="flex flex-col items-center md:flex-row justify-center gap-8">
        {/* Step 1 */}
        <div className="card w-72 bg-base-200 shadow-xl transform hover:scale-105 transition duration-300 p-6">
          <div className="flex flex-col items-center">
            <Upload className="w-12 h-12 text-primary mb-4" /> {/* Icon */}
            <h4 className="text-xl font-semibold">Step 1</h4>
            <p className="text-gray-600">Upload your assignment.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="card w-72 bg-base-200 shadow-xl transform hover:scale-105 transition duration-300 p-6">
          <div className="flex flex-col items-center">
            <Eye className="w-12 h-12 text-primary mb-4" /> {/* Icon */}
            <h4 className="text-xl font-semibold">Step 2</h4>
            <p className="text-gray-600">Instructor reviews it.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="card w-72 bg-base-200 shadow-xl transform hover:scale-105 transition duration-300 p-6">
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-primary mb-4" /> {/* Icon */}
            <h4 className="text-xl font-semibold">Step 3</h4>
            <p className="text-gray-600">Receive feedback & improve!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
