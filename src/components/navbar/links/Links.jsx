"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLinks/navLink";
import styles from "./links.module.css";
const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button> */}
      <Image className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} src="/menu.png" alt="" width={20} height={20}></Image>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
