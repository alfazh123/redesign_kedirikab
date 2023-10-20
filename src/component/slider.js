import React from 'react';
import CardPotensi from './cardPotensi';
import Link from 'next/link';

export default function Slider() {
    return (
        <main>
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
            <div className="carousel hidden lg:flex w-full">
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
                                If a dog chews shoes whose shoes does he choose?
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
                                If a dog chews shoes whose shoes does he choose?
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
                                If a dog chews shoes whose shoes does he choose?
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
                                Kabupaten Kediri memiliki potensi perikanan yang
                                cukup besar. Terdapat 124 desa di Kabupaten
                                Kediri yang merupakan desa potensi perikanan.
                                Kegiatan perikanan di Kabupaten Kediri terdiri
                                dari pembenihan ikan, budidaya ikan konsumsi,
                                budidaya ikan hias, dan penangkapan ikan di
                                perairan umum
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
                                Kabupaten Kediri adalah sebuah kabupaten di Jawa
                                Timur, Indonesia. Wilayah ini terkenal dengan
                                hasil pertaniannya, termasuk tebu, kakao, kopi,
                                kelapa, dan cengkeh. Pada tahun 2014, total area
                                perkebunan di kabupaten ini adalah 20.933
                                hektar, dengan total produksi 209.330 ton tebu.
                                Kabupaten ini memiliki sejumlah besar pabrik
                                gula yang memproduksi gula merah 1
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
                                Provinsi Jawa Timur dan memiliki garis pantai
                                sekitar 40 km di sepanjang Laut Jawa. Dinas
                                Perikanan Kabupaten Kediri bertanggung jawab
                                untuk melaksanakan kebijakan pemerintah daerah
                                di bidang perikanan. Dinas ini dikepalai oleh
                                NUR HAFID S.Pt, MM dan beralamat di Jalan
                                Pamenang No. 40 Kediri 1.
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
                                Kabupaten Kediri, yang terletak di Jawa Timur,
                                Indonesia, merupakan tujuan wisata populer
                                dengan warisan budaya yang kaya. Situs resmi
                                Dinas Pariwisata dan Kebudayaan Kabupaten Kediri
                                menyediakan informasi tentang berbagai tempat
                                wisata di wilayah ini, termasuk keajaiban alam,
                                situs bersejarah, dan acara budaya.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
