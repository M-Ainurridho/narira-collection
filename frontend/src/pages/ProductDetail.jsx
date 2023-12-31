import { useEffect, useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs";
import { products, rupiah } from "../utils";
import { useParams } from "react-router";

const ProductDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const found = products.find((product) => product.id == id);
        setItem(found);
    }, []);

    const allImageItems =
        item?.images != undefined &&
        item.images.map((img, i) => {
            return (
                <img
                    key={i}
                    src={`/src/assets/images/products/${img}`}
                    alt={img}
                    className={`w-full h-24 rounded-md cursor-pointer object-cover ${
                        imgIndex === i && "border border-2 border-neutral-700"
                    }`}
                    onClick={() => setImgIndex(i)}
                />
            );
        });

    return (
        <>
            <BreadCrumbs></BreadCrumbs>
            <section
                id="product-detail"
                className="mb-10 px-4 md:px-8 lg:px-16"
            >
                <div className="flex gap-8">
                    <div className="detail-images basis-2/5">
                        <img
                            src={`/src/assets/images/products/${
                                item?.images != undefined &&
                                item.images[imgIndex]
                            }`}
                            alt="product1"
                            className="wide-img rounded-lg h-96 w-full object-cover object-center"
                        />
                        <div className="choice-images my-3 grid grid-cols-4 gap-4 justify-between">
                            {allImageItems}
                        </div>
                    </div>
                    <div className="detail-description basis-3/5">
                        <h1 className="font-bold text-4xl">{item.name}</h1>
                        <div>
                            <p>{rupiah(item.price)}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetail;
