import "./sidenav.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/userSlice";
const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="sideNav">
      <NavLink to="/dashboard" className="NavLink NavLink NavLink__Dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/deals" className="NavLink ">
        Deals
      </NavLink>
      <NavLink to="/portfolio" className="NavLink ">
        Portfolio
      </NavLink>
      {/* <NavLink to="/profile" className="NavLink ">
        Profile
      </NavLink> */}
      <NavLink to="/analytics" className="NavLink ">
        Analytics
      </NavLink>
      <NavLink
        onClick={() => {
          dispatch(logout());
          localStorage.removeItem("uid");
        }}
        to="/"
        className="NavLink NavLink__Logout "
      >
        Log out
      </NavLink>
    </div>
  );
};

export default SideNav;
