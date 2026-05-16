import heroImage from './assets/hero.jpg'
import aboutImage from './assets/about.jpg'
import gallery1 from './assets/gallery1.jpg'
import gallery2 from './assets/gallery2.jpg'
import gallery3 from './assets/gallery3.jpg'

export default function App() {
  return (
    <div className="bg-[#f7f5f1] text-gray-800 overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md text-white">

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
      <section
        className="h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >

        <div className="absolute inset-0 bg-black/55"></div>

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

      </section>

      {/* ABOUT */}
      <section
        id="tentang"
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

      </section>

      {/* PRODUK */}
      <section
        id="produk"
        className="py-24 px-6 bg-white"
      >

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
                Berbagai pilihan tanaman indoor
                dan outdoor yang estetik dan segar.
              </p>

            </div>

            <div className="bg-[#f7f5f1] rounded-[30px] p-8 shadow-sm hover:-translate-y-2 transition duration-500 hover:shadow-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Kedai Makanan
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Menu makanan dan minuman hangat
                dengan suasana semi outdoor yang nyaman.
              </p>

            </div>

            <div className="bg-[#f7f5f1] rounded-[30px] p-8 shadow-sm hover:-translate-y-2 transition duration-500 hover:shadow-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Dekorasi Taman
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Pot, media tanam, pupuk,
                dan perlengkapan taman lainnya.
              </p>

            </div>

          </div>

        </div>

      </section>
      
      {/* MENU */}
      <section
        className="py-24 px-6 bg-[#f7f5f1]"
      >

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

            <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">

              <img
                src={gallery1}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Kopi Susu
                </h3>

                <p className="text-gray-600 mb-4">
                  Kopi susu hangat dengan cita rasa creamy.
                </p>

                <p className="text-green-700 font-bold">
                  Rp18.000
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">

              <img
                src={gallery2}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Mie Pedas
                </h3>

                <p className="text-gray-600 mb-4">
                  Menu favorit dengan topping lengkap.
                </p>

                <p className="text-green-700 font-bold">
                  Rp22.000
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">

              <img
                src={gallery3}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Matcha Latte
                </h3>

                <p className="text-gray-600 mb-4">
                  Minuman segar dengan rasa matcha premium.
                </p>

                <p className="text-green-700 font-bold">
                  Rp20.000
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* GALERI */}
      <section
        id="galeri"
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

            <div className="rounded-[30px] overflow-hidden h-[350px]">
              <img
                src={gallery1}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="rounded-[30px] overflow-hidden h-[350px]">
              <img
                src={gallery2}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="rounded-[30px] overflow-hidden h-[350px]">
              <img
                src={gallery3}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

          </div>

        </div>

      </section>

      {/* KONTAK */}
      <section
        id="kontak"
        className="py-24 px-6 bg-green-700 text-white"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Kunjungi Taman Farm
          </h2>

          <p className="text-lg mb-3">
            Jl. Rancamaya, Karsamenak, Kawalu, Tasikmalaya
          </p>

          <p className="text-lg mb-3">
            WhatsApp: 0851-8792-2448
          </p>

          <p className="text-lg mb-10">
            Instagram: @tamanfarmtasik
          </p>

          <div className="rounded-[30px] overflow-hidden shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=tasikmalaya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </section>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/6285187922448"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 transition text-white px-5 py-4 rounded-full shadow-2xl z-50"
      >
        WhatsApp
      </a>

    </div>
  )
}