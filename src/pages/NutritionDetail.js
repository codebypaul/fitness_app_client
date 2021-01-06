import axios from 'axios'
import { useState,useEffect } from 'react'

export default function NtrDetail(props) {
    const [meal,setMeal] = useState('')
    
    useEffect(()=>{
        const { name } = props.match.params
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/foods/food${name}`)
        .then(res=>{
            setMeal(res.data)
        })
    },[props.match.params])
    console.log(meal);
    if (meal){
        return(
            <div>
                <div className="card">
                    <h1>{meal.name}</h1>
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