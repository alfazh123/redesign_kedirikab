import React from 'react';
import CardPotensi from './cardPotensi';

export default function Slider() {
    return (
        <main>
            <div className="hidden md:flex carousel carousel-left min-w-64 max-w-md  space-x-4 bg-slate-100 shadow-xl rounded-box">
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
            </div>
        </main>
    );
}
