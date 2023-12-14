import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <>
            <h1 className="font-extrabold text-center text-2xl uppercase py-3 tracking-[.25em]">
                Raja Jalur Knights
            </h1>
            <Navbar />
            <div className="content flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 mx-20 px-10 py-12 rounded-lg my-6">
                <Sidebar />
                <div className="main-content pl-4">
                    <h3 className="text-2xl font-bold pb-2">
                        Tentang Kami: Raja Jalur Knights
                    </h3>
                    <p className="text-md pb-1">
                        Selamat datang di Raja Jalur Knights, tempat di mana
                        kebebasan diukir dalam setiap jejak roda dan
                        persaudaraan tumbuh di jalan-jalan tak terbatas. Sejak
                        pendiriannya, Raja Jalur Knights telah menjadi rumah
                        bagi para penggemar motor yang berbagi semangat
                        petualangan dan kebersamaan. Berikut adalah gambaran
                        singkat tentang identitas, sejarah, dan misi klub kami.
                    </p>

                    <h3 className="text-xl font-bold pb-2">
                        Sejarah Raja Jalur Knights
                    </h3>
                    <p className="text-md pb-1">
                        Raja Jalur Knights didirikan pada 1997 oleh sekelompok
                        penggemar motor yang merindukan komunitas yang lebih
                        dari sekadar klub. Dari panggilan hati ini lahirlah klub
                        motor yang diarahkan pada nilai-nilai kebebasan,
                        persaudaraan, dan cinta akan petualangan. Seiring
                        berjalannya waktu, klub ini berkembang menjadi keluarga
                        motoris yang kuat dengan keanggotaan yang terus tumbuh.
                    </p>

                    <h3 className="text-xl font-bold pb-2">Identitas Klub</h3>
                    <p className="text-md pb-1">
                        Raja Jalur Knights adalah wadah bagi para motoris yang
                        mencari lebih dari sekadar perjalanan. Kami adalah
                        keluarga yang menyatukan orang-orang dengan latar
                        belakang yang beragam, tetapi memiliki satu kesamaan:
                        cinta akan kebebasan dan hasrat untuk menjelajahi dunia
                        di atas roda. Identitas kami tercermin dalam semangat
                        kami yang berkobar, solidaritas yang tak tergoyahkan,
                        dan kegembiraan yang melibatkan setiap anggota.
                    </p>

                    <h3 className="text-xl font-bold pb-2">Bidang Gerak </h3>
                    <p className="text-md pb-1">
                        Raja Jalur Knights tidak hanya sekadar klub motor,
                        tetapi sebuah komunitas yang aktif di berbagai bidang.
                        Kami menyelenggarakan event berkualitas tinggi, mulai
                        dari perjalanan panjang dan pertemuan sosial hingga
                        kegiatan amal yang mendukung masyarakat lokal. Di
                        samping itu, kami turut aktif dalam menyuarakan
                        keselamatan berkendara dan menjalankan program-program
                        edukatif bagi anggota.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Profile;
