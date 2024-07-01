//U59555732
import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    { institution: 'University of South Florida', degree: 'B.S. in Computer Science', years: '2023 - 2024' },
  ];

  return (
    <div className="education">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p>{edu.degree}</p>
          <p>{edu.years}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
