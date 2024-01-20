import {
    useHref,
    useLoaderData,
    useLocation,
    useNavigate,
    useParams,
} from "react-router";
import { Link } from "react-router-dom";
import { firstUppercase, kebabCase } from "../utils";
import Boxicons from "./icons/Boxicons";

const BreadCrumbs = () => {
    let { category, productName } = useParams();
    let { search } = useLocation();

    const path = useHref();
    const isDetail = path.includes("/d/");

    category = firstUppercase(kebabCase(category, false));

    return (
        <section
            id="breadcrumbs"
            className="bg-lilac mt-20 px-4 md:px-8 lg:px-16 pt-20 pb-6 flex items-center relative"
        >
            <h2 className="text-white text-2xl">
                {isDetail ? firstUppercase(kebabCase(productName)) : category}
            </h2>
            <div className="bg-white absolute left-16 right-16 -bottom-9 p-4 border rounded-md shadow shadow-md shadow-neutral-200 text-sm flex">
                <p className="flex items-center">
                    <Link
                        to="/"
                        className="me-1 text-lilac hover:text-purple-600 duration-100"
                    >
                        Beranda
                    </Link>
                    <Boxicons icon="chevron-right" translate="-translate-y-1" />
                </p>
                <p className="flex items-center">
                    <Link
                        to="/p"
                        className="me-1 text-lilac hover:text-purple-600 duration-100"
                    >
                        Kategori
                    </Link>
                    <Boxicons icon="chevron-right" translate="-translate-y-1" />
                </p>

                {!isDetail ? (
                    <>
                        {search ? (
                            <p className="flex items-center">
                                <Link
                                    to={`/p/${kebabCase(category, true)}`}
                                    className="me-1 text-lilac hover:text-purple-600 duration-100"
                                >
                                    {category}
                                </Link>
                            </p>
                        ) : (
                            <p className=" flex items-center">{category}</p>
                        )}
                    </>
                ) : (
                    <>
                        <p className="flex items-center">
                            <Link
                                to={`/p/${kebabCase(category, true)}`}
                                className="me-1 text-lilac hover:text-purple-600 duration-100"
                            >
                                {category}
                            </Link>
                            <Boxicons
                                icon="chevron-right"
                                translate="-translate-y-1"
                            />
                        </p>
                        <p className=" flex items-center">
                            {firstUppercase(kebabCase(productName))}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
};

export default BreadCrumbs;
