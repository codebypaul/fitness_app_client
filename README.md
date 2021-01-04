# GeneralFit
GeneralFit is a react app built to teach users about fitness and nutrition.
We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With this app, users can learn about everything they need to have a heathly lifestyle.

----------------------------------------------------------
### Deployed on Heroku
[Heroku Live Link](https://generalfit.herokuapp.com/)

----------------------------------------------------------
## Local Deployment
----------------------------------------------------------  
### Github Repostitories
[Frontend](https://github.com/codebypaul/fitness_app_client)<br/>
[Backend](https://github.com/fmuwanguzi/fitness-api)

### Prerequisites
* Git
* Node
* MongoDB
* Fork of Repositories

### Installation
1. `cd` into repositories
2. `npm install` node packages

### Running Locally
1. `npm start` to start server
2. `open http://localhost:3000` to open the site in your browser
----------------------------------------------------------
## Overview
----------------------------------------------------------
### Technologies
* MERN Stack (MongoDB, Express, React, Node)
* HTML5
* CSS
* Javascript
----------------------------------------------------------
### User Stories
As a user, I want to see basic information on the home page. As a user, I want to find workouts sorted by body parts. As a user, I want to find meals. As a user, I want to create fitness plans using the workouts and meals.

----------------------------------------------------------
### Features
----------------------------------------------------------
### Models and Schemas
#### Workout
```
{

    name: String,
    bodypart: String,
    level: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    createdAt : { 
        type : Date, 
        default: Date.now 
    }
}
```
#### Ingredient
```
{
    ingredient: String,
    quantity: Number,
    unit: String
}
```
#### Food
```
{
    name: String,
    ingredients: [ingredientSchema],
    difficulty: {
        type: String,
        default: 'beginner',
        enum: ['beginner','intermediate']
    },
    image : String
}
```
#### Fitness Plan
```
{
    workout:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }],
    food:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],
    goal: String
}
```
----------------------------------------------------------
### Wireframes
Homepage
![Homepage](./Photos/Homepage.png)
Signup
![Signup](./Photos/Signup.png)
Login
![Login](./Photos/Login.png)
About
![About](./Photos/About.png)
Workouts
![Workouts](./Photos/Workouts.png)
Nutrition
![Nutrition](./Photos/Nutrition.png)

----------------------------------------------------------
### Routes
| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | Welcome.js | Home Page |
| GET | /signup | Signup.js | Signup Page |
| GET | /login | Login.js | Login Page |
| GET | /about | About.js | About Page |
| GET | /profile | Profile.js | User Profile |
| GET | /workouts | Workouts.js | Workouts Page |
| GET | /nutrition | Nutrition.js | Nutrition Page |

----------------------------------------------------------
### API Reference
----------------------------------------------------------
### Team Members
- Angel Barranco
- Felix Muwanguzi
- Paul Williams
- Richard Leung