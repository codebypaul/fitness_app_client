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





{/* <div className="cards mx-auto">
<div class="container">
  <div class="row row-cols-2">
    <div class="col">
      <div class="card">
        <img
          class="card-img-top"
          src="https://i.ibb.co/tMPvK6m/brooke-lark-W9-OKrx-Bqi-ZA-unsplash.jpg"
          alt="food"
        />
        <div class="card-body">
          <p class="card-text">
            Get the best meals meals to produce incredible results
          </p>
        </div>
        <a href="nutrition" class="btn btn-outline-danger">
          View Meals
        </a>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          class="card-img-top"
          src="https://i.ibb.co/tMPvK6m/brooke-lark-W9-OKrx-Bqi-ZA-unsplash.jpg"
          alt="food"
        />
        <div class="card-body">
          <p class="card-text">
            Get the best meals meals to produce incredible results
          </p>
        </div>
        <a href="nutrition" class="btn btn-outline-danger">
          View Meals
        </a>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          class="card-img-top"
          src="https://i.ibb.co/tMPvK6m/brooke-lark-W9-OKrx-Bqi-ZA-unsplash.jpg"
          alt="food"
        />
        <div class="card-body">
          <p class="card-text">
            Get the best meals meals to produce incredible results
          </p>
        </div>
        <a href="nutrition" class="btn btn-outline-danger">
          View Meals
        </a>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          class="card-img-top"
          src="https://i.ibb.co/tMPvK6m/brooke-lark-W9-OKrx-Bqi-ZA-unsplash.jpg"
          alt="food"
        />
        <div class="card-body">
          <p class="card-text">
            Get the best meals meals to produce incredible results
          </p>
        </div>
        <a href="nutrition" class="btn btn-outline-danger">
          View Meals
        </a>
      </div>
    </div>
  </div>
</div>
</div> */}