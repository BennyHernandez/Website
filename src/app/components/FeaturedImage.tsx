import Image from "next/image";

export default function FeaturedImage({href, src, title}:{href?:string, src:string, title:string}) {
  return (
    <a className="flex flex-col aspect-[1.2] w-xs h-full" href={href || "/portfolio"}>
      <div className="relative flex-1">
        <Image
          alt="Lighting design at a theatre"
          className="rounded-t-2xl object-cover"
          src={src}
          fill
        />
      </div>
      <div className="bg-black p-5 rounded-b-2xl">
        <p className="font-title text-4xl text-center whitespace-nowrap">{title}</p>
      </div>
    </a>
  );
}
