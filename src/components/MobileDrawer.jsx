import { NavLink } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";
import { CgClose } from "react-icons/cg";

const MobileDrawer = () => {
  const { setIsMobileDrawerOpen } = useGlobalContext();
  return (
    <div
      className="fixed top-0 right-0 bottom-0 bg-bgOverlay left-0 w-full flex items-start justify-end"
      onClick={() => setIsMobileDrawerOpen(false)}
    >
      <div
        className="flex flex-col bg-white h-full w-96 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end p-4 border border-border">
          <button
            onClick={() => setIsMobileDrawerOpen(false)}
            className="text-black-500 text-xl font-bold"
          >
            <CgClose />
          </button>
        </div>
        <div className="flex flex-col capitalize h-full divide-y divide-border">
          <MobileNavLink to="shop" text="Everything" />
          <MobileNavLink to="groceries" text="groceries" />
          <MobileNavLink to="juice" text="juice" />
          <MobileNavLink to="about" text="about" />
          <MobileNavLink to="contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
const MobileNavLink = ({ text, to }) => {
  return (
    <NavLink
      onClick={() => setIsMobileDrawerOpen(false)}
      className={({ isActive }) =>
        isActive
          ? " text-btnBg hover:text-green transition-all p-4"
          : " hover:text-green transition-all p-4"
      }
      to={`/${to}`}
    >
      {text}
    </NavLink>
  );
};
