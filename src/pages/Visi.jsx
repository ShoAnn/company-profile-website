import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Visi() {
    return (
        <>
            <h1 className="font-extrabold text-center text-2xl uppercase py-3 tracking-[.25em]">
                Raja Jalur Knights
            </h1>
            <Navbar />
            <div className="content flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 mx-20 px-10 py-12 rounded-lg my-6">
                <Sidebar />
                <div className="main-content pl-4">
                    <h3 className="text-2xl font-bold pb-2">Visi</h3>
                    <p className="text-md pb-1">
                        Menjadi pelopor komunitas motor yang diakui secara
                        internasional, menginspirasi semangat kebebasan,
                        persaudaraan, dan tanggung jawab sosial di atas roda.
                    </p>
                    <h3 className="text-2xl font-bold pb-2">Misi</h3>
                    <p className="text-md pb-1">
                        <strong>Membangun Komunitas Yang Kuat</strong>:
                        Menyatukan para penggemar motor dari berbagai latar
                        belakang untuk membentuk keluarga yang solid, didasarkan
                        pada nilai-nilai persaudaraan, saling menghormati, dan
                        dukungan.
                    </p>
                    <p className="text-md pb-1">
                        <strong>Menyebarkan Semangat Kebebasan</strong>:
                        Mengajak dan mendukung anggota untuk menjelajahi jalanan
                        dengan semangat petualangan, mendorong kebebasan
                        berekspresi dan pengalaman unik di setiap perjalanan.
                    </p>
                    <p className="text-md pb-1">
                        <strong>Menyelenggarakan Event Berkualitas</strong>:
                        Mengatur dan melibatkan anggota dalam event berkualitas
                        tinggi, termasuk perjalanan panjang, acara amal, dan
                        pertemuan yang memperdalam hubungan persaudaraan dan
                        pengalaman berkendara.
                    </p>
                    <p className="text-md pb-1">
                        <strong>
                            Mengedepankan Keselamatan dan Etika Berkendara
                        </strong>
                        : Menyuarakan dan mempromosikan prinsip keselamatan
                        berkendara, mendukung pelatihan berkendara yang aman,
                        serta menghargai etika dan rasa tanggung jawab dalam
                        setiap perjalanan.
                    </p>
                    <p className="text-md pb-1">
                        <strong>Berperan Aktif dalam Komunitas Lokal</strong>:
                        Melibatkan diri dalam kegiatan sosial dan kegiatan amal
                        yang mendukung masyarakat lokal, menciptakan dampak
                        positif, dan memberikan kontribusi kepada mereka yang
                        membutuhkan.
                    </p>
                    <p className="text-md pb-1">
                        <strong>
                            Menyediakan Sumber Pengetahuan dan Inspirasi
                        </strong>
                        : Menyediakan platform bagi anggota untuk berbagi
                        pengalaman, pengetahuan, dan inspirasi melalui artikel,
                        seminar, dan pertukaran informasi.
                    </p>
                    <p className="text-md pb-1">
                        <strong>Menjaga Kekuatan dan Integritas Klub</strong>:
                        Memastikan keberlanjutan klub dengan menjaga etika dan
                        integritas organisasi, melibatkan anggota dalam
                        pengambilan keputusan, dan memastikan setiap tindakan
                        mencerminkan visi dan misi klub.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Visi;
