import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper
        className="navbar navbar-expand-sm
			 navbar-dark px-sm-5"
      >
        <Link to="/">
          <img src={logo} alt="toko" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus  " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
