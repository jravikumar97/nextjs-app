"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./navlink/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  {
    id: 1,
    title: "Homepage",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // Move useState inside the component

  const session = true;
  const isAdmin = true;

  return (
    <div className="relative">
      <div className="hidden gap-4 items-center md:flex">
        {links.map((link) => (
          <NavLink key={link.id} path={link.path} title={link.title} />
        ))}
        {isAdmin && session ? <NavLink path="/admin" title="Admin" /> : null}

        {session ? (
          <button className="bg-white text-bg px-4 py-1">Logout</button>
        ) : (
          <NavLink path="/login" title="Login" />
        )}
      </div>
      <button
        className="md:hidden bg-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>
      {open && (
        <div className="md:hidden absolute top-12 -right-4 h-[100vh] w-40 flex flex-col gap-6 items-end pr-2">
          {links.map((link) => (
            <NavLink key={link.id} path={link.path} title={link.title} />
          ))}
          {isAdmin && session ? <NavLink path="/admin" title="Admin" /> : null}

          {session ? (
            <button className="bg-white text-bg px-4 py-1">Logout</button>
          ) : (
            <NavLink path="/login" title="Login" />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
