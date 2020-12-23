import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Profile = (props) => {
    console.log(props.user);
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <Image src={props.user.image}/>
        <p><strong>Name:</strong> {props.user.firstName} {props.user.lastName}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>Member Since:</strong> {props.user.createdAt}</p> 
        {/* <p><strong>ID:</strong> {props.user.id}</p>  */}
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

const Image = styled.img`
    width: 5rem;
    border-radius: 50%;
`
export default Profile;