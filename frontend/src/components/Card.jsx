import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ index, item, children }) => {
    const { currentMenu } = useSelector((state) => state.generalMenu);
    const [wishlist, setWishlist] = useState(false);
    const navigate = useNavigate();

    // const fadeInAnimate = () => {
    //     const loves = document.querySelectorAll(".wishlist-icon");

    //     setWishlist(!wishlist);
    //     loves[index].classList.add("fade-in");
    // };

    // const removeAnimate = () => {
    //     const loves = document.querySelectorAll(".wishlist-icon");

    //     setWishlist(!wishlist);
    //     loves[index].classList.remove("fade-in");
    // };

    return (
        <div
            className={`card relative border rounded-md z-0 ${
                currentMenu == "Beranda" && "overflow-hidden"
            } cursor-pointer`}
            title={item.name}
            onClick={() =>
                navigate(`/product/${item.category}/${item.id}/${item.name}`)
            }
        >
            <div className="card-img">
                <img
                    src={`/src/assets/images/products/${
                        item?.images && item.images[0]
                    }`}
                    className="w-full h-56 object-cover object-center rounded-t-md"
                    alt={item.images[0]}
                />
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;
