import logo from '../assets/logo_motorclub.jpg';

function Navbar() {
    return(
        <div className="grid grid-cols-9 gap-2 py-4">
            <ul className="col-span-4 flex items-center justify-end gap-5">
                <li>
                    <a href="#" className="hover:underline">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Home</a>
                </li>
            </ul>
            <div className="flex justify-center">
                <img src={logo} alt="logo" className="w-[5rem] rounded-full" />
            </div>
            <ul className="col-span-4 flex items-center justify-start gap-5">
                <li>
                    <a href="#" className="hover:underline">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Home</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;