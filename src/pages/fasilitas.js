import React from 'react';
import CardFasilitasList from '@/component/cardFasilitasList';
import Footer from '@/component/footer';
import Navbar from '@/component/navbar';

export default function Layanan() {
    return (
        <div className="flex flex-col justify-center bg-gradient-to-t from-cyan-700 to-slate-300 min-h-screen">
            <Navbar />
            <h1 className="text-slate-800 text-4xl font-bold m-10">
                Halaman Fasilitas
            </h1>

            <div className="flex xl:flex-row flex-col  justify-center mx-auto  lg:mb-10">
                <CardFasilitasList
                    title="Rumah Sakit"
                    desc1="RSUD Kabupaten Kediri, Jl. Pahlawan Kusuma Bangsa I Pare"
                    desc2="RSUD Simpang Lima Gumul,	Jl. Galuh Candrakirana, Ngasem"
                    desc3="RS PTPN XXI Toeloengredjo,	Jl. A Yani No. 25 Pare Kediri"
                    desc4="RS Amelia,	Jl. Pahlawan No.25A Pare Kediri"
                    desc5="RSU PTPN XXI,	Jl. A Yani No. 25 Pare Kediri"
                    src="/kediri.png"
                    link1={
                        'https://www.google.com/maps/place/RSUD+Kabupaten+Kediri/@-7.7597725,112.1760884,15z/data=!4m6!3m5!1s0x2e785c465edfdbc1:0x427b3c8412d38b42!8m2!3d-7.7597725!4d112.1760884!16s%2Fg%2F11c5_mgykh?entry=ttu'
                    }
                    link2={
                        'https://www.google.com/maps/place/Simpang+Lima+Gumul+Hospital+Kediri/@-7.8215986,112.0578523,15z/data=!4m2!3m1!1s0x0:0xcf7323db591bb6de?sa=X&ved=2ahUKEwjGqpuNpYKCAxXIxTgGHXpsDsgQ_BJ6BAhOEAA&ved=2ahUKEwjGqpuNpYKCAxXIxTgGHXpsDsgQ_BJ6BAhfEAg'
                    }
                    link3={
                        'https://www.google.com/maps/place/Rumah+Sakit+PTPN+X+Toeloengredjo/@-7.763818,112.19752,15z/data=!4m6!3m5!1s0x2e785dc99ae0ce49:0x7db0036a60f3b89!8m2!3d-7.763818!4d112.19752!16s%2Fg%2F1pzy3lldk?entry=ttu'
                    }
                    link4={
                        'https://www.google.com/maps/place/Rumah+Sakit+Amelia/@-7.7625252,112.1818401,15z/data=!4m2!3m1!1s0x0:0xedb3dc8ac0a203b7?sa=X&ved=2ahUKEwiEh8qopYKCAxX1TGwGHRooDFkQ_BJ6BAhDEAA&ved=2ahUKEwiEh8qopYKCAxX1TGwGHRooDFkQ_BJ6BAhQEAg'
                    }
                    link5={
                        'https://www.google.com/maps/place/Rumah+Sakit+PTPN+X+Toeloengredjo/@-7.763818,112.19752,15z/data=!4m6!3m5!1s0x2e785dc99ae0ce49:0x7db0036a60f3b89!8m2!3d-7.763818!4d112.19752!16s%2Fg%2F1pzy3lldk?entry=ttu'
                    }
                />

                <CardFasilitasList
                    title="Bank"
                    desc1="BANK INDONESIA,	Jl Brawijaya no.2 Kediri    "
                    desc2="BANK BCA,	Jl Brawijaya 8 Kediri"
                    desc3="BANK BRI,	Jl KDP Slamet A 35-37 Kediri"
                    desc4="BANK BRI SYARIAH,	Jl Kusuma Bangsa 2 Kediri"
                    desc5="BANK BNI,	Jl Brawijaya 17 Kediri"
                    src="/kediri.png"
                    link1={
                        'https://www.google.com/maps/place/Bank+Indonesia+Cab.+Kediri/@-7.8141708,112.0138795,15z/data=!4m2!3m1!1s0x0:0x1aa7816763c886b3?sa=X&ved=2ahUKEwib47XspYKCAxVpZmwGHcW0CCEQ_BJ6BAhCEAA&ved=2ahUKEwib47XspYKCAxVpZmwGHcW0CCEQ_BJ6BAhOEAg'
                    }
                    link2={
                        'https://www.google.com/maps/place/BCA+KCU+KEDIRI/@-7.8140122,112.0104514,17z/data=!4m10!1m2!2m1!1sATM+Bank+BCA,+Jl.+Brawijaya+No.8,+Pocanan,+Kec.+Kota,+Kota+Kediri,+Jawa+Timur+64123!3m6!1s0x2e785717948f567d:0xadd139170cf40f6e!8m2!3d-7.8140175!4d112.0130263!15sClNBVE0gQmFuayBCQ0EsIEpsLiBCcmF3aWpheWEgTm8uOCwgUG9jYW5hbiwgS2VjLiBLb3RhLCBLb3RhIEtlZGlyaSwgSmF3YSBUaW11ciA2NDEyMyIDiAEBWk4iTGF0bSBiYW5rIGJjYSBqbCBicmF3aWpheWEgbm8gOCBwb2NhbmFuIGtlYyBrb3RhIGtvdGEga2VkaXJpIGphd2EgdGltdXIgNjQxMjOSAQRiYW5rmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF5Y21SUU5HeFJSUkFC4AEA!16s%2Fg%2F11b6324xqp?entry=ttu'
                    }
                    link3={
                        'https://www.google.com/maps/place/BRI+KC+Kediri/@-7.8130748,112.0053425,15z/data=!4m2!3m1!1s0x0:0x70595e36302e2d95?sa=X&ved=2ahUKEwiqqImtpoKCAxUDd2wGHcwJD0MQ_BJ6BAhMEAA&ved=2ahUKEwiqqImtpoKCAxUDd2wGHcwJD0MQ_BJ6BAhXEAg'
                    }
                    link4={
                        'https://www.google.com/maps/place/BSI+KC+Kediri+Hasanudin/@-7.8117725,111.711955,11z/data=!4m10!1m2!2m1!1sBANK+BRI+SYARIAH,+Jl+Kusuma+Bangsa+2+Kediri!3m6!1s0x2e78573def9522a7:0xb61e0a00cad0c346!8m2!3d-7.8117725!4d112.0168256!15sCitCQU5LIEJSSSBTWUFSSUFILCBKbCBLdXN1bWEgQmFuZ3NhIDIgS2VkaXJpIgOIAQGSAQRiYW5r4AEA!16s%2Fg%2F11d_cy7qfp?entry=ttu'
                    }
                    link5={
                        'https://www.google.com/maps/place/BNI+KCU+Kediri/@-7.8145427,112.0132121,15z/data=!4m6!3m5!1s0x2e7857179a463a79:0xd3b72e76363dc2d6!8m2!3d-7.8145427!4d112.0132121!16s%2Fg%2F1tg96knk?entry=ttu'
                    }
                />

                <CardFasilitasList
                    title="Hotel"
                    desc1="HOTEL GRAND SURYA, Jl Dhoho 95 Kediri"
                    desc2="HOTEL MERDEKA, Jl Basuki Rahmad 4 Kediri"
                    desc3="HOTEL PENATARAN, Jl Dhoho 190 Kediri"
                    desc4="HOTEL INSUMO PALACE, Jl Urip Sumoharjo 90 Kediri "
                    desc5="HOTEL BUKIT DAUN, JL Argo Wilis 777 Kediri"
                    src="/kediri.png"
                    link1={
                        'https://www.google.com/maps/place/Grand+Surya+Hotel+Kediri/@-7.817707,112.0132129,15z/data=!4m2!3m1!1s0x0:0x31a5250470d9f02b?sa=X&ved=2ahUKEwjD2bLqpoKCAxUBTGwGHU7RDIUQ_BJ6BAhcEAA&ved=2ahUKEwjD2bLqpoKCAxUBTGwGHU7RDIUQ_BJ6BAhkEAc'
                    }
                    link2={
                        'https://www.google.com/maps/place/Merdeka+Hotel/@-7.8136099,112.0147147,15z/data=!4m2!3m1!1s0x0:0x330fa3b555bc0ca6?sa=X&ved=2ahUKEwjggsX1poKCAxUba2wGHWmzAK4Q_BJ6BAhSEAA&ved=2ahUKEwjggsX1poKCAxUba2wGHWmzAK4Q_BJ6BAhcEAc'
                    }
                    link3={
                        'https://www.google.com/maps/place/Hotel+Penataran+Kediri/@-7.8196242,112.0120365,15z/data=!4m9!3m8!1s0x2e7857108498e18d:0x335ed1851fe1830f!5m2!4m1!1i2!8m2!3d-7.8196242!4d112.0120365!16s%2Fg%2F11xjf83md?entry=ttu'
                    }
                    link4={
                        'https://www.google.com/maps/place/Hotel+Insumo+Palace/@-7.8312072,112.0096114,15z/data=!4m2!3m1!1s0x0:0xbace87be351d20c8?sa=X&ved=2ahUKEwjuptCMp4KCAxU1bWwGHfdfDAMQ_BJ6BAhYEAA&ved=2ahUKEwjuptCMp4KCAxU1bWwGHfdfDAMQ_BJ6BAhhEAc'
                    }
                    link5={
                        'https://www.google.com/maps/place/Bukit+Daun+Hotel+And+Resort/@-7.828379,111.9667432,17z/data=!4m13!1m2!2m1!1sHOTEL+BUKIT+DAUN,+JL+Argo+Wilis+777+Kediri!3m9!1s0x2e7855d61eef6697:0xff867aba80a6ae61!5m2!4m1!1i2!8m2!3d-7.8279239!4d111.9695279!15sCipIT1RFTCBCVUtJVCBEQVVOLCBKTCBBcmdvIFdpbGlzIDc3NyBLZWRpcmmSAQVob3RlbOABAA!16s%2Fg%2F11xh7lpch?entry=ttu'
                    }
                />
            </div>

            <Footer />
        </div>
    );
}
