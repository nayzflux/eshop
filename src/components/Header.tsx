import React from 'react';
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import CartButton from "@/components/buttons/CartButton";

const Header = () => {
    return (
        <header className="flex shadow px-10 py-5 bg-white gap-8 items-center">
            <Logo/>

            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/" className="hover:underline active:font-semibold">
                            Shoes
                        </Link>
                    </li>

                    <li>
                        <Link href="/" className="hover:underline active:font-semibold">
                            Shirts
                        </Link>
                    </li>

                    <li>
                        <Link href="/" className="hover:underline active:font-semibold">
                            Sweat
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="ml-auto flex">
                <CartButton/>
            </div>
        </header>
    );
};

export default Header;
