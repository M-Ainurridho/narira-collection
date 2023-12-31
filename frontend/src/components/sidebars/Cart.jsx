import Sidebar from "./Sidebar";

const Cart = ({ onClick }) => {
    return (
        <Sidebar position="right">
            <div className="p-4 text-white">
                <div className="cart-heading flex justify-between items-center">
                    <p className="text-2xl font-bold">Carts</p>
                    <span
                        className="flex items-center cursor-pointer"
                        onClick={onClick}
                    >
                        <box-icon name="x" size="sm" color="white"></box-icon>
                    </span>
                </div>
                <div className="cart-body"></div>
            </div>
        </Sidebar>
    );
};

export default Cart;
