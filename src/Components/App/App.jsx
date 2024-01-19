// App.jsx
import React, { useState } from "react";
import Header from "../Header/Header";
import ColorList from "../ColorList/ColorList";

import "./App.scss";

function App() {
  return (
    <section className="App">
      <Header />
      <ColorList />
    </section>
  );
}

export default App;
