import React from "react";
import { useGlobalContext } from "../context";

const About = () => {
  const { team } = useGlobalContext();
  
  return (
    <section className="section about-section">
      <h1 className="section-title">About Man City</h1>
      <p>
        {team.about}
      </p>
    </section>
  );
};

export default About;
