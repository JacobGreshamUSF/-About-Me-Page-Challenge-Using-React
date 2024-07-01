//U59555732
import React from 'react';
import './Skill.css';

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <h3>{name}</h3>
      <p>{level}</p>
    </div>
  );
};

export default Skill;

import React from 'react';
import Skill from './Skill';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills;
