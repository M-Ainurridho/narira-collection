import { useState } from "react";
import Boxicons from "../icons/Boxicons";

const BtnQuantity = () => {
    let [quantity, setQuantity] = useState(1);

    return (
        <div className="self-center bg-neutral-200 flex items-center rounded-md border">
            <Boxicons
                icon="minus"
                color="text-lilac"
                translate="translate-y-0.5"
                style="h-full w-full bg-white py-1 px-2 hover:text-lilac-hover rounded-md text-sm shadow"
                cursor="pointer"
                onClick={() => quantity >= 2 && setQuantity(--quantity)}
            />
            <div className="quantity px-4 py-1">{quantity}</div>
            <Boxicons
                icon="plus"
                color="text-lilac"
                translate="translate-y-0.5"
                style="h-full w-full bg-white py-1 px-2 hover:text-lilac-hover rounded-md text-sm shadow"
                cursor="pointer"
                onClick={() => setQuantity(++quantity)}
            />
        </div>
    );
};

export default BtnQuantity;
