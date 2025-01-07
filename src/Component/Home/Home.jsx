import React from "react";
import Header from "../Header/Header";
import Greeting from "../Greetings/Greetings";


function Home({ theme }) { // Destructure 'theme' from props
    return (
      <div>
        <Header theme={theme} />
        <Greeting theme={theme} />
      </div>
    );
}

export default Home;
