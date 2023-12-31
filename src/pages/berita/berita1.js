import React from 'react';
import Image from 'next/image';
import Footer from '@/component/footer';
import BeritaPage from '@/component/beritaPage';
import Navbar from '@/component/navbar';

export default function berita1() {
    return (
        <div>
            <Navbar />
            <div className="flex bg-gradient-to-b from-cyan-700 to-slate-300 min-h-screen justify-center items-center">
                <div className=" text-slate-900 md:mx-40 mx-10 mb-10">
                    <h1 className="font-bold text-2xl p-10 text-white">
                        Pesan Mas Dhito Bagi Petani Mangga Podang: Jangan Di
                        Booster
                    </h1>

                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <Image
                            className="md:mx-2 my-3"
                            src="/berita1_1.png"
                            width={400}
                            height={400}
                        />
                    </div>

                    <p className="mt-5 text-xl">
                        Kediri - Memasuki musim panen mangga podang, Bupati
                        Hanindhito Himawan Pramana melakukan pengecekan Pasar
                        Buah Banyakan, Kamis (5/10/2023) sore. Kedatangan orang
                        nomor satu di Kabupaten Kediri itu memastikan buah
                        mangga yang dijual petani benar-benar masak pohon.
                        <br />
                        <br /> Untuk memastikan, selain melihat-lihat buah
                        mangga yang dijual, Mas Dhito sapaan akrabnya juga
                        berdialog dengan petani yang tengah menjual mangga
                        panenannya di pasar. Bahkan, Mas Dhito, mencoba
                        mencicipi langsung mangga yang dijual petani. "Kita tes
                        untuk memastikan petani tidak melakukan boosting atau
                        booster terhadap tanamannya, tadi ada yang kita cek
                        alhamdulilah ternyata masak dari pohon langsung," kata
                        Mas Dhito.
                        <br />
                        <br /> Sebagai salah satu komoditas unggul tanaman
                        hortikultura khususnya di wilayah barat sungai, Mas
                        Dhito serius untuk melakukan pengawasan terhadap petani
                        mangga podang.{' '}
                    </p>

                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <Image
                            className="md:mx-2 my-3"
                            src="/berita1_2.png"
                            width={400}
                            height={400}
                        />
                    </div>

                    <p className="text-xl pb-20">
                        Pengawasan itu untuk menjaga petani tidak melakukan
                        booster atau memacu buah supaya cepat matang dengan
                        ethrel. Dengan pengawasan yang dilakukan, diharapkan
                        kualitas mangga podang tetap terjaga yang diharapkan
                        dapat meningkatkan nilai jual dan berdampak pada
                        kesejahteraan petani.
                        <br />
                        <br />
                        "Pesannya buat petani mangga podang, jangan di booster
                        supaya cepat matang. Nanti cepat busuk seperti
                        pengalaman tahun kemarin," pesan Mas Dhito kepada para
                        petani mangga Podang yang ditemui. Dalam kunjungannya ke
                        pasar buah itu, Mas Dhito juga memborong mangga podang
                        dari Damis, petani yang diajak berdialog. Setidaknya
                        terdapat dua kwintal mangga Podang yang dibeli Mas Dhito
                        dan diminta dibagikan kepada warga.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
