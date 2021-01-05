import { useState, useEffect } from "react";
import axios from "axios";

export default function Workouts(props) {
  console.log(props);

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fitness-app-back-end.herokuapp.com/api/workouts")
      .then((response) => {
        console.log(response);
        setBodyParts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="main-image-container workouts-img">
        <h1>Workouts</h1>
        <p>EAT. SLEEP. REPEAT.</p>
      </div>

      <div className="row center">
        {bodyParts.map((bodyPart) => (
          <div class="card">
            <a href='/'>
              <img class="medium" src={bodyPart.picture} alt={bodyPart.name} />
            </a>
            <div class="card-body">
              <a href='/'>
                <h2>{bodyPart.name}</h2>
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
