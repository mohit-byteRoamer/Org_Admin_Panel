import React from "react";
import { Steps } from "antd";

const Membership = () => {
  const membershipData = [
    {
      title: "Professional Association of Physiotherapists",
      type: "Membership",
      location: "Global",
      duration: "2014 - Present",
    },
    {
      title: "National Physical Therapy Association",
      type: "Membership",
      location: "USA",
      duration: "2016 - Present",
    },
    {
      title: "Sports Medicine Society",
      type: "Association",
      location: "Canada",
      duration: "2018 - Present",
    },
  ];

  return (
    <div className="mt-10">
      <Steps progressDot current={0} direction="vertical">
        {membershipData.map((step, index) => (
          <Steps.Step
            key={index}
            title={step.title}
            description={
              <>
                <p>Type: {step.type}</p>
                <p>Location: {step.location}</p>
                <p>Duration: {step.duration}</p>
              </>
            }
          />
        ))}
      </Steps>
    </div>
  );
};

export default Membership;
