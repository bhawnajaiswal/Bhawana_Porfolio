import React from "react";
import Header from "../Header/Header";
import Greeting from "../Greetings/Greetings";
import Footer from "../Footer/Footer";

function Home({ theme }) { // Destructure 'theme' from props
    return (
      <div>
        <Header theme={theme} />
        <Greeting theme={theme} />
        <Footer theme={theme} />
      </div>
    );
}

export default Home;
