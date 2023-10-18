import React from 'react';
import CardBerita from '@/component/cardBerita';
import CardBeritaVertikal from '@/component/cardBeritaVertikal';
import Footer from '@/component/footer';

export default function Berita() {
    return (
        <main>
            <div className="bg-gradient-to-t from-cyan-700 to-slate-300 text-black h-screen">
                <h1 className="md:text-4xl text-2xl font-bold md:mx-32 mx-5 pt-5 md:pt-20">
                    Halaman Berita
                </h1>

                <div>
                    <h1 className="md:mx-36 mx-10 md:mt-20 mt-5">
                        Berita Terkini
                    </h1>

                    <ul className="md:flex md:mx-10 lg:mx-32 sm:mx-20 sm:pb-10 pb-5">
                        <li className="mx-5 sm:py-4 py-2">
                            <CardBerita
                                title={'Judul Berita'}
                                image={
                                    'https://4.bp.blogspot.com/-5Mt5bpL1nCk/T_Qc0pNnAxI/AAAAAAAAAI4/8pteJJpclcE/s1600/Kediri_East_Java.jpg'
                                }
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li className="mx-5 sm:py-4 py-2">
                            <CardBerita
                                title={'Judul Berita'}
                                image={
                                    'https://4.bp.blogspot.com/-5Mt5bpL1nCk/T_Qc0pNnAxI/AAAAAAAAAI4/8pteJJpclcE/s1600/Kediri_East_Java.jpg'
                                }
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li className="mx-5 sm:py-4 py-2">
                            <CardBerita
                                title={'Judul Berita'}
                                image={
                                    'https://4.bp.blogspot.com/-5Mt5bpL1nCk/T_Qc0pNnAxI/AAAAAAAAAI4/8pteJJpclcE/s1600/Kediri_East_Java.jpg'
                                }
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-t from-slate-300 to-cyan-700 pb-20">
                <div className="lg:mx-28 md:mx-16 sm:mx-10 mx-5 px-10 py-5  text-slate-700 bg-slate-400 shadow-2xl rounded-xl">
                    <ul>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                        <li>
                            <CardBeritaVertikal
                                title={'Judul Berita'}
                                description={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                                }
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    );
}
