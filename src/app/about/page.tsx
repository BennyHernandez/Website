import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col my-10 md:m-10 items-center gap-5 md:gap-10">
          <h1 className="text-center font-title text-6xl uppercase">
            About Me
          </h1>
          <div className="flex flex-col md:flex-row px-5 md:px-30 gap-10 items-center">
            <div className="relative w-full max-w-[28rem] h-96 md:basis-1/2">
              <Image
                src="/img/Benny.jpg"
                fill
                alt="Benny Hernandez at USITT24"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 text-2xl basis-full">
              <p>
                <b>Hi! Im Benny Hernandez.</b> I am a theater student from California
                specializing in lighting design. I also have an interest in
                stage automation, show networking, and mechatronics<sup>1</sup>.
                I have worked on lighting design for various productions
                including shows with Sierra College, Miss Sacramento County,
                Rocklin Community Theater, and more. I am actively doing
                stagehand work with IATSE Local 50 and I am employed as a theater
                technician at Sierra College and Roseville High School.
              </p>
              <p>
                As of March 2026 I am currently attending CSU Long Beach
                where I am continuing my studies in technical theater.
                Prior to this, I attended Sierra College and received 
                an AA degree in theater and mechatronics.
              </p>
              <p>
                Beyond the stage, I enjoy working on electronics and coding
                projects as well as creating using CAD programs. I am very
                passionate about merging theater with technology and a lot of my
                side projects include exploring these possibilities.
              </p>
              <p>
                For more, find me on{" "}
                <a
                  href="https://www.instagram.com/bennyy.hernandez/"
                  className="underline"
                >
                  Instagram @Bennyy.Hernandez
                </a>
              </p>
              <p className="text-base">
                <sup>1</sup>Mechatronics: The study of electronics, mechanics,
                and computer/PLC programming for automated systems
              </p>
            </div>
          </div>
          <h1 className="text-center font-title text-6xl uppercase">Contact</h1>
          <div className="flex flex-col text-center text-2xl">
            <p>Email is the best way to reach me. Informal messages are always welcome on my Instagram.</p>
            <a href="mailto:benny@bennyh.io" className="underline">
              benny@bennyh.io
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
