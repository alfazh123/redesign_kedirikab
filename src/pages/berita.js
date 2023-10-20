import React from 'react';
import CardBerita from '@/component/cardBerita';
import CardBeritaVertikal from '@/component/cardBeritaVertikal';
import Footer from '@/component/footer';
import Link from 'next/link';
import Navbar from '@/component/navbar';

export default function Berita() {
    return (
        <main>
            <Navbar />

            <div className="bg-gradient-to-t from-cyan-700 to-slate-300 text-black min-h-screen">
                <h1 className="md:text-4xl text-2xl font-bold md:mx-32 mx-5 pt-5 md:pt-20">
                    Halaman Berita
                </h1>

                <div>
                    <h1 className="md:mx-36 text-lg mx-10 md:mt-20 mt-5">
                        Berita Terkini
                    </h1>

                    <ul className="md:flex md:mx-10 lg:mx-32 sm:mx-20 sm:pb-10 pb-5">
                        <li className="mx-5 sm:py-4 py-2">
                            <Link href="/berita/berita2">
                                <CardBerita
                                    title={
                                        'KPK RI Gelar Sosialisasi Anti Korupsi'
                                    }
                                    image={
                                        'https://berita.kedirikab.go.id/asset/foto_berita/KPK_(3).jpeg'
                                    }
                                    description={
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                    }
                                />
                            </Link>
                        </li>
                        <li className="mx-5 sm:py-4 py-2">
                            <Link href="/berita/berita3">
                                <CardBerita
                                    title={
                                        'Antisipasi Dampak Kekeringan, Gubernur Khofifah Harap Kepala Daerah Upayakan Mitigasi Bencana'
                                    }
                                    image={
                                        'https://berita.kedirikab.go.id/asset/foto_berita/bpsdm_(2).jpeg'
                                    }
                                    description={
                                        'Antisipasi Dampak Kekeringan, Gubernur Khofifah Harap Kepala Daerah Upayakan Mitigasi Bencana'
                                    }
                                />
                            </Link>
                        </li>
                        <li className="mx-5 sm:py-4 py-2">
                            <Link href="/berita/berita1">
                                <CardBerita
                                    title={
                                        'Pesan Mas Dhito Bagi Petani Mangga Podang: Jangan Di Booster'
                                    }
                                    image={
                                        'https://berita.kedirikab.go.id/asset/foto_berita/mangga_(3).jpeg'
                                    }
                                    description={
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                    }
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-t from-slate-300 to-cyan-700 pb-20">
                <div className="lg:mx-28 md:mx-16 sm:mx-10 mx-5 px-10 py-5  text-slate-700 bg-slate-400 shadow-2xl rounded-xl">
                    <ul>
                        <li>
                            <CardBeritaVertikal
                                title={
                                    'Mas Dhito Bakal Ajak Bupati Trenggalek Riding Bareng'
                                }
                                description={'18:32, 13 Oktober 2023'}
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={
                                    'Mas Dhito Apresiasi Pembelajaran Bela Negara Melalui Game Digital Terobosan Dekan Uniska'
                                }
                                description={'16:15, 12 Oktober 2023'}
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={
                                    'Hadapi Pemilu Serentak, Mas Dhito Minta 14 Februari 2024  Mobil Desa Disiagakan'
                                }
                                description={'16:01, 12 Oktober 2023'}
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={
                                    'Pemkab Kediri Gelar Upacara Hari Jadi Provinsi Jawa Timur ke-78'
                                }
                                description={'12:23, 12 Oktober 2023'}
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={
                                    'Maulid Nabi, Cara Kita Lebih Mengenal Rasulullah SAW'
                                }
                                description={'15:22, 11 Oktober 2023'}
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={
                                    'Rangkul ODGJ, Kabupaten Kediri Peringati Hari Kesehatan Mental Sedunia'
                                }
                                description={'15:00, 10 Oktober 2023'}
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    );
}
