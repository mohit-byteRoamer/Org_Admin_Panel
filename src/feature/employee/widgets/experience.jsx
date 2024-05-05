import React from "react";
import { Steps } from "antd";

const ExperienceSteps = () => {
  const stepsData = [
    {
      title: "Fornax",
      description: "Physiotherapist",
      location: "India",
      yearsOfExperience: "4 years",
    },
    {
      title: "Max",
      description: "Physical Therapy Assistant",
      location: "India",
      yearsOfExperience: "1 year",
    },
    {
      title: "Aurora",
      description: "Senior Physiotherapist",
      location: "Los Angeles",
      yearsOfExperience: "6 years",
    },
    {
      title: "Luna",
      description: "Physiotherapy Technician",
      location: "Los Angeles",
      yearsOfExperience: "2 years",
    },
  ];

  return (
    <div className="mt-10">
      <Steps progressDot current={0} direction="vertical">
        {stepsData.map((step, index) => (
          <Steps.Step
            key={index}
            title={step.title}
            description={
              <>
                <p>{step.description}</p>
                <p>Location: {step.location}</p>
                <p>Years of Experience: {step.yearsOfExperience}</p>
              </>
            }
          />
        ))}
      </Steps>
    </div>
  );
};

export default ExperienceSteps;
