import { motion } from "framer-motion";

import {
  FaLeaf,
  FaCoffee,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import heroImage from "./assets/hero.jpg";
import aboutImage from "./assets/about.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="bg-[#f6fdf7] text-gray-800 overflow-x-hidden scroll-smooth">

      {/* BACKGROUND BLUR */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-300/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-200/20 blur-[120px] rounded-full"></div>

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain rounded-full shadow-md"
            />

            <div>

              <h1 className="text-xl md:text-2xl font-black text-green-800 leading-none">
                Taman Farm
              </h1>

              <p className="text-xs text-gray-500">
                Cafe & Green Space
              </p>

            </div>

          </div>

          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">

            <a href="#tentang" className="hover:text-green-600 transition">
              Tentang
            </a>

            <a href="#menu" className="hover:text-green-600 transition">
              Menu
            </a>

            <a href="#tanaman" className="hover:text-green-600 transition">
              Tanaman
            </a>

            <a href="#galeri" className="hover:text-green-600 transition">
              Galeri
            </a>

            <a href="#lokasi" className="hover:text-green-600 transition">
              Lokasi
            </a>

            <a href="#kontak" className="hover:text-green-600 transition">
              Kontak
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center text-center text-white px-6 relative pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >

          <div className="inline-block mb-6 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/20 shadow-lg">

            🌿 Cafe • Tanaman • Healing Space

          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tight drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]">

            Taman Farm

          </h1>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">

            Tempat santai di tengah alam hijau untuk kopi, makanan,
            dan tanaman hias di Tasikmalaya.

          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-400 text-white font-semibold shadow-[0_20px_60px_rgba(34,197,94,0.45)] hover:scale-105 transition duration-300"
            >
              Lihat Menu
            </a>

            <a
              href="#tentang"
              className="px-8 py-4 rounded-full bg-white text-gray-800 font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              Tentang Kami
            </a>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section
        id="tentang"
        className="py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-br from-green-200 to-yellow-100 rounded-[40px]"></div>

          <img
            src={aboutImage}
            className="relative rounded-[40px] shadow-2xl object-cover"
          />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Tentang Kami
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-800 mt-5 mb-6 leading-tight">

            Healing Space
            <br />
            di Tengah Alam

          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">

            Taman Farm adalah tempat unik yang menyatukan toko tanaman hias
            dan kedai makanan dengan konsep alami, hijau, dan santai.
            Cocok untuk healing, nongkrong, berburu tanaman,
            hingga menikmati suasana kebun yang nyaman.

          </p>

          <div className="mt-8 flex gap-3 flex-wrap">

            <span className="bg-white px-5 py-3 rounded-2xl shadow-lg border border-green-100">
              🌿 Hijau & Asri
            </span>

            <span className="bg-white px-5 py-3 rounded-2xl shadow-lg border border-green-100">
              ☕ Coffee Spot
            </span>

            <span className="bg-white px-5 py-3 rounded-2xl shadow-lg border border-green-100">
              🪴 Plant Store
            </span>

          </div>

        </motion.div>

      </section>

      {/* MENU */}
      <section
        id="menu"
        className="py-28 px-6 bg-gradient-to-b from-green-50 to-white"
      >

        <div className="text-center mb-14">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Menu Favorit
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-800 mt-5">
            Menu Andalan
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {[
            ["Nasi Komplit", "13.000"],
            ["Mie Instan Komplit", "15.000"],
            ["Milktea", "6.000"],
            ["Kopi Panas", "3.000"],
            ["Ayam Goreng", "5.000"],
            ["Marksuur", "8.000"],
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(34,197,94,0.15)] hover:-translate-y-3 transition duration-500 border border-gray-100"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-2xl mb-5 shadow-lg text-white">
                <FaCoffee />
              </div>

              <h3 className="font-bold text-2xl mb-2">
                {item[0]}
              </h3>

              <p className="text-green-600 font-bold text-lg">
                Rp {item[1]}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* TANAMAN */}
      <section
        id="tanaman"
        className="py-28 px-6"
      >

        <div className="text-center mb-14">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Tanaman Unggulan
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-800 mt-5">
            Koleksi Favorit
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            [
              "Monstera",
              "Tanaman indoor premium dengan daun eksotis.",
            ],
            [
              "Aglaonema",
              "Warna cantik untuk memperindah ruangan.",
            ],
            [
              "Philodendron",
              "Tanaman aesthetic favorit pecinta tanaman.",
            ],
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 hover:-translate-y-3 transition duration-500"
            >

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white text-2xl shadow-xl mb-6">
                <FaLeaf />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item[0]}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item[1]}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* GALERI */}
      <section id="galeri" className="py-28 px-6">

        <div className="text-center mb-14">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Galeri
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-800 mt-5">
            Suasana Taman Farm
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[gallery1, gallery2, gallery3].map((img, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[36px] shadow-[0_10px_50px_rgba(0,0,0,0.12)] group relative"
            >

              <img
                src={img}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* LOKASI */}
      <section
        id="lokasi"
        className="py-28 px-6 bg-gradient-to-b from-green-50 to-white"
      >

        <div className="max-w-5xl mx-auto text-center">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Lokasi
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-800 mt-5 mb-5">
            Kunjungi Kami
          </h2>

          <p className="text-gray-600 text-lg mb-10 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-green-600" />
            Jl. Rancamaya, Karsamenak, Kawalu, Tasikmalaya
          </p>

          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">

            <iframe
              src="https://maps.google.com/maps?q=tasikmalaya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
            ></iframe>

          </div>

        </div>

      </section>

      {/* KONTAK */}
      <section
        id="kontak"
        className="py-28 px-6 text-center"
      >

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Kontak
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-green-800 mt-5 mb-6">
          Hubungi Taman Farm
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Reservasi, informasi tanaman,
          atau sekadar tanya menu 🌿
        </p>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="https://wa.me/6285187922448"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-2xl hover:scale-105 transition"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/tamanfarm.tasik"
            className="px-8 py-4 rounded-full bg-white border border-green-100 shadow-lg hover:shadow-2xl transition"
          >
            Instagram
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#0f2d1c] via-[#123524] to-[#184d35] text-white py-14 text-center border-t border-white/10">

        <h3 className="text-3xl font-black mb-3">
          🌿 Taman Farm
        </h3>

        <p className="text-green-100">
          Cafe • Tanaman • Healing Space
        </p>

        <p className="text-sm text-green-200 mt-5">
          © 2026 Taman Farm Tasikmalaya
        </p>

      </footer>

      {/* FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/6285187922448"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-400 text-white w-16 h-16 rounded-full shadow-[0_15px_40px_rgba(34,197,94,0.5)] flex items-center justify-center z-50 text-2xl"
      >

        <FaWhatsapp />

      </motion.a>

    </div>
  );
}