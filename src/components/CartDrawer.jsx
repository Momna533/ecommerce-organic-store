import useGlobalContext from "../hooks/useGlobalContext";
import Button from "./Button";
import { CgClose } from "react-icons/cg";

const CartDrawer = () => {
  const { setIsCartDrawerOpen } = useGlobalContext();
  return (
    <div
      className="fixed top-0 right-0 bottom-0 bg-bgOverlay left-0 w-full flex items-start justify-end"
      onClick={() => setIsCartDrawerOpen(false)}
    >
      <div
        className="flex flex-col bg-white h-full w-96 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border border-border">
          <h4 className="capitalize text-md">Shopping cart</h4>
          <button
            onClick={() => setIsCartDrawerOpen(false)}
            className="text-black-500 text-xl font-bold"
          >
            <CgClose />
          </button>
        </div>
        <div className="flex flex-col p-4 capitalize h-full">
          no products in the cart
        </div>
        <div className="p-4 flex items-center justify-center">
          <Button
            to="/shop"
            varient="link"
            text="Continue shopping"
            onClick={() => setIsCartDrawerOpen(false)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
