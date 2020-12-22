import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components'
const Navbar = (props) => {
    return (
        <NavWrapper className="navbar navbar-expanded text-white px-5">
                <Link className="brand" to="/">GeneralFit
                <i className="fab fa-typo3" />
                </Link>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarsExample07"> */}
                    <div className="ml-auto d-flex">
                        <NavLink className="text-white navLink" exact to="/">
                        Home</NavLink>
                        <NavLink className="text-white navLink"  to="/about">
                        About
                        </NavLink>
                        <NavLink className="text-white navLink"  to="/workouts">
                        Workouts
                        </NavLink>
                        <NavLink className="text-white navLink"  to="/nutrition">
                        Nutrition
                        </NavLink>
                    </div>
                    {
                        props.isAuth 
                        ? <AuthOptions>
                   
                                <NavLink className="mr-3"  to="/profile">
                                <AuthBtn>
                                Profile
                                </AuthBtn>
                                </NavLink>
                                <AuthBtn onClick={props.handleLogout} className=" logout-link">
                                Logout
                                </AuthBtn>

                        </AuthOptions>
                        : <AuthOptions>
         
                                <NavLink className="mr-3"  to="/signup">
                                <AuthBtn>

                                Create Account
                                </AuthBtn>
                                </NavLink>
           
                                <NavLink className=""  to="/login">
                                <AuthBtn>
                                Login
                                </AuthBtn>
                                </NavLink>

                        </AuthOptions>
                    }
                {/* </div> */}

        </NavWrapper>
    );
}

const AuthOptions = styled.div`
    display: flex;

`
const AuthBtn = styled.button`
    border: .25rem solid white;
    border-radius: .5rem;
    padding: .5rem 1rem;
    background: transparent;
    color: white;
`

const NavWrapper = styled.nav`
    position: sticky;
    top: 0;
    box-shadow: 0 0 3px 3px rgba(175,175,175,1);
    z-index: 1;
    background: var(--schemeGradient);
`
export default Navbar;