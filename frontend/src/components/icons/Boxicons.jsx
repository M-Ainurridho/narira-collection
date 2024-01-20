const Boxicons = ({ icon, type, color, size, translate, pointer, style }) => {
    return (
        <i
            className={`boxicons inline-block bx-fw bx ${
                type === "solid" ? `bxs-${icon}` : `bx-${icon}`
            } ${color ? color : "text-neutral-900"} ${
                size ? `text-${size}` : "text-lg"
            } ${translate ? translate : ""} ${pointer && "cursor-pointer"} ${
                style ? style : ""
            }`}
        ></i>
    );
};

export default Boxicons;
