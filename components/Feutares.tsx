import {
  DatabaseZap,
  GanttChart,
  RotateCcw,
  Search,
  Shield,
  Zap,
} from "lucide-react";
import React from "react";

const Feutares = () => {
  const features = [
    {
      title: "Data Management",
      icon: <DatabaseZap />,
      description:
        "Manage your application's data with ease, including backup, restore, and data transformation.",
    },
    {
      title: "Data Encryption",
      icon: <Shield />,
      description:
        "Protect sensitive data using strong encryption with crypto-js.",
    },
    {
      title: "Efficient Searching",
      icon: <Search />,
      description:
        "Implement efficient searching using the Fuse.js library for fast and accurate results.",
    },
    {
      title: "Model Handling",
      icon: <GanttChart />,
      description:
        "Easily create and manage data models for your application with a built-in model system.",
    },
    {
      title: "Data Operations",
      icon: <RotateCcw />,
      description:
        "Perform common data operations like find(), save(), delete(), and update() with simple and intuitive methods.",
    },
    {
      title: "Cache Management",
      icon: <Zap />,
      description:
        "Optimize performance with cache management to reduce unnecessary data reads.",
    },
  ];

  return (
    <section className="container mx-auto mb-6">
      <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
        explore our features
      </h1>

      <div className="mt-2">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
      </div>

      <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                data-aos="flip-left"
                key={feature.title}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 ">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
    </section>
  );
};

export default Feutares;
