import axios from 'axios'
import { useState,useEffect } from 'react'

export default function NtrDetail(props) {
    const [meal,setMeal] = useState('')
    
    useEffect(()=>{
        const { id } = props.match.params
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/foods/food${id}`)
        .then(res=>{
            setMeal(res.data)
        })
    },[props.match.params])
    console.log(meal);
    if (meal){
        return(
            <div className='row center'>
                <div className="card">
                    <img className='medium' src={meal.image} alt={meal.name} />
                    <div className='card-body'>
                    <h1>{meal.name}</h1>
                    <p>{meal.instructions}</p>

                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <h1> you gon be hungry today</h1>
            </div>

        )
    }
}