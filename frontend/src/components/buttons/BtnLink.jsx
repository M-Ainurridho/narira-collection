import { Link } from "react-router-dom";

const BtnLink = ({
    path,
    text,
    color,
    bgcolor,
    size,
    border,
    contentPadding,
    radius,
    hover,
    style = "",
}) => {
    return (
        <Link
            to={path}
            className={`${color ? color : "text-neutral-900"} ${
                bgcolor ? bgcolor : "bg-white"
            } text-${size ? size : "base"} rounded-${
                radius ? radius : "none"
            } ${border ? border : "border-0"} ${
                contentPadding ? contentPadding : ""
            } ${hover ? hover : ""} ${style}`}
        >
            {text}
        </Link>
    );
};

export default BtnLink;
