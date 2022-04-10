import { useDispatch, useSelector } from "react-redux";
import { auhtLogOut } from "../../Redux/authSliceOperations";

const UserMenu = () => {
  const userName = useSelector((state) => state.auth.user.name);

  const dispath = useDispatch();

  const logOut = () => {
    dispath(auhtLogOut());
  };

  return (
    <div className="userMenu">
      <h1 className="userName">Привет, {userName}</h1>
      <button onClick={() => logOut()}>выйти</button>
    </div>
  );
};

export default UserMenu;
