"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handlePortfolioClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setDropdownVisible(false);

    if (window.location.pathname === "/") {
      event.preventDefault();
      if (window.location.hash !== "#portfolio") {
        window.history.replaceState(null, "", "#portfolio");
      }
      window.dispatchEvent(new Event("portfolio-scroll"));
    }
  };

  const handleNavClick = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="h-[100px] w-full sticky top-0 items-center z-40">
      <div className="bg-black flex flex-row size-full py-4 px-4 md:px-15">
        <Link className="w-40 h-full relative" href="/">
          <Image src={"/img/Logo.svg"} alt="Logo" fill />
        </Link>
        <div className="hidden md:flex flex-row justify-end gap-10 w-full self-end font-title text-3xl uppercase">
          <Link href="/#portfolio" onClick={handlePortfolioClick}>Portfolio</Link>
          <Link href="/resume" onClick={handleNavClick}>Resume</Link>
          <Link href="/blog" onClick={handleNavClick}>Blog</Link>
          <Link href="/about" onClick={handleNavClick}>About</Link>
        </div>
        <button
          className="md:hidden ml-auto"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <Menu size={40} />
        </button>
      </div>
      <div
        className={`md:hidden flex flex-col gap-2 w-full text-right bg-black px-5 pb-5 transform transition-transform duration-300 ${
          dropdownVisible ? "translate-x-0" : "translate-x-full"
        }
      `}
      >
        <Link href="/#portfolio" onClick={handlePortfolioClick}>Portfolio</Link>
        <Link href="/resume" onClick={handleNavClick}>Resume</Link>
        <Link href="/blog" onClick={handleNavClick}>Blog</Link>
        <Link href="/about" onClick={handleNavClick}>About</Link>
      </div>
    </header>
  );
}
