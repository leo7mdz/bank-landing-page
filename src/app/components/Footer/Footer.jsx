import Image from "next/image";
import React from "react";
import { FooterData } from "./Footer.data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-5 max-w-5xl w-full mx-auto mt-12 md:mt-28 flex flex-col md:flex-row md:justify-between">
      <div>
        <Image src="/assets/logo.png" alt="logo" width={200} height={40} />
        <p className="max-w-[250px] text-primaryDark mt-5 mb-8">
          Una nueva forma de hacer pagos de forma sencilla
        </p>
      </div>

      {FooterData.map(({ id, title, links }) => (
        <div key={id} className="mb-3">
          <h4 className="text-xl font-semibold  ">{title}</h4>
          {links.map(({ id, name, link }) => (
            <Link key={id} href={link} className="block">
              {name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
