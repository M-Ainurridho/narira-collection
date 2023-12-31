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
            className={`fixed top-0 bottom-0 slider-right ${position}-0 z-20 w-80 bg-lilac`}
        >
            {children}
        </aside>
    );
};

export default Sidebar;
