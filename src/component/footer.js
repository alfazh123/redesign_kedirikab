import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <main className="bg-slate-300 text-slate-700">
            <footer className="flex md:flex-row flex-col justify-between lg:px-60 px-10 py-12 grid-cols-3 w-full">
                <div className="mb-4 md:mx-10">
                    <h1 className="font-bold text-xl">Service</h1>

                    <ul>
                        <li>
                            <Link href="/berita">Berita</Link>
                        </li>
                        <li>
                            <Link href="/lapor">Lapor</Link>
                        </li>
                        <li>
                            <a href="https://dukcapil.kedirikab.go.id/">
                                Kependudukan
                            </a>
                        </li>
                        <li>
                            <Link href="/fasilitas">Fasilitas</Link>
                        </li>
                    </ul>
                </div>

                <div className="mb-4 md:mx-10">
                    <h1 className="font-bold text-xl">About</h1>

                    <ul>
                        <li>Alamat: Jl. Soekarno-Hatta No. 1 Kediri</li>
                        <li>Telepon: 0354-689901-5</li>
                    </ul>
                </div>

                <div>©️ 2023 Pemkab Kediri. All rights reserved.</div>
            </footer>
        </main>
    );
}
