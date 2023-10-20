import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex justify-between items-center w-full bg-slate-300 text-slate-900">
            <div className="flex m-3">
                <Link href="/" className="flex">
                    <Image
                        src="/LogoNav.png"
                        width={50}
                        height={10}
                        alt="Logo"
                        className="mx-2"
                    />
                    <h1 className="text-xl font-bold flex justify-center items-center">
                        Kediri Kabupaten
                    </h1>
                </Link>
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
