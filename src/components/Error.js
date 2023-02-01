import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Error = ({ product }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!product) return;
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [product]);
  return (
    <div className='section section-center text-center'>
      <h2>there was an error</h2>
    </div>
  );
};

export default Error;
