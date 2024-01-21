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
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Pakaian Pria",
        brand: "Distro",
        discount: 10,
        price: 250000,
        stock: 10,
        availableItems: [
            {
                image: ["product-1.jpg", "product-3.jpg"],
                availableSizes: [
                    {
                        size: "L",
                        stock: 2,
                    },
                    {
                        size: "M",
                        stock: 5,
                    },
                    {
                        size: "S",
                        stock: 4,
                    },
                ],
                color: "white",
            },
            {
                image: ["product-2.jpg"],
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Pakaian Pria",
        brand: "Calvin Klein",
        discount: 0,
        price: 50000,
        stock: 10,
        availableItems: [
            {
                image: ["product-2.jpg"],
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
        name: "Celana Joger",
        images: ["product-5.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Celana Pria",
        brand: "Shafira",
        discount: 8,
        price: 125000,
        stock: 10,
        availableItems: [
            {
                image: ["product-5.jpg"],
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        Category: "Celana Pria",
        brand: "Jeans Denim",
        discount: 0,
        price: 99000,
        stock: 10,
        availableItems: [
            {
                image: ["product-7.jpg"],
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
        name: "Celana Kulot Dengkul",
        images: ["product-8.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Celana Pria",
        brand: "Distro",
        discount: 5,
        price: 25000,
        stock: 10,
        availableItems: [
            {
                image: ["product-8.jpg"],
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
                image: ["product-6.jpg"],
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Pakaian Pria",
        brand: "Calvin Klein",
        discount: 0,
        price: 10000,
        stock: 10,
        availableItems: [
            {
                image: ["product-1.jpg"],
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
                image: ["product-2.jpg"],
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Pakaian Wanita",
        brand: "Cass Elana",
        discount: 0,
        price: 45000,
        stock: 10,
        availableItems: [
            {
                image: ["product-1.jpg"],
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
                image: ["product-2.jpg"],
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
        name: "Nike Jordan",
        images: ["shoes-1.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Sepatu & Sneakers",
        brand: "Nike",
        discount: 25,
        price: 100000,
        stock: 10,
        availableItems: [
            {
                image: ["shoes-1.jpg"],
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
                image: ["product-2.jpg"],
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
        id: 9,
        name: "Reebok Air Plane",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Sepatu & Sneakers",
        brand: "Reebok",
        discount: 0,
        price: 960000,
        stock: 10,
        availableItems: [
            {
                image: ["shoes-2.jpg"],
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
                image: ["product-2.jpg"],
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
        id: 10,
        name: "Adidas Lion",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Sepatu & Sneakers",
        brand: "Adidas",
        discount: 0,
        price: 1200000,
        stock: 10,
        availableItems: [
            {
                image: ["shoes-3.jpg"],
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
                color: "biru",
            },
            {
                image: ["shoes-4.jpg"],
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "hitam",
            },
        ],
    },
    {
        id: 11,
        name: "Nike Stephen Curry Limited Edition",
        images: ["shoes-4.jpg"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Sepatu & Sneakers",
        brand: "Nike",
        discount: 4,
        price: 10000000,
        stock: 10,
        availableItems: [
            {
                image: ["shoes-4.jpg", "product-6.jpg"],
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
                color: "hitam",
            },
            {
                image: ["shoes-1.jpg"],
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "abu-abu",
            },
            {
                image: ["shoes-2.jpg", "shoes-3.jpg", "shoes-5.jpg"],
                availableSizes: [
                    {
                        size: "M",
                        stock: 3,
                    },
                ],
                color: "biru",
            },
        ],
    },
    {
        id: 12,
        name: "Converse Golden Star",
        images: ["shoes-5.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Sepatu & Sneakers",
        brand: "Converse",
        discount: 20,
        price: 100000000,
        stock: 10,
        availableItems: [
            {
                image: ["shoes-5.jpg"],
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
                image: ["shoes-3.jpg"],
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
        colors: ["white", "black", "purple"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Pakaian Pria",
        brand: "Distro",
        discount: 10,
        price: 250000,
        stock: 10,
        availableItems: [
            {
                image: ["product-1.jpg", "product-3.jpg"],
                availableSizes: [
                    {
                        size: "L",
                        stock: 2,
                    },
                    {
                        size: "M",
                        stock: 5,
                    },
                    {
                        size: "S",
                        stock: 4,
                    },
                ],
                color: "white",
            },
            {
                image: ["product-2.jpg"],
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Pakaian Pria",
        brand: "Calvin Klein",
        discount: 0,
        price: 50000,
        stock: 10,
        availableItems: [
            {
                image: ["product-2.jpg"],
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
        name: "Celana Joger",
        images: ["product-5.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Celana Pria",
        brand: "Shafira",
        discount: 8,
        price: 125000,
        stock: 10,
        availableItems: [
            {
                image: ["product-5.jpg"],
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        Category: "Celana Pria",
        brand: "Jeans Denim",
        discount: 0,
        price: 99000,
        stock: 10,
        availableItems: [
            {
                image: ["product-7.jpg"],
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
        name: "Celana Kulot Dengkul",
        images: ["product-8.jpg"],
        colors: ["white", "black", "purple"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
        category: "Celana Pria",
        brand: "Distro",
        discount: 5,
        price: 25000,
        stock: 10,
        availableItems: [
            {
                image: ["product-8.jpg"],
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
                image: ["product-6.jpg"],
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

export const categories = [
    {
        img: "man-shirt.png",
        name: "Pakaian Pria",
        submenu: ["Baju Batik", "Kemeja Pria", "Jas Pria"],
    },
    {
        img: "man-pants.png",
        name: "Celana Pria",
        submenu: ["Celana Kulot", "Joger", "Celana Training"],
    },
    {
        img: "shoes.png",
        name: "Sepatu & Sneakers",
        submenu: ["Sepatu Wanita", "Sepatu Pria"],
    },
    {
        img: "gamis.png",
        name: "Fashion Muslim Wanita",
        submenu: ["Gamis Wanita", "Mukena", "Sajadah"],
    },
    {
        img: "headphone.png",
        name: "Earphone & Headphone",
        submenu: ["Galactus", "Sony", "Baseus", "Robot"],
    },
];
