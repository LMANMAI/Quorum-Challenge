import React from "react";
import Routes from "./routes";
import SandwichState from "./context/sandwichState";
function App() {
  return (
    <SandwichState>
      <Routes />
    </SandwichState>
  );
}

export default App;
