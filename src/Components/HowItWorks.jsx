import React from "react";
import { Upload, Eye, CheckCircle } from "lucide-react"; // Import icons

const HowItWorks = () => {
  return (
    <section className="p-12 text-center bg-base-200">
      <h3 className="text-4xl font-bold mb-6 text-base-content">How It Works</h3>
      <div className="flex flex-col items-center md:flex-row justify-center gap-8">
        {/* Step 1 */}
        <div className="card w-72 bg-base-100 shadow-xl transform hover:scale-105 transition duration-300 p-6">
          <div className="flex flex-col items-center">
            <Upload className="w-12 h-12 text-primary mb-4" /> {/* Icon */}
            <h4 className="text-xl font-semibold text-base-content">Step 1</h4>
            <p className="text-neutral dark:text-gray-400">Upload your assignment.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="card w-72 bg-base-100 shadow-xl transform hover:scale-105 transition duration-300 p-6">
          <div className="flex flex-col items-center">
            <Eye className="w-12 h-12 text-secondary mb-4" /> {/* Icon */}
            <h4 className="text-xl font-semibold text-base-content">Step 2</h4>
            <p className="text-neutral dark:text-gray-400">Instructor reviews it.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="card w-72 bg-base-100 shadow-xl transform hover:scale-105 transition duration-300 p-6">
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-accent mb-4" /> {/* Icon */}
            <h4 className="text-xl font-semibold text-base-content">Step 3</h4>
            <p className="text-neutral dark:text-gray-400">Receive feedback & improve!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
