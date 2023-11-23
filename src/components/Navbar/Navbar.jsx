"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from "./Navbar.module.css"
import Image from "next/image";

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
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 6,
      
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        marginRight: "50px",
        padding: "10px 20px",
        maxHeight: "850px"
      }}
    >
      
      <Link href="/">
        <Image
          src="/vector/default-monochrome-white.svg"
          height={100}
          width={200}
          alt=""
        />
      </Link>
      {links.map((link) => (
        <Link className={styles.btn_bg} style={{ padding: "20px 10px",
        margin: "10px 0px", width: "100%", borderRadius: "5px", fontWeight: "550"}} key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
      {session.status === "authenticated" && (
        <button className={styles.btn_bg_diff} style={{ padding: "20px 10px",
        margin: "10px 0px", width: "100%",  border: "none", borderRadius: "5px", fontWeight: "550"}} onClick={signOut}>
          LogOut
        </button>
      )}
    </div>
  );
};

export default Navbar;
