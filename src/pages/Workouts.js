import { Link } from 'react-router-dom'
import data from '../data'
const Workouts = () => {
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
                        <Link to={`/workouts-${muscle.path}`}>
                          <h2>{muscle.category}</h2>
                        </Link>
                      </div>
                    </div>
          ))}
        </div>
      </>
  );
};
export default Workouts;
