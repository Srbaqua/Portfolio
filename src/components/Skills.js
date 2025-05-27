import React from "react";
import { motion } from "framer-motion";
// import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },
  { name: "Bootstrap", level: 80 },
  { name: "Git & GitHub", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section container">
      <motion.h2
        className="text-center mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 + index * 0.2 }}
              className="progress-bar-wrapper"
            >
              <div className="skill-name">{skill.name}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
