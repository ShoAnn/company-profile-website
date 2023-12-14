import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
    return (
        <>
            <nav className="grid grid-cols-9 gap-2 py-1 sticky top-0 z-10 bg-slate-900 bg-opacity-50">
                <ul className="col-span-4 flex items-center justify-end gap-10">
                    <li>
                        <Link
                            to={"/"}
                            className="hover:underline active:underline"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/profile"}
                            className="hover:underline active:underline"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/visi"}
                            className="hover:underline active:underline"
                        >
                            Visi Misi
                        </Link>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <Link to={"/"}>
                        <img
                            src={logo}
                            alt="logo"
                            className="h-14 w-14 rounded-full bg-white border-4 border-black hover:scale-105 ease-out duration-300"
                        />
                    </Link>
                </div>
                <ul className="col-span-4 flex items-center justify-start gap-10">
                    <li>
                        <Link
                            to={"/products"}
                            className="hover:underline active:underline"
                        >
                            Produk Kami
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/about"}
                            className="hover:underline active:underline"
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/contact"}
                            className="hover:underline active:underline"
                        >
                            Kontak kami
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
