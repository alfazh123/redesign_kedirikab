import React from 'react';
import Image from 'next/image';

export default function ModalImage({
    src,
    alt,
    name,
    position,
    ttl,
    alamat,
    pend1,
    pend2,
    pend3,
    pend4,
    id,
}) {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <button onClick={() => document.getElementById({ id }).showModal()}>
                <div className="card card-compact w-62 p-5 bg-slate-300 shadow-xl">
                    <figure>
                        <Image
                            src={src}
                            id="figure"
                            alt={alt}
                            width={300}
                            height={200}
                        />
                    </figure>
                    <div id="profil-singkat-bupati" className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{position}</p>
                    </div>
                </div>
            </button>
            <dialog
                id={id}
                className="modal flex justify-center bg-slate-500 bg-opacity-50"
            >
                <div className="modal-box min-w-max max-w-5xl bg-slate-300">
                    <div className="flex flex-col bg-slate-300 justify-center p-4 rounded-md max-w-md">
                        <div className="flex justify-center">
                            <Image
                                src={src}
                                id="figure"
                                alt={alt}
                                width={300}
                                height={200}
                            />
                        </div>

                        <ul className="py-5">
                            <li>
                                <p>Tempat/Tanggal lahir : {ttl}</p>
                            </li>
                            <li>
                                <p>Alamat : {alamat}</p>
                            </li>
                            <li>
                                <h3>
                                    Riwayat Pendidikan :<br></br>
                                </h3>
                                <ul className="list-disc pl-10">
                                    <li>
                                        <p>{pend1}</p>
                                    </li>
                                    <li>
                                        <p>{pend2}</p>
                                    </li>
                                    <li>
                                        <p>{pend3}</p>
                                    </li>
                                    <li>
                                        <p>{pend4}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
