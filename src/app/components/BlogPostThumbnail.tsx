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
            <div className="relative aspect-video max-h-[65vh] w-full rounded-md overflow-hidden cursor-zoom-in" onClick={() => setExpandImage(true)}>
                <Image src={src} alt={alt || ""} fill className="object-cover" />
            </div>
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
            </div>,
            document.body
        )}
        </>
    )
}