import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../redux/reducers";
import Boxicons from "../icons/Boxicons";

const FloatAlert = ({ msg }) => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.alert);

    setTimeout(() => {
        dispatch(setAlert({ status: null, msg: "" }));
    }, 3000);

    return (
        <>
            <div
                className={`fixed left-0 right-0 bottom-5 z-20 flex justify-center`}
            >
                <div
                    className={`${
                        !status ? "bg-red-500" : "bg-green-500"
                    } text-white p-2 ps-3 rounded-lg flex items-center mx-auto`}
                >
                    <p>{msg}</p>
                    <Boxicons
                        icon="x"
                        color="white"
                        size="xl"
                        translate="-translate-y-1"
                        style="ms-4"
                    />
                </div>
            </div>
        </>
    );
};

export default FloatAlert;
