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
        <div>
            <div className="card">
                <h1 className="card-title">{workout.name}</h1>
            </div>
        </div>
    )
}