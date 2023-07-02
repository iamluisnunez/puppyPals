import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
import Puppy from "./components/puppy";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          const featuredPup = puppies.find((pup) => pup.id === featPupId);
          console.log(featuredPup);
          {
            featPupId && (
              <div>
                <h2>{featuredPup.name}</h2>
                <ul>
                  <li>Age: {featuredPup.age}</li>
                  <li>Email: {featuredPup.email}</li>
                </ul>
              </div>
            );
          }
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        {featPupId && <p>{featPupId}</p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
