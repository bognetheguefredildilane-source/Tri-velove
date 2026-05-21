"use client"
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { GiHearts } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { useFavoriteStore } from "@/store/favorite.store";
import {  Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'








type NavLink = {
    name: string;
    href: string;
}

const NavbarComponent = () => {

    const [menuOuvert, setMenuOuvert] = useState(false);
    const {favorites} = useFavoriteStore();

    const navlinks: NavLink[] = [
        { name: "Home", href: "/" },
        { name: "Nos Vehicules", href: "/vehicules" },
        { name: "Contact", href: "/contact" }
    ];



    return (
        <nav className="flex justify-between fixed  z-10 w-full text-center items-center px-6 py-4 bg-white border-b border-gray-300 sm:px-8 md:px-16 lg:px-24 xl:px-32 " >
            <div className="flex items-center justify-between gap-7">
                <Image
                    src="/tri-logo.png"
                    alt="Logo"
                    width={100}
                    height={50} />
            </div>
            <div className="hidden md:flex items-center gap-10 ">
                {navlinks.map((link) => (
                    <Link key={link.name} href={link.href} className=" px-3 py-1 text-sm font-medium rounded-md text-gray-500 hover:text-black">
                        {link.name}
                    </Link>
                ))}

            </div>
            <div className="flex items-center gap-7">
                <Link href="/car/favorite" className="relative hover:opacity-80 transition-opacity">
                    <GiHearts size={30} color={"blue"} />
                    <div className="h-5 w-5 rounded-full bg-red-700 text-white absolute -top-1 left-5 flex 
                    items-center justify-center">{favorites.length}</div>
                </Link>
                <span className="md:block sm:hidden"><AiOutlineShoppingCart size={25} /></span>
               
                 {/* mobile */}
                <button className="md:hidden flex flex-col  border-t border-gray-200"
                onClick={() => setMenuOuvert(!menuOuvert)}>
                    {menuOuvert ? <MdMenu size={25} /> : <MdMenu size={25} />}
                </button> 
                <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>

            {
                menuOuvert && (
                    <div className="md:hidden flex flex-col bg-white border-t border-gray-200">
                        {navlinks.map((link) => (
                            <Link key={link.name}
                                href={link.href}
                                className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-black">
                                {link.name}
                            </Link>
                        ))}

                    </div>
                )
            }
            </div>
        </nav>
    )
}

export default NavbarComponent;