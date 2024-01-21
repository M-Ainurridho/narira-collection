import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHref } from "react-router-dom";

import Cart from "./sidebars/Cart";
import Boxicons from "./icons/Boxicons";
import BtnLink from "./buttons/BtnLink";
import SearchBox from "./forms/SearchBox";

const Navbar = () => {
    const { currentMenu } = useSelector((state) => state.generalMenu);
    const { carts } = useSelector((state) => state.cart);

    const pathname = useHref();

    const [cart, setCart] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        cart && setCart(false);

        search.length >= 3 ? productFilter() : setSearchResult([]);
    }, [search, currentMenu]);

    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");

        if (window.pageYOffset < 50 && pathname === "/") {
            nav && nav.classList.remove("bg-white", "border", "border-b");
        } else {
            nav && nav.classList.add("bg-white", "border", "border-b");
        }
    });

    return (
        <>
            <nav
                className={`fixed left-0 right-0 top-0 h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 z-20 gap-x-4`}
            >
                <div className="navbar-start basis-1/5 hidden lg:block">
                    <h1 className="font-permanent-marker hidden lg:block text-5xl">
                        <BtnLink
                            path="/"
                            text="NARIRA"
                            size="5xl"
                            bgcolor="bg-transparent"
                        />
                    </h1>
                </div>
                <div className="navbar-center basis-4/5 lg:basis-3/5">
                    <SearchBox />
                </div>
                <div className="navbar-end basis-1/5 flex gap-x-3">
                    <div className="cart flex items-center pe-4 border-e border-neutral-900/50">
                        <Boxicons
                            icon="cart-alt"
                            size="2xl"
                            translate="-translate-y-1"
                            pointer={true}
                        />
                    </div>

                    <div className="btn-auth flex gap-x-3 ms-2">
                        <div className="sign-in">
                            <BtnLink
                                path="/login"
                                text="Masuk"
                                color="text-white"
                                bgcolor="bg-lilac"
                                radius="lg"
                                contentPadding="px-4 py-2"
                                hover="hover:shadow-lg hover:shadow-purple-300 duration-100"
                            />
                        </div>
                        <div className="sign-up hidden md:block">
                            <BtnLink
                                path="/register"
                                text="Daftar"
                                color="text-lilac"
                                bgcolor="bg-transparent"
                                border="border border-lilac"
                                radius="lg"
                                contentPadding="px-4 py-2"
                                hover="hover:shadow-lg hover:shadow-purple-300 duration-100"
                            ></BtnLink>
                        </div>
                    </div>
                </div>
            </nav>

            {cart && <Cart onClick={() => setCart(!cart)} />}
        </>
    );
};

export default Navbar;
