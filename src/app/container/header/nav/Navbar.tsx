import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const HeaderNavbar = () => {
    return (
        <Navbar position="static" className="bg-gray-800 text-white">
            <NavbarContent className="container mx-auto">

                <NavbarBrand>
                    <Link href="/" className="text-lg font-bold">YoshiOUTWEAR</Link>
                </NavbarBrand>

                <NavbarItem>
                    <Link href="/cart">Cart</Link>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    );
};

export default HeaderNavbar;

// path: src/app/container/header/Navbar.tsx

