import React, { useState } from "react";
import "./App.css";
import myData from "./data";

function App() {
  const [data, setData] = useState(myData);

  return (
    <main>
      <div className="main-card">
        <h3>You've signed up for{} dates this week</h3>
        {data.map((e) => {
          const { id, name, img, age } = e;
          return (
            <article key={id}>
              <img src={img} alt={name}/>
              <div>
                {name}
                <p>{age}</p>
              </div>
            </article>
          );
        })}
        <button className="btn">Clear all</button>
      </div>
    </main>
  );
}

export default App;
