const BtnEvent = ({
    text,
    color,
    bgcolor,
    size,
    border,
    contentPadding,
    radius,
    hover,
    style = "",
    onClick,
}) => {
    return (
        <button
            className={`${color ? color : "text-neutral-900"} ${
                bgcolor ? bgcolor : "bg-white"
            } text-${size ? size : "base"} rounded-${
                radius ? radius : "none"
            } ${border ? border : "border-0"} ${
                contentPadding ? contentPadding : ""
            } ${hover ? hover : ""} ${style}`}
            onClick={onClick && onClick}
        >
            {text}
        </button>
    );
};

export default BtnEvent;
