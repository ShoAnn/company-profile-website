import image5 from "../assets/product (5).jpg";
import image6 from "../assets/product (6).jpg";
import image7 from "../assets/product (7).jpg";

function GalleryImages() {
    const images = [image5, image6, image7];
    return (
        <>
            <div className="grid grid-cols-2 gap-4 pt-6 w-full">
                {images.map((image, index) => (
                    <img
                        src={image}
                        alt=""
                        key={index}
                        className="rounded-lg h-64 w-full object-cover"
                    />
                ))}
            </div>
        </>
    );
}

export default GalleryImages;
