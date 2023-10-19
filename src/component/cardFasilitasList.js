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
    link1,
    link2,
    link3,
    link4,
    link5,
}) {
    return (
        <div>
            {/* <div className="hidden md:flex">
                <div className="card card-side shadow-xl md:mx-5 xl:mx-32 lg:mx-40 lg:h-60 md:h-64 w-full bg-slate-200 text-slate-900 mb-20">
                    <figure className="">
                        <Image src={src} width={400} height={100} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <ul>
                            <li>
                                <a href={link1}>{desc1}</a>
                            </li>
                            <li>
                                <a href={link2}>{desc2}</a>
                            </li>
                            <li>
                                <a href={link3}>{desc3}</a>
                            </li>
                            <li>
                                <a href={link4}>{desc4}</a>
                            </li>
                            <li>
                                <a href={link5}>{desc5}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <div className="flex ">
                <div className="card card-compact w-96 shadow-xl m-5  bg-slate-200 text-slate-900 ">
                    <figure>
                        <Image src={src} width={400} height={100} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <ul>
                            <li>
                                <a href={link1}>{desc1}</a>
                            </li>
                            <li>
                                <a href={link2}>{desc2}</a>
                            </li>
                            <li>
                                <a href={link3}>{desc3}</a>
                            </li>
                            <li>
                                <a href={link4}>{desc4}</a>
                            </li>
                            <li>
                                <a href={link5}>{desc5}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
