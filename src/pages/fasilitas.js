import React from 'react';
import CardFasilitasList from '@/component/cardFasilitasList';
import Footer from '@/component/footer';

export default function Layanan() {
    return (
        <div className="flex flex-col bg-gradient-to-t from-cyan-700 to-slate-300 min-h-screen">
            <h1 className="text-slate-800 text-4xl font-bold m-10">
                Halaman Fasilitas
            </h1>

            <CardFasilitasList
                title="Rumah Sakit"
                desc1="RSUD Kabupaten Kediri, Jl. Pahlawan Kusuma Bangsa I Pare"
                desc2="RSUD Simpang Lima Gumul,	Jl. Galuh Candrakirana, Ngasem"
                desc3="RS PTPN XXI Toeloengredjo,	Jl. A Yani No. 25 Pare Kediri"
                desc4="RS Amelia,	Jl. Pahlawan No.25A Pare Kediri"
                desc5="RSU PTPN XXI,	Jl. A Yani No. 25 Pare Kediri"
                src="/kediri.png"
            />

            <CardFasilitasList
                title="Bank"
                desc1="BANK INDONESIA,	Jl Brawijaya no.2 Kediri    "
                desc2="BANK BCA,	Jl Brawijaya 8 Kediri"
                desc3="BANK BRI,	Jl KDP Slamet A 35-37 Kediri"
                desc4="BANK BRI SYARIAH,	Jl Kusuma Bangsa 2 Kediri"
                desc5="BANK BNI,	Jl Brawijaya 17 Kediri"
                src="/kediri.png"
            />

            <CardFasilitasList
                title="Pasar"
                desc1="HOTEL GRAND SURYA, Jl Dhoho 95 Kediri"
                desc2="HOTEL MERDEKA, Jl Basuki Rahmad 4 Kediri"
                desc3="HOTEL PENATARAN, Jl Dhoho 190 Kediri"
                desc4="HOTEL INSUMO PALACE, Jl Urip Sumoharjo 90 Kediri "
                desc5="HOTEL BUKIT DAUN, JL Argo Wilis 777 Kediri"
                src="/kediri.png"
            />

            <Footer />
        </div>
    );
}
