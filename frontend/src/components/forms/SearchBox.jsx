import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { products } from "../../utils/data";
import { kebabCase } from "../../utils";

import Boxicons from "../icons/Boxicons";

const SearchBox = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            const filtered = products.filter((p) =>
                p.name.toLocaleLowerCase().match(search.toLocaleLowerCase())
            );

            filtered.length > 0
                ? navigate(
                      `/p/${kebabCase(
                          filtered[0].category,
                          true
                      )}?search=${kebabCase(search, true)}`
                  )
                : navigate(`/p/undefined?search=${kebabCase(search, true)}`);

            setSearch("");
        }
    };

    return (
        <div className="search-box relative">
            <Boxicons
                icon="search"
                color="text-neutral-900/75"
                style="absolute left-4 top-3"
                size="xl"
            />
            <input
                type="text"
                placeholder="Cari di Narira Collection"
                className="w-full bg-transparent border border-neutral-900/50 rounded-full ps-10 p-2 placeholder:text-neutral-900/75 focus:outline-0 focus:border-lilac focus:shadow focus:shadow-purple-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </div>
    );
};

export default SearchBox;
