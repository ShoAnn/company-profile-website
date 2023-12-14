import image1 from "../assets/product (1).jpg";
import image2 from "../assets/product (2).jpg";
import image3 from "../assets/product (3).jpg";
import image4 from "../assets/product (4).jpg";
import image5 from "../assets/product (5).jpg";
import image6 from "../assets/product (6).jpg";
import image7 from "../assets/product (7).jpg";

function ProductImages() {
    const images = [image1, image2, image3, image4, image5, image6, image7];

    return (
        <>
            <div className="container mx-auto px-5 py-2 lg:px-16 lg:pt-6">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    {images.map((imageUrl, index) => (
                        <div
                            key={index}
                            className="flex w-1/3 flex-wrap"
                        >
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={imageUrl}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductImages;
