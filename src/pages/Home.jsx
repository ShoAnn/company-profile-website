import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


function Home() {
    return (
        <>
            <h1 className="font-extrabold text-center text-2xl uppercase py-3 tracking-[.25em]">
                Raja Jalur Knights
            </h1>
            <Navbar />
            <Hero />
            <div className="content flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 mx-20 px-10 py-12 rounded-lg my-6">
                <Sidebar />
                <div className="main-content pl-4">
                    <h3 className="text-2xl font-bold pb-2">
                        Selamat datang di dunia kami!
                    </h3>
                    <p className="text-md pb-1">
                        Dimana kecepatan bertemu kebersamaan, dan petualangan
                        mengalir bersama setiap tarikan gas. Kami adalah Raja
                        Jalur Knights, sebuah keluarga motoris yang mengejar
                        arti sejati kebebasan di atas dua roda.
                    </p>
                    <p className="text-md pb-8 ">
                        Dengan semangat solidaritas yang mengalir dalam setiap
                        getaran mesin, kami bukan sekadar sebuah klub motor,
                        tetapi sebuah komunitas yang menghargai kebebasan,
                        persahabatan, dan jiwa petualangan.
                    </p>

                    <h3 className="text-2xl font-bold pb-2">Profil Kami</h3>
                    <p className="text-md pb-1">
                        Kami adalah kelompok individu yang memiliki kecintaan
                        yang sama terhadap kebebasan dan otomotif. Dengan
                        berbagai latar belakang dan preferensi tipe motor, kami
                        bersatu dalam semangat untuk menjelajahi, merayakan
                        momen, dan menciptakan kenangan abadi di setiap tikungan
                        dan jalur yang kami pilih.
                    </p>
                    <p className="text-md pb-1">
                        Setiap perjalanan bersama Raja Jalur Knights adalah
                        petualangan yang unik dan tak terlupakan. Kami
                        mengadakan berbagai event dari skala kecil seperti
                        perjalanan panjang yang menguji keberanian hingga acara
                        amal yang mencerminkan rasa tanggung jawab sosial kami.
                    </p>
                    <p className="text-md pb-1">
                        Di samping itu, kami menyelenggarakan pertemuan rutin,
                        seminar berkendara, dan aktivitas sosial untuk
                        memperdalam ikatan persaudaraan di antara anggota.
                        Galeri aktivitas klub menjadi saksi visual setiap momen
                        seru dan kebersamaan di jalan.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
