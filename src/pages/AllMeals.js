import { useState, useEffect } from "react";
import axios from "axios";

export default function Workouts(props) {
  console.log(props);

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://fitness-app-back-end.herokuapp.com/api/foods")
      .then((response) => {
        console.log(response);
        setMeals(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div className='main-image-container'>
        <h1>Nutrition</h1>
        <p>GAINS.RESULTS.AMAZING.</p>
    </div>

      <div className="row center">
        {meals.map((meal) => (
          <div class="card">
            <a href='/'>
              <img class="small" src={meal.image} alt={meal.name} />
            </a>
            <div class="card-body">
              <a href='/'>
                <h2>{meal.name}</h2>
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
