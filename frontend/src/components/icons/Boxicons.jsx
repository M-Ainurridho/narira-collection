const Boxicons = ({
    icon,
    type,
    color,
    size,
    translate,
    cursor,
    style,
    onClick,
}) => {
    return (
        <i
            className={`boxicons inline-block bx-fw bx ${
                type === "solid" ? `bxs-${icon}` : `bx-${icon}`
            } ${color ? color : "text-neutral-900"}  ${
                size ? `text-${size}` : "text-lg"
            } ${translate ? translate : ""} ${
                cursor ? `cursor-${cursor}` : "cursor-auto"
            } ${style ? style : ""}`}
            onClick={onClick && onClick}
        ></i>
    );
};

export default Boxicons;
