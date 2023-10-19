import Image from 'next/image';
import { Inter } from 'next/font/google';
import Slider from '../component/slider';
import CardPotensi from '../component/cardPotensi';
import Footer from '@/component/footer';
import Link from 'next/link';
import CardFasilitasList from '@/component/cardFasilitasList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={` ${inter.className}`}>
            <div className="min-h-screen flex flex-col text-center justify-center ">
                {/* <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://4.bp.blogspot.com/-5Mt5bpL1nCk/T_Qc0pNnAxI/AAAAAAAAAI4/8pteJJpclcE/s1600/Kediri_East_Java.jpg"
                /> */}
                <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/kediri.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-700 from-5%  to-slate-300 opacity-90"></div>

                <h1 className="flex h-full relative items-center justify-center text-6xl font-bold text-white">
                    Pemkab Kediri
                </h1>
                <ul className="flex text-center items-center mx-auto justify-center max-w-md relative mt-6">
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

            <div className="bg-gradient-to-b from-cyan-700 to-slate-300 ">
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

                    <div className="flex flex-col items-center mx-10 ">
                        <ul className="flex lg:flex-row flex-col">
                            <li className="my-5">
                                <Link href="/berita/berita2">
                                    <div className="card md:w-92 lg:w-62 lg:min-h-52 md:mx-4 w-64 shadow-xl sm:w-72 bg-white">
                                        <figure>
                                            <img
                                                src="https://berita.kedirikab.go.id/asset/foto_berita/KPK_(3).jpeg"
                                                alt="KPK RI Gelar Sosialisasi Anti
                                            Korupsi"
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
                                            <img
                                                src="https://berita.kedirikab.go.id/asset/foto_berita/bpsdm_(2).jpeg"
                                                alt="Antisipasi Dampak Kekeringan,
                                            Gubernur Khofifah Harap Kepala
                                            Daerah Upayakan Mitigasi Bencana"
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
                                            <img
                                                src="https://berita.kedirikab.go.id/asset/foto_berita/mangga_(3).jpeg"
                                                alt="Pesan Mas Dhito Bagi Petani Mangga
                                            Podang: Jangan Di Booster"
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
                <div className="">
                    <div className=" px-20 pt-20 flex flex-col items-center justify-center text-slate-800 ">
                        <h1 className="text-4xl font-bold text-center mt-5 bg-teal-">
                            Potensi Daerah
                        </h1>
                        <p className="text-sm text-center max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatibus.
                        </p>
                    </div>
                    <div className="flex item-center justify-center md:p-10">
                        <Slider className="bg-slate-100" />
                    </div>
                </div>

                {/* <div className="hidden md:flex carousel carousel-left min-w-64 max-w-md  space-x-4 bg-slate-100 shadow-xl rounded-box">
                    <div id="item1" className="carousel-item">
                        <CardPotensi
                            title="Pertanian"
                            description="Lihat selengkapnya"
                            number={1}
                        />
                    </div>
                    <div id="item2" className="carousel-item">
                        <CardPotensi
                            title="Perkebunan"
                            description="Lihat selengkapnya"
                            number={2}
                        />
                    </div>
                    <div id="item3" className="carousel-item">
                        <CardPotensi
                            title="Perikanan"
                            description="Lorem ipsum dolor sit."
                            number={3}
                        />
                    </div>
                    <div id="item4" className="carousel-item">
                        <CardPotensi
                            title="Pariwisata"
                            description="Lorem ipsum dolor sit."
                            number={4}
                        />
                    </div>
                    <div id="item5" className="carousel-item">
                        <CardPotensi
                            title="Produk Unggulan"
                            description="Lorem ipsum dolor sit."
                            number={5}
                        />
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center mt-4">
                    <a
                        href="#item1"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        1
                    </a>
                    <a
                        href="#item2"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        2
                    </a>
                    <a
                        href="#item3"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        3
                    </a>
                    <a
                        href="#item4"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        4
                    </a>
                    <a
                        href="#item5"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        5
                    </a>
                </div>

                <div className="flex md:hidden h-32 carousel carousel-vertical rounded-box ">
                    <div id="item6" className="carousel-item h-full">
                        <CardPotensi
                            title="Pertanian"
                            description="Lorem ipsum dolor sit."
                            number={1}
                        />
                    </div>
                    <div id="item7" className="carousel-item h-full">
                        <CardPotensi
                            title="Perkebunan"
                            description="Lorem ipsum dolor sit."
                            number={2}
                        />
                    </div>
                    <div id="item8" className="carousel-item h-full">
                        <CardPotensi
                            title="Perikanan"
                            description="Lorem ipsum dolor sit."
                            number={3}
                        />
                    </div>
                    <div id="item9" className="carousel-item h-full">
                        <CardPotensi
                            title="Pariwisata"
                            description="Lorem ipsum dolor sit."
                            number={4}
                        />
                    </div>
                    <div id="item10" className="carousel-item h-full">
                        <CardPotensi
                            title="Produk Unggulan"
                            description="Lorem ipsum dolor sit."
                            number={5}
                        />
                    </div>
                </div>
                <div className="flex md:hidden justify-center items-center mt-4">
                    <a
                        href="#item6"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        1
                    </a>
                    <a
                        href="#item7"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        2
                    </a>
                    <a
                        href="#item8"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        3
                    </a>
                    <a
                        href="#item9"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        4
                    </a>
                    <a
                        href="#item10"
                        className="mx-2 text-slate-300 bg-slate-700 px-2 py-1 rounded-md"
                    >
                        5
                    </a>
                </div> */}

                {/* <div className="card card-side bg-base-100 shadow-xl mx-40 h-60 mb-20">
                    <figure className="">
                        <Image src={src} width={400} height={100} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <ul>
                            <li>
                                <a href={link1}>{desc1}</a>
                            </li>
                            <li>
                                <a href={link2}>{desc2}</a>
                            </li>
                            <li>
                                <a href={link3}>{desc3}</a>
                            </li>
                            <li>
                                <a href={link4}>{desc4}</a>
                            </li>
                            <li>
                                <a href={link5}>{desc5}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex md:hidden">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image src={src} width={400} height={100} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <ul>
                            <li>
                                <a href={link1}>{desc1}</a>
                            </li>
                            <li>
                                <a href={link2}>{desc2}</a>
                            </li>
                            <li>
                                <a href={link3}>{desc3}</a>
                            </li>
                            <li>
                                <a href={link4}>{desc4}</a>
                            </li>
                            <li>
                                <a href={link5}>{desc5}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

                <div></div>
            </div>

            <Footer />
        </main>
    );
}
