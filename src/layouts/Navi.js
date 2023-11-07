import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary';
import SignOut from './SignOut';
import SignIn from './SignIn';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navi() {

    const [isAuthendicated, setIsAuthendicated] = useState(true);

    const navigate=useNavigate()

     function handleSignOut(){
        setIsAuthendicated(false);
        navigate("/")
     }

     function handleSignIn(){
        setIsAuthendicated(true);
     }

     const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        {cartItems.length>0 && <CartSummary />}
                        {isAuthendicated ? <SignIn signOut={handleSignOut}/> : <SignOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
export default Navi;