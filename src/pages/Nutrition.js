import data from '../data'

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
                        <a href={nutrition.path}>
                          <h2>{nutrition.nutrient}</h2>
                        </a>
                      </div>
                    </div>
          ))}
        </div>
    </>
  );
};
export default Nutrition;