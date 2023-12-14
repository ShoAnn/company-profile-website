import hero_image from "../assets/hero.jpg";

function Hero() {
    return (
        <header
            className="object-cover bg-center bg-no-repeat bg-cover bg-slate-700 bg-blend-multiply drop-shadow-lg"
            style={{ backgroundImage: `url(${hero_image})` }}
        >
            <div className="mx-auto max-w-screen-lg lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-purple-900 via-blue-300 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                        Menguasai Jalanan
                        <span className="sm:block">
                            Menjelajah Tanpa Batas!
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-lg/relaxed">
                        Satu hati, satu jalur, bersama-sama kita mengejar
                        cakrawala kebebasan dalam solidaritas, satu keluarga di
                        atas roda.
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Hero;
