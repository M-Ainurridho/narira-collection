import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { imgUrl, kebabCase, rupiah } from "../utils";

import Boxicons from "./icons/Boxicons";

const Card = ({ item }) => {
    const [wishlist, setWishlist] = useState(false);
    const navigate = useNavigate();

    // const imageUrl = new URL(
    //     `/src/assets/images/products/${item.images[0]}`,
    //     import.meta.url
    // ).href;

    const isDiscount = (item) => {
        return (
            <>
                {item.discount ? (
                    <span>
                        {rupiah(
                            item.price - (item.discount / 100) * item.price
                        )}
                    </span>
                ) : (
                    ""
                )}
                <span>
                    {item.discount ? (
                        <del className="text-neutral-900/50 ms-1 font-light">
                            {rupiah(item.price)}
                        </del>
                    ) : (
                        <span className="font-semibold">
                            {rupiah(item.price)}
                        </span>
                    )}
                </span>
            </>
        );
    };

    return (
        <div className="wrapper relative border rounded-md overflow-hidden">
            {/* Discount */}
            {item.discount ? (
                <span className="discount-label bg-red-500 absolute top-0 text-xs text-white px-2 py-1 rounded-br">
                    {item.discount}%
                </span>
            ) : (
                ""
            )}

            {/* Wishlist */}
            <div
                className="wishlist-icon absolute top-1.5 right-1.5 w-9 h-9 leading-7 bg-neutral-200 text-center rounded-full cursor-pointer"
                onClick={() => setWishlist(!wishlist)}
            >
                {!wishlist ? (
                    <Boxicons icon="heart" size="2xl" color="text-lilac" />
                ) : (
                    <Boxicons
                        icon="heart"
                        type="solid"
                        size="2xl"
                        color="text-lilac"
                        style="fade-in"
                    />
                )}
            </div>

            {/* Card */}
            <div
                className={`card cursor-pointer`}
                title={item.name}
                onClick={() =>
                    navigate(
                        `/p/${kebabCase(item.category, true)}/d/${
                            item.id
                        }/${kebabCase(item.name, true)}`
                    )
                }
            >
                <div className="card-img">
                    <img
                        src={imgUrl(
                            "products",
                            item?.availableItems &&
                                item.availableItems[0].image[0]
                        )}
                        className="w-full h-56 object-cover object-center"
                        alt={
                            item?.availableItems &&
                            item.availableItems[0].image[0]
                        }
                    />
                </div>
                <div className="card-body font-semibold">
                    <div className="p-2 text-base">
                        <h5 className="truncate">{item.name}</h5>
                        <p className="truncate">{isDiscount(item)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
