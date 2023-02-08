import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import CartBtns from "./Cartbtns";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const {
    openSidebar,
    windowDimensions: { width },
  } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <button onClick={openSidebar} type='button' className='nav-toggle'>
            <FaBars />
          </button>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' />
          </Link>
          {width < 992 && <CartBtns />}
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) => (isActive ? active : null)}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
          {myUser && (
            <li>
              <NavLink
                to='/checkout'
                className={({ isActive }) => (isActive ? active : null)}
              >
                checkout
              </NavLink>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const active = "activeLink";

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    height: 5rem;
  }
  .nav-header {
    display: grid;
    height: 5rem;
    grid-template-columns: auto 1fr auto;
    gap: 15px;
    img {
      display: block;
      height: calc(5.2rem);
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .activeLink {
      border-bottom: 2px solid var(--clr-primary-7);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-header {
      display: block;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          color: var(--clr-primary-5);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
