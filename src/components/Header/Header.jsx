import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import header from "./Header.module.css";
import global from "../Global/global.module.css";
import { IconContext } from "react-icons";
import MenuItem from "../MenuItem/MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../public/img/k.png";
import Image from "next/image";

//https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hasAnimation, setHasAnimation] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setShowMenu(window.innerWidth >= 812);
      setHasAnimation(window.innerWidth >= 812);
      setIsMobile(window.innerWidth <= 812);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();

      if (window.innerWidth <= 812) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 812) {
          document.removeEventListener("mousedown", handleClickOutside);
        }
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <header className={header.header} ref={menuRef}>
      <div
        className={[
          global.container,
          global["align-center"],
          global.relative,
        ].join(" ")}
      >
        <div className={global.row}>
          <Image
            className={header.logo__img}
            src={logo}
            alt={"logo"}
            priority
          />
        </div>
        <IconContext.Provider
          value={{
            onClick: handleClick,
            className: "mobile-menu",
          }}
        >
          <AiOutlineMenu onClick={handleClick} />
        </IconContext.Provider>
        {showMenu && (
          <div className={header["menu-container"]}>
            <ul>
              <MenuItem
                url={"/"}
                text={"Home"}
                hasAnimation={hasAnimation}
                click={closeMenu}
              />
              <MenuItem
                url={"/about-me"}
                text={"About"}
                hasAnimation={hasAnimation}
                click={closeMenu}
              />
              <MenuItem
                url={"/experience"}
                text={"Experience"}
                hasAnimation={hasAnimation}
                click={closeMenu}
              />
              <MenuItem
                url={"/contact"}
                text={"Contact"}
                hasAnimation={hasAnimation}
                click={closeMenu}
              />
              <MenuItem
                url={"/blog"}
                text={"Blog"}
                hasAnimation={hasAnimation}
                click={closeMenu}
              />
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
