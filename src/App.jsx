import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "./assets/hero.jpg";
import aboutImage from "./assets/about.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#f7f5f1] text-gray-800 overflow-hidden scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            Taman Farm
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#tentang" className="hover:text-green-300 transition">Tentang</a>
            <a href="#produk" className="hover:text-green-300 transition">Produk</a>
            <a href="#galeri" className="hover:text-green-300 transition">Galeri</a>
            <a href="#kontak" className="hover:text-green-300 transition">Kontak</a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-black/80 px-6 py-4 flex flex-col gap-4 text-sm">
            <a onClick={() => setOpen(false)} href="#tentang">Tentang</a>
            <a onClick={() => setOpen(false)} href="#produk">Produk</a>
            <a onClick={() => setOpen(false)} href="#galeri">Galeri</a>
            <a onClick={() => setOpen(false)} href="#kontak">Kontak</a>
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
        className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 md:pt-0"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <p className="uppercase tracking-[5px] text-sm mb-5">
            Green Space & Cafe
          </p>

          <h1 className="text-3xl md:text-7xl font-bold leading-tight max-w-4xl mb-6 drop-shadow-2xl">
            Tempat Bersantai di Tengah Hijau Alam
          </h1>

          <p className="text-base md:text-xl max-w-2xl leading-relaxed text-gray-200 mb-8">
            Taman Farm menghadirkan suasana nyaman melalui kombinasi tanaman hias, cafe, dan ruang santai bernuansa alam.
          </p>

          <a
            href="https://wa.me/6285187922448"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 transition px-7 py-4 rounded-full inline-block font-medium"
          >
            Hubungi Kami
          </a>

          <div className="mt-10 animate-bounce text-sm text-gray-200">
            ↓ Scroll untuk melihat lebih
          </div>

        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="tentang"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          <div className="rounded-[30px] overflow-hidden shadow-xl h-[300px] md:h-[450px]">
            <img
              src={aboutImage}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div>
            <p className="text-green-700 font-semibold mb-3">Tentang Kami</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Ruang Nyaman untuk Bersantai dan Menikmati Alam
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              Taman Farm adalah tempat yang memadukan tanaman hias dan kedai bernuansa alam dalam satu ruang yang nyaman dan estetik.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Cocok untuk keluarga, komunitas, maupun tempat healing dari hiruk pikuk kota.
            </p>
          </div>

        </div>
      </motion.section>

      {/* PRODUK */}
      <section id="produk" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-green-700 font-semibold mb-3">Produk & Layanan</p>
            <h2 className="text-3xl md:text-5xl font-bold">Yang Kami Hadirkan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {["Tanaman Hias", "Kedai Makanan", "Dekorasi Taman"].map((title, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              >
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Produk dan layanan terbaik untuk kebutuhan taman dan santai Anda.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Siap Nongkrong di Taman Farm?
        </h2>

        <p className="text-lg mb-8 text-green-100">
          Datang langsung atau hubungi kami sekarang
        </p>

        <a
          href="https://wa.me/6285187922448"
          className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Pesan / Reservasi
        </a>
      </section>

      {/* MENU */}
      <section className="py-24 px-6 bg-[#f7f5f1]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-green-700 font-semibold mb-3">Menu Cafe</p>
          <h2 className="text-3xl md:text-5xl font-bold">Menu Favorit</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            { name: "Kopi Susu", price: "Rp18.000", img: gallery1 },
            { name: "Mie Pedas", price: "Rp22.000", img: gallery2 },
            { name: "Matcha Latte", price: "Rp20.000", img: gallery3 }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500">

              <img src={item.img} className="w-full h-60 object-cover hover:scale-110 transition duration-700" />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-green-700 font-bold">{item.price}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* GALERI */}
      <motion.section
        id="galeri"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-green-700 font-semibold mb-3">Galeri</p>
          <h2 className="text-3xl md:text-5xl font-bold">Suasana Taman Farm</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {[gallery1, gallery2, gallery3].map((img, i) => (
            <div key={i} className="rounded-[30px] overflow-hidden h-[300px] md:h-[350px] shadow-lg">

              <img
                src={img}
                className="w-full h-full object-cover hover:scale-110 hover:rotate-1 transition duration-700"
              />

            </div>
          ))}

        </div>
      </motion.section>

      {/* KONTAK */}
      <section id="kontak" className="py-24 px-6 bg-green-700 text-white text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Kunjungi Taman Farm
        </h2>

        <p className="text-lg mb-3">Tasikmalaya</p>
        <p className="text-lg mb-3">WhatsApp: 0851-8792-2448</p>
        <p className="text-lg mb-10">Instagram: @tamanfarmtasik</p>

      </section>

      {/* FLOATING WA */}
      <a
        href="https://wa.me/6285187922448"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 transition text-white px-5 py-4 rounded-full shadow-2xl z-50"
      >
        WhatsApp
      </a>

    </div>
  );
}