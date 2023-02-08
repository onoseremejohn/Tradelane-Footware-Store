import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
const Overlay = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return <Wrapper isSidebarOpen={isSidebarOpen} onClick={closeSidebar} />;
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: ${({ isSidebarOpen }) =>
    isSidebarOpen ? `rgba(0, 0, 0, 0.5)` : `rgba(0, 0, 0, 0)`};
  z-index: ${({ isSidebarOpen }) => (isSidebarOpen ? `100` : `-100`)};
  visibility: ${({ isSidebarOpen }) => (isSidebarOpen ? `visible` : `hidden`)};
  transition: background-color 0.3s linear;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default Overlay;
