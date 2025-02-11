import React from "react";
import { UploadCloud, MessageSquare, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="p-8 bg-[#A3D1C6] text-center dark:text-white bg">
      <h3 className="text-3xl font-bold text-green-800">Features</h3>
      <div className="flex justify-center gap-8 mt-4">
        <div className="card bg-white dark:bg-green-500 p-4 shadow-md w-64 flex flex-col items-center">
          <UploadCloud size={40} className="text-white" />
          <h4 className="text-xl font-semibold mt-2">Easy Submissions</h4>
          <p>Upload assignments in seconds.</p>
        </div>
        <div className="card bg-white dark:bg-green-500 p-4 shadow-md w-64 flex flex-col items-center">
          <MessageSquare size={40} className="text-white" />
          <h4 className="text-xl font-semibold mt-2">Instant Feedback</h4>
          <p>Get quick responses from instructors.</p>
        </div>
        <div className="card bg-white dark:bg-green-500 p-4 shadow-md w-64 flex flex-col items-center">
          <Shield size={40} className="text-white" />
          <h4 className="text-xl font-semibold mt-2">Secure Platform</h4>
          <p>Your work stays protected.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
