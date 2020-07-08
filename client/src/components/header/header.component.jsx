import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from "../button/button.styles";

import { toggleDarkMode } from "../../redux/themes/themes.actions";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectDarkMode } from "../../redux/themes/themes.selectors";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

export const Header = (props) => {
  const { currentUser, hidden, signOutStart , toggleDarkMode} = props;
  return(
         <HeaderContainer>
           <LogoContainer to="/">
             <Logo className="logo" />
           </LogoContainer>
           <Button kind="warning" onClick={toggleDarkMode}>
             Toggle Mode
           </Button>
           <Button
             kind="success"
             onClick={() => console.log("success clicked :D")}
           >
             Toggle Size
           </Button>
           <OptionsContainer>
             <OptionLink to="/shop">SHOP</OptionLink>
             <OptionLink to="/shop">CONTACT</OptionLink>
             {currentUser ? ( // ternary operator to check if currentUser is valid. which means the user is signed-in.
               // then load sign-out button. if there isn't load sign-in button.
               <OptionLink as="div" onClick={signOutStart}>
                 SIGN OUT
               </OptionLink>
             ) : (
               <OptionLink to="/signin">SIGN IN</OptionLink>
             )}

             <CartIcon />
           </OptionsContainer>
           {hidden ? null : <CartDropdown />}
         </HeaderContainer>
       )};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  darkMode: selectDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
