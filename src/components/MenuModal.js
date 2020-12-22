import styled from 'styled-components'
import { AuthOptions } from './Divs'
import { AuthBtn } from './Buttons'
import { NavLink } from 'react-router-dom'

const MenuModal = (props) =>{
    return (
        <Modal className="list group">
            <div className="list-group-item">Home</div>
            <div className="list-group-item">About</div>
            <div className="list-group-item">Workouts</div>
            <div className="list-group-item">Nutrition</div>
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
        </Modal>
    )
}
const Modal = styled.div`

`
export default MenuModal