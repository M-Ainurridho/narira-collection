import { postData } from "../api";

export const menus = [
    { name: "Beranda", path: "/" },
    { name: "Produk", path: "/products" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kontak", path: "/contact" },
];

export const products = [
    {
        id: 1,
        name: "Baju Distro Custom",
        images: ["product-1.jpg"],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 250000,
        stock: 10,
    },
    {
        id: 2,
        name: "Baju Calvin Klein",
        images: ["product-2.jpg"],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 50000,
        stock: 10,
    },
    {
        id: 3,
        name: "Gamis Abaya",
        images: [
            "product-3.jpg",
            "product-1.jpg",
            "product-2.jpg",
            "product-4.jpg",
        ],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 125000,
        stock: 10,
    },
    {
        id: 4,
        name: "Mukena Congsu Panjang",
        images: ["product-4.jpg"],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 99000,
        stock: 10,
    },
    {
        id: 5,
        name: "Baju Distro Custom",
        images: ["product-1.jpg"],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 25000,
        stock: 10,
    },
    {
        id: 6,
        name: "Baju Calvin Klein",
        images: ["product-2.jpg"],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 10000,
        stock: 10,
    },
    {
        id: 7,
        name: "Gamis Abaya",
        images: ["product-3.jpg"],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 45000,
        stock: 10,
    },
    {
        id: 8,
        name: "Mukena Congsu Panjang",
        images: ["product-4.jpg"],
        color: "blue",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 5000,
        stock: 10,
    },
];

export const bestseller = [
    {
        id: 1,
        name: "Baju Distro Custom",
        images: ["product-1.jpg"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 250000,
    },
    {
        id: 2,
        name: "Baju Calvin Klein",
        images: ["product-2.jpg"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 50000,
    },
    {
        id: 3,
        name: "Gamis Abaya",
        images: ["product-3.jpg"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 125000,
    },
    {
        id: 4,
        name: "Mukena Congsu Panjang",
        images: ["product-4.jpg"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 99000,
    },
    {
        id: 5,
        name: "Baju Distro Custom",
        images: ["product-1.jpg"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 25000,
    },
];

export const rupiah = (price, K = false) => {
    let currency = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(price);

    if (K) {
        currency = currency.split(".")[0].split("Rp")[1];
        currency = `${currency}k`;
    } else {
        currency = currency.split(",")[0];
    }

    return currency;
};

export const exchangeToken = async () => {
    const token = localStorage.getItem("nariratoken");

    if (token) {
        const sendToken = await postData(
            "http://localhost:3000/auth/exchangetoken"
        );

        return sendToken;
    } else {
        delete axios.defaults.headers.common["auth-token"];
        return "Not found token";
    }
};
