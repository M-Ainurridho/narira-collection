import { useParams } from "react-router";
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
    setTitle(firstUppercase(kebabCase(category, false)));

    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState(false);

    category = firstUppercase(kebabCase(category, false));

    return (
        <>
            <BreadCrumbs />

            <Section sectionId="product-category">
                <Container style="pt-8">
                    <div className="flex justify-between items-center">
                        <p className=" font-light text-neutral-500">
                            Menampilkan {products.length} produk untuk{" "}
                            <strong className="font-medium text-neutral-900">"{category}"</strong>
                        </p>
                        <div className="filter flex items-center">
                            <h5 className="font-semibold me-2">Urutkan :</h5>
                            <div
                                className={`relative border ${
                                    filter && "border-lilac"
                                }  flex items-center p-2 ps-3 rounded-md cursor-pointer`}
                                onClick={() => setFilter(!filter)}
                            >
                                <p>Harga Terendah</p>

                                {filter ? (
                                    <Boxicons
                                        icon="bx-chevron-up"
                                        size="xl"
                                        translate="-translate-y-0.5 translate-x-1"
                                    />
                                ) : (
                                    <Boxicons
                                        icon="bx-chevron-down"
                                        size="xl"
                                        translate="-translate-y-1 translate-x-1"
                                    />
                                )}

                                {filter && (
                                    <div className="filter-option absolute top-11 left-0 right-0 z-10 bg-white border rounded-md">
                                        <p className="p-3 pe-2 relative option-active">
                                            Harga Terendah
                                        </p>
                                        <p className=" p-3 pe-2">
                                            Harga Tertinggi
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 mt-6">
                        {products.map((item, i) => {
                            return (
                                <Fragment key={i}>
                                    <Card index={i} item={item}>
                                        <div className="flex items-center justify-between p-2 pb-5 lg:pb-4 text-sm md:text-base">
                                            <h5 className="truncate w-4/5">
                                                {item.name}
                                            </h5>
                                            <p>{rupiah(item.price, true)}</p>
                                        </div>
                                        <div className="add-item absolute -bottom-5 left-45% bg-lilac hover:bg-lilac-hover duration-100 rounded-full w-9 h-9 flex items-center justify-center">
                                            <box-icon
                                                name="plus"
                                                color="white"
                                            ></box-icon>
                                        </div>
                                    </Card>
                                </Fragment>
                            );
                        })}
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default ProductCategory;
