import React from 'react';
import Footer from '@/component/footer';
import { Label } from 'flowbite-react';
import DatePicker from '@/component/datePicker';
import Navbar from '@/component/navbar';

export default function Lapor() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center bg-gradient-to-b from-cyan-700 to-slate-300 min-h-screen pt-20 text-slate-100">
                <div className="flex flex-col items-center w-1/2 pb-20">
                    <h1 className="text-4xl font-bold pb-3">Lapor</h1>
                    <p className="font-bold">
                        Layanan Aspirasi dan Pengaduhan Online Rakyat
                    </p>
                    <p className="p-5">
                        Sampaikan laporan Anda langsung kepada instansi
                        pemerintah berwenang
                    </p>

                    <form className="bg-slate-100 bg-opacity-50 rounded-xl shadow-2xl p-5 w-96">
                        <p className="text-sm  text-slate-900 mb-4 text-opacity-50">
                            Masukkan Informasi sesuai dengan kolom yang tersedia
                        </p>

                        {/* <div>
                        <ul className="flex">
                            <li>
                                <button className="rounded-none border-solid border-cyan-700 border-2 focus:bg-cyan-700">
                                    Pengaduhan
                                </button>
                                <a className="px-3 py-2 border-solid border-cyan-400 border-2 focus:bg-cyan-500 hover:bg-cyan-500 hover:text-slate-200">
                                    Pengaduhan
                                </a>
                            </li>
                            <li>
                                <button className="btn rounded-none border-solid border-cyan-700 border-2">
                                    Button
                                </button>
                            </li>
                            <li>
                                <button className="btn rounded-none border-solid border-cyan-700 border-2">
                                    Button
                                </button>
                            </li>
                        </ul>
                    </div> */}

                        <div className="flex flex-col text-slate-900 text-opacity-70">
                            <label>Kategori</label>
                            <select className="bg-white rounded-md m-2 px-4 py-3">
                                <option value="1">Pengaduan</option>
                                <option value="2">Aspirasi</option>
                                <option value="3">Permintaan Informasi</option>
                            </select>
                            <label>Judul laporan</label>
                            <input
                                type="text"
                                id="judulLaporan"
                                name="judulLaporan"
                                placeholder="Ketik Judul laporan Anda"
                                className="bg-white rounded-md m-2 px-4 py-3"
                            />
                            <label>Keterangan</label>
                            <input
                                type="text"
                                id="judulLaporan"
                                name="judulLaporan"
                                placeholder="Ketik Isi laporan Anda"
                                className="bg-white rounded-md m-2 px-4 py-3"
                            />
                            <label>Tanggal</label>
                            <DatePicker className="bg-white rounded-md m-2 px-4 py-3" />
                            <label>Lokasi</label>
                            <input
                                type="text"
                                id="judulLaporan"
                                name="judulLaporan"
                                placeholder="Jl. Soekarno-Hatta No. 1 Kediri"
                                className="bg-white rounded-md m-2 px-4 py-3"
                            />
                            <label>Instansi</label>
                            <input
                                type="text"
                                id="judulLaporan"
                                name="judulLaporan"
                                placeholder="Instansi Tujuan"
                                className="rounded-md m-2 px-4 py-3"
                            />

                            <div className="card-actions justify-end">
                                <button className="btn px-5 py-1 rounded-full  hover:bg-slate-300 hover:text-slate-900 bg-cyan-700 text-slate-100">
                                    Lapor
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}
