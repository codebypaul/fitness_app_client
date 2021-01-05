import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import data from '../data'
const Workouts = () => {
  const [bodypart, setBodyPart] = useState('')

  console.log(bodypart);

 
  return (
      <>
        <div className="main-image-container workouts-img">
          <h1>Workouts</h1>
          <p>EAT. SLEEP. REPEAT.</p>
        </div>
        
        <div className="row center">
          {data.bodyParts.map((muscle) => (
                      <div class="card">
                        <a href={muscle.path}>
                          <img class="medium" src={muscle.image} alt={muscle.category} />
                        </a>
                      <div class="card-body">
                        <a href={muscle.path}>
                          <h2>{muscle.category}</h2>
                        </a>
                      </div>
                    </div>
          ))}
        </div>
      </>
  );
};
export default Workouts;
