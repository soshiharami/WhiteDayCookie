import React from 'react';
import './App.css';
import Cookies from "js-cookie";

function App() {

  Cookies.set("cookie","ずっと前から好きでした！付き合ってください！")

  return (
    <div className="App">
      <h1>
        クッキー焼いたんだ....
      </h1>
      <h1>
        食べて....くれるかな？
      </h1>
    </div>
  );
}

export default App;
