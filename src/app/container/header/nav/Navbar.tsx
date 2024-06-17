import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Header = () => {
    return (
        <Navbar position="static" className={"bg-gray-800 absolute text-white"}>
            <NavbarContent className="" >

                <NavbarBrand>
                    <Link href="/" className={"text-lg font-bold"}>YoshiOUTWEAR</Link>
                </NavbarBrand>

                <NavbarItem>
                    <Link href="/accessories">Accessories</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/supplments">Supplments</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/mens">Mens</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/womens">Womens</Link>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    );
};

export default Header;

// path: src/app/container/header/Header.tsx