// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import GoogleBtn from '../components/GoogleBtn'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [DOB, setDOB] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleDOB = (e) => {
        setDOB(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { firstName, lastName, email, DOB, password };
            
            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        }
        setRedirect(true)
    }

    const responseSuccess = async (response) => {
        console.log(response);
        const profile = response.profileObj

        const newUser = {
            googleId: profile.googleId,
            displayName: profile.name,
            firstName: profile.givenName,
            lastName: profile.familyName,
            email: profile.email,
            image: profile.imageUrl
        }
        axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
        .then(response => {
            console.log(response);
            setRedirect(true);
        })
        .catch(error => {
            console.log(error);
        })
        setRedirect(true)
    }

    if (redirect) return <Redirect to='/login' />
    return (
        <div className="">
            <div className="card">
                <h2 className="">
                    Sign up with your Google account
                </h2>
                <GoogleBtn responseSuccess={responseSuccess}/>
            </div>
            <div className="card-body">
                <h2 className="py-2">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input type="text" name="First Name" value={firstName} onChange={handleFirstName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name</label>
                        <input type="text" name="Last Name" value={lastName} onChange={handleLastName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Date of Birth</label>
                        <input type="date" name="dob" value={DOB} onChange={handleDOB} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </form>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Signup;