import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const { team } = useGlobalContext();
  return (
    <main>
      <section className="section badge">
        <img src={team.badge} alt="" />
      </section>
    </main>
  );
};

export default Home;
