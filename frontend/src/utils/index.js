export const menus = [
   { name: 'Beranda', path: '/' },
   { name: 'Produk', path: '/products' },
   { name: 'Tentang Kami', path: '/about' },
   { name: 'Kontak', path: '/contact' },
]

export const products = [
   {
      id: 1,
      name: 'Baju Distro Custom',
      images: ['product-1.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 2,
      name: 'Baju Calvin Klein',
      images: ['product-2.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 3,
      name: 'Gamis Abaya',
      images: ['product-3.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 4,
      name: 'Mukena Congsu Panjang',
      images: ['product-4.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 5,
      name: 'Baju Distro Custom',
      images: ['product-1.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 6,
      name: 'Baju Calvin Klein',
      images: ['product-2.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 7,
      name: 'Gamis Abaya',
      images: ['product-3.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 8,
      name: 'Mukena Congsu Panjang',
      images: ['product-4.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
]

const searchProduct = (keyword) => {
   const filtered = products.filter((product) =>
      product.name.toLowerCase().match(keyword.toLowerCase())
   )

   console.log(filtered)
}

const item = {
   id: 1,
   name: 'Baju Distro Custom',
   images: ['product-1.jpg'],
   description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
   category: 'shirt',
   price: 25000,
}

export const bestseller = [
   {
      id: 1,
      name: 'Baju Distro Custom',
      images: ['product-1.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 2,
      name: 'Baju Calvin Klein',
      images: ['product-2.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 3,
      name: 'Gamis Abaya',
      images: ['product-3.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 4,
      name: 'Mukena Congsu Panjang',
      images: ['product-4.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
   {
      id: 5,
      name: 'Baju Distro Custom',
      images: ['product-1.jpg'],
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae',
      category: 'shirt',
      price: 25000,
   },
]
