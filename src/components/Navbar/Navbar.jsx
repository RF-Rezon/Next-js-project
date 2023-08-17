"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const session = useSession();
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 10px",
        margin: "10px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <DarkModeToggle />
      {links.map((link) => (
        <Link style={{ padding: "0px 50px" }} key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
      {session.status === "authenticated" && (
        <button className={styles.logout} onClick={signOut}>
          LogOut
        </button>
      )}
    </div>
  );
};

export default Navbar;
