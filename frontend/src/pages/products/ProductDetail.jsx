import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import { products, rupiah } from "../../utils";
import { addCart, setCurrentMenu } from "../../redux/reducers";

import BreadCrumbs from "../../components/Breadcrumbs";

const ProductDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    let [imgIndex, setImgIndex] = useState(0);
    let [quantity, setQuantity] = useState(1);
    let [currentSize, setCurrentSize] = useState({});
    let [allSize, setAllSize] = useState([]);
    let [currentColor, setCurrentColor] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (!item?.name) {
            dispatch(setCurrentMenu("Produk Detail"));

            const found = products.find((product) => product.id == id);
            setAllSize(found.availableItems[imgIndex].availableSizes);

            setCurrentSize(found.availableItems[0].availableSizes[0]);
            setCurrentColor(found.availableItems[0].color);
            setItem(found);
        }

        if (quantity < 1) {
            setQuantity(1);
        }
    }, [quantity]);

    const allImageItems =
        item?.availableItems &&
        item.availableItems.map((item, i) => {
            return (
                <img
                    key={i}
                    src={`/src/assets/images/products/${item.image}`}
                    alt={item.image}
                    className={`w-full h-24 sm:h-36 lg:h-24 rounded-md cursor-pointer object-cover ${
                        imgIndex === i && "border border-2 border-neutral-700"
                    }`}
                    onClick={() => {
                        setCurrentSize(item.availableSizes[0]);
                        setAllSize(item.availableSizes);
                        setCurrentColor(item.color);
                        setImgIndex(i);
                    }}
                />
            );
        });

    const colorPicker =
        item?.availableItems &&
        item.availableItems.map((item, i) => {
            return (
                <p
                    key={i}
                    className={`inline-block px-1.5 ${
                        item.color === currentColor &&
                        "pt-1 bg-white shadow rounded-md"
                    } cursor-pointer`}
                    onClick={() => {
                        setCurrentSize(item.availableSizes[0]);
                        setAllSize(item.availableSizes);
                        setCurrentColor(item.color);
                        setImgIndex(i);
                    }}
                >
                    <span
                        className="inline-block w-5 h-5 rounded-full"
                        style={{
                            backgroundColor: item.color,
                        }}
                    ></span>
                </p>
            );
        });

    const availableSizes =
        allSize.length > 0 &&
        allSize.map((item, sizeIndex) => {
            return (
                <span
                    key={sizeIndex}
                    className={`px-3 cursor-pointer ${
                        item.size == currentSize.size
                            ? "py-1 bg-white text-neutral-900 rounded-md shadow"
                            : "text-neutral-900/50"
                    }`}
                    onClick={() => {
                        setCurrentSize(item);
                    }}
                >
                    {item.size}
                </span>
            );
        });

    const addNewCart = () => {
        const newItem = {
            id: item.id,
            name: item.name,
            image: item.availableItems[imgIndex].image,
            category: item.category,
            size: currentSize.size,
            color: currentColor,
            quantity: quantity,
            price: item.price,
            description: item.description,
        };

        dispatch(addCart(newItem));
    };

    return (
        <>
            <BreadCrumbs></BreadCrumbs>
            <section
                id="product-detail"
                className="mb-10 px-4 md:px-8 lg:px-16"
            >
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="self-start">
                        <img
                            src={`/src/assets/images/products/${
                                item?.availableItems != undefined &&
                                item.availableItems[imgIndex].image
                            }`}
                            alt="product1"
                            className="wide-img rounded-lg w-full object-cover object-center"
                        />
                        <div className="choice-images my-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4 justify-between">
                            {allImageItems}
                        </div>
                    </div>
                    <div className="basis-3/5">
                        <div className="detail-header border-b pb-5">
                            <h1 className="font-bold text-2xl md:text-4xl">
                                {item?.name}
                            </h1>
                            <p className="font-medium md:text-xl my-2">
                                {rupiah(item?.price)}
                            </p>
                            <p className="ratings">
                                <span className="inline-block translate-y-0.5">
                                    <box-icon
                                        type="solid"
                                        name="star"
                                        color="gold"
                                        size="xs"
                                    ></box-icon>
                                </span>
                                <span className="text-xs ms-2">
                                    4.8 (94 Ulasan)
                                </span>
                            </p>
                        </div>

                        <div className="self-startdetail-body py-3">
                            <div className="choose-size mb-4 text-sm">
                                <h6 className="text-neutral-400 mb-2 tracking-wide">
                                    PILIH UKURAN
                                </h6>
                                <div className="inline-block bg-neutral-100 border rounded-md py-1.5 px-0.5">
                                    {availableSizes}
                                </div>

                                {currentSize?.stock ? (
                                    <span className="ms-3">
                                        Tersedia {currentSize.stock} lagi
                                    </span>
                                ) : (
                                    <span className="ms-3 text-red-500">
                                        HABIS!!!
                                    </span>
                                )}
                            </div>
                            <div className="choose-color mb-4 text-sm">
                                <h6 className="text-neutral-400 mb-2 tracking-wide">
                                    WARNA
                                </h6>
                                <div className="inline-block bg-neutral-100 border rounded-md pt-1 pb-1 px-0.5">
                                    {colorPicker}
                                </div>
                            </div>
                            <div className="description text-sm">
                                <h6 className="text-neutral-400 mb-2 tracking-wide">
                                    DESKRIPSI
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eius, quae. Quo, quae odio
                                    sequi debitis unde earum nemo officia
                                    voluptatibus dolorem provident repellat
                                    consequuntur sapiente quos quis magnam sint
                                    ad reprehenderit? Asperiores rem voluptas
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="self-start rounded-md border ">
                        <h3 className="font-semibold p-3 text-lg">
                            Atur Pesanan
                        </h3>
                        <hr />
                        <div className="product-quantity p-3  flex justify-between items-center text-xs md:text-sm">
                            <h6 className="text-neutral-400">
                                KUANTITAS PRODUK
                            </h6>
                            <div className="bg-neutral-100 flex items-center p-1 rounded-md border">
                                <i
                                    className="bx bx-minus bg-white text-neutral-400 hover:text-neutral-800 px-1 rounded-md cursor-pointer text-base md:text-xl shadow"
                                    onClick={() => setQuantity(--quantity)}
                                ></i>
                                <div className="quantity px-3">{quantity}</div>
                                <i
                                    className="bx bx-plus bg-white text-neutral-400 hover:text-neutral-800 px-1 rounded-md cursor-pointer text-base md:text-xl shadow"
                                    onClick={() => setQuantity(++quantity)}
                                ></i>
                            </div>
                        </div>
                        <hr />
                        <div className="estimasi-total p-3 flex justify-between items-center text-xs md:text-sm">
                            <h6 className="text-neutral-400">
                                ESTIMASI SUBTOTAL
                            </h6>
                            <div className="text-base font-medium">
                                {rupiah(item.price * quantity)}
                            </div>
                        </div>
                        <div className="p-3">
                            <button
                                className="bg-lilac hover:bg-lilac-hover duration-100 w-full text-sm text-white p-1.5 mb-2.5 rounded-full flex items-center justify-center"
                                onClick={addNewCart}
                            >
                                <i className="bx bx-cart-alt me-2 text-lg"></i>
                                Tambah Keranjang
                            </button>
                            <button className="bg-neutral-100 hover:bg-neutral-200 duration-100 w-full text-sm p-1.5 mb-2.5 rounded-full flex items-center justify-center">
                                <i className="bx bx-heart me-2 text-lg"></i>
                                Tambah ke Favorit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetail;
