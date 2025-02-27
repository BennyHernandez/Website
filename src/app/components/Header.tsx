import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-black h-[100px] w-full sticky top-0 flex flex-row py-4 px-8 z-40">
            <a className="w-40 relative" href="/">
                <Image src={"/Logo.svg"} alt="Logo" fill/>
            </a>
            <div className="flex flex-row justify-end gap-10 w-full self-end font-title text-3xl uppercase">
                <a href="/portfolio" className="">Theatre Portfolio</a>
                <a href="/resume">Resume</a>
                {/* <a href="/projects">Other Projects</a> */}
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </div>
        </header>
    );
}