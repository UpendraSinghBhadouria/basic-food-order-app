import { Fragment, useContext, useState } from 'react';

import Header from './components/Layout/Header/Header';
import Cart from './components/Cart/Cart';
import Login from './components/Layout/Login/Login';
import AuthContext from './store/auth-context';
import Home from './components/Layout/Home/Home';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const ctx = useContext(AuthContext);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  const showLoginPageHandler = () => {
    setShowLoginPage(true);
  }

  const hideLoginPageHandler = () =>{
    setShowLoginPage(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header
        onShowCart={showCartHandler}
        onShowLoginPage={showLoginPageHandler}
        onCloseLoginPage={hideLoginPageHandler}
      />
      <main>
        {showLoginPage && <Login />}
        {(!showLoginPage || ctx.isLoggedIn) && <Home />}
      </main>
    </Fragment>
  );
}

export default App;