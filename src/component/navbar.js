import React from 'react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="flex justify-between w-full h-0 bg-slate-300 text-slate-900">
            <div className="flex m-3">
                <Image src="" width={100} height={10} alt="Logo" />
                <h1 className="text-xl font-bold">Kediri Kabupaten</h1>
            </div>

            <div>
                <div className="dropdown dropdown-end items-end text-slate-300">
                    <label tabIndex={0} className="btn m-1">
                        Menu
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
