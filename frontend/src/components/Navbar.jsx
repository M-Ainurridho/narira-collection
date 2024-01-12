import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { products } from "../utils/data";
import { setCurrentMenu } from "../redux/reducers";
import Sidebar from "./sidebars/Sidebar";
import Cart from "./sidebars/Cart";
import Boxicons from "./icons/Boxicons";
import BtnLink from "./buttons/BtnLink";

const Navbar = () => {
    const { currentMenu } = useSelector((state) => state.generalMenu);
    const { carts } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const [dropmenu, setDropmenu] = useState(false);
    const [cart, setCart] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");

        if (window.pageYOffset < 50 && currentMenu === "Beranda") {
            nav.classList.remove("bg-white", "border", "border-b");
        } else {
            nav.classList.add("bg-white", "border", "border-b");
        }
    });

    useEffect(() => {
        if (cart) {
            setCart(false);
        }

        search.length >= 3 ? productFilter() : setSearchResult([]);
    }, [search, currentMenu]);

    const productFilter = () => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().match(search.toLowerCase())
        );

        setSearchResult(filtered);
    };

    const productFiltered = searchResult.map(
        ({ id, name, images, description }) => {
            return (
                <div
                    key={id}
                    className="card flex gap-x-2 py-2 border-t border-lilac cursor-pointer"
                >
                    <div className="card-image">
                        <img
                            src={`/src/assets/images/products/${images[0]}`}
                            alt="product-2"
                            className="h-10 w-10 object-cover"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="text-sm w-36 truncate">{name}</h5>
                        <p className="text-xs w-36 truncate text-neutral-500">
                            {description}
                        </p>
                    </div>
                </div>
            );
        }
    );

    return (
        <>
            <nav
                className={`fixed left-0 right-0 top-0 h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 z-10 gap-x-4`}
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
                    <div className="wishlist-icon flex items-center pe-4 border-e border-neutral-900/50">
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
                {/* <div className="navbar-left">
                    <div className="icon-menu lg:hidden flex items-center cursor-pointer">
                        <box-icon
                            name="menu"
                            size="md"
                            onClick={() => setDropmenu(!dropmenu)}
                        ></box-icon>
                    </div>
                    <Link
                        to="/"
                        className="font-permanent-marker hidden lg:flex text-4xl"
                    >
                        NARIRA
                    </Link>
                </div>
                <div className="navbar-nav hidden lg:block font-light">
                    <Navigation styling="px-3" currentMenu={currentMenu} />
                </div>
                <div className="navbar-end flex">
                    <div
                        className="relative flex items-center cursor-pointer"
                        onClick={() => setCart(!cart)}
                    >
                        <i className="bx bx-cart text-2xl"></i>
                        {carts.length > 0 && (
                            <div className="cart-amount bg-lilac text-white absolute top-0.5 -right-2 w-5 h-5 leading-4 text-center rounded-full tracking-tighter">
                                <span className="text-xs">{carts.length}</span>
                            </div>
                        )}
                    </div>
                    <div className="search-box flex mx-4">
                        {isSearch ? (
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari gamis, kulot, all size"
                                    className=" border border-neutral-400 ps-5 pe-10 h-full rounded-full text-sm text-neutral-500 placeholder:text-neutral-300 focus:outline-none focus:border-lilac focus:ring-1 focus:ring-lilac"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <span className="absolute right-2 top-2 cursor-pointer">
                                    <box-icon
                                        name="x"
                                        color="#d4d4d4"
                                        onClick={() => {
                                            setIsSearch(false);
                                            setSearch("");
                                            setSearchResult([]);
                                        }}
                                    ></box-icon>
                                </span>
                                {search.length >= 3 && (
                                    <div className="absolute left-0 right-0 -z-10 top-5 bg-white border border-2 border-lilac p-3 pt-7 rounded-b-lg">
                                        <p className="mb-2">Hasil Pencarian:</p>
                                        {productFiltered}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <span className="inline-block flex items-center justify-center  w-10 h-10 border border-slate-900 rounded-full cursor-pointer">
                                <box-icon
                                    name="search-alt"
                                    onClick={() => setIsSearch(true)}
                                ></box-icon>
                            </span>
                        )}
                    </div>

                    <button
                        className="bg-lilac hover:bg-lilac-hover duration-100 text-white p-2 px-4 rounded-full shadow"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </div> */}
            </nav>

            {cart && <Cart onClick={() => setCart(!cart)} />}

            {/* <SidebarMenu
                dropmenu={dropmenu}
                currentMenu={currentMenu}
                onClick={() => setDropmenu(!dropmenu)}
            /> */}
        </>
    );
};

// const SidebarMenu = ({ dropmenu, currentMenu, onClick }) => {
//     return (
//         <>
//             {dropmenu && (
//                 <Sidebar position="left">
//                     <div className="flex justify-between items-center p-4">
//                         <Link to="/" className="font-permanent-marker text-3xl">
//                             NARIRA
//                         </Link>
//                         <div className="icon-menu cursor-pointer">
//                             <box-icon
//                                 name="x"
//                                 size="md"
//                                 onClick={onClick}
//                             ></box-icon>
//                         </div>
//                     </div>
//                     <ul>
//                         <li>
//                             <Navigation
//                                 styling="px-4 py-2 block hover:bg-violet-200"
//                                 currentMenu={currentMenu}
//                             />
//                         </li>
//                     </ul>
//                 </Sidebar>
//             )}
//         </>
//     );
// };

// const Navigation = ({ styling, currentMenu }) => {
//     const dispatch = useDispatch();

//     return (
//         <>
//             {menus.map((menu, i) => {
//                 return (
//                     <Link
//                         key={i}
//                         to={menu.path}
//                         className={`${styling} ${
//                             currentMenu === menu.name && "font-bold"
//                         }`}
//                         onClick={() => dispatch(setCurrentMenu(menu.name))}
//                     >
//                         {menu.name}
//                     </Link>
//                 );
//             })}
//         </>
//     );
// };

export default Navbar;
