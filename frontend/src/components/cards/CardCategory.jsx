import { useNavigate } from "react-router-dom";

import { imgUrl, kebabCase } from "../../utils";

const CardCategory = ({ name, img }) => {
    const navigate = useNavigate();

    return (
        <div
            className="category text-center border pt-4 pb-4 px-1 rounded cursor-pointer hover:shadow duration-100"
            onClick={() => navigate(`/p/${kebabCase(name, true)}`)}
        >
            <div className="category-image  relative">
                <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
                    <div className="circle bg-neutral-100 h-22 w-22 rounded-full mx-auto"></div>
                </div>
                <img
                    src={imgUrl("categories", img)}
                    className="mx-auto w-22 h-22 lg:w-24 lg:h-24 object-cover object-center"
                />
            </div>
            <p className="mt-2 text-sm">{name}</p>
        </div>
    );
};

export default CardCategory;
