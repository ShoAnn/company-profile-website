import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductImages from "../components/ProductImages";

function Products() {
    return (
        <>
            <h1 className="font-extrabold text-center text-2xl uppercase py-3 tracking-[.25em]">
                Raja Jalur Knights
            </h1>
            <Navbar />
            <div className="content flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 mx-20 px-10 py-12 rounded-lg my-6">
                <Sidebar />
                <div className="main-content pl-4">
                    <h3 className="text-2xl font-bold pb-2">Produk</h3>
                    <p className="text-md pb-1">
                        Berikut adalah beberapaproduk berkualitas eksklusif dari
                        kami.
                    </p>
                    <ProductImages />
                </div>
            </div>
        </>
    );
}

export default Products;
