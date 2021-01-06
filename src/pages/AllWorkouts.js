import { Link } from 'react-router-dom'
import axios from "axios";
import React, { Component } from 'react';
export default class Workouts extends Component {
  // const [workouts, setWorkouts] = useState([])
  constructor(props){
    super()
    this.state = {
      workouts: null
    }
  }
  componentDidMount() {
    const { bodypart } = this.props.match.params
    axios
    .get(`https://general-fit.herokuapp.com/workouts/category/${bodypart}`)
    .then((response) => {
      this.setState({workouts:response.data})
    })
    .catch((err) => {
      console.log(err);
    });
  }
  // componentDidUpdate(){
  //   const { bodypart } = this.props.match.params
  //   axios
  //     .get(`https://general-fit.herokuapp.com/workouts/category/${bodypart}`)
  //     .then((response) => {
  //       this.setState({workouts:response.data})
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // workouts = this.state.workouts.map((workout,idx)=>{
    
  // })

  render() {
    console.log(this.state.workouts);
    if (this.state.workouts){
      return (
        <>
          <div className="main-image-container workouts-img">
            <h1>Workouts</h1>
            <p>EAT. SLEEP. REPEAT.</p>
          </div>
          <div className="row center">
            {this.state.workouts.map((workout,idx) =>(
              <div class="card">
      <a href='/'>
        <img class="medium" src={workout.picture} alt={workout.name} />
      </a>
      <div class="card-body">
        <Link to={{pathname: `/this-workout${workout._id}`}}>
          <h2>{workout.name}</h2>
        </Link>
      </div>
    </div>
            ))}
          </div>
        </>
      );
    }else{
      return(
        <div>hi there</div>
      )
    }
  }
}
