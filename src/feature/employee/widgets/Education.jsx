import React from "react";
import { Steps } from "antd";

const EducationSteps = () => {
  const educationData = [
    {
      title: "High School",
      institution: "ABC High School",
      location: "India",
      yearCompleted: "2010",
    },
    {
      title: "Bachelor's Degree",
      institution: "XYZ University",
      location: "India",
      yearCompleted: "2014",
    },
    {
      title: "Master's Degree",
      institution: "PQR Institute",
      location: "Los Angeles",
      yearCompleted: "2016",
    },
    {
      title: "Certification Course",
      institution: "DEF Training Center",
      location: "Los Angeles",
      yearCompleted: "2018",
    },
  ];

  return (
    <div className="mt-10">
      <Steps progressDot current={0} direction="vertical">
        {educationData.map((step, index) => (
          <Steps.Step
            key={index}
            title={step.title}
            description={
              <>
                <p>Institution: {step.institution}</p>
                <p>Location: {step.location}</p>
                <p>Year Completed: {step.yearCompleted}</p>
              </>
            }
          />
        ))}
      </Steps>
    </div>
  );
};

export default EducationSteps;
