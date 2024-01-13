import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHref } from "react-router-dom";

import Sidebar from "./sidebars/Sidebar";
import Cart from "./sidebars/Cart";
import Boxicons from "./icons/Boxicons";
import BtnLink from "./buttons/BtnLink";

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

    // const productFilter = () => {
    //     const filtered = products.filter((product) =>
    //         product.name.toLowerCase().match(search.toLowerCase())
    //     );

    //     setSearchResult(filtered);
    // };

    // const productFiltered = searchResult.map(
    //     ({ id, name, images, description }) => {
    //         return (
    //             <div
    //                 key={id}
    //                 className="card flex gap-x-2 py-2 border-t border-lilac cursor-pointer"
    //             >
    //                 <div className="card-image">
    //                     <img
    //                         src={`/src/assets/images/products/${images[0]}`}
    //                         alt="product-2"
    //                         className="h-10 w-10 object-cover"
    //                     />
    //                 </div>
    //                 <div className="card-body">
    //                     <h5 className="text-sm w-36 truncate">{name}</h5>
    //                     <p className="text-xs w-36 truncate text-neutral-500">
    //                         {description}
    //                     </p>
    //                 </div>
    //             </div>
    //         );
    //     }
    // );

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
                    <div className="search-box relative">
                        <Boxicons
                            icon="bx-search"
                            color="text-neutral-900/75"
                            style="absolute left-4 top-3"
                            size="xl"
                        />
                        <input
                            type="text"
                            placeholder="Cari di Narira Collection"
                            className="w-full bg-transparent border border-neutral-900/50 rounded-full ps-10 p-2 placeholder:text-neutral-900/75 focus:outline-0 focus:border-lilac focus:shadow focus:shadow-purple-300"
                        />
                    </div>
                </div>
                <div className="navbar-end basis-1/5 flex gap-x-3">
                    <div className="cart flex items-center pe-4 border-e border-neutral-900/50">
                        <Boxicons
                            icon="bx-cart-alt"
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
                        <div className="sign-up">
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
