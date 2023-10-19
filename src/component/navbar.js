import React from 'react';

export default function Navbar() {
    return (
        <main className="fixed ">
            <div className="relative flex h-full top-0 inset-0 navbar bg-base-100">
                <div className="flex-1">
                    <img />
                    <a className="btn text-xl">Kediri Kabupaten</a>
                </div>
                <div className="flex">
                    <ul className="menu flex px-1">
                        <li>
                            <a>Link</a>
                        </li>
                        <li>
                            <a>Layanan</a>
                        </li>
                        <li>
                            <a>Potensi</a>
                        </li>
                        <li>
                            <a>Fasilitas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
