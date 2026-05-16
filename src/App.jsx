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
  return (
    <div className="bg-[#f7f5f1] text-gray-800 overflow-hidden scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 text-white">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            Taman Farm
          </h1>

          <div className="hidden md:flex gap-8 text-sm">

            <a href="#tentang" className="hover:text-green-300 transition">
              Tentang
            </a>

            <a href="#produk" className="hover:text-green-300 transition">
              Produk
            </a>

            <a href="#galeri" className="hover:text-green-300 transition">
              Galeri
            </a>

            <a href="#kontak" className="hover:text-green-300 transition">
              Kontak
            </a>

          </div>

        </div>

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
        className="relative min-h-screen flex items-center justify-center text-center px-6"
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <p className="uppercase tracking-[5px] text-sm mb-5">
            Green Space & Cafe
          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
            Tempat Bersantai di Tengah Hijau Alam
          </h1>

          <p className="text-base md:text-xl max-w-2xl leading-relaxed text-gray-200 mb-8">
            Taman Farm menghadirkan suasana nyaman
            melalui kombinasi tanaman hias,
            cafe, dan ruang santai bernuansa alam.
          </p>

          <a
            href="https://wa.me/6285187922448"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 transition px-7 py-4 rounded-full inline-block font-medium"
          >
            Hubungi Kami
          </a>

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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="rounded-[30px] overflow-hidden shadow-xl h-[450px]">

            <img
              src={aboutImage}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          <div>

            <p className="text-green-700 font-semibold mb-3">
              Tentang Kami
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Ruang Nyaman untuk Bersantai dan Menikmati Alam
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              Taman Farm adalah tempat yang memadukan
              tanaman hias dan kedai bernuansa alam
              dalam satu ruang yang nyaman dan estetik.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Cocok untuk keluarga, komunitas,
              maupun tempat healing dari hiruk pikuk kota.
            </p>

          </div>

        </div>

      </motion.section>

      {/* PRODUK */}
      <section id="produk" className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-green-700 font-semibold mb-3">
              Produk & Layanan
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Yang Kami Hadirkan
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#f7f5f1] rounded-[30px] p-8 shadow-sm hover:-translate-y-2 transition duration-500 hover:shadow-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Tanaman Hias
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Berbagai pilihan tanaman indoor dan outdoor yang estetik dan segar.
              </p>

            </div>

            <div className="bg-[#f7f5f1] rounded-[30px] p-8 shadow-sm hover:-translate-y-2 transition duration-500 hover:shadow-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Kedai Makanan
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Menu makanan dan minuman hangat dengan suasana nyaman.
              </p>

            </div>

            <div className="bg-[#f7f5f1] rounded-[30px] p-8 shadow-sm hover:-translate-y-2 transition duration-500 hover:shadow-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Dekorasi Taman
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Pot, media tanam, pupuk, dan perlengkapan taman.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MENU */}
      <section className="py-24 px-6 bg-[#f7f5f1]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-green-700 font-semibold mb-3">
              Menu Cafe
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Menu Favorit
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[gallery1, gallery2, gallery3].map((img, i) => (
              <div key={i} className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">

                <img src={img} className="w-full h-60 object-cover" />

                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-2">
                    {i === 0 ? "Kopi Susu" : i === 1 ? "Mie Pedas" : "Matcha Latte"}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Menu favorit pelanggan Taman Farm.
                  </p>

                  <p className="text-green-700 font-bold">
                    {i === 0 ? "Rp18.000" : i === 1 ? "Rp22.000" : "Rp20.000"}
                  </p>

                </div>

              </div>
            ))}

          </div>

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

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-green-700 font-semibold mb-3">
              Galeri
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Suasana Taman Farm
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[gallery1, gallery2, gallery3].map((img, i) => (
              <div key={i} className="rounded-[30px] overflow-hidden h-[350px]">

                <img
                  src={img}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />

              </div>
            ))}

          </div>

        </div>

      </motion.section>

      {/* TESTIMONI */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-green-700 font-semibold mb-3">
              Testimoni
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Apa Kata Pelanggan
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["Andi", "Mahasiswa", "Tempatnya enak banget buat nongkrong!"],
              ["Sinta", "Freelancer", "Suasana adem cocok kerja & santai."],
              ["Raka", "Creator", "Vibes-nya aesthetic banget."]
            ].map((t, i) => (
              <div key={i} className="bg-[#f7f5f1] p-8 rounded-[30px] shadow-sm hover:shadow-xl transition duration-500">

                <p className="text-gray-700 mb-6">
                  “{t[2]}”
                </p>

                <div className="font-bold text-green-800">
                  — {t[0]}, {t[1]}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-24 px-6 bg-green-700 text-white">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Kunjungi Taman Farm
          </h2>

          <p className="text-lg mb-3">
            Jl. Rancamaya, Tasikmalaya
          </p>

          <p className="text-lg mb-3">
            WhatsApp: 0851-8792-2448
          </p>

          <p className="text-lg mb-10">
            Instagram: @tamanfarmtasik
          </p>

          <div className="rounded-[30px] overflow-hidden shadow-2xl">

            <iframe
              src="https://maps.google.com/maps?q=tasikmalaya&t=&z=13&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>

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