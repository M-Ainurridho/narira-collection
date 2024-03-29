import { useEffect } from "react";

const Sidebar = ({ position, children }) => {
    useEffect(() => {
        const aside = document.querySelector("aside");

        position == "left"
            ? aside.classList.replace("slider-right", "slider-left")
            : aside.classList.add("slider-left", "slider-right");
    }, []);

    return (
        <aside
            className={`fixed top-0 bottom-0 slider-right ${position}-0 z-20 w-full sm:w-96 bg-white border overflow-y-auto`}
        >
            {children}
        </aside>
    );
};

export default Sidebar;
