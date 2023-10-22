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
                        KPK RI Gelar Sosialisasi Anti Korupsi
                    </h1>

                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <Image
                            className="md:mx-2 my-2"
                            src="/berita2_1.png"
                            width={300}
                            height={300}
                        />
                    </div>

                    <p>
                        Komisi Pemberantasan Korupsi (KPK) Republik Indonesia
                        menggelar Sosialisasi Anti Korupsi di lingkungan
                        Pemerintah Kabupaten Kediri. Acara yang bertempat di
                        Pendopo Panjalu Jayati diikuti oleh pimpinan beserta
                        jajaran DPRD dan seluruh Kepala Organisasi Perangkat
                        Daerah (OPD), Selasa (10/10/2023).
                        <br />
                        <br /> Wakil Bupati Kediri Dewi Mariya Ulfa, hadir pada
                        kesempatan tersebut menyampaikan, Monitoring Center for
                        Prevention (MCP) dilatarbelakangi oleh keinginan
                        membangun kerangka kerja yang dapat digunakan untuk
                        memahami elemen-elemen yang rentan terhadap korupsi.
                        <br />
                        <br /> "Dengan MCP ini akan memberikan arah dalam upaya
                        pencegahan dan pemberantasan korupsi. Oleh karena itu,
                        Pemerintah Kabupaten Kediri terus berperan aktif dalam
                        kegiatan pencegahan dan pemberantasan korupsi",
                        terangnya.
                    </p>

                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <Image
                            className="md:mx-2 my-2"
                            src="/berita2_2.png"
                            width={300}
                            height={300}
                        />
                    </div>

                    <p>
                        Sebagai catatan, lanjut Mbak Dewi, sejak tahun 2021
                        Pemerintah Kabupaten Kediri telah melakukan perbaikan
                        baik di sektor pelayanan publik maupun pemerintahan.
                        Upaya perbaikan tersebut dibuktikan dengan diraihnya
                        predikat wilayah bebas dari korupsi (WBK) di Dinas
                        Penanaman Modal Dan Pelayanan Terpadu Satu Pintu
                        (DPMPTSP) pada tahun 2022 serta perolehan opini WTP
                        selama 7 tahun berturut-turut.
                        <br />
                        <br />
                        "Hasil survei penilaian integritas yang dilaksanakan
                        oleh KPK pada tahun 2022, Pemerintah Kabupaten Kediri
                        memperoleh nilai 77,80 dengan ranking 11 dari 38
                        kabupaten/kota di Jawa Timur", imbuhnya.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
