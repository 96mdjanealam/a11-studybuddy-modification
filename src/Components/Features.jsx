import React from "react";
import { UploadCloud, MessageSquare, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="p-8 bg-[#A3D1C6] text-center dark:text-white">
      <h3 className="text-3xl font-bold text-green-800">Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 justify-items-center">
        <div className="card bg-white dark:bg-green-500 p-6 shadow-md w-full max-w-xs flex flex-col items-center">
          <UploadCloud size={40} className="text-green-700 dark:text-white" />
          <h4 className="text-xl font-semibold mt-2">Easy Submissions</h4>
          <p className="text-gray-700 dark:text-gray-200">Upload assignments in seconds.</p>
        </div>
        <div className="card bg-white dark:bg-green-500 p-6 shadow-md w-full max-w-xs flex flex-col items-center">
          <MessageSquare size={40} className="text-green-700 dark:text-white" />
          <h4 className="text-xl font-semibold mt-2">Instant Feedback</h4>
          <p className="text-gray-700 dark:text-gray-200">Get quick responses from instructors.</p>
        </div>
        <div className="card bg-white dark:bg-green-500 p-6 shadow-md w-full max-w-xs flex flex-col items-center">
          <Shield size={40} className="text-green-700 dark:text-white" />
          <h4 className="text-xl font-semibold mt-2">Secure Platform</h4>
          <p className="text-gray-700 dark:text-gray-200">Your work stays protected.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;