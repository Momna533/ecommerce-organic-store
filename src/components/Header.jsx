import { Link, NavLink } from "react-router-dom";
import logo from "../assets/organic-store-logo5.svg";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import useGlobalContext from "../hooks/useGlobalContext";
import CartDrawer from "./CartDrawer";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    isMobileDrawerOpen,
    setIsMobileDrawerOpen,
  } = useGlobalContext();
  return (
    <>
      <div className="hidden lg:flex  items-center justify-between py-4 px-6">
        <div className="flex items-center content-center gap-4">
          <Link to="/" className="flex items-center content-center">
            <img
              src={logo}
              alt="organic-store-logo"
              width={"150"}
              height={"150"}
            />
          </Link>
          <div className="flex items-center content-center gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-btnBg hover:text-green transition-all"
                  : "px-2  hover:text-green transition-all"
              }
              to="/shop"
            >
              Everything
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-btnBg hover:text-green transition-all"
                  : "px-2  hover:text-green transition-all"
              }
              to="/groceries"
            >
              Groceries
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-btnBg hover:text-green transition-all"
                  : "px-2  hover:text-green transition-all"
              }
              to="/juice"
            >
              Juice
            </NavLink>
          </div>
        </div>
        <div className="flex items-center content-center gap-4">
          <div className="flex items-center content-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-btnBg hover:text-green transition-all"
                  : "px-2  hover:text-green transition-all"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-btnBg hover:text-green transition-all"
                  : "px-2  hover:text-green transition-all"
              }
              to="/contact"
            >
              Contact
            </NavLink>
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
        <Link to="/" className="flex items-center content-center">
          <img
            src={logo}
            alt="organic-store-logo"
            width={"150"}
            height={"150"}
          />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setIsCartDrawerOpen(true)}
            className="flex items-center justify-center gap-2"
          >
            <div className="text-green">0.00</div>
            <FiShoppingCart fontSize={"20"} className="text-green" />
          </button>
          <button
            className="bg-green p-2"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <FiMenu fontSize={"20"} />
          </button>
        </div>
      </div>
      {isCartDrawerOpen && <CartDrawer />}
      {isMobileDrawerOpen && <MobileDrawer />}
    </>
  );
};

export default Header;
