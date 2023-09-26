import React, { useContext } from 'react'
import Button from '../../UI/Button/Button'
import AuthContext from '../../../store/auth-context'
const LogoutButton = (props) => {
    const authCtx = useContext(AuthContext);

    const logoutHandler=()=>{
        props.onCloseLoginPage();
        authCtx.onLogout();
    }
    return (
        <Button onClick={logoutHandler}>
            Logout
        </Button>
    )
}

export default LogoutButton
