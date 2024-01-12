import { Link, useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setCurrentMenu } from "../redux/reducers";

import { rupiah, setTitle } from "../utils";
import { bestseller, categories } from "../utils/data";

import Card from "../components/Card";
import Section from "../components/Section";
import CardCategory from "../components/categories/CardCategory";

const Home = () => {
    setTitle("Home");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentMenu("Beranda"));
    }, []);

    return (
        <>
            <div className="hero"></div>

            <Section sectionId="categories">
                <div className="section-title mb-2">
                    <h2 className="text-xl font-semibold">KATEGORI</h2>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-9 gap-2">
                    {categories.map((category, idx) => {
                        return (
                            <CardCategory
                                key={idx}
                                name={category.name}
                                img={category.img}
                            />
                        );
                    })}
                </div>
            </Section>

            <section id="bestseller" className="px-4 md:px-8 lg:px-16 pt-8">
                <div className="container">
                    <div
                        className="flex justify-between items-end
               "
                    >
                        <h3 className="font-semibold text-xl">
                            Produk Terlaris
                        </h3>
                        <Link
                            to="/"
                            className="text-xs text-blue-500 hover:text-blue-700"
                        >
                            Lihat semua
                        </Link>
                    </div>

                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
                        {bestseller.map((item, i) => {
                            return (
                                <Fragment key={i}>
                                    <Card index={i} item={item}>
                                        <div className="flex items-center justify-between p-2 text-sm md:text-base">
                                            <h5 className="truncate w-4/5">
                                                {item.name}
                                            </h5>
                                            <p>{rupiah(item.price, true)}</p>
                                        </div>
                                    </Card>
                                </Fragment>
                            );
                        })}
                    </section>
                </div>
            </section>
        </>
    );
};

export default Home;
