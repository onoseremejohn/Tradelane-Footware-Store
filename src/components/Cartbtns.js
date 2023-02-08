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
  width: 150px;
  svg {
    color: var(--clr-grey-1);
    font-size: 2.2rem;
  }
  button {
    background: none;
    border: none;
  }
  .relat {
    position: relative;
    .cart-vaalue {
      position: absolute;
      top: -11px;
      right: 10px;
      background: var(--clr-primary-5);
      width: 2.1rem;
      height: 2.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.2rem;
      color: var(--clr-white);
    }
  }
`;
export default CartBtns;
