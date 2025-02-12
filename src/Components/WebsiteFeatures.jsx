import { FaClipboardList, FaCheckCircle, FaUsers } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaClipboardList className="text-primary text-5xl" />,
      title: "Create Assignments",
      description: "Easily design and share assignments tailored to your group's needs.",
    },
    {
      icon: <FaCheckCircle className="text-secondary text-5xl" />,
      title: "Evaluate Progress",
      description: "Track performance and ensure everyone stays on the same page.",
    },
    {
      icon: <FaUsers className="text-accent text-5xl" />,
      title: "Collaborative Learning",
      description: "Work together seamlessly with interactive tools and resources.",
    },
  ];

  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-base-content text-center mb-8">
          Why Choose Study Buddy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-base-100 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
