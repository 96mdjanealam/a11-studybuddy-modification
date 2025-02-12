import React from "react";
import { UploadCloud, MessageSquare, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="p-16 bg-base-200 dark:bg-sky-900 text-center">
      <h3 className="text-3xl font-bold text-white">Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full">
        <div className="card rounded-lg bg-base-100 p-6 shadow-md w-full flex flex-col items-center">
          <UploadCloud size={40} className="text-primary" />
          <h4 className="text-xl font-semibold mt-2 text-base-content">Easy Submissions</h4>
          <p className="text-neutral dark:text-gray-400">Upload assignments in seconds.</p>
        </div>
        <div className="card rounded-lg bg-base-100 p-6 shadow-md w-full flex flex-col items-center">
          <MessageSquare size={40} className="text-secondary" />
          <h4 className="text-xl font-semibold mt-2 text-base-content">Instant Feedback</h4>
          <p className="text-neutral dark:text-gray-400">Get quick responses from instructors.</p>
        </div>
        <div className="card rounded-lg bg-base-100 p-6 shadow-md w-full flex flex-col items-center">
          <Shield size={40} className="text-accent" />
          <h4 className="text-xl font-semibold mt-2 text-base-content">Secure Platform</h4>
          <p className="text-neutral dark:text-gray-400">Your work stays protected.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
