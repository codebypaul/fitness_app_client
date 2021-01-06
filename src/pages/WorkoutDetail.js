import {useState,useEffect} from 'react'
import axios from 'axios'

export default function WrkDetail(props){
    const [workout,setWorkout] = useState('')

    useEffect(()=>{
        const { id } = props.match.params
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/workouts/workout${id}`).then(res=>{
            setWorkout(res.data)
            console.log(res.data);
        })
    },[props.match.params])
    console.log(workout);
    return(
        <>
        <div className="row center">
              <div class="card">
                  <img
                    class="large"
                    src={workout.picture}
                    alt={workout.name}
                  />
                <div class="card-body">
                    <h1>{workout.name}</h1>
                    <p>Targeted Muscle Group: {workout.category}</p>
                    <p>Sets: {workout.sets}</p>
                    <p>Reps: {workout.reps}</p>
                    <p>{workout.description}</p>
                </div>
              </div>
          </div>
        </>
    )
}