import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
} from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={40} className="text-yellow-400" />,
  },
  { name: "React", icon: <FaReact size={40} className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
  //   { name: 'Git', icon: <FaGitAlt size={40} className="text-red-600" /> },
  { name: "Php", icon: <FaPhp size={40} className="text-red-600" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-6 gap-8 text-center">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
            title={name}
          >
            {icon}
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
