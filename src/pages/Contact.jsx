import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Contact() {
    const socialMedia = [
        {
            platform: "Facebook",
            username: "@dummy_facebook",
        },
        {
            platform: "Twitter",
            username: "@dummy_twitter",
        },
        {
            platform: "Instagram",
            username: "@dummy_instagram",
        },
        {
            platform: "LinkedIn",
            username: "@dummy_linkedin",
        },
    ];

    const email = "dummy_email@example.com";

    return (
        <>
            <h1 className="font-extrabold text-center text-2xl uppercase py-3 tracking-[.25em]">
                Raja Jalur Knights
            </h1>
            <Navbar />
            <div className="content flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 mx-20 px-10 py-12 rounded-lg my-6">
                <Sidebar />
                <div className="main-content pl-4">
                    <h3 className="text-2xl font-bold pb-2">Kontak Kami</h3>
                    <p className="text-md pb-1">
                        Tertarik untuk bergabung atau memiliki pertanyaan lebih
                        lanjut? Jangan ragu untuk menghubungi kami melalui
                        formulir kontak di halaman ini.
                    </p>

                    <ul className="list-disc pl-6">
                        {socialMedia.map((item, index) => (
                            <li key={index}>
                                <a href="#">
                                    {item.platform}: {item.username}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="text-md pt-4">Email: {email}</p>
                </div>
            </div>
        </>
    );
}

export default Contact;
