import Image from 'next/image';
import { Inter } from 'next/font/google';
import Slider from '../component/slider';
import Footer from '@/component/footer';
import Link from 'next/link';
import Head from 'next/head';
import CardPotensi from '@/component/cardPotensi';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={` ${inter.className}`}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Kediri Kabupaten</title>
            </Head>
            <div className="min-h-screen flex flex-col text-center justify-center">
                {/* <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://4.bp.blogspot.com/-5Mt5bpL1nCk/T_Qc0pNnAxI/AAAAAAAAAI4/8pteJJpclcE/s1600/Kediri_East_Java.jpg"
                /> */}

                <Image
                    className="absolute min-h-screen inset-0 h-full w-full object-cover"
                    src="/kediri.png"
                    id="bg-hero-landingpage-image"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 min-h-screen bg-gradient-to-t from-cyan-700 from-5%  to-slate-300 opacity-90"></div>

                <Link href="/">
                    <Image
                        src="/LogoNav.png"
                        id="logo-instansi"
                        width={50}
                        height={10}
                        alt="Logo"
                        className="flex h-full relative justify-center items-center mx-auto "
                    />
                </Link>

                <h1
                    id="hero"
                    className="flex h-full relative items-center justify-center text-6xl font-bold text-white"
                >
                    Pemkab Kediri
                </h1>
                <ul
                    id="link-content"
                    className="flex text-center items-center mx-auto justify-center max-w-md relative mt-6"
                >
                    <li className="md:mx-4 sm:mx-1 mx-1">
                        <Link href="/berita">
                            <button className="btn btn-outline text-white hover:bg-white hover:text-gray-700">
                                Berita
                            </button>
                        </Link>
                    </li>

                    <li className="md:mx-4 sm:mx-1 mx-1">
                        <Link href="/profil">
                            <button className="btn btn-outline text-white hover:bg-white hover:text-gray-700">
                                Profil
                            </button>
                        </Link>
                    </li>

                    <li className="md:mx-4 sm:mx-1 mx-1">
                        <Link href="/fasilitas">
                            <button className="btn btn-outline text-white hover:bg-white hover:text-gray-700">
                                Fasilitas
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>

            <div
                id="berita"
                className="bg-gradient-to-b from-cyan-700 to-slate-300 "
            >
                <div className="">
                    <div className="flex flex-col items-center justify-center text-slate-100">
                        <h1 className="text-4xl font-bold text-center mt-20">
                            Berita Terbaru
                        </h1>
                        <p className="text-sm text-center max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatibus.
                        </p>
                    </div>

                    <div
                        id="berita-utama"
                        className="flex flex-col items-center mx-10 "
                    >
                        <ul className="flex lg:flex-row flex-col">
                            <li className="my-5">
                                <Link href="/berita/berita2">
                                    <div className="card md:w-92 lg:w-62 lg:min-h-52 md:mx-4 w-64 shadow-xl sm:w-72 bg-white">
                                        <figure>
                                            <Image
                                                src="/berita1_0.png"
                                                width={500}
                                                height={400}
                                                alt="berita1"
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h3 className="card-title font-medium text-black">
                                                KPK RI Gelar Sosialisasi Anti
                                                Korupsi
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="my-5">
                                <Link href="/berita/berita3">
                                    <div className="card md:w-92 lg:w-62 lg:min-h-52 md:mx-4 w-64 bg-white shadow-xl sm:w-72">
                                        <figure>
                                            <Image
                                                src="/berita2_0.png"
                                                width={500}
                                                height={400}
                                                alt="berita2"
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h3 className="card-title font-medium text-black">
                                                Antisipasi Dampak Kekeringan,
                                                Gubernur Khofifah Harap Kepala
                                                Daerah Upayakan Mitigasi Bencana
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="my-5">
                                <Link href="/berita/berita1">
                                    <div className="card md:w-92 lg:w-62 lg:min-h-52 md:mx-4 w-64 bg-white shadow-xl sm:w-72">
                                        <figure>
                                            <Image
                                                src="/berita3_0.png"
                                                width={500}
                                                height={400}
                                                alt="berita3"
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h3 className="card-title font-medium text-black">
                                                Pesan Mas Dhito Bagi Petani
                                                Mangga Podang: Jangan Di Booster
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*potensi section*/}
                <div id="potensi" className="">
                    <div className=" px-20 pt-20 flex flex-col items-center justify-center text-slate-800 ">
                        <h1 className="text-4xl font-bold text-center mt-5 bg-teal-">
                            Potensi Daerah
                        </h1>
                        <p className="text-sm text-center max-w-md mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatibus.
                        </p>
                    </div>
                    <div
                        id="potensi-list-horizontal"
                        className="flex item-center justify-center m-10"
                    >
                        <Slider className="bg-slate-100" />
                    </div>
                </div>

                {/*Galeri Section*/}
                <div className="flex justify-center">
                    <h1 className="text-slate-900 font-bold text-4xl">
                        Galeri
                    </h1>
                </div>
                <div className="flex justify-center box-border rounded-md">
                    <div className="grid grid-cols-2 justify-center md:max-w-2xl max-w-xl p-10  items-center">
                        <Image
                            src="/headline_berita1.png"
                            className="rounded-tl-xl"
                            width={500}
                            height={400}
                            alt="Photo"
                        />
                        <Image
                            src="/headline_berita2.png"
                            className="rounded-tr-xl"
                            width={500}
                            height={400}
                            alt="Photo"
                        />

                        <Image
                            src="/headline_berita3.png"
                            className="rounded-bl-xl"
                            width={500}
                            height={400}
                            alt="Photo"
                        />
                        <Image
                            src="/headline_berita4.png"
                            className="rounded-br-xl"
                            width={500}
                            height={400}
                            alt="Photo"
                        />
                    </div>
                </div>

                {/* <div className="flex justify-between items-center w-full bg-slate-300 text-slate-900">
                    <div className="flex m-3">
                        <Link href="/" className="flex">
                            <Image
                                src="/LogoNav.png"
                                width={50}
                                height={10}
                                alt="Logo"
                                className="mx-2"
                            />
                            <h1 className="text-xl font-bold flex justify-center items-center">
                                Kediri Kabupaten
                            </h1>
                        </Link>
                    </div>

                    <div>
                        <div className="dropdown dropdown-end items-end text-slate-300 mr-10">
                            <label tabIndex={0} className="btn m-1">
                                Menu
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link href="/profil">Profil</Link>
                                </li>
                                <li>
                                    <Link href="/berita">Fasilitas</Link>
                                </li>
                                <li>
                                    <Link href="/fasilitas">Fasilitas</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                {/* <div className="carousel hidden lg:flex w-full">
                    <div
                        id="slide1"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-300 bg-opacity-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Pertanian</h2>
                                <p>Lihat Selengkapnya</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 px-10 left-10 right-10 top-1/2">
                            <a href="#slide4" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div
                        id="slide2"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-300 bg-opacity-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Perkebunan</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 px-10 left-10 right-10 top-1/2">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div
                        id="slide3"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-300 bg-opacity-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Perikanan</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 px-10 left-10 right-10 top-1/2">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div
                        id="slide4"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-300 bg-opacity-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Pariwisata</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 px-10 left-10 right-10 top-1/2">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>

                <div className="carousel flex lg:hidden w-96 ">
                    <div
                        id="slide1"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Pertanian</h2>
                                <p className="mt-3">
                                    Kabupaten Kediri memiliki potensi perikanan
                                    yang cukup besar. Terdapat 124 desa di
                                    Kabupaten Kediri yang merupakan desa potensi
                                    perikanan. Kegiatan perikanan di Kabupaten
                                    Kediri terdiri dari pembenihan ikan,
                                    budidaya ikan konsumsi, budidaya ikan hias,
                                    dan penangkapan ikan di perairan umum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide2"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Perkebunan</h2>
                                <p className="mt-3">
                                    Kabupaten Kediri adalah sebuah kabupaten di
                                    Jawa Timur, Indonesia. Wilayah ini terkenal
                                    dengan hasil pertaniannya, termasuk tebu,
                                    kakao, kopi, kelapa, dan cengkeh. Pada tahun
                                    2014, total area perkebunan di kabupaten ini
                                    adalah 20.933 hektar, dengan total produksi
                                    209.330 ton tebu. Kabupaten ini memiliki
                                    sejumlah besar pabrik gula yang memproduksi
                                    gula merah 1
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide3"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Perikanan</h2>
                                <p className="mt-3">
                                    Kabupaten Kediri terletak di bagian timur
                                    Provinsi Jawa Timur dan memiliki garis
                                    pantai sekitar 40 km di sepanjang Laut Jawa.
                                    Dinas Perikanan Kabupaten Kediri bertanggung
                                    jawab untuk melaksanakan kebijakan
                                    pemerintah daerah di bidang perikanan. Dinas
                                    ini dikepalai oleh NUR HAFID S.Pt, MM dan
                                    beralamat di Jalan Pamenang No. 40 Kediri 1.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide4"
                        className="carousel-item justify-center relative w-full text-slate-900"
                    >
                        <div className="card w-96 bg-slate-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Pariwisata</h2>
                                <p className="mt-3">
                                    Kabupaten Kediri, yang terletak di Jawa
                                    Timur, Indonesia, merupakan tujuan wisata
                                    populer dengan warisan budaya yang kaya.
                                    Situs resmi Dinas Pariwisata dan Kebudayaan
                                    Kabupaten Kediri menyediakan informasi
                                    tentang berbagai tempat wisata di wilayah
                                    ini, termasuk keajaiban alam, situs
                                    bersejarah, dan acara budaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="flex ">
                    <div className="card card-compact w-96 shadow-xl m-5  bg-slate-200 text-slate-900 ">
                        <figure>
                            <Image
                                src={src}
                                width={400}
                                height={100}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">haha</h2>
                            <ul>
                                <li>
                                    <a href="">haha</a>
                                </li>
                                <li>
                                    <a href="">haha</a>
                                </li>
                                <li>
                                    <a href="">haha</a>
                                </li>
                                <li>
                                    <a href="">haha</a>
                                </li>
                                <li>
                                    <a href="">haha</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>

            <Footer />
        </main>
    );
}
