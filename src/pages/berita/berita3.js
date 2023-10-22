import React from 'react';
import Image from 'next/image';
import Footer from '@/component/footer';
import Navbar from '@/component/navbar';

export default function berita2() {
    return (
        <div>
            <Navbar />
            <div className="flex bg-gradient-to-t from-cyan-700 to-slate-300 min-h-screen justify-center items-center">
                <div className=" text-slate-900 md:mx-40 mx-10 mb-10">
                    <h1 className="font-bold text-2xl">
                        Antisipasi Dampak Kekeringan, Gubernur Khofifah Harap
                        Kepala Daerah Upayakan Mitigasi Bencana
                    </h1>

                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <Image
                            className="md:mx-2 my-2"
                            src="/berita3_1.png"
                            width={300}
                            height={300}
                        />
                    </div>

                    <p>
                        KPemerintah Kabupaten kediri melalui Wakil Bupati Kediri
                        Dewi Mariya Ulfa dan Kepala Pelaksana BPBD Kabupaten
                        Kediri Stefanus Djoko Sukrisno menghadiri Rapat
                        Koordinasi Percepatan Penanganan Bencana di Wilayah Jawa
                        Timur dan Antisipasi Bencana Hidrometeorologi Tahun 2023
                        – 2024, di Kantor BPSDM Jatim, Surabaya (9/10/2023).
                        <br />
                        <br /> Hadir dalam acara Kepala BNPB, Letjen TNI
                        Suharyanto, Gubernur Jatim Khofifah Indar Parawansa,
                        jajaran pejabat tinggi di lingkungan BNPB, Bupati dan
                        Walikota serta Kepala Pelaksana BPBD se-Jawa Timur.
                        <br />
                        <br /> Gubernur Jatim Khofifah Indar Parawansa
                        mengatakan, saat ini Jatim sedang menghadapi krisis
                        dampak dari kekeringan. Salah satu dampak terasa adalah
                        musim panen padi yang menurun. Gubernur menekankan
                        pentingnya mitigasi dan pemetaan status kebencanaan di
                        tiap-tiap wilayahnya secara tepat.
                    </p>

                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <Image
                            className="md:mx-2 my-2"
                            src="/berita3_2.png"
                            width={300}
                            height={300}
                        />
                    </div>

                    <p>
                        Ini penting untuk penanganan bencana, termasuk untuk
                        menyalurkan bantuan salah satunya pengeluaran Cadangan
                        Beras Pemerintah (CBP) pada saat ditetapkan status
                        tanggap darurat.
                        <br />
                        <br />
                        “Cadangan Beras Pemerintah (CBP) cukup, kalau bisa
                        dimanfaatkan 100 ton saja bisa memberi solusi untuk
                        mengatasi bagi yang terdampak,” jelas Khofifah.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
