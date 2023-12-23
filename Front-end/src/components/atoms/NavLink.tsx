"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import XLParagraph from "./XLParagraph";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`click-animation py-2 px-8 border border-secondary rounded-lg ${
        pathname === `/${href}` ? "bg-primary text-accent" : "text-primary"
      }`}
    >
      <XLParagraph className="font-bold">{title}</XLParagraph>
    </Link>
  );
};

export default NavLink;
