import NavProfile from "../atoms/AutNav";
import NavLink from "../atoms/NavLink";

const AuthenticatedNavbar = () => {
  return (
    <div className="flex items-center gap-2" id="AuthenticatedNavbar">
      <NavLink href="leader-board" title="Leader Board" />
      <NavProfile />
    </div>
  );
};

export default AuthenticatedNavbar;
