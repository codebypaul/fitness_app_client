import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Meals(props) {
  const [meals, setMeals] = useState("");

  useEffect(() => {
    const { foodType } = props.match.params;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/foods/category${foodType}`)
      .then((res) => {
        setMeals(res.data);
      });
  }, [props.match.params]);
  console.log(meals);
  if (meals) {
    return (
      <div>
          <div className="main-image-container">
              <h1>Nutrition</h1>
              <p>GAINS.RESULTS.AMAZING.</p>
            </div>
            
        {meals.map((meal, idx) => (
            <div className="row center">
              <div class="card">
                <a href="/">
                  <img class="medium" src={meal.image} alt={meal.name} />
                </a>
                <div class="card-body">
                  <Link to={{ pathname: `/this-food${meal.name}` }}>
                    <h2>{meal.name}</h2>
                  </Link>
                </div>
              </div>
            </div>

          // <div className='card'>
          //     <h1>{meal.name}</h1>
          //     <Link to={{
          //         pathname: `/this-food${meal.name}`
          //     }}>Meal Info</Link>
          // </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1> this is not the page you're looking for</h1>
      </div>
    );
  }
}
