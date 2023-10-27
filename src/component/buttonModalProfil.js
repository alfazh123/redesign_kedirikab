import React from 'react';
import Image from 'next/image';

export default function buttonModalProfil({ title, image, description }) {
    return (
        <div>
            <div className="card card-compact w-96 p-5 bg-slate-300 shadow-xl">
                <figure>
                    <Image
                        src={image}
                        id="figure"
                        alt="Bupati Kediri"
                        width={300}
                        height={200}
                    />
                </figure>
                <div id="profil-singkat-bupati" className="card-body">
                    <h2 className="card-title justify-center text-md">
                        {title}
                    </h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
