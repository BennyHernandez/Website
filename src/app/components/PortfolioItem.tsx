"use client";
import {
  CircleChevronLeft,
  CircleChevronRight,
  CircleX,
  MoveDiagonal,
} from "lucide-react";
import { useState, Children, cloneElement, ReactElement } from "react";

export default function PortfolioItem({
  children,
  title,
  subtitle,
  text,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  text: string;
}) {
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const ImageCount = Children.count(children);
  if (ImageCount <= 1) children = [children];

  console.log(ImageCount);

  const nextImage = () => {
    if (index + 1 > ImageCount - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const prevImage = () => {
    if (index - 1 < 0) setIndex(ImageCount - 1);
    else setIndex(index - 1);
  };

  let media = cloneElement(children![index as keyof React.ReactNode], {
    onClick: (e) => {
      e.stopPropagation(); // Prevents closing modal when clicking on image itself. Due to the way object-contain works this also means that some space on either side of the picture is also not clickable.
    },
  });

  return (
    <div className="bg-black/20 flex flex-col md:flex-row p-6 my-5 gap-5 md:gap-2 rounded-2xl">
      <div className="relative aspect-video h-full min-h-52 w-full *:rounded-xl *:object-cover">
        {media}
        {ImageCount > 1 && (
          <div className="flex flex-row absolute bottom-1 justify-center items-center gap-8 w-full">
            <button className="relative" onClick={prevImage}>
              <CircleChevronLeft size={40} />
            </button>
            <span className="font-bold text-lg">
              {index + 1}/{ImageCount}
            </span>
            <button className="relative" onClick={nextImage}>
              <CircleChevronRight size={40} />
            </button>
          </div>
        )}
        <button
          className="absolute ml-auto bottom-2 right-2"
          onClick={() => setModalVisible(true)}
        >
          <MoveDiagonal size={30}></MoveDiagonal>
        </button>
        {/* Image Modal */}
        {modalVisible && (
          <div
            className="fixed inset-0 w-screen h-screen bg-black/75 z-50 content-center"
            onClick={() => setModalVisible(false)}
          >
            <div className="relative m-auto h-2/3 w-4/5 *:object-contain">
              {media}

              <div
                className="flex flex-row absolute bottom-5 justify-center items-end gap-8 w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {ImageCount > 1 && (
                  <button className="relative" onClick={prevImage}>
                    <CircleChevronLeft size={40} />
                  </button>
                )}
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl text-center">
                    {index + 1}/{ImageCount}
                  </span>
                  <button
                    className="relative"
                    onClick={() => setModalVisible(false)}
                  >
                    <CircleX size={40} />
                  </button>
                </div>
                {ImageCount > 1 && (
                  <button className="relative" onClick={nextImage}>
                    <CircleChevronRight size={40} />
                  </button>
                )}
              </div>
            </div>
            <p className="text-center font-bold text-2xl mt-2 w-4/5 m-auto">
              {(media as ReactElement<{ alt?: string }>).props.alt}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-title text-4xl uppercase">{title}</h3>
        <p className="font-bold text-xl">{subtitle}</p>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
}
