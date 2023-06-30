import React from "react";
import CommonItems from "./components/CommonItems";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <CommonItems />
      <Footer />
    </div>
  );
};

export default App;
