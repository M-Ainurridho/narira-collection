require("../config/db")
const { default: mongoose, Schema, SchemaType } = require("mongoose")

const productSchema = new Schema({
    name: String,
    description: String,
    category: String,
    brand: String,
    price: BigInt,
    discount: {
        type: Number,
        default: 0,
    },
    items: [
        {
            images: [String],
            availableSizes: [
                {
                    size: String,
                    stock: Number,
                },
            ],
            color: String,
        },
    ],
})

const Product = mongoose.model("Product", productSchema)

const product1 = new Product({
    name: "Gamis Abaya",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat adipisci error mollitia distinctio quae totam doloremque debitis voluptatibus, consectetur eum, soluta quos ad numquam doloribus! Quasi, tempore cumque accusamus quae illum quam in reiciendis quia eum. Unde ex assumenda laborum officiis similique dicta illum nulla nisi corporis reprehenderit. Sit!",
    category: "Pakaian Pria",
    brand: "Distro",
    discount: 10,
    price: 250000,
    items: [
        {
            images: ["product-1.jpg", "product-3.jpg"],
            availableSizes: [{ size: "S", stock: 2 }],
            color: "hitam",
        },
    ],
})

product1
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
