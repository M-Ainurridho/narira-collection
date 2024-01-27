import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import {
    firstUppercase,
    imgUrl,
    kebabCase,
    orderBySizes,
    rupiah,
    setTitle,
} from "../../utils";

import { products } from "../../utils/data";

import BreadCrumbs from "../../components/Breadcrumbs";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Boxicons from "../../components/icons/Boxicons";
import BtnEvent from "../../components/buttons/BtnEvent";
import { addCart, setAlert } from "../../redux/reducers";

const ProductDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    let [quantity, setQuantity] = useState(1);

    let [startImgIndex, setStartImgIndex] = useState(0);
    let [nextImg, setNextImg] = useState(false);
    let [prevImg, setPrevImg] = useState(true);
    let [slideImages, setSlideImages] = useState([]);

    const [currentWideImg, setCurrentWideImg] = useState("");
    const [currentSize, setCurrentSize] = useState("");
    const [currentColor, setCurrentColor] = useState("");

    const dispatch = useDispatch();
    const { carts } = useSelector((state) => state.cart);

    const { category, productName } = useParams();

    setTitle(
        `${firstUppercase(kebabCase(productName))} | ${firstUppercase(
            kebabCase(category)
        )}`
    );

    useEffect(() => {
        const found = products.find((product) => product.id == id);

        if (!item?.name) {
            setCurrentWideImg(found.availableItems[0].image[0]);
            setCurrentColor(found.availableItems[0].color);
            setItem(found);
        }

        let images = found.availableItems.map(({ image }) => image).flat();

        images =
            images != undefined &&
            images.filter((img, i) => {
                return i >= startImgIndex && img;
            });

        startImgIndex > 0 ? setNextImg(true) : setNextImg(false);

        const windowSize = window.innerWidth;

        if (windowSize >= 768) {
            images.length < 6
                ? setPrevImg(false)
                : (setPrevImg(true), (images = images.slice(0, 5)));
        } else if (windowSize >= 576) {
            images.length < 5
                ? setPrevImg(false)
                : (setPrevImg(true), (images = images.slice(0, 4)));
        } else {
            images.length < 4
                ? setPrevImg(false)
                : (setPrevImg(true), (images = images.slice(0, 3)));
        }

        setSlideImages(images);
    }, [startImgIndex]);

    // All Products Images
    const printAllImages =
        slideImages.length > 0 &&
        slideImages.map((img, i) => {
            return (
                <img
                    key={i}
                    src={imgUrl("products", img)}
                    className={`w-full h-28 sm:h-36 lg:h-28 object-cover rounded-md ${
                        currentWideImg == img && "border-2 border-lilac"
                    } cursor-pointer`}
                    onClick={() => setCurrentWideImg(img)}
                />
            );
        });

    // All colors ready
    const productColors =
        item?.availableItems &&
        item.availableItems.map((item, i) => {
            return (
                <div
                    key={i}
                    className={`rounded-md p-2 border ${
                        item.color === currentColor && "border-lilac"
                    } cursor-pointer`}
                    onClick={() => {
                        setCurrentWideImg(item.image[0]);
                        setCurrentColor(item.color);
                    }}
                    onMouseOver={() => {
                        setCurrentWideImg(item.image[0]);
                    }}
                >
                    <img
                        key={i}
                        src={imgUrl("products", item.image[0])}
                        className={`inline-block h-6 w-5 object-cover me-2 rounded`}
                    />
                    <span
                        className={`${
                            item.color === currentColor
                                ? "text-lilac"
                                : "text-neutral-900/50"
                        }`}
                    >
                        {item.color}
                    </span>
                </div>
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
                    className={`border px-4 py-1 me-2 rounded-lg cursor-pointer ${
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

    // Masukan Item ke dalam keranjang
    const addNewCart = () => {
        if (!currentColor || !currentSize) {
            return dispatch(
                setAlert({
                    status: false,
                    msg: "Silahkan Isi pilihan warna/ukuran",
                })
            );
        }

        const newCart = {
            id: item.id,
            name: item.name,
            image: item.availableItems[0].image[0],
            category: item.category,
            brand: item.brand,
            color: currentColor,
            size: currentSize,
            discount: item.discount,
            price: item.price,
            quantity: quantity,
        };

        dispatch(addCart(newCart));
    };

    return (
        <>
            <BreadCrumbs />

            <Section sectionId="product-detail">
                <Container style="mt-8 mb-8">
                    <Wrapper style="grid lg:grid-cols-2 gap-x-6 font-roboto">
                        <div className="product-images">
                            <img
                                className="w-full object-cover object-center rounded-md h-auto md:max-h-600 lg:max-h-600"
                                src={imgUrl(
                                    "products",
                                    currentWideImg && currentWideImg
                                )}
                                alt="wide-image"
                            />

                            <div className="all-product-images grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-3 relative">
                                {nextImg && (
                                    <Boxicons
                                        icon="chevron-left"
                                        size="3xl"
                                        style="absolute top-[40%] -left-3 md:-left-4 h-8 w-8 bg-neutral-900/75 rounded-full flex justify-center items-center"
                                        color="text-lilac"
                                        cursor="pointer"
                                        onClick={() =>
                                            setStartImgIndex(--startImgIndex)
                                        }
                                    />
                                )}
                                {printAllImages}
                                {prevImg && (
                                    <Boxicons
                                        icon="chevron-right"
                                        size="3xl"
                                        style="absolute top-[40%] -right-3 md:-right-4 h-8 w-8 bg-neutral-900/75 rounded-full flex justify-center items-center"
                                        color="text-lilac"
                                        cursor="pointer"
                                        onClick={() => {
                                            setNextImg(true);
                                            setStartImgIndex(++startImgIndex);
                                        }}
                                    />
                                )}
                            </div>

                            <div className="border-b lg:border-0 my-4"></div>
                        </div>

                        <div className="product-description">
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
                                            {firstUppercase(currentColor)}
                                        </span>
                                    </p>
                                    <div className="flex gap-2">
                                        {productColors}
                                    </div>
                                </div>
                                <div className="sizes">
                                    <p className="font-medium mb-2">
                                        Pilih ukuran:
                                        <span className="text-neutral-900/50 ms-1">
                                            {currentSize ? currentSize : "-"}
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
                                                {item.brand}
                                            </span>
                                        </p>
                                        <p>
                                            Kondisi:
                                            <span className="font-medium ms-1">
                                                Baru
                                            </span>
                                        </p>
                                        <p>
                                            Min. Pembelian:
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

                <div
                    className="fixed left-0 right-0 bottom-0 z-10 h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 bg-white border-t shadow-lg"
                    style={{ borderRadius: "25px 25px 0 0" }}
                >
                    <div className="flex items-center">
                        <img
                            className="h-14 w-14 object-cover rounded-md"
                            src={imgUrl(
                                "products",
                                item?.availableItems &&
                                    item.availableItems[0].image[0]
                            )}
                            alt={currentWideImg}
                        />
                        <p className="ms-2">{item.name}</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className="grid grid-cols-2 gap-x-5 me-8">
                            <div className="self-center bg-neutral-200 flex items-center rounded-md border">
                                <Boxicons
                                    icon="minus"
                                    color={
                                        quantity > 1
                                            ? "text-lilac hover:text-lilac-hover"
                                            : "text-neutral-900/50"
                                    }
                                    translate="translate-y-0.5"
                                    style="h-full w-full bg-white py-1 px-2  rounded-md text-sm shadow"
                                    cursor={
                                        quantity > 1 ? "pointer" : "not-allowed"
                                    }
                                    onClick={() =>
                                        quantity >= 2 && setQuantity(--quantity)
                                    }
                                />
                                <div className="quantity px-4 py-1">
                                    {quantity}
                                </div>
                                <Boxicons
                                    icon="plus"
                                    color="text-lilac"
                                    translate="translate-y-0.5"
                                    style="h-full w-full bg-white py-1 px-2 hover:text-lilac-hover rounded-md text-sm shadow"
                                    cursor="pointer"
                                    onClick={() => setQuantity(++quantity)}
                                />
                            </div>
                            <div className="text-sm">
                                <h6>Total harga:</h6>
                                <p>
                                    {item.discount ? (
                                        <span className="font-bold">
                                            {rupiah(
                                                (item.price -
                                                    (item.discount / 100) *
                                                        item.price) *
                                                    quantity
                                            )}
                                        </span>
                                    ) : (
                                        <span className="font-bold">
                                            {item?.price &&
                                                rupiah(item.price * quantity)}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>

                        <BtnEvent
                            bgcolor="bg-white"
                            color="text-lilac"
                            text="Masukan keranjang"
                            size="sm"
                            contentPadding="py-3 px-4"
                            border="border border-lilac"
                            radius="full"
                            hover="hover:shadow-lg hover:shadow-purple-300 duration-100"
                            onClick={addNewCart}
                        />

                        <BtnEvent
                            bgcolor="bg-lilac"
                            color="text-white"
                            text="Beli Sekarang"
                            size="sm"
                            contentPadding="py-3 px-4"
                            radius="full"
                            hover="hover:shadow-lg hover:shadow-purple-300 duration-100"
                        />

                        <div
                            className="wishlist-icon  w-9 h-9 leading-7 bg-neutral-200 text-center rounded-full cursor-pointer"
                            onClick={() => setWishlist(!wishlist)}
                        >
                            <Boxicons
                                icon="heart"
                                size="2xl"
                                color="text-lilac"
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default ProductDetail;
