import { Redirect } from 'react-router-dom'
// import styled from 'styled-components'
import GoogleLogin from 'react-google-login'
import React from 'react'

const GoogleBtn = (props)=> {
    const responseFailure = async (response) =>{
        console.log(response);
        return <Redirect to='/signup'/>
    }
    console.log(props.responseSuccess);
    return (
        <GoogleLogin
            clientId="477560648585-v6gq6k6o8ce0rnmvak1fkbfp3uiq8icd.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={props.responseSuccess}
            onFailure={responseFailure}
            cookiePolicy={'single_host_origin'}
        />

    )
}   

// const GoogleBtnCont = styled.button`
//     padding: .5rem 2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
export default GoogleBtn