import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedImage from "./components/FeaturedImage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="grid grid-flow-col h-[40rem] w-full">
          <div className="relative">
            <Image
              alt="Gallery Picture of Benny at USITT"
              src={"/Usitt.png"}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              alt="Gallery Picture of set piece with lights"
              src={"/HotBox.png"}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              alt="Gallery Picture of EOS concert lighting"
              src={"/ConcertEOS.png"}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col h-44 w-full font-title text-5xl text-center justify-center py-28 border-black border-t-[1.25rem]">
          <p>Hey I’m Benny Hernandez!</p>
          <p>Come take a look at what I am working on :)</p>
        </div>
        <div className="flex flex-row bg-black bg-opacity-20 w-fit h-fit m-auto p-10 rounded-3xl gap-10">
        <FeaturedImage title={"Lighting Design"} src={"/LightingDesign.jpg"} />
        <FeaturedImage title={"Show Networking"} src={"/LightingDesign.jpg"} />
        <FeaturedImage title={"Mechatronics"} src={"/LightingDesign.jpg"} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
