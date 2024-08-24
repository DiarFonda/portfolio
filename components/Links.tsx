"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/data";

const Nav = () => {
  const pathname = usePathname();
  return links.map((link) => {
    return (
      <li key={link.path}>
        <Link
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      </li>
    );
  });
};

export default Nav;
