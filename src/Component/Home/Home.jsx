import React from "react";
import Header from "../Header/Header";
import Greeting from "../Greetings/Greetings";
import Skills from "../../containers/skills/Skills";


function Home({ theme }) { 
    return (
      <div>
        <Header theme={theme} />
        <Greeting theme={theme} />
        <Skills theme={theme} />
      </div>
    );
}

export default Home;
