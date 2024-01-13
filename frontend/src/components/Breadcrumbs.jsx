import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { firstUppercase, kebabCase } from "../utils";
import Boxicons from "./icons/Boxicons";

const BreadCrumbs = ({ children }) => {
    let { category } = useParams();

    category = firstUppercase(kebabCase(category, false));

    return (
        <section
            id="breadcrumbs"
            className="bg-lilac mt-20 px-4 md:px-8 lg:px-16 pt-20 pb-6 flex items-center relative"
        >
            <h2 className="text-white text-2xl">{category}</h2>
            <div className="bg-white absolute left-16 right-16 -bottom-8 p-4 border rounded-md shadow shadow-md shadow-neutral-200 text-sm flex">
                <p className="flex items-center">
                    <Link
                        to="/"
                        className="me-1 text-lilac hover:text-purple-600 duration-100"
                    >
                        Beranda
                    </Link>
                    <Boxicons
                        icon="bx-chevron-right"
                        translate="-translate-y-1"
                    />
                </p>
                <p className="flex items-center">
                    <Link
                        to="/p"
                        className="me-1 text-lilac hover:text-purple-600 duration-100"
                    >
                        Kategori
                    </Link>
                    <Boxicons
                        icon="bx-chevron-right"
                        translate="-translate-y-1"
                    />
                </p>
                <p className=" flex items-center">{category}</p>
            </div>
            {/* <p className="text-white">
                <Link to="/">Beranda</Link>
                <span className="inline-block translate-y-0.5 mx-1">
                    <box-icon
                        name="chevron-right"
                        size="xs"
                        color="#a3a3a3"
                    ></box-icon>
                </span>
                <Link to="/products">Produk</Link>

                {params?.category && (
                    <>
                        <span className="inline-block translate-y-0.5 mx-1">
                            <box-icon
                                name="chevron-right"
                                size="xs"
                                color="#a3a3a3"
                            ></box-icon>
                        </span>
                        <Link to={`/product/${params.category}`}>
                            {translateWord(params.category)}
                        </Link>
                    </>
                )}
                {params?.name && (
                    <>
                        <span className="inline-block translate-y-0.5 mx-1">
                            <box-icon
                                name="chevron-right"
                                size="xs"
                                color="#a3a3a3"
                            ></box-icon>
                        </span>
                        <span className="text-neutral-900 font-semibold">
                            {params.name}
                        </span>
                    </>
                )}
            </p> */}
        </section>
    );
};

export default BreadCrumbs;
