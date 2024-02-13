'use client'
import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

const App = () => {
    return (
      <div className="App">
        <InlineWidget url="https://calendly.com/sergioscardigno82/30min" />
      </div>
    );
  };
  
  export default App;
