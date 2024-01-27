import { Link, useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setCurrentMenu } from "../redux/reducers";

import { rupiah, setTitle } from "../utils";
import { bestseller, categories } from "../utils/data";

import Section from "../components/Section";
import Container from "../components/Container";
import Card from "../components/Card";
import CardCategory from "../components/cards/CardCategory";

const Home = () => {
    setTitle("Home");

    const dispatch = useDispatch();

    const nav = document.querySelector("nav");
    nav && nav.classList.remove("bg-white", "border", "border-b");

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

            <Section sectionId="bestseller">
                <Container style="mb-8">
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

                        <section className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
                            {bestseller.map((item, i) => {
                                return <Card key={i} item={item} />;
                            })}
                        </section>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Home;
