import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col m-10 items-center gap-20">
          <h1 className="text-center font-title text-6xl uppercase">
            About Me
          </h1>
          <div className="flex flex-row gap-10">
            <div className="relative w-1/2 h-96">
              <Image
                src="/Benny.jpg"
                fill
                alt="Benny Hernandez at USITT24"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-5 text-2xl">
              <p>
                I am a multidisciplinary technician specializing in lighting
                design, theatrical automation, and show networking. I will be
                graduating from Sierra College in May 2025 with a degree in
                Mechatronics and Theatre. I aim to combine my passions for
                engineering and the arts to create innovative, technology-driven
                theatrical solutions. In Fall 2025, I will continue my studies
                in technical theater at CSU Long Beach.
              </p>
              <p>
                I have done lighting design for various productions, working
                with Sierra College, Rocklin Community Theater, Miss Sacramento
                County, Roseville High School, and more.
              </p>
              <p>
                Beyond the stage, I enjoy developing electronics projects,
                coding, and using CAD to create new designs. I especially love
                merging technology with theater, constantly exploring new ways
                to integrate automation and control systems into productions.
              </p>
              <p>
                For more, find me on{" "}
                <a
                  href="https://www.instagram.com/bennyy.hernandez/"
                  className="underline"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
          <h1 className="text-center font-title text-6xl uppercase">Contact</h1>
          <div className="flex flex-col text-center text-2xl">
            <p>Email is the best way to reach me</p>
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
