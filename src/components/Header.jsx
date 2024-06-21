import { Link } from "react-router-dom";
import logo from "../assets/organic-store-logo5.svg";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import useGlobalContext from "../hooks/useGlobalContext";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    isMobileDrawerOpen,
    setIsMobileDrawerOpen,
  } = useGlobalContext();
  return (
    <>
      <div className="hidden lg:flex flex items-center justify-between py-4 px-6">
        <div className="flex items-center content-center gap-4">
          <div className="flex items-center content-center">
            <img
              src={logo}
              alt="organic-store-logo"
              width={"150"}
              height={"150"}
            />
          </div>
          <div className="flex items-center content-center gap-4">
            <Link className="px-2 hover:text-green transition-all">
              Everything
            </Link>
            <Link className="px-2 hover:text-green transition-all">
              Groceries
            </Link>
            <Link className="px-2 hover:text-green transition-all">Juice</Link>
          </div>
        </div>
        <div className="flex items-center content-center gap-4">
          <div className="flex items-center content-center">
            <Link className="px-2 hover:text-green transition-all">About</Link>
            <Link className="px-2 hover:text-green transition-all">
              Contact
            </Link>
          </div>
          <div className="flex items-center content-center gap-4">
            <button
              className="flex items-center gap-4"
              onClick={() => setIsCartDrawerOpen(true)}
            >
              <div className="text-green">0.00</div>
              <FiShoppingCart fontSize={"20"} className="text-green" />
            </button>
            <FiUser fontSize={"20"} />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-between py-4 px-6">
        <div className="flex items-center content-center">
          <img
            src={logo}
            alt="organic-store-logo"
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="text-green">0.00</div>
          <FiShoppingCart fontSize={"20"} className="text-green" />
          <button className="bg-green p-2">
            <FiMenu fontSize={"20"} />
          </button>
        </div>
      </div>
      {isCartDrawerOpen && <CartDrawer />}
    </>
  );
};

export default Header;
