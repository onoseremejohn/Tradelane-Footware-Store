import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartBtns = () => {
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper>
      <Link to='/cart' className='relat'>
        <FaShoppingCart /> <span className='cart-vaalue'>{total_items}</span>
      </Link>
      {myUser ? (
        <button
          type='button'
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          <FaUserMinus />
        </button>
      ) : (
        <button type='button' onClick={loginWithRedirect}>
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 15px;
  width: 100px;
  svg {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
  }
  button {
    background: none;
    border: none;
  }
  .relat {
    position: relative;
    .cart-vaalue {
      position: absolute;
      top: -12px;
      right: 5px;
      background: var(--clr-primary-5);
      width: 1.4rem;
      height: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1rem;
      color: var(--clr-white);
      padding: .8em;
    }
  }
`;
export default CartBtns;
