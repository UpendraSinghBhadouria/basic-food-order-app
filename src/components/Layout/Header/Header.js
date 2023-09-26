import React, { useContext } from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import AuthContext from '../../../store/auth-context';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';

const Header = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {ctx.isLoggedIn ? (
          <div className={classes['header-buttons']}>
            <span> <HeaderCartButton onClick={props.onShowCart} /> </span>
            <span> <LogoutButton onCloseLoginPage={props.onCloseLoginPage}/> </span>

          </div>
        )
          : <LoginButton onLoginHandler={props.onShowLoginPage} />}
      </header>
    </>
  )
}

export default Header
