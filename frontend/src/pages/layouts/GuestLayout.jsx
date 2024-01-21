import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

import FloatAlert from "../../components/alerts/FloatAlert";
import Footer from "../../components/Footer";

const GuestLayout = ({ children }) => {
    const { status, msg } = useSelector((state) => state.alert);

    return (
        <div className="grid min-h-screen">
            <Navbar />
            <main className="">
                {children}
                {status != null && <FloatAlert msg={msg} />}
            </main>
            <Footer />
        </div>
    );
};

export default GuestLayout;
