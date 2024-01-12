import { useNavigate } from "react-router-dom";

import { dashWord } from "../../utils";

const CardCategory = ({ name, img }) => {
    const navigate = useNavigate();

    return (
        <div
            className="category relative text-center border pt-4 pb-4 rounded cursor-pointer hover:shadow duration-100"
            onClick={() => navigate(`/p/${dashWord(name)}`)}
        >
            <div className="category-image">
                <div
                    className="circle bg-neutral-200/75 w-22 h-22 rounded-full absolute top-4.5 lg:top-5 left-7 lg:left-5"
                    style={{ zIndex: "-9999" }}
                ></div>
                <img
                    src={`/src/assets/images/categories/${img}`}
                    className="mx-auto w-22 h-22 lg:w-24 lg:h-24 object-cover object-center"
                />
            </div>
            <p className="mt-2 text-sm">{name}</p>
        </div>
    );
};

export default CardCategory;
