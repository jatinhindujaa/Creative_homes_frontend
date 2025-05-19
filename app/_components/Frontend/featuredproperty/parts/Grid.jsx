import Image from "next/image";
import image1 from "../assets/images/1.png"
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";

const images = [
  { src: image1, alt: "Luxury Villa by the Sea" },
  { src: image2, alt: "Modern Cityscape" },
  { src: image3, alt: "Elegant Poolside" },
  { src: image4, alt: "Minimalist House Design" },
  { src: image5, alt: "Dubai Architecture" },
];

export default function Grid() {
  return (
    <div className="py-8 max-w-7xl mx-auto w-[100%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top row */}
        <div className="relative col-span-1">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            layout="fill"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            layout="responsive"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Bottom row */}
        <div className="relative col-span-1 md:col-span-2">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            layout="responsive"
            width={1600}
            height={1200}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            layout="responsive"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            layout="fill"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}


