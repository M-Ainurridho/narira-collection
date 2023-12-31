import { useParams } from "react-router";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ children }) => {
    const params = useParams();

    return (
        <section
            id="breadcrumbs"
            className=" mt-20 px-4 md:px-8 lg:px-16 py-4 flex items-center"
        >
            <p className="text-neutral-400">
                <Link to="/">Beranda</Link>
                <span className="inline-block translate-y-0.5 mx-1">
                    <box-icon
                        name="chevron-right"
                        size="xs"
                        color="#a3a3a3"
                    ></box-icon>
                </span>
                <Link to="/products">Produk</Link>
                <span className="inline-block translate-y-0.5 mx-1">
                    <box-icon
                        name="chevron-right"
                        size="xs"
                        color="#a3a3a3"
                    ></box-icon>
                </span>
                <Link to="/products/shirt">Baju</Link>
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
            </p>
        </section>
    );
};

export default BreadCrumbs;
