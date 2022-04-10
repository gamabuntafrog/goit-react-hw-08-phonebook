import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { auhtLogOut } from "../../Redux/authSliceOperations";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return (
      <nav>
        <NavLink to={"/contacts"}>Contacts</NavLink>
      </nav>
    );
  } else {
    return (
      <nav>
        <NavLink to={"/register"}>registration</NavLink>
        <NavLink to={"/login"}>login</NavLink>
      </nav>
    );
  }
};

export default Layout;
