import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";

import { useDispatch } from "react-redux";
import { addCart, setCurrentMenu } from "../../redux/reducers";

import { firstUppercase, imgUrl, orderBySizes, rupiah } from "../../utils";
import { products } from "../../utils/data";

import BreadCrumbs from "../../components/Breadcrumbs";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Boxicons from "../../components/icons/Boxicons";

const ProductDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [imgIndex, setImgIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const [currentWideImg, setCurrentWideImg] = useState("");
    const [currentSize, setCurrentSize] = useState("");
    const [currentColor, setCurrentColor] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (!item?.name) {
            dispatch(setCurrentMenu("Produk Detail"));

            const found = products.find((product) => product.id == id);

            setCurrentWideImg(found.images[0]);
            setCurrentColor(firstUppercase(found.availableItems[0].color));
            setItem(found);
        }

        if (quantity < 1) {
            setQuantity(1);
        }
    }, [quantity]);

    // const allImageItems =
    //     item?.availableItems &&
    //     item.availableItems.map((item, i) => {
    //         return (
    //             <img
    //                 key={i}
    //                 src={`/src/assets/images/products/${item.image}`}
    //                 alt={item.image}
    //                 className={`w-full h-24 sm:h-36 lg:h-24 rounded-md cursor-pointer object-cover ${
    //                     imgIndex === i && "border border-2 border-neutral-700"
    //                 }`}
    //                 onClick={() => {
    //                     setCurrentSize(item.availableSizes[0]);
    //                     setCurrentColor(item.color);
    //                     setImgIndex(i);
    //                 }}
    //             />
    //         );
    //     });

    // const addNewCart = () => {
    //     const newItem = {
    //         id: item.id,
    //         name: item.name,
    //         image: item.availableItems[imgIndex].image,
    //         category: item.category,
    //         size: currentSize.size,
    //         color: currentColor,
    //         quantity: quantity,
    //         price: item.price,
    //         description: item.description,
    //     };

    //     dispatch(addCart(newItem));
    // };

    // All colors ready
    const productColors =
        item?.availableItems &&
        item.availableItems.map((item, i) => {
            const image =
                typeof item.image === "object" ? item.image[0] : item.image;
            return (
                <img
                    key={i}
                    src={imgUrl("products", image)}
                    className={`inline-block h-20 w-20 object-cover me-2 rounded-lg cursor-pointer ${
                        currentColor.toLowerCase() === item.color &&
                        "border-2 border-lilac"
                    }`}
                    onClick={() => {
                        typeof item.image === "object"
                            ? setCurrentWideImg(item.image[0])
                            : setCurrentWideImg(item.image);
                        setCurrentColor(firstUppercase(item.color));
                    }}
                    onMouseOver={() => {
                        typeof item.image === "object"
                            ? setCurrentWideImg(item.image[0])
                            : setCurrentWideImg(item.image);
                    }}
                />
            );
        });

    // Print all sizes
    const printAllSizes = () => {
        let sizes =
            item?.availableItems &&
            item.availableItems
                .map((item) => item.availableSizes)
                .flat()
                .map(({ size }) => size)
                .filter((size, i, arr) => i === arr.indexOf(size));
        sizes = orderBySizes(sizes);
        return sizes.map((size, idx) => {
            return (
                <span
                    key={idx}
                    className={`border px-4 py-1 me-2 rounded-lg  cursor-pointer ${
                        currentSize == size
                            ? "border-lilac text-lilac"
                            : "text-neutral-900/50"
                    }`}
                    onClick={() => setCurrentSize(size)}
                >
                    {size}
                </span>
            );
        });
    };

    return (
        <>
            <BreadCrumbs />

            <Section sectionId="product-detail">
                <Container style="mt-8 mb-8">
                    <Wrapper style="flex gap-x-6 font-roboto">
                        <div className="product-images basis-1/2">
                            <img
                                className="w-full object-cover object-center rounded-md"
                                style={{ height: "600px" }}
                                src={imgUrl(
                                    "products",
                                    currentWideImg && currentWideImg
                                )}
                                alt="product-detail"
                            />
                        </div>

                        <div className="product-description basis-1/2">
                            <h1 className="text-2xl font-bold">{item.name}</h1>
                            <div className="flex items-center gap-x-2 text-sm">
                                <div className="rating flex items-center">
                                    <Boxicons
                                        icon="star"
                                        type="solid"
                                        color="text-yellow-400"
                                        translate="-translate-y-1.5"
                                    />
                                    <span>
                                        5.0{" "}
                                        <i className="text-neutral-900/50">
                                            (0 rating)
                                        </i>
                                    </span>
                                </div>
                                <Boxicons
                                    icon="circle"
                                    type="solid"
                                    size="3xs"
                                />
                                <p className="sold text-neutral-900/50">
                                    Terjual 0
                                </p>
                            </div>

                            <div className="product-price mb-4 mt-3">
                                {item.discount ? (
                                    <p>
                                        <span className="text-3xl font-semibold">
                                            {rupiah(
                                                item.price -
                                                    (item.discount / 100) *
                                                        item.price
                                            )}
                                        </span>
                                        <del className="text-neutral-900/50 ms-1">
                                            {rupiah(item.price)}
                                        </del>
                                        <span className="inline-block bg-red-500 text-white py-0.5 px-1.5 rounded-md text-xs ms-1 -translate-y-0.5">
                                            {item.discount}%
                                        </span>
                                    </p>
                                ) : (
                                    <p className="text-3xl font-semibold">
                                        {item?.price && rupiah(item.price)}
                                    </p>
                                )}
                            </div>

                            <div className="size-and-color border-y py-4">
                                <div className="colors mb-4">
                                    <p className="font-medium mb-2">
                                        Pilih warna:
                                        <span className="text-neutral-900/50 ms-1">
                                            {currentColor}
                                        </span>
                                    </p>
                                    <div>{productColors}</div>
                                </div>
                                <div className="sizes">
                                    <p className="font-medium mb-2">
                                        Pilih ukuran:
                                        <span className="text-neutral-900/50 ms-1">
                                            {currentSize}
                                        </span>
                                    </p>
                                    <div>{printAllSizes()}</div>
                                </div>
                            </div>

                            <div className="product-details">
                                <h5 className="text-lilac">
                                    <span className="inline-block border-b-2 border-b-lilac py-2 px-8">
                                        Detail
                                    </span>
                                </h5>

                                <div className="py-3">
                                    <div>
                                        <p>
                                            Kategori:
                                            <span className="font-medium ms-1">
                                                {item.category}
                                            </span>
                                        </p>
                                        <p>
                                            Merk:
                                            <span className="font-medium ms-1">
                                                Converse
                                            </span>
                                        </p>
                                        <p>
                                            Kondisi:
                                            <span className="font-medium ms-1">
                                                Baru
                                            </span>
                                        </p>
                                        <p>
                                            Minimal Pembelian:
                                            <span className="font-medium ms-1">
                                                1
                                            </span>
                                        </p>
                                    </div>

                                    <p className="mt-4">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </Container>
            </Section>
        </>
    );
};

export default ProductDetail;
