import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="flex flex-col w-64 bg-white h-full border-r">
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li>
                            <Link
                                to={"/company-profile-website/"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 "
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate ">
                                    Halaman utama
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/company-profile-website/profile"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate">
                                    Profile
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/company-profile-website/articles"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate">
                                    Artikel
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/company-profile-website/events"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate">
                                    Event
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/company-profile-website/gallery"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate">
                                    Galeri Foto
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/company-profile-website/clients"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate">
                                    Klien Kami
                                </span>
                            </Link>
                        </li>
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-500">
                                    Log in
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link
                                to={"/company-profile-website/login"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate">
                                    Sign in
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/company-profile-website/signup"}
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-slate-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-md tracking-wide truncate">
                                    Sign up
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
