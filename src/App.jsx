import heroImage from './assets/hero.jpg'
import aboutImage from './assets/about.jpg'
import gallery1 from './assets/gallery1.jpg'
import gallery2 from './assets/gallery2.jpg'
import gallery3 from './assets/gallery3.jpg'

export default function App() {
  return (
    <div className="bg-[#f6f3ee] text-gray-800">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md text-white">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">
            Taman Farm
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#tentang">Tentang</a>
            <a href="#produk">Produk</a>
            <a href="#galeri">Galeri</a>
            <a href="#kontak">Kontak</a>
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

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <p className="uppercase tracking-[6px] text-sm mb-5">
            Green Space & Cafe
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-4xl mb-8">
            Taman Farm Tasik
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl leading-relaxed mb-10">
            Menyatukan tanaman, makanan, dan suasana alam
            dalam satu tempat yang nyaman dan estetik.
          </p>

          <a
            href="https://wa.me/6285187922448"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full inline-block font-semibold"
          >
            Hubungi Kami
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="tentang"
        className="py-32 px-6"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div className="h-[600px] rounded-[40px] overflow-hidden shadow-2xl">

            <img
              src={aboutImage}
              className="w-full h-full object-cover"
            />

          </div>

          <div>

            <p className="text-green-700 font-semibold mb-4">
              Tentang Kami
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Tempat Bersantai di Tengah Hijau Alam
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Taman Farm menghadirkan pengalaman berbeda
              melalui kombinasi toko tanaman hias dan kedai bernuansa alam.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Cocok untuk keluarga, komunitas tanaman,
              maupun siapa saja yang ingin melepas penat
              sambil menikmati suasana hijau yang nyaman.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUK */}
      <section
        id="produk"
        className="py-32 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-green-700 font-semibold mb-4">
              Produk & Layanan
            </p>

            <h2 className="text-5xl font-bold">
              Yang Kami Hadirkan
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#f6f3ee] p-10 rounded-[35px]">

              <h3 className="text-3xl font-bold mb-5">
                Tanaman Hias
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Monstera, Aglaonema, Philodendron,
                tanaman indoor maupun outdoor pilihan.
              </p>

            </div>

            <div className="bg-[#f6f3ee] p-10 rounded-[35px]">

              <h3 className="text-3xl font-bold mb-5">
                Kedai Makanan
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Menu rumahan dan minuman hangat
                dengan suasana semi outdoor yang nyaman.
              </p>

            </div>

            <div className="bg-[#f6f3ee] p-10 rounded-[35px]">

              <h3 className="text-3xl font-bold mb-5">
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

      {/* GALERI */}
      <section
        id="galeri"
        className="py-32 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-green-700 font-semibold mb-4">
              Galeri
            </p>

            <h2 className="text-5xl font-bold">
              Suasana Taman Farm
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="h-[500px] rounded-[35px] overflow-hidden">
              <img
                src={gallery1}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="h-[500px] rounded-[35px] overflow-hidden">
              <img
                src={gallery2}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="h-[500px] rounded-[35px] overflow-hidden">
              <img
                src={gallery3}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        id="kontak"
        className="py-32 px-6 bg-green-700 text-white text-center"
      >

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[6px] mb-5 text-sm">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Kunjungi Taman Farm
          </h2>

          <p className="text-xl mb-4">
            Jl. Rancamaya, Karsamenak, Kawalu, Tasikmalaya
          </p>

          <p className="text-xl mb-10">
            WhatsApp: 0851-8792-2448
          </p>

          <a
            href="https://maps.app.goo.gl/xhdLC7L7Xunfpay97"
            target="_blank"
            className="bg-white text-green-700 px-8 py-4 rounded-full inline-block font-semibold"
          >
            Buka Google Maps
          </a>

        </div>

      </section>

    </div>
  )
}