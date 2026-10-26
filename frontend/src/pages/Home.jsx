import React from "react";
import { BookOpenIcon, ChartBarIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const features = [
    { title: "Write Your Thoughts", icon: BookOpenIcon, desc: "Capture your daily reflections securely." },
    { title: "Track Your Mood", icon: ChartBarIcon, desc: "Monitor emotional trends with visual insights." },
    { title: "Personal Insights", icon: LightBulbIcon, desc: "Gain valuable understanding of your patterns." }
  ];

  return (
    <div className="pt-32 px-10">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-extrabold mb-6 text-pink-600">Mental Journal</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            Reflect, heal, and grow with a modern journaling experience.
          </p>
          <button className="px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold 
            shadow-lg shadow-pink-300 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Right side abstract visuals */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 opacity-80 rounded-xl blur-xl"></div>
          <BookOpenIcon className="w-56 h-56 text-pink-500 opacity-90 z-10" />
        </div>
      </section>

      {/* Features Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-10">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-pink-300 transition"
            >
              <Icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-purple-600">{feature.title}</h3>
              <p className="text-blue-900 text-sm">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
