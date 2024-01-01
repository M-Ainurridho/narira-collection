import { useSelector } from "react-redux";
import { rupiah } from "../../utils";
import Sidebar from "./Sidebar";

const Cart = ({ onClick }) => {
    const { carts } = useSelector((state) => state.cart);

    const allCarts = carts.map((cart, i) => {
        return (
            <div
                className={`card flex gap-x-2 pb-3 ${
                    i != 0 && "pt-3"
                } border-b border-b-lilac`}
            >
                <div className="card-image basis-1/5">
                    <img
                        src={`/src/assets/images/products/${cart.images[0]}`}
                        alt="product-2"
                        className="w-full h-20 object-cover rounded-md"
                    />
                </div>
                <div className="basis-4/5">
                    <h5 className="font-bold truncate w-64">{cart.name}</h5>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-3">
                            <p className="text-xs text-neutral-900/50">
                                Size
                                <span className="text-neutral-900 font-semibold ms-0.5">
                                    XL
                                </span>
                            </p>
                            <p className="text-xs text-neutral-400">
                                Color
                                <span className="text-neutral-900 font-semibold ms-0.5">
                                    Blue
                                </span>
                            </p>
                        </div>
                        <div>
                            <i className="bx bx-heart text-xl me-1 cursor-pointer"></i>
                            <i className="bx bxs-trash text-xl cursor-pointer"></i>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-sm text-neutral-900/50">
                        <div className="flex items-center">
                            <p className="font-semibold text-neutral-900">
                                {rupiah(cart.price)}
                            </p>
                            <i className="bx bx-x text-xs mx-1"></i>
                            <p>{cart.quantity}</p>
                        </div>
                        <div className="bg-neutral-100 flex items-center rounded-md border">
                            <i className="bx bx-minus bg-white py-1 px-2 text-neutral-400 hover:text-neutral-800  rounded-md cursor-pointer text-sm shadow"></i>
                            <div className="quantity px-4">{cart.quantity}</div>
                            <i className="bx bx-plus bg-white py-1 px-2 text-neutral-400 hover:text-neutral-800  rounded-md cursor-pointer text-sm shadow"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Sidebar position="right">
            <div className="h-full grid">
                <div className="">
                    <div className="cart-heading p-4 flex justify-between items-center border-b border-lilac">
                        <p className="text-2xl font-bold">Keranjang Belanja</p>
                        <span
                            className=" bx bx-x text-3xl cursor-pointer"
                            onClick={onClick}
                        ></span>
                    </div>
                    <div className="cart-body p-4">
                        {carts.length > 0 ? (
                            allCarts
                        ) : (
                            <p className="text-center text-neutral-900/50">
                                Tidak ada item pada keranjang belanja
                            </p>
                        )}
                    </div>
                </div>
                {carts.length > 0 && (
                    <div className="p-4 self-end">
                        <button className="w-full bg-lilac shadow-md shadow-purple-400 hover:bg-lilac-hover duration-100 text-white p-2 rounded-md ">
                            Selanjutnya
                        </button>
                    </div>
                )}
            </div>
        </Sidebar>
    );
};

export default Cart;
