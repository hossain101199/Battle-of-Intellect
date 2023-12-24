import { useAppSelector } from "@/redux/hooks";
import AutUserNav from "./AutUserNav";
import NavLink from "./NavLink";

interface AutNavProps {}

const AutNav: React.FC<AutNavProps> = () => {
  const { role } = useAppSelector((state) => state.auth);
  return (
    <div className="flex gap-3">
      {role === "ADMIN" && <NavLink href="dashboard" title="Dashboard" />}
      <NavLink href="leader-board" title="Leader Board" />
      <AutUserNav />
    </div>
  );
};

export default AutNav;
