import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Footer = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <DarkModeToggle />
    </div>
  );
};

export default Footer;
