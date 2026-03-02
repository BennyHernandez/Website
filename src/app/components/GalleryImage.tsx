import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { GalleryImageProps } from '../../types/portfolio';

export default function GalleryImage({src, caption}: GalleryImageProps) {
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
            <div
                onClick={() => setExpandImage(true)}
                className="relative aspect-video rounded-md cursor-zoom-in"
            >
                <Image
                    src={src}
                    alt={`${caption}`}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-black/0 px-3 py-2">
                    <p className="font-sans text-md font-light text-center text-gray-100/75">{caption}</p>
                  </div>
            </div>

            {isMounted && expandImage && createPortal(
                <div
                    onClick={() => setExpandImage(false)}
                    className="fixed inset-0 z-[9999] bg-black/85 p-[clamp(3rem,5rem,8rem)] cursor-zoom-out flex flex-col gap-5 items-center justify-center"
                >
                    <div
                        className="relative h-full w-full"
                        onClick={(event) => setExpandImage(false)}
                    >
                        <Image
                            src={src}
                            alt={`${caption}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    {caption && <p className='font-sans'>{caption}</p>}
                </div>,
                document.body
            )}
        </>
    );
}