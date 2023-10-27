import React from 'react';
import Image from 'next/image';

export default function ModalImage({
    title,
    image,
    description,
    address,
    birth,
    edu1,
    edu2,
    edu3,
    edu4,
}) {
    return (
        <div>
            <div className="modal-box md:max-w-xl min-w-max max-w-sm bg-slate-300">
                <div className="flex flex-col md:flex-row bg-slate-300 md:min-w-full justify-center p-4 rounded-md max-w-md">
                    <div className="flex flex-col justify-center items-center text-center">
                        <Image
                            src={image}
                            id="figure"
                            alt="Bupati Kediri"
                            width={300}
                            height={200}
                        />
                        <div id="profil-singkat-bupati" className="pt-5">
                            <h2 className="card-title justify-center text-md md:text-sm">
                                {title}
                            </h2>
                            <p>{description}</p>
                        </div>
                    </div>

                    <ul className="py-5">
                        <li>
                            <p>Tempat/Tanggal lahir : {birth}</p>
                        </li>
                        <li>
                            <p>Alamat : {address}</p>
                        </li>
                        <li>
                            <h3>
                                Riwayat Pendidikan :<br></br>
                            </h3>
                            <ul className="list-disc pl-10">
                                <li>{edu1}</li>
                                <li>{edu2}</li>
                                <li>{edu3}</li>
                                <li>{edu4}</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
