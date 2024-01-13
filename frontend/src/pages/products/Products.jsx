import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setCurrentMenu } from "../../redux/reducers";

import { products } from "../../utils/data";

import Card from "../../components/Card";
import BreadCrumbs from "../../components/Breadcrumbs";

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentMenu("Produk"));
    }, []);

    return (
        <>
            <BreadCrumbs />
            <section id="products" className="mb-10 px-4 md:px-8 lg:px-16">
                <div className="flex justify-between items-center">
                    <p className="md:text-lg font-light text-neutral-500">
                        Menampilkan {products.length} Items
                    </p>
                    <div className="filter flex items-center border px-4 py-2 rounded-full">
                        <box-icon name="slider" size="sm"></box-icon>
                        <span className="ms-1">Filter</span>
                    </div>
                </div>
                <div className="items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 mt-2">
                    {products.map((item, i) => {
                        return <Card key={i} item={item} />;
                    })}
                </div>
            </section>
        </>
    );
};

export default Products;
