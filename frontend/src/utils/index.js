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
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 250000,
        stock: 10,
        availableItems: [
            {
                image: "product-1.jpg",
                availableSizes: [
                    {
                        size: "S",
                        stock: 2,
                    },
                    {
                        size: "M",
                        stock: 5,
                    },
                    {
                        size: "L",
                        stock: 4,
                    },
                ],
                color: "gray",
            },
            {
                image: "product-2.jpg",
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "black",
            },
        ],
    },
    {
        id: 2,
        name: "Baju Calvin Klein",
        images: ["product-2.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 50000,
        stock: 10,
        availableItems: [
            {
                image: "product-2.jpg",
                availableSizes: [
                    {
                        size: "S",
                        stock: 2,
                    },
                    {
                        size: "XL",
                        stock: 4,
                    },
                ],
                color: "black",
            },
        ],
    },
    {
        id: 3,
        name: "Gamis Abaya",
        images: ["product-5.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "pants",
        price: 125000,
        stock: 10,
        availableItems: [
            {
                image: "product-5.jpg",
                availableSizes: [
                    {
                        size: "S",
                        stock: 2,
                    },
                    {
                        size: "M",
                        stock: 4,
                    },
                ],
                color: "black",
            },
        ],
    },
    {
        id: 4,
        name: "Celana Pendek Remaja",
        images: ["product-7.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "pants",
        price: 99000,
        stock: 10,
        availableItems: [
            {
                image: "product-7.jpg",
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "navy",
            },
        ],
    },
    {
        id: 5,
        name: "Baju Distro Custom",
        images: ["product-8.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "pants",
        price: 25000,
        stock: 10,
        availableItems: [
            {
                image: "product-8.jpg",
                availableSizes: [
                    {
                        size: "S",
                        stock: 2,
                    },
                    {
                        size: "M",
                        stock: 4,
                    },
                ],
                color: "orange",
            },
            {
                image: "product-6.jpg",
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "black",
            },
        ],
    },
    {
        id: 6,
        name: "Baju Calvin Klein",
        images: ["product-2.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 10000,
        stock: 10,
        availableItems: [
            {
                image: "product-1.jpg",
                availableSizes: [
                    {
                        size: "S",
                        stock: 2,
                    },
                    {
                        size: "L",
                        stock: 4,
                    },
                ],
                color: "gray",
            },
            {
                image: "product-2.jpg",
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "black",
            },
        ],
    },
    {
        id: 7,
        name: "Gamis Abaya",
        images: ["product-3.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 45000,
        stock: 10,
        availableItems: [
            {
                image: "product-1.jpg",
                availableSizes: [
                    {
                        size: "S",
                        stock: 2,
                    },
                    {
                        size: "L",
                        stock: 4,
                    },
                ],
                color: "gray",
            },
            {
                image: "product-2.jpg",
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "black",
            },
        ],
    },
    {
        id: 8,
        name: "Mukena Congsu Panjang",
        images: ["product-4.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae",
        category: "shirt",
        price: 5000,
        stock: 10,
        availableItems: [
            {
                image: "product-1.jpg",
                availableSizes: [
                    {
                        size: "S",
                        stock: 2,
                    },
                    {
                        size: "L",
                        stock: 4,
                    },
                ],
                color: "gray",
            },
            {
                image: "product-2.jpg",
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "black",
            },
        ],
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

export const translate = (letter) => {
    switch (letter) {
        case "shirt":
            letter = "baju";
            break;
        case "pants":
            letter = "celana";
            break;
    }

    return letter;
};

export const firstWordUppercase = (word) => {
    let firstWord = word.slice(0, 1).toUpperCase();
    const exceptFirst = word.slice(1);

    const newWord = firstWord + exceptFirst;
    return newWord;
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

export const mergeSize = (item) => {
    let arr = [];

    arr = item.availableItems.map((item) => item.availableSizes).flat();

    const newSizes = new Set();

    arr.map((item, i, array) => {
        newSizes.add(item.size);
    });

    return Array.from(newSizes);
};
