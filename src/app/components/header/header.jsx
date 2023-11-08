"use client";

import Link from "next/link";
import React, { useState } from "react";
import dataNav from "./header-data";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="relative max-w-6xl w-full mx-auto flex items-center justify-between p-4">
        <Link href="/" className="md:pt-3">
          <Image
            src="/assets/logo.png"
            alt="logo bank"
            width="150"
            height="40"
          />
        </Link>
        <nav
          className={`${
            open ? "clip-path-open" : "clip-path-close"
          } absolute top-[99%] pt-3 transition-[clip-path] text-center w-full md:relative md:clip-path-open z-10 bg-black`}
        >
          <ul className="flex flex-col md:flex-row justify-end items-center pr-8">
            {dataNav.map(({ id, name, link }) => (
              <li key={id} className=" py-5 md:px-3">
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <FaBarsStaggered className="text-2xl md:hidden" onClick={handleClick} />
      </header>
    </>
  );
};

export default Header;
