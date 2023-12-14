import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import img from "../assets/product (1).jpg";

function Clients() {
    const dummyNames = [
        "John Doe",
        "Jane Smith",
        "Michael Johnson",
        "Emily Davis",
        "David Wilson",
        "Sarah Anderson",
        "Robert Martinez",
        "Olivia Taylor",
        "William Brown",
        "Sophia Thomas",
    ];

    return (
        <>
            <h1 className="font-extrabold text-center text-2xl uppercase py-3 tracking-[.25em]">
                Raja Jalur Knights
            </h1>
            <Navbar />
            <div className="content flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 mx-20 px-10 py-12 rounded-lg my-6">
                <Sidebar />
                <div className="main-content pl-4">
                    <h3 className="text-2xl font-bold pb-2">Klien kami</h3>
                    <p className="text-md pb-1">
                        Berikut adalah beberapa klien yang telah bekerja sama
                        dengan kami.
                    </p>
                    <ul className="grid grid-cols-4 pt-6">
                        {dummyNames.map((name, index) => (
                            <li
                                className="pb-2 pr-4"
                                key={index}
                            >
                                <img
                                    src={img}
                                    alt=""
                                    className="w-20 h-20 rounded-full"
                                />
                                <p>{name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Clients;
