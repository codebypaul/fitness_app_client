import data from '../data'
import { Link } from 'react-router-dom'

const Nutrition = () => {
  return (
    <>
    <div className='main-image-container'>
        <h1>Nutrition</h1>
        <p>GAINS.RESULTS.AMAZING.</p>
    </div>

    <div className="row center">
          {data.nutrition.map((nutrition) => (
                      <div class="card">
                        <a href={nutrition.path}>
                          <img class="medium" src={nutrition.image} alt={nutrition.nutrient} />
                        </a>
                      <div class="card-body">
                        <Link to={{
                          pathname: `/nutrition-${nutrition.path}`
                        }}>
                          <h2>{nutrition.nutrient}</h2>
                        </Link>
                      </div>
                    </div>
          ))}
        </div>
    </>
  );
};
export default Nutrition;