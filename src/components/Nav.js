import {Link } from 'react-router-dom'

export default function Nav(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/user">Account</Link>
        </div>
    )
}