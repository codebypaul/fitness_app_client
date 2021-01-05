import React from "react";

function WorkoutCards() {

  return (
    <div class="row center">
      {workouts.map(workout, (index) => (
        <div class="card" key={index}>
            <img
              class="medium"
              src={workout.img}
              alt="product"
            />
          <div class="card-body">
            <a href={`/workouts/${workouts.id}`}>
              <h2>{workout.bodyPart}</h2>
              <p>{workout.sets}</p>
              <p>{workout.reps}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkoutCards;
