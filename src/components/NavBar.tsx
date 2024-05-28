"use client";
import { Navbar } from "keep-react";
import Image from "@/assets/logo.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="flex justify-center px-0 !py-4 ">
      <Navbar.Container className="flex items-center justify-between w-11/12  max-w-[1280px] m-auto">
        <Link to="/">
          <Navbar.Brand>
            <img src={Image} alt="keep" width="40" height="40" />
          </Navbar.Brand>
        </Link>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavBar;
