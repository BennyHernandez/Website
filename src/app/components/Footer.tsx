import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black h-[150px] w-full mt-36 mb-auto relative flex flex-row py-4 px-8 z-40">
      <div className="w-44 relative">
        <Image src={"/Logo.svg"} alt="Logo" fill />
      </div>
      <div className="flex flex-col gap-4 justify-center ml-auto">
        <div className="flex flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/bennyy.hernandez/"><Instagram size={50} /></a>
            <a href="https://github.com/BennyHernandez"><Github size={50} /></a>
            <a href="https://www.linkedin.com/in/benny-h/"><Linkedin size={50} /></a>
            <a href="mailto:bennyh.io"><Mail size={50} /></a>
        </div>
        <p className="font-title text-3xl text-center">Copyright Benny Hernandez {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
