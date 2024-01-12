import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ index, item, children }) => {
    const { currentMenu } = useSelector((state) => state.generalMenu);
    // const [wishlist, setWishlist] = useState(false);
    const navigate = useNavigate();

    const imageUrl = new URL(
        `/src/assets/images/products/${item.images[0]}`,
        import.meta.url
    ).href;

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
                    src={imageUrl}
                    className="w-full h-56 object-cover object-center rounded-t-md"
                    alt={item.images[0]}
                />

                {item.discount ? (
                    <span className="discount-label bg-red-500 absolute top-0 text-xs text-white px-2 py-1 rounded-br">
                        {item.discount}%
                    </span>
                ) : (
                    ""
                )}
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;
