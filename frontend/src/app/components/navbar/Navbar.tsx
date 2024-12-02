import React from "react";
import Link from "next/link";

const navItems = [
  { name: "Mint", href: "/mint" },
  { name: "Sell", href: "/sell" },
  { name: "Buy", href: "/buy" },
  { name: "Auction", href: "/auction" },
];

export const Navbar = () => {
  return (
    <div className="navbar bg-accent-content">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-none">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            MintMuse
          </Link>
        </div>

        <div className="flex-1">
          <ul className="menu menu-horizontal flex justify-center space-x-20">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg text-white bg-transparent hover:bg-white hover:text-black active:bg-white active:text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
