import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import MenuNavLink from "./menu-nav-link";

const MobileNav = ({
  open,
  closeMenu,
}: {
  open: boolean;
  closeMenu: () => void;
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed w-full bg-slate-50/95 top-0 right-0 bottom-0
					flex items-center justify-center z-50"
          initial={{ y: "-100%" }}
          animate={{ y: 0, transition: { type: "tween" } }}
          exit={{ y: "-100%", transition: { type: "tween" } }}
        >
          <button
            aria-label="Close menu"
            className="absolute top-5 right-6 text-blue-800"
            onClick={closeMenu}
          >
            <IoCloseSharp size={40} />
          </button>
          <ul className="items-center gap-8 flex flex-col text-2xl justify-center text-center">
            <li>
              <MenuNavLink href="/">Home</MenuNavLink>
            </li>
            <li>
              <MenuNavLink href="/blog">Blog</MenuNavLink>
            </li>
            <li>
              <MenuNavLink href="/about">About</MenuNavLink>
            </li>
            <li>
              <MenuNavLink href="/contacts">Contacts</MenuNavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="text-blue-800"
        onClick={openMenu}
      >
        <GiHamburgerMenu size={30} />
      </button>

      <MobileNav open={open} closeMenu={closeMenu} />
    </div>
  );
};

export default MobileMenu;
