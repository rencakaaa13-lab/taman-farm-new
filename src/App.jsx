import { useState } from "react";
import { motion } from "framer-motion";

import heroImage from "./assets/hero.jpg";
import aboutImage from "./assets/about.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#f6f3ee] text-gray-800 font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold tracking-wide">Taman Farm</h1>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#tentang">Tentang</a>
            <a href="#produk">Produk</a>
            <a href="#menu">Menu</a>
            <a href="#galeri">Galeri</a>
            <a href="#kontak">Kontak</a>
          </div>

          {/* MOBILE BUTTON */}
          <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-black/80 px-6 py-4 flex flex-col gap-3">
            <a href="#tentang" onClick={() => setOpen(false)}>Tentang</a>
            <a href="#produk" onClick={() => setOpen(false)}>Produk</a>
            <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
            <a href="#galeri" onClick={() => setOpen(false)}>Galeri</a>
            <a href="#kontak" onClick={() => setOpen(false)}>Kontak</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <motion.section
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="min-h-screen flex items-center justify-center text-center px-6 relative"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-3xl">

          <p className="tracking-[5px] text-xs md:text-sm mb-4">
            GREEN CAFE & SPACE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tempat Santai di Tengah Alam
          </h1>

          <p className="text-gray-200 mb-8 text-sm md:text-base">
            Cafe, tanaman hias, dan ruang santai dengan suasana natural yang tenang.
          </p>

          <a
            href="https://wa.me/6285187922448"
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full inline-block"
          >
            Hubungi Kami
          </a>

        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="tentang"
        className="py-24 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src={aboutImage}
            className="rounded-3xl shadow-xl w-full h-[300px] md:h-[450px] object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Taman Farm adalah cafe dan ruang hijau yang menghadirkan suasana santai,
              cocok untuk keluarga, teman, dan healing.
            </p>
          </div>

        </div>
      </motion.section>

      {/* PRODUK */}
      <section id="produk" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Produk Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {["Tanaman Hias", "Cafe", "Dekorasi"].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl shadow hover:shadow-xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">
                Produk dan layanan terbaik untuk kebutuhan Anda.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Menu Cafe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { name: "Kopi Susu", price: "Rp18.000", img: gallery1 },
            { name: "Mie Pedas", price: "Rp22.000", img: gallery2 },
            { name: "Matcha Latte", price: "Rp20.000", img: gallery3 }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl hover:-translate-y-2 transition">

              <img src={item.img} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-green-700 font-semibold">{item.price}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Galeri</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[gallery1, gallery2, gallery3].map((img, i) => (
            <img key={i} src={img} className="rounded-3xl h-80 w-full object-cover shadow hover:scale-105 transition" />
          ))}

        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-24 px-6 bg-green-700 text-white text-center">

        <h2 className="text-3xl font-bold mb-4">Kontak Kami</h2>

        <p>WhatsApp: 0851-8792-2448</p>
        <p>Instagram: @tamanfarmtasik</p>

      </section>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/6285187922448"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition"
      >
        WhatsApp
      </a>

    </div>
  );
}