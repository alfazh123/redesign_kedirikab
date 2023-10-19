import React from 'react';
import Image from 'next/image';

export default function beritaPage({
    title,
    description1,
    description2,
    img1,
    img2,
}) {
    return (
        <div className="flex bg-gradient-to-t from-cyan-700 to-slate-300 min-h-screen justify-center items-center">
            <div className="">
                <h1 className="justify-center">{title}</h1>
                <Image src={img1} width={400} height={100} alt="img1" />
                <Image src={img2} width={400} height={100} alt="img2" />
                <p>{description1}</p>
                <p>{description2}</p>
            </div>
        </div>
    );
}
