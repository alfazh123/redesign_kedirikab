import React from 'react';
import Image from 'next/image';
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import ModalImage from '@/component/ModalImage';

export default function Profil() {
    return (
        <main>
            <Navbar />

            <div className="flex flex-col bg-gradient-to-t from-cyan-700 to-slate-300 text-slate-800 p-10 min-h-screen">
                <h1 className=" flex text-4xl font-bold md:mx-20  my-5">
                    Profil Kabupaten
                </h1>

                <div
                    id="profil-bupati-wabupati"
                    className="flex justify-center pt-20"
                >
                    <ul className="flex md:flex-row flex-col">
                        <li className="mx-5 mb-5">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById('my_modal_4')
                                        .showModal()
                                }
                            >
                                <div className="card card-compact w-62 p-5 bg-slate-300 shadow-xl">
                                    <figure>
                                        <Image
                                            src="/bupatikedirikab.png"
                                            id="figure"
                                            alt="Bupati Kediri"
                                            width={300}
                                            height={200}
                                        />
                                    </figure>
                                    <div
                                        id="profil-singkat-bupati"
                                        className="card-body"
                                    >
                                        <h2 className="card-title">
                                            Hanindhito Himawan Pramana, S.H.
                                        </h2>
                                        <p>Bupati Kab. Kediri</p>
                                    </div>
                                </div>
                            </button>
                            <dialog
                                id="my_modal_4"
                                className="modal flex justify-center bg-slate-500 bg-opacity-50"
                            >
                                <div className="modal-box min-w-max max-w-5xl bg-slate-300">
                                    <div className="flex flex-col bg-slate-300 justify-center p-4 rounded-md max-w-md">
                                        <div className="flex justify-center">
                                            <Image
                                                src="/bupatikedirikab.png"
                                                id="figure"
                                                alt="Bupati Kediri"
                                                width={300}
                                                height={200}
                                            />
                                        </div>

                                        <ul className="py-5">
                                            <li>
                                                <p>
                                                    Tempat/Tanggal lahir :
                                                    Kediri, 31 Juli 1992
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Alamat : Pendopo Kabupaten
                                                    Kediri Jl. Panglima Sudirman
                                                    No. 141 Kediri
                                                </p>
                                            </li>
                                            <li>
                                                <h3>
                                                    Riwayat Pendidikan :
                                                    <br></br>
                                                </h3>
                                                <ul className="list-disc pl-10">
                                                    <li>
                                                        <p>
                                                            SD Islam Al Azhar 6
                                                            Jaka Permai (1998 -
                                                            2004)
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            SMP Labschool
                                                            Kebayoran (2004 -
                                                            2007)
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            SMA Negeri 82
                                                            Jakarta (2007 -
                                                            2010)
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Fakultas Hukum
                                                            Universitas Gajah
                                                            Mada (2010 - 2017)
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">
                                                Close
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </li>
                        <li className="mx-5">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById('my_modal_5')
                                        .showModal()
                                }
                            >
                                <div className="card card-compact w-62 p-5 bg-slate-300 shadow-xl">
                                    <figure>
                                        <Image
                                            src="/wabubkedirikab.png"
                                            id="figure"
                                            alt="Wakil Bupati Kab. Kediri"
                                            width={300}
                                            height={200}
                                        />
                                    </figure>
                                    <div
                                        id="profil-singkat-bupati"
                                        className="card-body"
                                    >
                                        <h2 className="card-title">
                                            Dewi Mariya Ulfa, S.T.
                                        </h2>
                                        <p>Wakil Bupati Kab. Kediri</p>
                                    </div>
                                </div>
                            </button>
                            <dialog
                                id="my_modal_5"
                                className="modal flex justify-center bg-slate-500 bg-opacity-50"
                            >
                                <div className="modal-box min-w-max max-w-5xl bg-slate-300">
                                    <div className="flex flex-col bg-slate-300 justify-center p-4 rounded-md max-w-md">
                                        <div className="flex justify-center">
                                            <Image
                                                src="/wabubkedirikab.png"
                                                id="figure"
                                                alt="Wakil Bupati Kab. Kediri"
                                                width={300}
                                                height={200}
                                            />
                                        </div>

                                        <ul className="py-5">
                                            <li>
                                                <p>
                                                    Tempat/Tanggal lahir :
                                                    Kediri, 1 September 1980
                                                </p>
                                            </li>
                                            <li>
                                                <p>Alamat : Kediri</p>
                                            </li>
                                            <li>
                                                <h3>
                                                    Riwayat Pendidikan :
                                                    <br></br>
                                                </h3>
                                                <ul className="list-disc pl-10">
                                                    <li>
                                                        <p>
                                                            SD Negeri Jambean
                                                            (1987 - 1993)
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            SMP Negeri 1
                                                            Ngadiluwih (1993 -
                                                            1996)
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            SMA Negeri 4 Kediri
                                                            (1996 - 1999)
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            S-1 Teknik Elektro,
                                                            Institut Teknologi
                                                            Sepuluh Nopember
                                                            (2002 - 2005)
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">
                                                Close
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-t from-slate-300 to-cyan-700">
                <div
                    id="sejarah-section"
                    className="flex min-h-screen justify-center items-center pt-20 pb-48"
                >
                    <div className="flex lg:flex-row flex-col justify-center items-center lg:mx-32 md:mx-20 mx-10">
                        <Image
                            src="/sejarahimg.png"
                            id="image-candi-kedirikab"
                            alt="Shoes"
                            width={300}
                            height={300}
                        />

                        <div className="text-slate-900 ">
                            <h1 className="flex justify-center font-bold md:text-6xl text-2xl mb-2">
                                Sejarah
                            </h1>
                            <p className="flex md:text-xl text-md justify-center md:ml-10 pb-32">
                                Kediri berasal dari “kedi” yang artinya mandul
                                atau suci dan “diri” yang artinya Adeg,
                                Angdhiri, menghadiri atau menjadi Raja (bahasa
                                Jawa Jumenengan). Kediri bisa berarti mandiri
                                atau berkepribadian. Kata "Kediri" dan "Kendiri"
                                sering digunakan sebagai pengganti kata
                                "sendiri" dalam bahasa Melayu. Perubahan
                                pengucapan dari "Kadiri" menjadi "Kediri"
                                terjadi karena usia tua dan informalisasi,
                                sesuai dengan pola yang sering muncul dalam
                                bahasa Austronesia sebelah barat. Kediri lahir
                                pada Maret 804 Masehi. Sekitar tahun itulah,
                                Kediri mulai disebut-sebut sebagai nama tempat
                                maupun negara.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="filosofi-logo" className=" text-slate-900">
                    <h1 className="flex justify-center font-bold text-6xl mb-2">
                        Logo
                    </h1>

                    <div className="flex md:flex-row items-center flex-col mx-10 mt-10 justify-center">
                        <Image
                            src="/Logo.png"
                            id="image-logo-kedirikab"
                            alt="Logo kabupaten kediri"
                            width={300}
                            height={300}
                        />

                        <ul id="list-filosofi" className="md:mx-10 mx-">
                            <li>
                                <h1 className="text-xl font-bold">
                                    Bintang Sudut Lima
                                </h1>
                                <p>Simbol Pancasila, ideologi Indonesia.</p>
                            </li>

                            <li>
                                <h1 className="text-xl font-bold">
                                    Ganesya Kediri
                                </h1>
                                <p> Simbol pengetahuan di Kediri.</p>
                            </li>

                            <li>
                                <h1 className="text-xl font-bold">
                                    Gunung Kelud
                                </h1>
                                <p>Simbol jiwa revolusioner.</p>
                            </li>

                            <li>
                                <h1 className="text-xl font-bold">
                                    Padi Sauli (Setangkai)
                                </h1>
                                <p>Simbol Proklamasi 17 Agustus 1945.</p>
                            </li>

                            <li>
                                <h1 className="text-xl font-bold">
                                    Sungai Brantas
                                </h1>
                                <p>Simbol kesuburan.</p>
                            </li>

                            <li>
                                <h1 className="text-xl font-bold">
                                    Langit Biru
                                </h1>
                                <p>Simbol ketentraman.</p>
                            </li>

                            <li>
                                <h1 className="text-xl font-bold">
                                    Ladang dan Sawah
                                </h1>
                                <p>Simbol kemakmuran.</p>
                            </li>

                            <li>
                                <h1 className="text-xl font-bold">
                                    “Canda Bhirawa”
                                </h1>
                                <p>
                                    Nama lambang Kabupaten Kediri, simbol
                                    persatuan.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
