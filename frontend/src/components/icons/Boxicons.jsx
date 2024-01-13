const Boxicons = ({ icon, color, size, translate, pointer, style }) => {
    return (
        <i
            className={`boxicons inline-block bx-fw bx ${icon} ${
                color ? color : "text-neutral-900"
            } text-${size ? size : "lg"} ${translate ? translate : ""} ${
                pointer && "cursor-pointer"
            } ${style ? style : ""}`}
        ></i>
    );
};

export default Boxicons;
