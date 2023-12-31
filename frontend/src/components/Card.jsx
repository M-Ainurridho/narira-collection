import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ index, id, name, image, children }) => {
    const { currentMenu } = useSelector((state) => state.generalMenu);
    const [wishlist, setWishlist] = useState(false);
    const navigate = useNavigate();

    const fadeInAnimate = () => {
        const loves = document.querySelectorAll(".wishlist-icon");

        setWishlist(!wishlist);
        loves[index].classList.add("fade-in");
    };

    const removeAnimate = () => {
        const loves = document.querySelectorAll(".wishlist-icon");

        setWishlist(!wishlist);
        loves[index].classList.remove("fade-in");
    };

    return (
        <div
            className={`card relative border rounded-md z-0 ${
                currentMenu == "Beranda" && "overflow-hidden"
            } cursor-pointer`}
            title={name}
            onClick={() => navigate(`/product/${id}/${name}`)}
        >
            <div className="card-img">
                <img
                    src={`/src/assets/images/products/${image[0]}`}
                    className="w-full h-56 object-cover object-center rounded-t-md"
                    alt={image[0]}
                />
                {/* <span className="wishlist-icon absolute top-2 right-2 z-20 cursor-pointer">
                    {wishlist ? (
                        <box-icon
                            type="solid"
                            name="heart"
                            color="purple"
                            onClick={removeAnimate}
                        ></box-icon>
                    ) : (
                        <box-icon
                            type="regular"
                            name="heart"
                            color="purple"
                            onClick={fadeInAnimate}
                        ></box-icon>
                    )}
                </span> */}
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;
