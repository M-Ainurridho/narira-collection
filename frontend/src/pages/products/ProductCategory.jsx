import { useHref, useLocation, useParams } from "react-router";
import { Fragment, useEffect, useState } from "react";

import { firstUppercase, kebabCase, rupiah, setTitle } from "../../utils";
import { products } from "../../utils/data";

import BreadCrumbs from "../../components/Breadcrumbs";
import Card from "../../components/Card";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Boxicons from "../../components/icons/Boxicons";

const ProductCategory = () => {
    let { category } = useParams();
    let { search } = useLocation();

    let searched = search && search.split("=")[1];

    category = firstUppercase(kebabCase(category, false));

    setTitle(category);

    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState(false);
    const [currentOption, setCurrentOption] = useState("Harga Terendah");

    useEffect(() => {
        let items = [];

        if (searched) {
            items = products.filter((item) =>
                item.name
                    .toLocaleLowerCase()
                    .match(kebabCase(searched).toLocaleLowerCase())
            );
        } else {
            items = products.filter((item) => item.category === category);
        }

        setItems(items);

        if (currentOption == "Harga Tertinggi") {
            items = items.sort((a, b) => a.price + b.price);
        } else {
            items = items.sort((a, b) => a.price - b.price);
        }
    }, [currentOption, search]);

    return (
        <>
            <BreadCrumbs />

            <Section sectionId="product-category">
                <Container style="mt-8 mb-6">
                    <div className="flex justify-between items-center">
                        <p className=" font-light text-neutral-500">
                            Menampilkan {items.length} produk untuk{" "}
                            <strong className="font-medium text-neutral-900">
                                "{searched ? kebabCase(searched) : category}"
                            </strong>
                        </p>
                        <div className="filter flex items-center">
                            <h5 className="font-semibold me-2">Urutkan :</h5>
                            <div
                                className={`relative border ${
                                    filter && "border-lilac"
                                }  flex items-center p-2 ps-3 rounded-md cursor-pointer`}
                                onClick={() => setFilter(!filter)}
                            >
                                <p>{currentOption}</p>

                                {filter ? (
                                    <Boxicons
                                        icon="chevron-up"
                                        size="xl"
                                        translate="-translate-y-0.5 translate-x-1"
                                    />
                                ) : (
                                    <Boxicons
                                        icon="chevron-down"
                                        size="xl"
                                        translate="-translate-y-1 translate-x-1"
                                    />
                                )}

                                {filter && (
                                    <div className="filter-option absolute top-11 left-0 right-0 z-10 bg-white border rounded-md">
                                        <p
                                            className={`p-3 pe-2 relative ${
                                                currentOption ==
                                                    "Harga Terendah" &&
                                                "option-active"
                                            }`}
                                            onClick={() =>
                                                setCurrentOption(
                                                    "Harga Terendah"
                                                )
                                            }
                                        >
                                            Harga Terendah
                                        </p>
                                        <p
                                            className={`p-3 pe-2 relative ${
                                                currentOption ==
                                                    "Harga Tertinggi" &&
                                                "option-active"
                                            }`}
                                            onClick={() =>
                                                setCurrentOption(
                                                    "Harga Tertinggi"
                                                )
                                            }
                                        >
                                            Harga Tertinggi
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="items grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                        {items.map((item, i) => {
                            return <Card key={i} item={item} />;
                        })}
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default ProductCategory;
