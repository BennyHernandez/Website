import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black grid md:grid-flow-col mb-auto h-[250px] md:h-[150px] py-5 px-10 items-center mt-16 justify-center md:justify-normal">
      <div className="relative h-20 w-full md:w-80 md:h-full">
        <Image src={"/Logo.svg"} alt="Logo" className="object-contain" fill />
      </div>
      <div className="flex flex-col gap-4 justify-center ml-auto">
        <div className="flex flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/bennyy.hernandez/"><Instagram size={50} /></a>
            <a href="https://github.com/BennyHernandez"><Github size={50} /></a>
            <a href="https://www.linkedin.com/in/benny-h/"><Linkedin size={50} /></a>
            <a href="mailto:benny@bennyh.io"><Mail size={50} /></a>
        </div>
        <p className="font-title text-2xl md:text-3xl text-center">Copyright Benny Hernandez {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
