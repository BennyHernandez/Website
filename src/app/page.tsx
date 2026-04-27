"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import homeContent from "../../content/home.md";
import GalleryImage from "./components/GalleryImage";
import type {
  DecapCrewMember,
  DecapGalleryItem,
  DecapPhotoItem,
  GalleryItem,
} from "../types/portfolio";
import { CircleX } from "lucide-react";

export default function Home() {
  const [isHeroFiltered, setIsHeroFiltered] = useState(false);
  const [scrollFade, setScrollFade] = useState(1);
  const [selectedItemSrc, setSelectedItemSrc] = useState<string | null>(null);
  const gridItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const HEADER_SCROLL_OFFSET = 100;

  const portfolioRef = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToPortfolio = () => {
    const portfolioElement = portfolioRef.current["portfolio"];
    if (!portfolioElement) return;

    const top = Math.max(
      portfolioElement.getBoundingClientRect().top + window.scrollY - HEADER_SCROLL_OFFSET,
      0
    );

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const triggerPortfolioScroll = () => {
      let attempts = 0;
      const maxAttempts = 10;

      const run = () => {
        if (portfolioRef.current["portfolio"]) {
          scrollToPortfolio();
          return;
        }

        attempts += 1;
        if (attempts >= maxAttempts) return;

        requestAnimationFrame(run);
      };

      requestAnimationFrame(run);
    };

    const handlePortfolioHash = () => {
      if (window.location.hash !== "#portfolio") return;
      triggerPortfolioScroll();
    };

    handlePortfolioHash();
    window.addEventListener("hashchange", handlePortfolioHash);
    window.addEventListener("portfolio-scroll", triggerPortfolioScroll);

    return () => {
      window.removeEventListener("hashchange", handlePortfolioHash);
      window.removeEventListener("portfolio-scroll", triggerPortfolioScroll);
    };
  }, []);

  const resolveSrc = (s: string) => {
    if (!s) return s;
    return s.startsWith('/') || s.startsWith('http') ? s : `/${s}`;
  };

  useEffect(() => {
    if (!selectedItemSrc) return;

    const selectedElement = gridItemRefs.current[selectedItemSrc];
    if (!selectedElement) return;

    const lockDurationMs = 820;
    const hardStopDurationMs = 1200;
    const lockStart = performance.now();
    let stableFrames = 0;
    let rafId = 0;
    let isCancelled = false;

    const cancelLock = () => {
      isCancelled = true;
      window.cancelAnimationFrame(rafId);
    };

    const onUserInterrupt = () => {
      cancelLock();
    };

    window.addEventListener("wheel", onUserInterrupt, { passive: true });
    window.addEventListener("touchmove", onUserInterrupt, { passive: true });
    window.addEventListener("keydown", onUserInterrupt);
    window.addEventListener("mousedown", onUserInterrupt);

    const lockToOffset = () => {
      if (isCancelled) return;

      const currentElementTop = selectedElement.getBoundingClientRect().top;
      const delta = currentElementTop - HEADER_SCROLL_OFFSET - 25;

      if (Math.abs(delta) > 0.5) {
        window.scrollTo({ top: Math.max(window.scrollY + delta, 0), behavior: "auto" });
        stableFrames = 0;
      } else {
        stableFrames += 1;
      }

      const elapsed = performance.now() - lockStart;
      if (elapsed >= hardStopDurationMs) {
        cancelLock();
        return;
      }

      if (elapsed < lockDurationMs || stableFrames < 8) {
        rafId = requestAnimationFrame(lockToOffset);
        return;
      }

      const finalTop = selectedElement.getBoundingClientRect().top;
      const finalDelta = finalTop - HEADER_SCROLL_OFFSET - 25;
      if (Math.abs(finalDelta) > 0.5) {
        window.scrollTo({ top: Math.max(window.scrollY + finalDelta, 0), behavior: "auto" });
      }
    };

    rafId = requestAnimationFrame(lockToOffset);

    return () => {
      cancelLock();
      window.removeEventListener("wheel", onUserInterrupt);
      window.removeEventListener("touchmove", onUserInterrupt);
      window.removeEventListener("keydown", onUserInterrupt);
      window.removeEventListener("mousedown", onUserInterrupt);
    };
  }, [selectedItemSrc]);

  useEffect(() => {
    const heroTimer = setTimeout(() => {
      setIsHeroFiltered(true);
    }, 250);

    return () => clearTimeout(heroTimer);
  }, []);

  useEffect(() => {
    const fadeDistance = 200;

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / fadeDistance, 1);
      setScrollFade(1 - progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colors = [
    "from-red-800 to-red-400",
    "from-orange-800 to-orange-400",
    "from-yellow-800 to-yellow-400",
    "from-green-800 to-green-400",
    "from-blue-800 to-blue-400",
    "from-emerald-800 to-emerald-400",
    "from-teal-800 to-teal-400",
    "from-fuchsia-800 to-fuchsia-400",
    "from-rose-800 to-rose-400",
    "from-pink-800 to-pink-400",
    "from-indigo-800 to-indigo-400",
    "from-violet-800 to-violet-400",
    "from-cyan-800 to-cyan-400",
    "from-lime-800 to-lime-400",
    "from-amber-800 to-amber-400",
  ];

  const [heroTextA, setHeroTextA] = useState("");
  const [heroTextB, setHeroTextB] = useState("");
  const [heroColorA, setHeroColorA] = useState(colors[0]);
  const [heroColorB, setHeroColorB] = useState(colors[1]);
  const [isAActive, setIsAActive] = useState(true);
  const isAActiveRef = useRef(true);

  const galleryItems: GalleryItem[] =
    ((homeContent as { attributes?: { portfolio?: DecapGalleryItem[] } }).attributes
      ?.portfolio ?? [])
      .map((item) => {
        const photoList = (item?.photo || [])
          .filter((photo): photo is DecapPhotoItem => Boolean(photo?.image))
          .map((photo) => ({
            image: photo.image as string,
            caption: photo.caption || "",
          }));

        const sourceImage = photoList[0]?.image;

        return {
          title: item?.title,
          grow: item?.grow || false,
          type: item?.type,
          role: item?.role,
          date: item?.date,
          location: item?.location,
          crew: item?.crew,
          description: item?.description,
          photos: photoList,
          src: sourceImage,
        };
      })
      .filter((item) => item.title && item.src)
      .map((item) => ({
        title: item.title as string,
        grow: item.grow || false,
        type: item.type || "",
        role: item.role || "",
        date: typeof item.date === "number" ? item.date : null,
        location: item.location || "",
        crew: (item.crew || [])
          .filter((member): member is DecapCrewMember => Boolean(member?.name || member?.role))
          .map((member) => ({
            name: member.name || "",
            role: member.role || "",
          })),
        description: item.description || "",
        photos: item.photos,
        src: item.src as string,
      }));

  useEffect(() => {
    const importantTexts = ["Lighting Designer", "Lighting Programmer"];

    const texts = [
      "Electromechanical Designer & Technician",
      "Assistant Designer",
      "Show Networking Technician",
      "Stagehand",
      "Software Developer",
      "CAD Designer",
      "CNC & Additive Manufacturing Technician",
      "PLC Programmer",
    ];

    let shuffledTexts = texts
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    shuffledTexts = [...importantTexts, ...shuffledTexts];

    let shuffledColors = colors
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const tick = () => {
      const nextText = shuffledTexts[0];
      shuffledTexts.push(shuffledTexts.shift()!);

      const nextColor = shuffledColors[0];
      shuffledColors.push(shuffledColors.shift()!);

      if (isAActiveRef.current) {
        setHeroTextB(nextText);
        setHeroColorB(nextColor);
      } else {
        setHeroTextA(nextText);
        setHeroColorA(nextColor);
      }

      requestAnimationFrame(() => {
        isAActiveRef.current = !isAActiveRef.current;
        setIsAActive(isAActiveRef.current);
      });
    };

    tick();
    const interval = setInterval(tick, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <Header />
      <main className="flex-1">
        <div className="grid grid-rows-1 md:grid-flow-col h-96 md:h-[35rem] w-full overflow-clip">
          <div className="relative">
            <Image
              alt="Gallery Picture of EOS concert lighting"
              src="/img/LightDesign2.jpg"
              fill
              className={`object-cover filter transition-all duration-2000 ease-in-out ${isHeroFiltered ? "blur-[3px] brightness-65" : ""
                }`}
            />
            <div className="relative w-full h-full flex flex-col justify-center">
              <div className="relative flex flex-shrink flex-col gap-2 items-center self-center">
                <div
                  className={`z-10 absolute w-150 md:h-60 h-full scale-x-150 scale-y-150 origin-center
                    bg-radial-[at_50%_75%] ${heroColorA} to-70% rounded-full blur-xl
                    transition-opacity duration-1000 ease-in-out
                    ${isHeroFiltered ? (isAActive ? "opacity-15" : "opacity-0") : "opacity-0"}
                  `}
                />

                <div
                  className={`z-10 absolute w-150 md:h-60 h-full scale-x-150 scale-y-150 origin-center
                    bg-radial-[at_50%_75%] ${heroColorB} to-70% rounded-full blur-xl
                    transition-opacity duration-1000 ease-in-out
                    ${isHeroFiltered ? (isAActive ? "opacity-0" : "opacity-15") : "opacity-0"}
                  `}
                />

                <h1
                  className={`z-20 text-5xl md:text-8xl font-title origin-bottom [text-shadow:0_2px_0_rgba(0,0,0,1),0_4px_0_rgba(0,0,0,.94),0_6px_0_rgba(0,0,0,.86),0_8px_12px_rgba(0,0,0,.78),0_-2px_3px_rgba(0,0,0,.58)] transition-all duration-2000 delay-250 ease-in-out ${isHeroFiltered ? "" : "opacity-0 scale-90"
                    }`}
                >
                  BENNY HERNANDEZ
                </h1>

                <div
                  className={`relativ my-2 h-[0.75] w-[105%] md:w-[110%] md:h-1 bg-white rounded-full md:outline outline-[var(--background)] transition-all duration-2750 delay-250 ease-in-out
                  ${isHeroFiltered ? "" : "scale-0 opacity-0"}
                `}
                />

                <div
                  className={`z-20 relative mt-1 h-16 md:h-20 w-[min(90vw,42rem)] transition-all duration-2000 delay-500 ease-in-out
                  ${isHeroFiltered ? "" : "opacity-0"}`}
                >
                  <h2
                    className={`absolute inset-0 z-20 flex items-start justify-center text-center text-3xl md:text-5xl font-title italic leading-tight transition-opacity duration-700 ease-in-out ${isAActive ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    {heroTextA}
                  </h2>

                  <h2
                    className={`absolute inset-0 z-20 flex items-start justify-center text-center text-3xl md:text-5xl font-title italic leading-tight transition-opacity duration-700 ease-in-out ${isAActive ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    {heroTextB}
                  </h2>
                </div>
              </div>

              <div
                className="absolute hidden md:flex inset-x-0 bottom-0 w-full justify-center pb-2 cursor-pointer"
                style={{ opacity: (90 * scrollFade) / 100 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  onClick={scrollToPortfolio}
                  className={`size-30 transition-all duration-2000 delay-500 ease-in-out ${isHeroFiltered ? "opacity-70" : "opacity-0 scale-80"
                    }`}
                >
                  <defs>
                    <linearGradient
                      id="hero-arrow-gradient"
                      gradientUnits="userSpaceOnUse"
                      x1="12"
                      y1="0"
                      x2="12"
                      y2="12"
                      spreadMethod="repeat"
                    >
                      <stop offset="0%" stopColor="#b4b4b4" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#b4b4b4" />
                      <animateTransform
                        attributeName="gradientTransform"
                        type="translate"
                        from="0 0"
                        to="0 12"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    stroke="url(#hero-arrow-gradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          id="portfolio"
          className="flex flex-col gap-3 w-full font-title text-center justify-center md:px-50 px-4 py-10 md:py-16 border-black border-t-[1.25rem]"
          ref={(element) => {
            portfolioRef.current["portfolio"] = element;
          }}
        >
          <h1 className="md:text-7xl text-4xl">PORTFOLIO</h1>
          {/* <p className="md:text-3xl text-xl">
            I am a lighting technician and designer based in Los Angeles, California. <br />
            Come take a look at what I am working on!
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4 px-4 md:px-25">
          {galleryItems.map((item) => (
            <div
              key={`${item.title}-${item.src}`}
              ref={(element) => {
                gridItemRefs.current[item.src] = element;
              }}
              className={`group relative overflow-hidden rounded-lg ${item.grow ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"} ${selectedItemSrc === item.src ? "col-span-full! z-30!" : ""}`}
              onClick={() =>
                setSelectedItemSrc(item.src)
              }
            >
              <button
                type="button"
                className={`absolute top-4 right-4 z-40 cursor-pointer ${selectedItemSrc === item.src ? "" : "hidden"}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedItemSrc(null);
                }}
              >
                <CircleX size={40} className="md:scale-100 scale-75" />
              </button>
              <div
                className={`z-10 aspect-video w-full rounded-lg overflow-hidden cursor-pointer transform-gpu transition-[translate] duration-700 ease-in-out ${selectedItemSrc === item.src ? "absolute md:w-[calc((100%-2rem)/3)] md:shrink-0" : "relative"}`}
              >
                <Image
                  src={resolveSrc(item.src)}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 px-3 py-2">
                  <p className="font-title text-3xl text-white">{item.title}</p>
                  <p className="font-title text-xl text-white">{item.role}</p>
                </div>
              </div>

              <div
                className={`relative z-20 w-full overflow-y-scroll bg-neutral-900 origin-top-left transform-gpu transition-[max-height,max-width,transform] duration-700 ease-in-out ${selectedItemSrc === item.src ? "max-h-200 max-w-[2000px] scale-100" : "max-h-0 max-w-0 scale-0 pointer-events-none"}`}
              >
                <div className="w-full px-4 py-4">
                  <p className="font-title text-3xl text-white">{item.title}</p>
                  <p className="font-title text-xl text-white/90">{item.role}</p>
                  <p className="font-sans text-base text-white/85">
                    {item.location}
                    {item.date ? ` • ${item.date}` : ""}
                  </p>
                  {/* <p className="font-sans text-base text-white mt-3">{item.description}</p> */}

                  {item.crew.length > 0 && (
                    <div className="mt-4">
                      <p className="font-title text-lg text-white">Creative Team & Crew </p>
                      <ul className="mt-1 space-y-1">
                        {item.crew.map((member, index) => (
                          <li
                            key={`${item.src}-${member.name}-${index}`}
                            className="font-sans text-sm text-white/90"
                          >
                            {member.name}
                            {member.role ? ` — ${member.role}` : ""}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.photos.length > 0 && (
                    <div className="mt-4 grid md:grid-cols-3 grid-cols-2 gap-2">
                      {item.photos.map((photo, index) => (
                        <GalleryImage
                          key={`${item.src}-${photo.image}-${index}`}
                          src={photo.image}
                          caption={photo.caption}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full font-title text-center justify-center md:px-50 px-4 py-10 md:py-16">
        </div>

      </main>
      <Footer />
    </div>
  );
}
