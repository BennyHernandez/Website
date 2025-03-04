import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedImage from "./components/FeaturedImage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <Header />
      <main className="flex-1">
        <div className="grid grid-rows-1 md:grid-flow-col h-96 md:h-[40rem] w-full">
                    <div className="relative">
            <Image
              alt="Gallery Picture of EOS concert lighting"
              src={"/LightDesign2.jpg"}
              fill
              className="object-cover"
            />
          </div>
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
              src={"/FlatBuilding.jpg"}
              fill
              className="object-cover"
            />
          </div>

        </div>
        <div className="flex flex-col w-full font-title text-3xl md:text-5xl text-center justify-center px-5 py-10 md:py-16 border-black border-t-[1.25rem]">
          <p>Hey I’m Benny Hernandez!</p>
          <p>Come take a look at what I am working on :)</p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap bg-black/20 md:max-w-5/6 w-fit h-fit m-auto p-10 md:rounded-2xl gap-10 justify-center">
        <FeaturedImage title={"Lighting Design"} src={"/Focusing.jpg"} />
        <FeaturedImage title={"Show Networking"} src={"/ShowNetworking.jpg"} href="/resume" />
        <FeaturedImage title={"Mechatronics"} src={"/Soldering.jpg"} href="/resume" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
