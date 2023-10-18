export default function Footer() {
    return (
        <main className="bg-slate-300 text-slate-700">
            <footer className="flex md:flex-row flex-col justify-between px-60 py-12 grid-cols-3 w-full">
                <div className="mb-4 md:mx-10">
                    <h1 className="font-bold text-xl">Service</h1>

                    <ul>
                        <li>Berita</li>
                        <li>Lapor</li>
                        <li>Pengaduhan</li>
                        <li>Fasilitas</li>
                    </ul>
                </div>

                <div className="mb-4 md:mx-10">
                    <h1 className="font-bold text-xl">About</h1>

                    <ul>
                        <li>Alamat: Jl. Soekarno-Hatta No. 1 Kediri</li>
                        <li>Telepon: 0354-689901-5</li>
                    </ul>
                </div>

                <div>©️ 2023 Pemkab Kediri. All rights reserved.</div>
            </footer>
        </main>
    );
}
