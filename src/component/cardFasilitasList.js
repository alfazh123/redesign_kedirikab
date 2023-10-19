import React from 'react';
import Image from 'next/image';

export default function CardFasilitasList({
    title,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    src,
}) {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mx-40 h-60 mb-20">
                <figure className="">
                    <Image src={src} width={400} height={100} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <ul>
                        <li>{desc1}</li>
                        <li>{desc2}</li>
                        <li>{desc3}</li>
                        <li>{desc4}</li>
                        <li>{desc5}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
