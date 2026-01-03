"use client";
import Image from "next/image";
import Link from "next/link";
import headerstyle from "@/styles/header.module.scss";
import { forwardRef, useState } from "react";

const Header = forwardRef(function Header(props, ref) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header ref={ref} className={`${headerstyle.header} w-full bg-white`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image
            src="/images/main-logo.svg"
            alt="Vintale"
            width={171}
            height={32}
            priority
          />
        </Link>

        <nav
          className={`${headerstyle.navLinksWrap} hidden md:flex space-x-6`}
        >
          <Link href="/">Collections</Link>
          <Link href="/">Our Story</Link>
          <Link href="/">Journal</Link>
          <Link href="/">Contact</Link>
        </nav>

        <div className={headerstyle.headerIcons}>
          <Link href="/">
            <Image
              src="/images/cart-icon.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/user-icon.svg"
              alt="User"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 relative z-10"
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-1 bg-gray-700 mb-1 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-700 mb-1 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`${headerstyle.hamburgerMenu} flex flex-col items-center space-y-4 py-4`}
        >
          <Link href="/">Collections</Link>
          <Link href="/">Our Story</Link>
          <Link href="/">Journal</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
    </header>
  );
});

export default Header;
