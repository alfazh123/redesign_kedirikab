import Image from 'next/image';
import { Inter } from 'next/font/google';
import Slider from '../component/slider';
import CardPotensi from '../component/cardPotensi';
import Footer from '@/component/footer';
import Link from 'next/link';

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
                                <div className="card md:w-92 lg:w-62 lg:min-h-52 md:mx-4 w-64 shadow-xl sm:w-72 bg-white">
                                    <figure>
                                        <img
                                            src="https://berita.kedirikab.go.id/asset/foto_berita/KPK_(3).jpeg"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title font-medium text-black">
                                            KPK RI Gelar Sosialisasi Anti
                                            Korupsi
                                        </h3>
                                    </div>
                                </div>
                            </li>

                            <li className="my-5">
                                <div className="card md:w-92 lg:w-62 lg:min-h-52 md:mx-4 w-64 bg-white shadow-xl sm:w-72">
                                    <figure>
                                        <img
                                            src="https://berita.kedirikab.go.id/asset/foto_berita/bpsdm_(2).jpeg"
                                            alt="Shoes"
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
                            </li>

                            <li className="my-5">
                                <div className="card md:w-92 lg:w-62 lg:min-h-52 md:mx-4 w-64 bg-white shadow-xl sm:w-72">
                                    <figure>
                                        <img
                                            src="https://berita.kedirikab.go.id/asset/foto_berita/mangga_(3).jpeg"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title font-medium text-black">
                                            Pesan Mas Dhito Bagi Petani Mangga
                                            Podang: Jangan Di Booster
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*potensi section*/}
                <div className="">
                    <div className=" px-20 pt-20 flex flex-col items-center justify-center text-slate-800">
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
            </div>

            <Footer />
        </main>
    );
}
