import { AiFillCloseCircle } from "react-icons/ai";
import useGlobalContext from "../hooks/useGlobalContext";

const CartDrawer = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    isMobileDrawerOpen,
    setIsMobileDrawerOpen,
  } = useGlobalContext();
  return (
    <div className="fixed top-0 right-0 bg-black left-0">
      <div className="flex flex-col bg-white">
        <div className="flex items-center justify-between p-2">
          <h4>Shopping cart</h4>
          <button onClick={() => setIsCartDrawerOpen(false)}>
            <AiFillCloseCircle />
          </button>
        </div>
        <div className="flex flex-col p-2">no products in the cart</div>
        <button>Continue shopping</button>
      </div>
    </div>
  );
};

export default CartDrawer;
