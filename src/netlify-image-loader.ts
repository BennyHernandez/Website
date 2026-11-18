export default function netlifyImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const source = src.startsWith("/") ? src : src;

  return `/.netlify/images?url=${encodeURIComponent(source)}&w=${width}&q=${quality ?? 75}&fm=webp`;
}
