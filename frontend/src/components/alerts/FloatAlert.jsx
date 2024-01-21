import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/reducers";
import Boxicons from "../icons/Boxicons";

const FloatAlert = ({ msg }) => {
    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch(setAlert({ status: null, msg: "" }));
    }, 3000);

    return (
        <>
            <div
                className={`fixed bottom-5 left-[40%] ${
                    status ? "bg-green-500" : "bg-red-500"
                } text-white p-2 rounded-lg flex items-center z-20 text-center`}
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
        </>
    );
};

export default FloatAlert;
