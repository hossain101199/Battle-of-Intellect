import AutNav from "@/components/atoms/AutNav";
import Container from "@/components/atoms/Container";
import NavLink from "@/components/atoms/NavLink";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Navbar = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  return (
    <nav>
      <Container className="flex justify-between items-center py-2">
        <Link href="/">
          <Image alt="logo" src={logo} className="h-10 w-fit " />
        </Link>
        {accessToken ? <AutNav /> : <NavLink href="sign-in" title="Sign In" />}
      </Container>
    </nav>
  );
};

export default Navbar;
