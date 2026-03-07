"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function BlogImage({ src, alt, title }: { src: string; alt?: string; title?: string }) {
    const [expandImage, setExpandImage] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!expandImage) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setExpandImage(false);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [expandImage]);

    return (
        <>
            <span className="inline-block max-h-80 relative overflow-hidden rounded-md cursor-zoom-in">
                <span onClick={() => setExpandImage(true)} className="inline-block max-h-80 relative overflow-hidden rounded-md cursor-zoom-in">
                    <img
                        src={src || ""}
                        alt={alt || ""}
                        className="max-h-80 w-auto object-contain"
                    />
                </span>
                {title &&
                <span className="absolute flex flex-col gap-3 w-full bottom-0 bg-gradient-to-t from-black/80 to-black/0 px-3 py-2">
                    <span className="font-sans text-xl text-white text-center">{title}</span>
                </span>
                }
            </span>
        {isMounted && expandImage && createPortal(
            <div
                onClick={() => setExpandImage(false)}
                className="fixed inset-0 z-[9999] bg-black/85 md:p-[clamp(3rem,5rem,8rem)] p-5 cursor-zoom-out flex flex-col gap-5 items-center justify-center"
            >
                <div
                    className="relative w-full md:max-h-[80vh] aspect-video"
                    onClick={(event) => setExpandImage(false)}
                >
                    <Image
                        src={src}
                        alt={`${alt}`}
                        fill
                        className="object-contain"
                    />
                </div>
                {title && <p className='font-sans text-xl md:text-3xl'>{title}</p>}
            </div>,
            document.body
        )}
        </>
    )
}