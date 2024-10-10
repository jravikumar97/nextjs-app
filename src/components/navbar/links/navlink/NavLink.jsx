import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ path, title }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={path}
        className={`px-4 py-2 rounded ${
          pathname === path
            ? "bg-white text-bg rounded-full font-semibold"
            : null
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
