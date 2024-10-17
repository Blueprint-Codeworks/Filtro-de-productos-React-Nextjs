"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  color: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Audífonos",
    description:
      "Audífonos de alta calidad con cancelación de ruido y sonido envolvente.",
    category: "electronics",
    price: 300,
    color: "black",
    image: "/product.png",
  },
  {
    id: 2,
    name: "Camisa Roja",
    description: "Camisa de algodón 100% con un estilo moderno y ajustado.",
    category: "fashion",
    price: 150,
    color: "red",
    image: "/product.png",
  },
  {
    id: 3,
    name: "Lámpara",
    description: "Lámpara LED con diseño minimalista y luz ajustable.",
    category: "home",
    price: 400,
    color: "white",
    image: "/product.png",
  },
  {
    id: 4,
    name: "Zapatillas Deportivas",
    description: "Zapatillas deportivas ligeras y cómodas para entrenar.",
    category: "fashion",
    price: 90,
    color: "blue",
    image: "/product.png",
  },
  {
    id: 5,
    name: "Chaqueta de Cuero",
    description:
      "Chaqueta de cuero sintético, elegante y cómoda para cualquier ocasión.",
    category: "fashion",
    price: 120,
    color: "black",
    image: "/product.png",
  },
  {
    id: 6,
    name: "Smartwatch",
    description:
      "Smartwatch con monitor de frecuencia cardíaca y notificaciones inteligentes.",
    category: "electronics",
    price: 250,
    color: "silver",
    image: "/product.png",
  },
  {
    id: 7,
    name: "Planta de Interior",
    description: "Planta de interior fácil de cuidar que purifica el aire.",
    category: "home",
    price: 150,
    color: "green",
    image: "/product.png",
  },
  {
    id: 8,
    name: "Televisor 4K",
    description:
      "Televisor 4K de 55 pulgadas con HDR y conectividad inteligente.",
    category: "electronics",
    price: 800,
    color: "black",
    image: "/product.png",
  },
  {
    id: 9,
    name: "Almohada Ergonométrica",
    description: "Almohada ergonómica para un sueño reparador y saludable.",
    category: "home",
    price: 60,
    color: "brown",
    image: "/product.png",
  },
];

const socialIcons = [
  {
    name: "Twitter",
    url: "https://twitter.com/tu-usuario",
    viewBox: "0 0 24 24",
    path: "M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.577 2.163-2.724-.951.555-2.005.957-3.127 1.172-.895-.955-2.171-1.55-3.591-1.55-2.719 0-4.931 2.201-4.931 4.918 0 .387.045.765.127 1.124C7.691 8.095 4.066 6.13 1.64 3.161c-.427.731-.671 1.577-.671 2.485 0 1.719.873 3.233 2.192 4.128-.808-.026-1.568-.248-2.239-.616v.061c0 2.396 1.704 4.397 3.964 4.853-.415.112-.852.171-1.299.171-.317 0-.634-.031-.943-.088.634 1.975 2.475 3.417 4.65 3.457-1.707 1.336-3.847 2.134-6.161 2.134-.401 0-.794-.024-1.184-.072 2.198 1.413 4.805 2.236 7.598 2.236 9.097 0 14.065-7.525 14.065-14.065 0-.214 0-.426-.015-.637.964-.695 1.797-1.563 2.457-2.549l-.047-.021z",
  },
  {
    name: "GitHub",
    url: "https://github.com/tu-usuario",
    viewBox: "0 0 24 24",
    path: "M12 0C5.373 0 0 5.373 0 12c0 5.308 3.438 9.8 8.205 11.387.6.112.793-.26.793-.577 0-.286-.01-1.238-.01-2.25-3.338.725-4.043-1.607-4.043-1.607-.546-1.384-1.334-1.754-1.334-1.754-1.093-.746.083-.73.083-.73 1.21.085 1.844 1.242 1.844 1.242 1.074 1.838 2.809 1.306 3.493.999.108-.775.42-1.306.763-1.606-2.665-.303-5.467-1.334-5.467-5.93 0-1.313.469-2.388 1.236-3.228-.124-.303-.535-1.528.117-3.176 0 0 1.008-.322 3.301 1.228A11.617 11.617 0 0112 4.69c1.026.004 2.054.138 3.012.404 2.293-1.55 3.301-1.228 3.301-1.228.653 1.648.242 2.873.118 3.176.768.84 1.236 1.915 1.236 3.228 0 4.605-2.805 5.623-5.471 5.93.43.371.825 1.101.825 2.223 0 1.605-.014 2.91-.014 3.299 0 .318.193.693.798.577C20.563 21.8 24 17.308 24 12c0-6.627-5.373-12-12-12z",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tu-usuario",
    viewBox: "0 0 50 50",
    path: "M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@tu-usuario",
    viewBox: "0 0 50 50",
    path: "M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tu-usuario",
    viewBox: "0 0 24 24",
    path: "M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0zm-3.725 12h-3.425v10.65h-4.5V12h-2.1v-3.6h2.1V7.5c0-3.375 1.6-5.25 5.1-5.25l3.325.013v3.8h-2.4c-1.15 0-1.575.55-1.575 1.575v2.2h4.05l-.6 3.6z",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/c/tu-canal",
    viewBox: "0 0 24 24",
    path: "M23.495 6.21a2.992 2.992 0 0 0-2.106-2.106C20.054 4 12 4 12 4s-8.054 0-9.389.104A2.992 2.992 0 0 0 .505 6.21A32.553 32.553 0 0 0 0 12c0 1.348.036 2.691.105 4.057a2.992 2.992 0 0 0 2.106 2.106C3.946 20 12 20 12 20s8.054 0 9.389-.104a2.992 2.992 0 0 0 2.106-2.106C23.964 14.691 24 13.348 24 12c0-1.348-.036-2.691-.105-4.057zM9.545 15.17V8.83l6.454 3.168-6.454 3.168z",
  },
];

export default function Home() {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(1000);
  const [color, setColor] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (category === "all" || product.category === category) &&
        product.price <= price &&
        (color === "all" || product.color === color)
    );
    setFilteredProducts(filtered);
  }, [category, price, color]);

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Head>
        <title>Productos con Filtros</title>
        <meta
          name="description"
          content="Explora nuestro codigo de ejemplo de filtro para productos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Filtro de productos</h1>
          <p className="text-xl text-gray-400">
            Explora nuestro codigo de ejemplo de filtro para productos.
          </p>
        </div>

        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-md mb-6 hover:bg-orange-600 transition-colors"
          onClick={() => setFilterMenuOpen(true)}
        >
          Filtros
        </button>

        <div
          className={`fixed top-0  left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
            filterMenuOpen ? "opacity-100 z-50" : "opacity-0 -z-10"
          }`}
        >
          <div
            className={`fixed top-0 left-0 w-4/5 max-w-md h-full bg-[#1d1d1d] p-6 transition-transform duration-300 ${
              filterMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setFilterMenuOpen(false)}
            >
              ✖
            </button>
            <div className="space-y-6 mt-10">
              <div>
                <label htmlFor="category" className="block mb-2 text-lg">
                  Categoría:
                </label>
                <select
                  id="category"
                  className="w-full bg-[#2a2a2a] text-white p-2 rounded-md"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">Todas</option>
                  <option value="electronics">Electrónica</option>
                  <option value="fashion">Moda</option>
                  <option value="home">Hogar</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block mb-2 text-lg">
                  Rango de Precio:
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    id="price"
                    min="0"
                    max="1000"
                    step="10"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <span className="text-lg font-semibold text-orange-500">
                    ${price}
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="color" className="block mb-2 text-lg">
                  Color:
                </label>
                <select
                  id="color"
                  className="w-full bg-[#2a2a2a] text-white p-2 rounded-md"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="all">Todos</option>
                  <option value="black">Negro</option>
                  <option value="white">Blanco</option>
                  <option value="red">Rojo</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#1d1d1d] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
                <p className="text-orange-500 font-bold mt-2">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Blueprint Codeworks</h2>
          <p className="text-xl text-gray-400 mb-6">
            Síguenos en nuestras redes sociales
          </p>
          <div className="flex justify-center space-x-6">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8 h-8 fill-current text-white hover:text-orange-500 transition-colors"
                  aria-label={icon.name}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox}
                >
                  <path d={icon.path}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
