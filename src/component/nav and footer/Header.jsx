"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { Popover } from "@headlessui/react";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { navData } from "../../constants/index";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MobileNavLink = ({ children, href, onClick }) => {
  return (
    <button
      className="block text-base leading-7 tracking-tight text-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNavClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const handleMenuToggle = (open) => {
    setMenuOpen(open);
  };

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    // Handle navigation manually if necessary or use Next.js navigation
    // e.g., using router.push(href)
    window.location.href = href;
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white ${
        isScrolled ? "shadow-xl" : ""
      }`}
    >
      <nav className="underline-offset-auto">
        <Container className="flex justify-between py-2 pr-10 bg-transparent">
          {/* Logo */}
          <div className="relative z-10 flex items-center">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="hidden  lg:flex justify-center lg:mt-5 lg:h-14 px-4 rounded-lg lg:gap-6 items-center">
            <NavLinks className="" />
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-6">
            {/* Mobile NavLinks */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-blue-600 p-2
                     hover:bg-blue-600/50 hover:stroke-gray-600 active:stroke-gray-900 
                     [&:not(:focus-visible)]:focus:outline-none outline-none"
                    aria-label="Toggle site navigation"
                    onClick={() => handleMenuToggle(!menuOpen)}
                  >
                    {({ open }) =>
                      open ? (
                        <IoIosArrowUp className="text-2xl" />
                      ) : (
                        <TbMenu2 className="text-2xl" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {menuOpen && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-blue-600/20"
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href, subItems }) => (
                              <div key={_id}>
                                <MobileNavLink
                                  href={href}
                                  onClick={(e) => {
                                    if (subItems) {
                                      handleNavClick(_id);
                                    } else {
                                      handleLinkClick(e, href);
                                    }
                                  }}
                                >
                                  {title}
                                </MobileNavLink>
                                {expandedItem === _id && subItems && (
                                  <div className="ml-4 mt-2 space-y-2">
                                    {subItems.map(({ _id, title, href }) => (
                                      <MobileNavLink
                                        key={_id}
                                        href={href}
                                        onClick={(e) => handleLinkClick(e, href)}
                                      >
                                        {title}
                                      </MobileNavLink>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          {/* <div className="mt-8 flex flex-col gap-4">
                            <Button href="#" variant="outline">
                              Sign In
                            </Button>
                            <Button href="#">Register</Button>
                          </div> */}
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
