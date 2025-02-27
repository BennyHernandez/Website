import Image from "next/image";

export default function FeaturedImage({href, src, title}:{href?:string, src:string, title:string}) {
  return (
    <a className="flex flex-col w-[28rem] h-full" href={href || "/portfolio"}>
      <div className="relative w-full aspect-[1.6]">
        <Image
          alt="Lighting design at a theatre"
          className="rounded-t-3xl object-cover"
          src={src}
          fill
        />
      </div>
      <div className="bg-black p-5 rounded-b-3xl">
        <p className="font-title text-4xl text-center">{title}</p>
      </div>
    </a>
  );
}
